'use strict';



let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money = 0; // доход за месяц
// mission;

// месячный доход
let start = function () {

    do {
        money = +prompt('Ваш месячный доход?', 60000);
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
    addDeposit: {}, // депозит и процент
    percentDeposit: 0, // процент по депозиту
    moneyDeposit: 0, // сумма депозита
    budgetDay: 0, // бюджет на день
    expensesMonth: 0, // обязательные расходы
    budgetMonth: 0, // остаток на месяц после растрат
    income: {}, // доп доходы
    // addIncome: [], //
    expenses: {}, // название расходов
    addExpenses: [], // возможные расходы


    ////запрос сколько хотят накопить
    getMission: function () {

        do {
            appData.mission = +prompt('Сколько вы хотите отложить?', 500000);
        }
        while (!isNumber(appData.mission))
        appData.mission = +appData.mission;

        console.log('Ваша цель накопить: ' + appData.mission);
    },


    // обязательные расходы
    getExpensesMonth: function () {

        let sum = 0;

        for (let key in appData.expenses) {

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

        const missionPeriod = Math.ceil(appData.mission / appData.budgetMonth);

        appData.period = missionPeriod;

        if (missionPeriod < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за: ' + Math.ceil(missionPeriod) + ' месяцев');
        }
        return missionPeriod;
    },


    // опрос клиента
    asking: function () {
        let cashIncome,
            itemIncome;

        if (confirm('Есть ли у вас дополнительный заработок?')) {

            // доп заработки
            do {
                itemIncome = prompt('Назовите допольнительный заработок?', 'Грабеж, Рэкет, Заказуха').trim();
            }
            while (itemIncome === '')

            // заработок на них
            do {
                cashIncome = +prompt('Сколько вам приносит дополнительный заработок?', 20000);
            }
            while (!isNumber(cashIncome))
            appData.income[itemIncome] = cashIncome;

            console.log(appData.income);
        };


        // обязательные расходы
        let key = '',
            mon = '';

        for (let i = 0; i < 2; i++) {

            // статьи расходов
            do {
                key = prompt('Введите обязательную статью расходов', 'Подкуп ментов').trim();
            }
            while (key === '')


            // растраты на них
            do {
                mon = +prompt('Во сколько это обойдется?', 10000);
            }
            while (!isNumber(mon))
            appData.expenses[key] = +mon;

        };

        console.log('Обязательные расходы: ');
        console.log(appData.expenses);

        // доп расходы

        let costs = '';
        do {
            costs = prompt('Введите дополнительные статьи расходов', 'Водка, Бабы, Опохмел').trim();
        }
        while (costs === '')

        appData.addExpenses = costs;
        console.log(appData.addExpenses);
        console.log('Дополнительные растраты: ' + costs);

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
    }
};


// вызовы методов
appData.getMission(); // сколько хотят накопить
appData.getInfoDeposit() // наличие сумма и процент по депозиту
appData.asking(); // опросник
appData.getExpensesMonth(); // обязательные расходы
appData.getBudget(); // остаток после расходов
appData.getStatusIncome(); //  анализ доходов
console.log(appData.getStatusIncome()); // анализ доходов(консоль)
appData.getTargetMonth(); // срок достижение цели
console.log(appData); // объект

// раскладуем объект
// разбиваем на ключи -- свойства
// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// };