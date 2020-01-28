'use strict'


// Предыдущее Задание

// присовить значения переменным
let money = 30000, // доход за месяц
    income = 'Фриланс',
    deposit = true,
    mission = 100000 + ' баксов',
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
console.log(budgetDay);


// Третье Задание

money = +prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// addExpenses = addExpenses.toLocaleLowerCase().split(', ');  // не знаю строкой или массивом
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

// // Новые переменные
let expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название'),
    amount2 = +prompt('Во сколько это обойдется?');

console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);




// let amount1 = 1000;    // просто для проверки условий
// let amount2 = 1110000;

let budgetMonth = money - (amount1 + amount2); // Бюджет на месяц
console.log(budgetMonth);

// за сколько месяцев будет достигнута цель mission
mission = Math.ceil(parseInt(mission) - (budgetMonth / 67));
console.log(mission);

// поправляем дневной бюджет
budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

// Конструкция if/else по результатам ответов
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}