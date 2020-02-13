'use strict';

/////////////////////////////////////////////
//////////////урок девятый///////////////////
///////////////////////////////////////////

// let isNumber = function (n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };


// let money = 0; // доход за месяц
// // mission;

// // месячный доход
// let start = function () {

//     do {
//         money = +prompt('Ваш месячный доход?', 60000);
//     }
//     while (!isNumber(money))
//     money = +money;
//     console.log('Ваш доход в месяц: ' + money);
// };
// start();


// //// object ///
// const appData = {
//     mission: 0, // цель 
//     period: 0, // период
//     budget: money, // заработок за месяц
//     deposit: true, // наличие депозита
//     addDeposit: {}, // депозит и процент
//     percentDeposit: 0, // процент по депозиту
//     moneyDeposit: 0, // сумма депозита
//     budgetDay: 0, // бюджет на день
//     expensesMonth: 0, // обязательные расходы
//     budgetMonth: 0, // остаток на месяц после растрат
//     income: {}, // доп доходы
//     // addIncome: [], //
//     expenses: {}, // название расходов
//     addExpenses: [], // возможные расходы


//     ////запрос сколько хотят накопить
//     getMission: function () {

//         do {
//             appData.mission = +prompt('Сколько вы хотите отложить?', 500000);
//         }
//         while (!isNumber(appData.mission))
//         appData.mission = +appData.mission;

//         console.log('Ваша цель накопить: ' + appData.mission);
//     },


//     // обязательные расходы
//     getExpensesMonth: function () {

//         let sum = 0;

//         for (let key in appData.expenses) {

//             sum += +appData.expenses[key];
//         };
//         appData.expensesMonth = sum;

//         console.log('Общие расходы: ' + sum);
//     },



//     // остаток после расходов
//     getBudget: function () {

//         /// остаток после растрат
//         appData.budgetMonth = (appData.budget - appData.expensesMonth);
//         console.log('Месячный бюджет: ' + appData.budgetMonth);

//         /// дневной бюджет
//         appData.budgetDay = (Math.floor(appData.budgetMonth / 30));
//         console.log('Дневной бюджет: ' + appData.budgetDay);
//     },



//     // дневной бюджет
//     getBudgetDay: function () {
//         return appData.budgetDay;
//     },



//     // анализ доходов
//     getStatusIncome: function () {
//         if (appData.budgetDay >= 1200) {
//             return ('У вас высокий уровень дохода');
//         } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
//             return ('У вас средний уровень дохода');
//         } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
//             return ('К сожалению у вас уровень дохода ниже среднего');
//         } else if (appData.budgetDay < 0) {
//             return ('Что то пошло не так');
//         }
//     },


//     // срок достижение цели
//     getTargetMonth: function () {

//         const missionPeriod = Math.ceil(appData.mission / appData.budgetMonth);

//         appData.period = missionPeriod;

//         if (missionPeriod < 0) {
//             console.log('Цель не будет достигнута');
//         } else {
//             console.log('Цель будет достигнута за: ' + Math.ceil(missionPeriod) + ' месяцев');
//         }
//         return missionPeriod;
//     },


//     // опрос клиента
//     asking: function () {
//         let cashIncome,
//             itemIncome;

//         if (confirm('Есть ли у вас дополнительный заработок?')) {

//             // доп заработки
//             do {
//                 itemIncome = prompt('Назовите допольнительный заработок?', 'Грабеж, Рэкет, Заказуха').trim();
//             }
//             while (itemIncome === '')

//             // заработок на них
//             do {
//                 cashIncome = +prompt('Сколько вам приносит дополнительный заработок?', 20000);
//             }
//             while (!isNumber(cashIncome))
//             appData.income[itemIncome] = cashIncome;

//             console.log(appData.income);
//         };


//         // обязательные расходы
//         let key = '',
//             mon = '';

//         for (let i = 0; i < 2; i++) {

//             // статьи расходов
//             do {
//                 key = prompt('Введите обязательную статью расходов', 'Подкуп ментов').trim();
//             }
//             while (key === '')


//             // растраты на них
//             do {
//                 mon = +prompt('Во сколько это обойдется?', 10000);
//             }
//             while (!isNumber(mon))
//             appData.expenses[key] = +mon;

//         };

//         console.log('Обязательные расходы: ');
//         console.log(appData.expenses);

//         // доп расходы

//         let costs = '';
//         do {
//             costs = prompt('Введите дополнительные статьи расходов', 'водка, бабы, опохмел').trim();
//         }
//         while (costs === '')

//         appData.addExpenses = costs;
//         console.log(appData.addExpenses);
//         console.log('Дополнительные растраты: ' + costs);

//     },


//     // наличие сумма и процент по депозиту
//     getInfoDeposit: function () {
//         appData.deposit = confirm('Есть ли у вас дипозит в банке?');

//         if (appData.deposit) {

//             do {
//                 appData.moneyDeposit = +prompt('Какая сумма на депозите?', 20000);
//             }
//             while (!isNumber(appData.moneyDeposit))
//             appData.moneyDeposit = appData.moneyDeposit;

//             do {
//                 appData.percentDeposit = +prompt('Какой процент по депозиту?', 10);
//             }
//             while (!isNumber(appData.percentDeposit))
//             appData.percentDeposit = appData.percentDeposit;
//         }
//         appData.addDeposit[appData.moneyDeposit] = appData.percentDeposit;
//         console.log(appData.addDeposit);

//         console.log('Депозит в банке: ' + appData.moneyDeposit);
//         console.log('Процент по дипозиту: ' + appData.percentDeposit);
//     }
// };


// // вызовы методов
// appData.getMission(); // сколько хотят накопить
// appData.getInfoDeposit() // наличие сумма и процент по депозиту
// appData.asking(); // опросник
// appData.getExpensesMonth(); // обязательные расходы
// appData.getBudget(); // остаток после расходов
// appData.getStatusIncome(); //  анализ доходов
// console.log(appData.getStatusIncome()); // анализ доходов(консоль)
// appData.getTargetMonth(); // срок достижение цели
// console.log(appData); // объект

// // раскладуем объект
// // разбиваем на ключи -- свойства
// // for (let key in appData) {
// //     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// // };


// /////////////////////////////////////////////////////////////////////////
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




///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//получение данных со страницы

// кнопка расчитать
let startBtn = document.getElementById('start');
console.log(startBtn);

//кнопки плюс
let plusBtn = document.getElementsByTagName('button');
console.log(plusBtn);

// первая кнопка плюс
let plusBtnFirst = plusBtn[0];
console.log(plusBtnFirst);

// вторая кнопка плюс
let plusBtnSecond = plusBtn[1];
console.log(plusBtnSecond);

// чекбокс
let CheckBox = document.getElementById('deposit-check');
console.log(CheckBox);

//поля для ввода возможных доходов
let addIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(addIncomeItem);
// первое поле
let addIncomeItem_1 = addIncomeItem[0];
console.log(addIncomeItem_1);
//второе поле
let addIncomeItem_2 = addIncomeItem[1];
console.log(addIncomeItem_2);


// Депозиты в каких банках
let deposiSelect = document.getElementsByTagName('select'),
    depositBank = document.getElementsByTagName('option');
console.log(depositBank);
// банки
let persentBank = depositBank[0],
    sberBank = depositBank[1],
    gasPromBank = depositBank[2],
    tinkoffBank = depositBank[3],
    mtcBank = depositBank[4],
    absolutBank = depositBank[5],
    otherBank = depositBank[6];



// value в классе
//  получили все
let allIncome = document.querySelectorAll('.result-total');
console.log(allIncome);

//поместили в переменную
let incomeValue = allIncome;
console.log(incomeValue);

let budgetMonthItem = incomeValue[0], // доход за месяц
    budgetDayItem = incomeValue[1], //дневной бюджет
    expensesMonthItem = incomeValue[2], //расходы за месяц
    IncomeItem = incomeValue[3], //возможные доходы
    expensesItem = incomeValue[4], //возможные расходы
    periodItem = incomeValue[5], //накопления за период
    targetMonthItem = incomeValue[6]; //срок достижения цели

// другие поля ввода не вошедшие в задание(какого хрена не по порядку???? ну ладно)

// месячный доход 
let salaryAmount = document.querySelectorAll('.salary-amount');


// дополнительный доход 
//наименование
let incomeTitle = document.querySelector('.income-title');
// сумма
let incomeAmount = document.querySelector('.income-amount');

// возможный доход



// обязательные расходы
// наименование
let expensesTitle = document.querySelector('.expenses-title');
//сумма
let expensesAmount = document.querySelector('.expenses-amount');


// возможные расходы
let additionalExpensesItem = document.querySelector('.additional_expenses-item');


// цель 
let targetAmount = document.querySelector('.target-amount');


// период расчета input range
let periodSelect = document.querySelector('.period-select');