'use strict';

/////////////////////////////////////////////
//////////////урок четырнадцатый///////////////////
///////////////////////////////////////////


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


//получение данных со страницы
let salaryAmount = document.querySelector('.salary-amount'); // месячный доход
let startBtn = document.getElementById('start'); // кнопка расчитать
let plusBtn = document.getElementsByTagName('button'); // кнопки плюс
let incomePlus = plusBtn[0]; // первая кнопка плюс Доходы доп
let expensesPlus = plusBtn[1]; // вторая кнопка плюс Расходы доп

let CheckBox = document.getElementById('deposit-check'); // чекбокс

//возможные доходы строка
let additionalIncomeItems = document.querySelectorAll('.additional_income-item'); //поля для ввода возможных доходов
let additionalIncomeValue = document.querySelector('.additional_income-value'); //поле результат возм дох


// Банки
let depositSelect = document.querySelector('select'), // Депозиты в каких банках
  depositBank = depositSelect.getElementsByTagName('option');
// let persentBank = depositBank[0],
//     sberBank = depositBank[1],
//     gasPromBank = depositBank[2],
//     tinkoffBank = depositBank[3],
//     mtcBank = depositBank[4],
//     absolutBank = depositBank[5],
//     otherBank = depositBank[6];


// доход в месяц дневной бюджет остаток
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], // доход за месяц
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0], //дневной бюджет
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0]; //расходы за месяц


// возможные расходы строка
let additionalExpensesItem = document.querySelector('.additional_expenses-item'); //возможные расходы наим
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0]; // возможные расходы сумма


// дополнительный доход инпуты
let incomeTitle = document.querySelectorAll('.income-title')[1]; //наименование

// обязательные расходы
let expensesItems = document.querySelectorAll('.expenses-items');


let allIncome = document.querySelectorAll('.result-total'); //  получили все
let incomeValue = allIncome; //поместили в переменную
let periodItem = incomeValue[5], //накопления за период
  targetMonthItem = incomeValue[6]; //срок достижения цели


let targetAmount = document.querySelector('.target-amount'); // цель
let targetMonthValue = document.querySelector('.target_month-value'); //поля результат
let periodSelect = document.querySelector('.period-select'); // период расчета input range

// накопления за период 
let resultIncomePeriod = document.querySelector('.income_period-value');

//все верхние инпуты
let perenceOfInputs = document.querySelector('.data');


//кнопка сбросить
let canсelBtn = document.getElementById('cancel');

// div вывод инпут рандж
let periodAmount = document.querySelector('.period-amount');
////////////////////



const AppData = function () {

  this.budget = 0; // заработок за месяц
  this.deposit = true; // наличие депозита
  this.addDeposit = {}; // депозит и процент
  this.percentDeposit = 0; // процент по депозиту
  this.moneyDeposit = 0; // сумма депозита
  this.budgetDay = 0; // бюджет на день
  this.incomeMonth = 0; // доп доходы
  this.expensesMonth = 0; // обязательные расходы
  this.budgetMonth = 0; // остаток на месяц после растрат
  this.income = {}; // доп доходы название
  this.addIncome = []; // доп доходы 
  this.expenses = {}; // название расходов
  this.addExpenses = []; // возможные расходы

};


// Начало
AppData.prototype.start = function () {

  ///блокировка инпутов ввода 
  let allInputs = document.querySelector('.data').querySelectorAll('input[type="text"]');
  allInputs.forEach(function (item) {
    item.disabled = true;
  });

  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncomes();
  this.getExpensesMonth(); // обязательные расходы
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget(); // остаток после расходов
  this.calcPeriod();

  this.showResult();

  //меняем кнопки
  startBtn.style.display = 'none';
  canсelBtn.style.display = 'block';

};


// Сброс 
AppData.prototype.reset = function () {

  // Обновление объекта
  this.budget = 0;
  this.deposit = true;
  this.addDeposit = {};
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budgetDay = 0;
  this.incomeMonth = 0;
  this.expensesMonth = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];



  /////////убираю блокир///////////
  let allInputs = document.querySelector('.data').querySelectorAll('input[type="text"]');
  allInputs.forEach(function (item) {
    item.disabled = false;
  });


  // Обнуление инпутов
  let restInptDown = document.querySelectorAll('input[type="text"]');
  restInptDown.forEach(function (item) {
    item.value = '';
  });


  // Удаляем поля Доходов что добавил Плюс
  let incomeItems = document.querySelectorAll(".income-items");

  if (incomeItems.length > 1) {
    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].remove();
    }
  }

  // Возвращаем плюс кнопку
  incomePlus.style.display = 'block';

  // Удаляем поля Обяз расходов что добавил Плюс
  let expensesItems = document.querySelectorAll('.expenses-items');
  expensesItems.forEach(function (item, key) {
    // console.log(item, key);
    if (key !== 0) {
      item.remove()
    }
  });

  // Возвращаем плюс кнопку
  expensesPlus.style.display = 'block';

  //сброс рендж
  periodSelect.value = 1;
  periodAmount.innerHTML = periodSelect.value;


  //вовзр кнопки расч
  startBtn.style.display = 'block';
  canсelBtn.style.display = 'none';
  startBtn.disabled = true;

};


//вывод доходов месяц день расходы на месяц
AppData.prototype.showResult = function () {

  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  resultIncomePeriod.value = this.calcPeriod();
};
// console.log();


// вывод расходы
AppData.prototype.getAddExpenses = function () {

  let addExpenses = additionalExpensesItem.value.split(',');
  const _this = this;
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};


// вывод доходы доп 
AppData.prototype.getAddIncome = function () {
  const _this = this;
  additionalIncomeItems.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue);
    }
  });
};


// доп доходы блок
AppData.prototype.addIncomeBlock = function () {
  //родитель доп доходов
  let incomeItems = document.querySelectorAll('.income-items');

  // добавляем поля при нажатии плюса доп доходы
  let cloneIncomeItems = incomeItems[0].cloneNode(true);

  cloneIncomeItems.querySelectorAll('input').forEach(function (item) {
    item.value = '';
  });
  // let b = cloneIncomeItems.querySelector('.income-amount');
  cloneIncomeItems.querySelector('.income-amount').addEventListener("input", checkInputNum);
  cloneIncomeItems.querySelector('.income-title').addEventListener("input", checkInputSymol);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
  //  b.value = '';
  console.log(cloneIncomeItems)
  //получаем инпуты еще раз
  incomeItems = document.querySelectorAll('.income-items');
  // убираем плюс
  if (incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }

};


// доп расходы блок
AppData.prototype.addExpensesBlock = function () {
  let expensesItems = document.querySelectorAll('.expenses-items');

  // добавляем поля при нажатии плюса обязательные расходы
  let cloneExpensesItems = expensesItems[0].cloneNode(true);
  cloneExpensesItems.querySelector('.expenses-amount').addEventListener("input", checkInputNum);
  cloneExpensesItems.querySelector('.expenses-title').addEventListener("input", checkInputSymol);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
  //получаем инпуты еще раз
  expensesItems = document.querySelectorAll('.expenses-items');

  // убираем плюс
  if (expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
  }
};


// доп доходы
AppData.prototype.getIncomes = function () {

  let incomeItems = document.querySelectorAll('.income-items');
  const _this = this;
  incomeItems.forEach(function (item) {
    let itemIncomes = item.querySelector('.income-title').value;
    let cashIncomes = item.querySelector('.income-amount').value;
    if (itemIncomes !== '' && cashIncomes !== '') {
      _this.income[itemIncomes] = cashIncomes;
    }

  });

  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};


//Все обязательные расходы
AppData.prototype.getExpenses = function () {

  let expensesItems = document.querySelectorAll('.expenses-items');
  const _this = this;
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;

    if (itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};



// обязательные расходы
AppData.prototype.getExpensesMonth = function () {

  let sum = 0;
  for (let key in this.expenses) {
    sum += +this.expenses[key];
  };
  this.expensesMonth = sum;
};



// остаток после расходов
AppData.prototype.getBudget = function () {
  // const _this = this;
  /// остаток после растрат
  this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;

  /// дневной бюдже
  this.budgetDay = +(Math.floor(this.budgetMonth / 30));
};



// дневной бюджет
AppData.prototype.getBudgetDay = function () {
  return this.budgetDay;
};


//выбор периода накоплений
AppData.prototype.getPeriodSelect = function () {
  periodAmount.innerHTML = periodSelect.value;
  resultIncomePeriod.value = this.calcPeriod();
};



///расчет периода накоплений
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};


// срок достижение цели
AppData.prototype.getTargetMonth = function () {
  const missionPeriod = Math.ceil(targetAmount.value / this.budgetMonth);
  this.period = missionPeriod;
  return missionPeriod;
  // if (missionPeriod < 0) {} else {}

};



// наличие сумма и процент по депозиту
AppData.prototype.getInfoDeposit = function () {
  this.deposit = confirm('Есть ли у вас дипозит в банке?');
  if (this.deposit) {

    do {
      this.moneyDeposit = +prompt('Какая сумма на депозите?', 20000);
    }
    while (!isNumber(this.moneyDeposit))
    this.moneyDeposit = this.moneyDeposit;

    do {
      this.percentDeposit = +prompt('Какой процент по депозиту?', 10);
    }
    while (!isNumber(this.percentDeposit))
    this.percentDeposit = this.percentDeposit;
  }
  this.addDeposit[this.moneyDeposit] = this.percentDeposit;
  console.log(this.addDeposit);

  console.log('Депозит в банке: ' + this.moneyDeposit);
  console.log('Процент по дипозиту: ' + this.percentDeposit);
};



AppData.prototype.eventsListeners = function () {
  this.getPeriodSelect();
  periodSelect.addEventListener('input', this.getPeriodSelect.bind(appData));
  startBtn.addEventListener('click', this.start.bind(appData));
  canсelBtn.addEventListener('click', this.reset.bind(appData));
  incomePlus.addEventListener('click', this.addIncomeBlock.bind(appData));
  expensesPlus.addEventListener('click', this.addExpensesBlock.bind(appData));


};


const appData = new AppData;
appData.eventsListeners();




//блокировка кнопки при пустой сумме
startBtn.disabled = true;
salaryAmount.addEventListener('input', function () {

  if (salaryAmount.value.trim() === '') {
    startBtn.disabled = true;

  } else {

    startBtn.disabled = false;
  }

});

////////////////////////////////////////////////////
// Вводить только число
const checkInputNum = function () {
  this.value = this.value.replace(/[^\d]/g, '');
};

// Вводить только буквы
const checkInputSymol = function () {
  this.value = this.value.replace(/[^а-я a-z \W]/g, '');
};


//поле возможные расходы под инпутами
// отмена ввода цифр ///надо разобраться!!!!!!
additionalExpensesItem.addEventListener('input', checkInputSymol);
///////////////                       ////////////////////////////

//все числовые и буквенные инпуты
let numberInputs = document.querySelectorAll('[placeholder = "Сумма"]');
let symbolInputs = document.querySelectorAll('[placeholder = "Наименование"]');
///


// ввод только цифр и букв у первых инпутов(до нажатия плюс)
numberInputs.forEach((item) => {
  item.addEventListener("input", checkInputNum);
});

symbolInputs.forEach((item) => {
  item.addEventListener("input", checkInputSymol);
});
/////////////////////////////////////////////