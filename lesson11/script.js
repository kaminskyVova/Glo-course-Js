'use strict';

/////////////////////////////////////////////
//////////////урок одинадцатый///////////////////
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


        appData.budget = +salaryAmount.value;
        // console.log('месячный доход: ' + salaryAmount.value);



        appData.getExpenses();
        appData.getIncomes();
        appData.getExpensesMonth(); // обязательные расходы
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget(); // остаток после расходов
        appData.calcPeriod();

        appData.showResult();

        // // вызовы методов
        // appData.start(); //месячный доход
        // appData.getMission(); // сколько хотят накопить
        // appData.getInfoDeposit() // наличие сумма и процент по депозиту
        // appData.asking(); // опросник
        // appData.getExpensesMonth(); // обязательные расходы
        // appData.getBudget(); // остаток после расходов
        // appData.getStatusIncome(); //  анализ доходов
        // console.log(appData.getStatusIncome()); // анализ доходов(консоль)
        // appData.getTargetMonth(); // срок достижение цели
        // console.log(appData); // объект
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
        console.log(incomeItems);
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


    ////запрос сколько хотят накопить
    getMission: function () {

        // do {
        //     appData.mission = +prompt('Сколько вы хотите отложить?', 500000);
        // }
        // while (!isNumber(appData.mission))
        // appData.mission = +appData.mission;

        // console.log('Ваша цель накопить: ' + appData.mission);
    },


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



    // анализ доходов
    getStatusIncome: function () {
        // if (appData.budgetDay >= 1200) {
        //     return ('У вас высокий уровень дохода');
        // } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
        //     return ('У вас средний уровень дохода');
        // } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
        //     return ('К сожалению у вас уровень дохода ниже среднего');
        // } else if (appData.budgetDay < 0) {
        //     return ('Что то пошло не так');
        // }
    },


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


    // опрос клиента
    // asking: function () {
    //     // let cashIncome,
    //     itemIncome;

    //     if (confirm('Есть ли у вас дополнительный заработок?')) {

    //         // доп заработки
    //         do {
    //             itemIncome = prompt('Назовите допольнительный заработок?', 'Грабеж, Рэкет, Заказуха').trim();
    //         }
    //         while (itemIncome === '')

    //         // заработок на них
    //         do {
    //             cashIncome = +prompt('Сколько вам приносит дополнительный заработок?', 20000);
    //         }
    //         while (!isNumber(cashIncome))
    //         appData.income[itemIncome] = cashIncome;

    //         console.log(appData.income);
    //     };


    // обязательные расходы
    // let key = '',
    //     mon = '';

    // for (let i = 0; i < 2; i++) {

    //     // статьи расходов
    //     do {
    //         key = prompt('Введите обязательную статью расходов', 'Подкуп ментов').trim();
    //     }
    //     while (key === '')


    //     // растраты на них
    //     do {
    //         mon = +prompt('Во сколько это обойдется?', 10000);
    //     }
    //     while (!isNumber(mon))
    //     appData.expenses[key] = +mon;

    // };

    // console.log('Обязательные расходы: ');
    // console.log(appData.expenses);

    // доп расходы

    // let costs = '';
    // do {
    //     costs = prompt('Введите дополнительные статьи расходов', 'водка, бабы, опохмел').trim();
    // }
    // while (costs === '')

    // appData.addExpenses = costs;
    // console.log(appData.addExpenses);
    // console.log('Дополнительные растраты: ' + costs);

    // },


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
    }
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

// appData.getPeriodSelect();
periodSelect.addEventListener('input', appData.getPeriodSelect);
startBtn.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);




// раскладуем объект
// разбиваем на ключи -- свойства
// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// };




/////////////////////////////////////////////////////////////////////////
// let k = 0,
//     result = '';

// function firstLetterst() {
//     for (var i = 0; i < appData.addExpenses.length; i++) {
//         if (isNaN(appData.addExpenses[i]) && k == 0) {
//             result += appData.addExpenses.charAt(i).toUpperCase();
//             k += 1;
//         } else if (isNaN(appData.addExpenses[i]) && appData.addExpenses[i - 1] == ' ') {
//             result += appData.addExpenses.charAt(i).toUpperCase();
//         } else {
//             result += appData.addExpenses[i];
//         }
//     }
//     console.log(result);
// }
// firstLetterst();
/////////////////////////////////////////////////////