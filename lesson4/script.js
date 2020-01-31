'use strict';


///// Четвертое Задание //////
let money = 60000, // доход за месяц
    income = 'Фриланс', // доп доход
    deposit = true, // депозит
    mission = 1000000, // цель
    period = 12, // желательный период
    addExpenses = ''; // обязательные расходы


let expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название'),
    amount2 = +prompt('Во сколько это обойдется?');


addExpenses = expenses1 + ', ' + expenses2;
addExpenses = addExpenses.toLocaleLowerCase().split(', ');
console.log(addExpenses);


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

let budgetDay = function getBudgetDay(a) {
    budgetDay = (Math.floor(a / 30));
    return budgetDay;
};
console.log(budgetDay(accumulatedMonth));


// showTypeOf getStatusIncome
function showTypeOf(a) {
    console.log(typeof a);
};

showTypeOf(income);
showTypeOf(money);
showTypeOf(deposit);


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