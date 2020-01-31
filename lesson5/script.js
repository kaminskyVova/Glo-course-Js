'use strict';


///////////// пятый урок ///////////
////////////////////////////////////

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money = 0, // доход за месяц
    income = 'Фриланс', // доп доход
    deposit = true, // депозит
    mission = 1000000, // цель
    period = 12, // желательный период
    addExpenses = 0, // обязательные расходы
    expenses = []; // статьи расходов


// определение типов данных
function showTypeOf(a) {
    console.log(typeof a);
};

showTypeOf(income);
showTypeOf(money);
showTypeOf(deposit);


// месячный доход
let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))

    // // while (isNaN(money) || money.trim() === '' || money === null) {
    // // while (isNaN(parseFloat(money)))
    // while (!isNumber(money)){
    //     // money = prompt('Ваш месячный доход?');
    //  }
};
start();


//считаем обязательные расходы
let getExpensesMonth = function () {

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов - 1', 'Название');

        addExpenses += +prompt('Во сколько это обойдется?');
    }

};
getExpensesMonth();
console.log(expenses);
////////////////////////
showTypeOf(addExpenses);



// остаток после расходов
let accumulatedMonth = function getAccumulatedMonth() {
    accumulatedMonth = (money - addExpenses);
};
accumulatedMonth();
console.log(accumulatedMonth);


// дневной бюджет
let budgetDay = function getBudgetDay(a) {
    budgetDay = (Math.floor(a / 30));
    return budgetDay;
};
console.log(budgetDay(accumulatedMonth));


// анализ доходов
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


// срок достижение целм
function getTargetMonth() {
    let sum = Math.ceil((mission / accumulatedMonth));

    if (sum < 0) {
        console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута за: ' + Math.ceil((mission / accumulatedMonth)) + ' месяцев');
    }

};
getTargetMonth();