'use strict';

/////////////////////////////////////////////
//////////////урок 15///////////////////
///////////////////////////////////////////


const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


//получение данных со страницы
const salaryAmount = document.querySelector('.salary-amount'); // месячный доход
const startBtn = document.getElementById('start'); // кнопка расчитать
const plusBtn = document.getElementsByTagName('button'); // кнопки плюс
const incomePlus = plusBtn[0]; // первая кнопка плюс Доходы доп
const expensesPlus = plusBtn[1]; // вторая кнопка плюс Расходы доп

const CheckBox = document.getElementById('deposit-check'); // чекбокс


//возможные доходы строка
const additionalIncomeItems = document.querySelectorAll('.additional_income-item'); //поля для ввода возможных доходов
const additionalIncomeValue = document.querySelector('.additional_income-value'); //поле результат возм дох


// Банки
const depositSelect = document.querySelector('select'), // Депозиты в каких банках
  depositBank = depositSelect.getElementsByTagName('option');
// let persentBank = depositBank[0],
//     sberBank = depositBank[1],
//     gasPromBank = depositBank[2],
//     tinkoffBank = depositBank[3],
//     mtcBank = depositBank[4],
//     absolutBank = depositBank[5],
//     otherBank = depositBank[6];


// доход в месяц дневной бюджет остаток
const budgetMonthValue = document.querySelectorAll('.budget_month-value')[0], // доход за месяц
  budgetDayValue = document.querySelectorAll('.budget_day-value')[0], //дневной бюджет
  expensesMonthValue = document.querySelectorAll('.expenses_month-value')[0]; //расходы за месяц


// возможные расходы строка
const additionalExpensesItem = document.querySelector('.additional_expenses-item'); //возможные расходы наим
const additionalExpensesValue = document.querySelectorAll('.additional_expenses-value')[0]; // возможные расходы сумма


// дополнительный доход инпуты
const incomeTitle = document.querySelectorAll('.income-title')[1]; //наименование

// обязательные расходы
const expensesItems = document.querySelectorAll('.expenses-items');


const allIncome = document.querySelectorAll('.result-total'); //  получили все
const incomeValue = allIncome; //поместили в переменную
const periodItem = incomeValue[5], //накопления за период
  targetMonthItem = incomeValue[6]; //срок достижения цели


const targetAmount = document.querySelector('.target-amount'); // цель
const targetMonthValue = document.querySelector('.target_month-value'); //поля результат
const periodSelect = document.querySelector('.period-select'); // период расчета input range

// накопления за период 
const resultIncomePeriod = document.querySelector('.income_period-value');

//все верхние инпуты
const perenceOfInputs = document.querySelector('.data');


//кнопка сбросить
const canсelBtn = document.getElementById('cancel');

// div вывод инпут рандж
const periodAmount = document.querySelector('.period-amount');



////////////////////
// Валидация!
/////////////////////////////////////////
//блокировка кнопки при пустой сумме
startBtn.disabled = true;
salaryAmount.addEventListener('input', () => {
  if (salaryAmount.value.trim() === '') {
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
  }
});


// Вводить только число
const checkInputNum = function () {
  this.value = this.value.replace(/[^\d]/g, '');
};

// Вводить только буквы
const checkInputSymol = function () {
  this.value = this.value.replace(/[^а-я a-z \W]/g, '');
};

//поле возможные расходы под инпутами
additionalExpensesItem.addEventListener('input', checkInputSymol);

//все числовые и буквенные инпуты
const numberInputs = document.querySelectorAll('[placeholder = "Сумма"]');
const symbolInputs = document.querySelectorAll('[placeholder = "Наименование"]');


// ввод только цифр и букв у первых инпутов(до нажатия плюс)
numberInputs.forEach((item) => {
  item.addEventListener("input", checkInputNum);
});

symbolInputs.forEach((item) => {
  item.addEventListener("input", checkInputSymol);
});
////////////////////////////////


// Объект
class AppData {
  constructor() {
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
  }


  // Начало
  start() {
    ///блокировка инпутов ввода 
    const allInputs = document.querySelector('.data').querySelectorAll('input[type="text"]');
    allInputs.forEach((item) => {
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
  reset() {
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
    const allInputs = document.querySelector('.data').querySelectorAll('input[type="text"]');
    allInputs.forEach((item) => {
      ////////////////
      item.disabled = false;
    });

    // Обнуление инпутов
    const restInptDown = document.querySelectorAll('input[type="text"]');
    restInptDown.forEach((item) => {
      item.value = '';
    });

    // Удаляем поля Доходов что добавил Плюс
    const incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length > 1) {
      for (let i = 1; i < incomeItems.length; i++) {
        incomeItems[i].remove();
      }
    }

    // Возвращаем плюс кнопку
    incomePlus.style.display = 'block';

    // Удаляем поля Обяз расходов что добавил Плюс
    const expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach((item, key) => {
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
    //возвращаем блок кнопки расчет при пустом поле месячный доход
    startBtn.disabled = true;

  };



  //вывод доходов месяц день расходы на месяц
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    resultIncomePeriod.value = this.calcPeriod();
  };


  // вывод расходы
  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  };


  // вывод доходы доп 
  getAddIncome() {
    additionalIncomeItems.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  };


  // доп доходы блок
  addIncomeBlock() {
    //родитель доп доходов
    let incomeItems = document.querySelectorAll('.income-items');
    // добавляем поля при нажатии плюса доп доходы
    const cloneIncomeItems = incomeItems[0].cloneNode(true);
    //пустые новые инпуты
    cloneIncomeItems.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });

    cloneIncomeItems.querySelector('.income-amount').addEventListener("input", checkInputNum);
    cloneIncomeItems.querySelector('.income-title').addEventListener("input", checkInputSymol);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    //получаем инпуты еще раз
    incomeItems = document.querySelectorAll('.income-items');
    // убираем плюс
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  };


  // доп расходы блок
  addExpensesBlock() {
    let expensesItems = document.querySelectorAll('.expenses-items');
    // добавляем поля при нажатии плюса обязательные расходы
    const cloneExpensesItems = expensesItems[0].cloneNode(true);
    //пустые новые инпуты
    cloneExpensesItems.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
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
  getIncomes() {
    const incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach((item) => {
      const itemIncomes = item.querySelector('.income-title').value;
      const cashIncomes = item.querySelector('.income-amount').value;
      if (itemIncomes !== '' && cashIncomes !== '') {
        this.income[itemIncomes] = cashIncomes;
      }
    });

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  };


  //Все обязательные расходы
  getExpenses() {
    const expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  };

  // обязательные расходы
  getExpensesMonth() {
    let sum = 0;
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    };
    this.expensesMonth = sum;
  };

  // остаток после расходов
  getBudget() {
    /// остаток после растрат
    this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;
    /// дневной бюдже
    this.budgetDay = +(Math.floor(this.budgetMonth / 30));
  };


  // дневной бюджет
  getBudgetDay() {
    return this.budgetDay;
  };


  //выбор периода накоплений
  getPeriodSelect() {
    periodAmount.innerHTML = periodSelect.value;
    resultIncomePeriod.value = this.calcPeriod();
  };


  ///расчет периода накоплений
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  };


  // срок достижение цели
  getTargetMonth() {
    const missionPeriod = Math.ceil(targetAmount.value / this.budgetMonth);
    this.period = missionPeriod;
    return missionPeriod;
  };


  // наличие сумма и процент по депозиту
  getInfoDeposit() {
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

  //обработчики
  eventsListeners() {
    this.getPeriodSelect();
    periodSelect.addEventListener('input', this.getPeriodSelect.bind(appData));
    startBtn.addEventListener('click', this.start.bind(appData));
    canсelBtn.addEventListener('click', this.reset.bind(appData));
    incomePlus.addEventListener('click', this.addIncomeBlock.bind(appData));
    expensesPlus.addEventListener('click', this.addExpensesBlock.bind(appData));
  };
};


const appData = new AppData;
appData.eventsListeners();