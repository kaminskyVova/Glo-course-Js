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
// let incomeItems = document.querySelectorAll('.income-items');

let incomeTitle = document.querySelectorAll('.income-title')[1]; //наименование
// let incomeAmount = document.querySelectorAll('.income-amount'); // сумма
// let incomeItem = document.querySelectorAll('.income-items');


// обязательные расходы
let expensesItems = document.querySelectorAll('.expenses-items');


//////////////////////////////////////////////////////////////////////
let allIncome = document.querySelectorAll('.result-total'); //  получили все
let incomeValue = allIncome; //поместили в переменную
let periodItem = incomeValue[5], //накопления за период
    targetMonthItem = incomeValue[6]; //срок достижения цели



//
// let expensesTitle = document.querySelector('.expenses-title');
//



//родитель обяз расходов наим и сумма
// let expensesItems = document.querySelectorAll('.expenses-items');

//родитель доп доходов наим и сумма
// let incomeItems = document.querySelectorAll('.income-items');

let targetAmount = document.querySelector('.target-amount'); // цель
let targetMonthValue = document.querySelector('.target_month-value'); //поля результат
let periodSelect = document.querySelector('.period-select'); // период расчета input range

// накопления за период 
let resultIncomePeriod = document.querySelector('.income_period-value');





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



    // месячный доход
    start: function () {
        console.log(this);
        appData.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncomes();
        this.getExpensesMonth(); // обязательные расходы
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget(); // остаток после расходов
        this.calcPeriod();

        this.showResult();



        // appData.getExpenses();
        // appData.getIncomes();
        // appData.getExpensesMonth(); // обязательные расходы
        // appData.getAddExpenses();
        // appData.getAddIncome();
        // appData.getBudget(); // остаток после расходов
        // appData.calcPeriod();

        // appData.showResult();

    },

    //вывод доходов месяц день расходы на месяц
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        resultIncomePeriod.value = appData.calcPeriod();
        // console.log(this);
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
        // console.log(incItems.parentNode);

        // добавляем поля при нажатии плюса доп доходы
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },


    // доп доходы
    getIncomes: function () {
        let incomeItems = document.querySelectorAll('.income-items');
        // console.log(incomeItems);
        incomeItems.forEach(function (item) {
            let itemIncomes = item.querySelector('.income-title').value;
            let cashIncomes = item.querySelector('.income-amount').value;
            if (itemIncomes !== '' && cashIncomes !== '') {
                appData.income[itemIncomes] = cashIncomes;
            }

        });

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },


    //Все обязательные расходы
    getExpenses: function () {
        let expensesItems = document.querySelectorAll('.expenses-items');
        // console.log(expensesItems);
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },


    addExpensesBlock: function () {
        //родитель обяз расходов наим и сумма
        // let expensesItems = document.querySelectorAll('.expenses-items');

        // добавляем поля при нажатии плюса обязательные расходы
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },


    // ////запрос сколько хотят накопить
    // getMission: function () {


    // },


    // обязательные расходы
    getExpensesMonth: function () {

        let sum = 0;

        for (let key in appData.expenses) {

            sum += +appData.expenses[key];
        };
        appData.expensesMonth = sum;

        // console.log('Общие расходы: ' + sum);
    },



    // остаток после расходов
    getBudget: function () {

        /// остаток после растрат
        appData.budgetMonth = +appData.budget + appData.incomeMonth - appData.expensesMonth;
        // console.log('Месячный бюджет: ' + appData.budgetMonth);

        /// дневной бюджет
        appData.budgetDay = +(Math.floor(appData.budgetMonth / 30));
        // console.log('Дневной бюджет: ' + appData.budgetDay);
    },



    // дневной бюджет
    getBudgetDay: function () {
        return appData.budgetDay;
    },


    //выбор периода накоплений
    getPeriodSelect: function () {
        // div вывод инпут рандж
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.innerHTML = +periodSelect.value;
        resultIncomePeriod.value = appData.calcPeriod();
    },


    ///расчет периода накоплений
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },



    // // анализ доходов
    // getStatusIncome: function () {

    // },


    // срок достижение цели
    getTargetMonth: function () {

        const missionPeriod = Math.ceil(targetAmount.value / appData.budgetMonth);

        appData.period = missionPeriod;

        if (missionPeriod < 0) {
            // console.log('Цель не будет достигнута');
        } else {
            // console.log('Цель будет достигнута за: ' + Math.ceil(missionPeriod) + ' месяцев');
        }
        return missionPeriod;
    },



    // наличие сумма и процент по депозиту
    getInfoDeposit: function () {

        appData.deposit = confirm('Есть ли у вас дипозит в банке?');

        if (appData.deposit) {

            do {
                appData.moneyDeposit = +prompt('Какая сумма на депозите?', 20000);
            }
            while (!isNumber(appData.moneyDeposit))
            appData.moneyDeposit = appData.moneyDeposit;

            do {
                appData.percentDeposit = +prompt('Какой процент по депозиту?', 10);
            }
            while (!isNumber(appData.percentDeposit))
            appData.percentDeposit = appData.percentDeposit;
        }
        appData.addDeposit[appData.moneyDeposit] = appData.percentDeposit;
        console.log(appData.addDeposit);

        console.log('Депозит в банке: ' + appData.moneyDeposit);
        console.log('Процент по дипозиту: ' + appData.percentDeposit);
    },

};


// startBtn.setAttribute('disabled', '');
startBtn.disabled = true;
salaryAmount.addEventListener('input', function () {

    if (salaryAmount.value.trim() === '') {
        // startBtn.setAttribute('disabled', '');
        startBtn.disabled = true;
    } else {
        // startBtn.removeAttribute('disabled');
        startBtn.disabled = false;
    }
});




appData.getPeriodSelect();
periodSelect.addEventListener('input', appData.getPeriodSelect.bind(appData));
startBtn.addEventListener('click', appData.start.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));