'use strict';

///////////// седьмой урок ///////////
////////////////////////////////////


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money = 0; // доход за месяц
// mission;

// месячный доход
let start = function () {
    do {
        money = prompt('Ваш месячный доход?', 60000);
    }
    while (!isNumber(money))
    money = +money;
    console.log('Ваш доход в месяц: ' + money);
};
start();


//// object ///
const appData = {
    mission: 0, // цель 
    period: 0, // период
    budget: money, // заработок на месяц
    deposit: true, // наличие депозита
    budgetDay: 0, // бюджет на день
    expensesMonth: 0,
    budgetMonth: 0, // остаток на месяц после растрат
    income: {}, // доп доходы
    addIncome: [], //
    expenses: {}, // название расходов
    addExpenses: [], // стоимость

    ////запрос сколько хотят накопить
    getMission: function () {
        appData.mission = prompt('Сколько вы хотите отложить?', 500000);
        console.log('Ваша цель накопить: ' + appData.mission);
    },

    // обязательные расходы
    getExpensesMonth: function () {

        let sum = 0;

        for (let key in appData.expenses) {
            // console.log('Кулюч: ' + key + ' Значение ' + appData.expenses[key]);
            sum += +appData.expenses[key];
        };
        appData.expensesMonth = sum;
        console.log('Общие расходы: ' + sum);
    },

    // остаток после расходов
    getBudget: function () {

        /// остаток после растрат
        appData.budgetMonth = (appData.budget - appData.expensesMonth);
        console.log('Месячный бюджет: ' + appData.budgetMonth);

        /// дневной бюджет
        appData.budgetDay = (Math.floor(appData.budgetMonth / 30));
        console.log('Дневной бюджет: ' + appData.budgetDay);
    },


    // дневной бюджет
    getBudgetDay: function () {
        return appData.budgetDay;
    },


    // анализ доходов
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay < 0) {
            return ('Что то пошло не так');
        }
    },


    // срок достижение цели
    getTargetMonth: function () {
        const sum = Math.ceil(appData.mission / appData.budgetMonth);
        appData.period = sum;
        if (sum < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за: ' + Math.ceil(sum) + ' месяцев');
        }
        return sum;
    },


    // опрос клиента
    asking: function () {
        appData.deposit = confirm('Есть ли у вас дипозит в банке?');
        console.log('Депозит в банке: ' + appData.deposit);
        appData.addIncome = prompt('Перечислите дополнительные доходы', 'Грабеж').split(',');
        console.log(appData.addIncome);

        let key = '',
            mon = 0;

        for (let i = 0; i < 2; i++) {

            key = prompt('Введите обязательную статью расходов', 'Название' + (i + 1)).trim();
            mon = +prompt('Во сколько это обойдется?', 3000);
            appData.expenses[key] = +mon;

        }
        console.log(appData.expenses);
        // console.log('Обязательные расходы: ' + appData.addExpenses);

    }
};

// вызовы методов
appData.getMission(); // сколько хотят накопить
appData.asking(); // опросник
appData.getExpensesMonth(); // обязательные расходы
appData.getBudget(); // остаток после расходов
appData.getStatusIncome(); //  анализ доходов
console.log(appData.getStatusIncome()); // анализ доходов(консоль)
appData.getTargetMonth(); // срок достижение цели
console.log(appData); // объект

console.log('Наша программа включает в себя данные: '); // раскладуем объект
// разбиваем на ключи -- свойства
for (let key in appData) {
    console.log('Ключ: ' + key + ' Значение ' + appData[key]);
};