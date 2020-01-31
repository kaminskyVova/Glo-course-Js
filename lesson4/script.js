'use strict';



// Предыдущее Задание

// присовить значения переменным
let money = 60000, // доход за месяц
    income = 'Фриланс', // доп доход
    deposit = true, // депозит
    mission = 1000000, // цель
    period = 12,
    addExpenses = 'Жилье, Транспорт, Гульки, Шмульки';

// методы и свойства
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission);
//////
addExpenses = addExpenses.toLocaleLowerCase().split(', ');
console.log(addExpenses);
////////
let budgetDay = (money / 30); // дневной бюджет
// console.log(budgetDay);


// Третье Задание

// money = +prompt('Ваш месячный доход?');
// console.log(money);

// addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// addExpenses = addExpenses.toLocaleLowerCase().split(', ');  // не знаю строкой или массивом
// console.log(addExpenses);

// deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);

// // Новые переменные
let expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название'),
    amount2 = +prompt('Во сколько это обойдется?');

// console.log(expenses1);
// console.log(amount1);
// console.log(expenses2);
// console.log(amount2);




// let amount1 = 1000;    // просто для проверки условий
// let amount2 = 1110000;

// // поправляем дневной бюджет
// budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);

// Конструкция if/else по результатам ответов
// if (budgetDay >= 1200) {
//     console.log('У вас высокий уровень дохода');
// } else if (budgetDay > 600 && budgetDay < 1200) {
//     console.log('У вас средний уровень дохода');
// } else if (budgetDay <= 600 && budgetDay >= 0) {
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// } else if (budgetDay < 0) {
//     console.log('Что то пошло не так');
// }



///// Четвертое Задание //////
money = 50000;

//обязательные расходы за месяц

function getExpensesMonth() {
    console.log(amount1 + amount2);
};
getExpensesMonth();


// остаток после расходов
let accumulatedMonth = function getAccumulatedMonth() {
    accumulatedMonth = (money - (amount1 + amount2));
};
accumulatedMonth();
console.log(accumulatedMonth);


// срок достижение целм
function getTargetMonth() {
    console.log('Цель будет достигнута за: ' + Math.ceil((mission / accumulatedMonth)) + ' месяцев');
};
getTargetMonth();


// дневной бюджет

// budgetDay = Math.floor(accumulatedMonth / 30);
// console.log('расход на день: ' + budgetDay);

budgetDay = function getBudgetDay(a) {
    budgetDay = (Math.floor(a / 30));
    return budgetDay;
};

console.log(budgetDay(accumulatedMonth));


// showTypeOf getStatusIncome

function showTypeOf(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
};
showTypeOf(deposit, income, money);

function getStatusIncome() {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600 && budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        return ('Что то пошло не так');
    }
};
console.log(getStatusIncome());