'use strict';

/////////////////////////////////////////////
//////////////урок двенадцатый///////////////////
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



//// object ///
const appData = {
  budget: 0, // заработок за месяц
  deposit: true, // наличие депозита
  addDeposit: {}, // депозит и процент
  percentDeposit: 0, // процент по депозиту
  moneyDeposit: 0, // сумма депозита
  budgetDay: 0, // бюджет на день
  incomeMonth: 0, // доп доходы
  expensesMonth: 0, // обязательные расходы
  budgetMonth: 0, // остаток на месяц после растрат
  income: {}, // доп доходы название
  addIncome: [], // доп доходы 
  expenses: {}, // название расходов
  addExpenses: [], // возможные расходы



  // Начало
  start: function () {

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

  },


  // Сброс 
  reset: function () {

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
        // console.log(i);
        incomeItems[i].remove();
      }
    }

    // Возвращаем плюс кнопку
    incomePlus.style.display = 'block';

    // Удаляем поля Обяз расходов что добавил Плюс
    let expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach(function (item, key) {
      console.log(item, key);
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

  },


  //вывод доходов месяц день расходы на месяц
  showResult: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    resultIncomePeriod.value = this.calcPeriod();
  },



  // вывод расходы
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },


  // вывод доходы доп 
  getAddIncome: function () {
    additionalIncomeItems.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
        // appData.income.push(itemValue);
      }
    });
  },



  addIncomeBlock: function () {
    //родитель доп доходов
    let incomeItems = document.querySelectorAll('.income-items');

    // добавляем поля при нажатии плюса доп доходы
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    cloneIncomeItems.querySelector('.income-amount').addEventListener("input", checkInputNum);
    cloneIncomeItems.querySelector('.income-title').addEventListener("input", checkInputSymol);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);

    // убираем плюс
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }

  },

  addExpensesBlock: function () {
    let expensesAmount = document.querySelectorAll('.expenses-items');

    // добавляем поля при нажатии плюса обязательные расходы
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    cloneExpensesItems.querySelector('.expenses-amount').addEventListener("input", checkInputNum);
    cloneExpensesItems.querySelector('.expenses-title').addEventListener("input", checkInputSymol);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);

    // убираем плюс
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },


  // доп доходы
  getIncomes: function () {
    let incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach(function (item) {
      let itemIncomes = item.querySelector('.income-title').value;
      let cashIncomes = item.querySelector('.income-amount').value;
      if (itemIncomes !== '' && cashIncomes !== '') {
        appData.income[itemIncomes] = cashIncomes;
      }

    });

    for (let key in appData.income) {
      this.incomeMonth += +this.income[key];
    }
  },


  //Все обязательные расходы
  getExpenses: function () {
    let expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;

      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },



  // обязательные расходы
  getExpensesMonth: function () {

    let sum = 0;
    for (let key in appData.expenses) {
      sum += +this.expenses[key];
    };
    this.expensesMonth = sum;
  },



  // остаток после расходов
  getBudget: function () {
    /// остаток после растрат
    this.budgetMonth = +appData.budget + appData.incomeMonth - appData.expensesMonth;

    /// дневной бюдже
    this.budgetDay = +(Math.floor(appData.budgetMonth / 30));
  },



  // дневной бюджет
  getBudgetDay: function () {
    return this.budgetDay;
  },


  //выбор периода накоплений
  getPeriodSelect: function () {
    periodAmount.innerHTML = periodSelect.value;
    resultIncomePeriod.value = this.calcPeriod();
  },



  ///расчет периода накоплений
  calcPeriod: function () {
    return this.budgetMonth * periodSelect.value;
  },


  // срок достижение цели
  getTargetMonth: function () {
    const missionPeriod = Math.ceil(targetAmount.value / this.budgetMonth);
    this.period = missionPeriod;

    if (missionPeriod < 0) {} else {}
    return missionPeriod;
  },



  // наличие сумма и процент по депозиту
  getInfoDeposit: function () {
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
  },

};


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
  this.value = this.value.replace(/[\D]/g, '');
};

// Вводить только буквы
const checkInputSymol = function () {
  this.value = this.value.replace(/[0-9]/gi, '');
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


appData.getPeriodSelect();
periodSelect.addEventListener('input', appData.getPeriodSelect.bind(appData));
startBtn.addEventListener('click', appData.start.bind(appData));
canсelBtn.addEventListener('click', appData.reset.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));