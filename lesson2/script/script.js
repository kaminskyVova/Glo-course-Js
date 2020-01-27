// присовить значения переменным
let money = 60000,
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
let budgetDay = (money / 30);
console.log(budgetDay);