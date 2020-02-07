// 'use strict';


// let isNumber = function (n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }


// let money = 0, // доход за месяц
//     income = 'Фриланс', // доп доход
//     deposit = true, // депозит
//     mission = 1000000, // цель
//     period = 12, // желательный период
//     addExpenses = 0, // обязательные расходы
//     expenses = [], // статьи расходов
//     //
//     budgetDay = 0;


// // месячный доход
// let start = function () {
//     do {
//         money = prompt('Ваш месячный доход?');
//     }
//     while (!isNumber(money))

// };
// start();


// const appData = {
//     budget: money,
//     budgetDay: budgetDay,
//     budgetMonth: 0,
//     expensesMonth: 0,

//     //считаем обязательные расходы
//     getExpensesMonth: function () {

//         for (let i = 0; i < 2; i++) {

//             expenses[i] = prompt('Введите обязательную статью расходов', 'Название');
//             addExpenses += +prompt('Во сколько это обойдется?');
//         }
//     },


//     // остаток после расходов
//     getAccumulatedMonth: function () {
//         appData.budget - addExpenses;
//         return appData.budget - addExpenses;
//     },

//     // дневной бюджет
//     getBudgetDay: function () {
//         budgetDay = (Math.floor((appData.budget - addExpenses) / 30));
//         console.log(budgetDay);
//         return budgetDay;
//     },


//     // срок достижение целм
//     getTargetMonth: function () {
//         let sum = Math.ceil(mission / (appData.budget - addExpenses));

//         if (sum < 0) {
//             console.log('Цель не будет достигнута');
//         } else {
//             console.log('Цель будет достигнута за: ' + Math.ceil(sum) + ' месяцев');
//         }
//         return sum;
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
// };

// // appData.budgetDay = function getBudgetDay() {
// //     budgetDay = (Math.floor((appData.budget - addExpenses) / 30));
// //     console.log(budgetDay);
// //     return budgetDay;
// // };
// // appData.budgetDay();

// appData.getExpensesMonth();
// // console.log(appData.getExpensesMonth());
// appData.getAccumulatedMonth();
// // console.log(appData.getAccumulatedMonth());
// appData.getTargetMonth();
// // console.log(appData.getTargetMonth());
// // appData.getBudgetDay();
// // console.log(appData.getBudgetDay());
// // appData.getStatusIncome();
// console.log(appData.getStatusIncome());
// // console.log(appData.getBudgetDay);

// console.log(appData);




///////////// пятый урок ///////////
////////////////////////////////////

'use strict';


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money = 0, // доход за месяц
    income = 'Фриланс', // доп доход
    deposit = true, // депозит
    mission = 1000000, // цель
    period = 12, // желательный период
    addExpenses = 0, // обязательные расходы
    expenses = [],
    accumulatedMonth = 0, // статьи расходов
    budgetDay = 0;




// месячный доход
let start = function () {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};
start();


//// object ///
const appData = {
    budget: money, // заработок на месяц
    budgetDay: 0, // бюджет на день
    budgetMonth: 0, // остаток на месяц после растрат
    // expensesMonth: 0,
    expenses: { // расходы

    },
    deposit: true, // наличие депозита

    //считаем обязательные расходы
    getExpensesMonth: function () {

        for (let i = 0; i < 2; i++) {

            appData.expenses[i] = prompt('Введите обязательную статью расходов', 'Название');

            addExpenses = +prompt('Во сколько это обойдется?');
        }
    },

    // остаток после расходов
    getAccumulatedMonth: function () {
        accumulatedMonth = (appData.budget - addExpenses);
        console.log(accumulatedMonth);
        appData.budgetMonth = accumulatedMonth;

        return accumulatedMonth;
    },

    // дневной бюджет
    // getBudgetDay: function (a) {
    //     // budgetDay = (Math.floor(appData.getAccumulatedMonth / 30));
    //     budgetDay = (Math.floor((appData.budget - addExpenses) / 30));
    //     console.log(budgetDay);
    //     return budgetDay;
    // },

    // дневной бюджет
    getBudgetDay: function () {
        appData.budgetDay = (Math.floor((appData.budget - addExpenses) / 30));
        console.log(budgetDay);
        return budgetDay;
    },

    // анализ доходов
    getStatusIncome: function () {
        if (budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (budgetDay > 600 && budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay <= 600 && budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (budgetDay < 0) {
            return ('Что то пошло не так');
        }
    },


    // срок достижение целм
    getTargetMonth: function () {
        let sum = Math.ceil(mission / accumulatedMonth);

        if (sum < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за: ' + Math.ceil(sum) + ' месяцев');
        }
        // console.log(sum);
        return sum;
    },

    asking: function () {
        appData.deposit = confirm('Есть ли у вас дипозит в банке?');
    }

};
console.log(appData);





// анализ доходов
// function getStatusIncome() {
//     if (appData.getBudgetDay >= 1200) {
//         return ('У вас высокий уровень дохода');
//     } else if (appData.getBudgetDay > 600 && appData.getBudgetDay < 1200) {
//         return ('У вас средний уровень дохода');
//     } else if (appData.getBudgetDay <= 600 && appData.getBudgetDay >= 0) {
//         return ('К сожалению у вас уровень дохода ниже среднего');
//     } else if (appData.getBudgetDay < 0) {
//         return ('Что то пошло не так');
//     }
// };
// getStatusIncome();
// console.log(getStatusIncome());



appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
// appData.getStatusIncome();
appData.getTargetMonth();
appData.getBudgetDay();