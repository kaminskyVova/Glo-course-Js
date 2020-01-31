'use strict';

// // Первый урок

// // Типы данных

// let myVar;

// myVar = 10;
// myVar = 'Hello world';
// myVar = true;
// myVar = null;
// myVar = undefined;
// myVar = Symbol();

// myVar = {};


// console.log(typeof myVar); // показывает тип объекта

// myVar = [];
// let regExp = /w+/g;
// let func = function () {};
// let error = Error('error message');
// let date = new Date();

// let arr = [1, 2, 3];
// console.log(arr[5]); // обращение к несуществующему объекту -- undefined;   

// // преобразуем в булиновое значение

// console.log(Boolean(5));
// console.log(Boolean('Hello'));
// // любое значение будет 'true'; исключения: 0/undefinded/null/NaN/'';

// // логические операторы || && ! или и не
// console.log(!true); // false

// // числа 
// console.log(50);
// console.log(8.5);
// console.log(0.5); // console.log(.5);
// console.log(Infinity); // console.log(-Infinity);//Выход за допустимый диапозон// может быть и отрецательным 
// console.log(NaN);

// // мат знаки 
// // + - * / %  % -- приводит к остатку(четное не четное 4 % 2 = 0 -- четное без остатка(выводит в консоль остаток))
// // Варианты записи n = n + 2; n += 2; и тд;

// // операторы сравнения > < >= <= === !== == =;
// // метод извлечения корня conso;e.log(Math.sqrt(25)); -- 5;
// // метод возвидения в степень console.log(Math.pow(5, 3)); -- 125  первое число возводимое второе степень
// // метод возвидения в степень НОВЫЙ ВАРИК ** z = 2 ** 2; -- 4;
// // проверка целое число console.log(Number.isIneger(5.5)); -- false; (5) -- true;
// // Math.floor Округляет вниз
// // Math.ceil Округляет вверх
// // Math.round Округляет до ближайшего целого

// // Строки '' || "";
// // \t применили табуляцию (перед определенным словом в строке) /n перенесли следующее слово за /n на другую строку;
// // '' + '' -- конкатинация (склеивание строки) если один из оперантов строка либо оба;

// // Методы и свойства строки 
// let str = 'Hello my friends!';
// console.log(str.length); // длинна строки (кол-во символов);
// console.log(str.toUpperCase()); // все символы приведены к верхнему регистру(Большие буквы);
// console.log(str.toLowerCase()); //нихний регистр;
// console.log(str.charAt()); // возвращает символ указанный в скобочках (начинается строка с номера 0) ели выбран 0 то H а если 1 то e и тд;
// // новый способ вывода символа 
// // console.log(str.[0, 1, 2, ...]);
// console.log(str.substring()); // выведет сроку с определенного индекса до конца строки
// console.log(str.substring(2, 10)); // выведет со второго до 15го не включая его
// console.log(str.slice()); // работает так же как substring
// console.log(str.slice(-n)); // выведет строку с конца от введенного индекса
// console.log(str.substr(n, z)); // первый параметр начало второй сколько символов от него хотим вывести
// console.log(str.indexOf('friends')); // покажет индекс первой буквы слова (--9 в данном случае) 
// console.log(str.indexOf('d')); // получим индекс символа 'd' в строке --14
// console.log(str.indexOf('a')); // получим -1 тк такого символа нет
// // эти методы не меняют строку а только выводят то что задали

// console.log(str.replace('my friends', 'world')); // заменит слово my friends на world
// console.log(str.split(' ')); // разделяет строку на масив по разделению (вырезает любое разделение) в данном случае разделение пробел выведет масив из 3х элементов ['Hello', 'my', 'friends']
// // let str = 'apple, kiwi, orange'; // тут разделитель ', '


///////////////////////////////////////////////////////////////
///////////////////Третий урок//////////////////////////////// 
//////////////////////////////////////////////////////////////

// 'use strict'; строгий режим современный стандарт пишется в начале перед страници перед всем кодом
// методы взаимодейчтвия с пользователем

// confirm(); // выводит мод окно для выбора действия пользователем (выводит булиновое значение)
// console.log(confirm()); // выведет в консоль тру или фолс
// console.log(confirm('тебе есть 18 лет ?'));
// let question = confirm('тебе есть 18 лет ?');
// console.log(question);

// prompt('Сколько тебе лет?'); // выведет окно с полем для ответа (все значения от пользования == строка(как и инпуты))
// let question2 = prompt('Сколько тебе лет?', '22?'); // второе значение как валью (дефолтное значение)
// console.log(question2);


// Преобразование типов данных
// Перевод в строку
// console.log(Boolean(5)); == console.log(!!5);
// console.log(!!5/!!'js'); // можно преобразовать строки чиска
// console.log(String(10)); // перевод числа в строку
// console.log(String([1,2,3])); // так же и массив
// console.log(String(10 + '')); // есть и такой варик
// console.log(String(10..String())); // или такой

// Перевод в число
// console.log(Number('33'));
// console.log(+'10');
// +prompt('Сколько тебе лет?'); // результат получим число

// let n = '10';
// n *= 1;  // в результате получаем число

// parseInt('10.5 px'); // 10 -- number  вторым параметром можно задать систему исчеслений ('10.5 px', 2/8/16)
// parseFloat('10.5 px'); // 10.5 -- number



//Ветвления/////

// if (условие) {
// действие
// //если условие фолс
// } else if(следующее условие) {
// второй вариант действия
// } else {
// если предыдущие условия не верны то сл вариант действий
// }


// let n = 10;
// switch (n) { // заменяет не сколько if (выражение в условии строгое равенство)
//     case 3:
//         console.log(3); //если не вставить break; то выведет все что после тру
//         break;
//     case 4:
//         console.log(4);
//         break;
//     case 5:
//         console.log(5);
//         break;
//     default: // если не одно из условий не сработает можно добавить доп действие
//         console.log('не одно из условий не верно!')
// }

// switch (z) {
//     case 1:             // Группировка case
//     case 2:             // когда могут совпадать несколько условий
//     case 3:             // или одно из этих 
//     case 4:            
//     case 5:
//         console.log();
//         break;
//     case 6:
//         console.log();
//         break;
//     case 7:
//     case 8:
//         console.log();
// }


// Тернарный оператор

// let result = true ? 1 : 0;       // 1 : 0 -- варианты дествий если resalt = true -- будет 1 если false -- будет 0;
// console.log(result); // -- 1;
// let result = false ? 1 : 0;      // можем передавать любую команду и тд
// console.log(result); // -- 0;




//////////////////////////////////////////////////////////////
////////////////////////Четвертый урок////////////////////////
/////////////////////////////////////////////////////////////

// оператор создания функции

//////Правило -- Одна Функция-Одно Действие(только то действие для которого создавалась функция)//////

// вид функции(название функции) -- function Declaretion
// ее можно вызвать где угодно! до или после функции

// function имя функции(параметры) {    имя принято давать глаголом -- то что выполняет функция
//     тело функции
// }
//  имя функции();  --- вызов функции
// 
// 
// function outputMessage() {
//     console.log('Hello world');
// };

// outputMessage();


// // function Expresion -- такую функцию можно вызвать только после ее объявления!

// const consoleMessage = function () { // можно передавать функцию переменным
//     console.log('Hello friends!');
// };

// consoleMessage();


// задавание вункции с помощью Конструктора

// const alertMessage = new Function('alert("Hi!")');

// alertMessage();

// function outputMessage(name, age) { // name -- переменная в которую положим значение функции (параметр) она видна только в нутри функции
//     console.log('Hello!!!' + name); // переменных может быть несколько
//     console.log('My age:' + age);
// };
// outputMessage('Max', 30); // 'Max' -- аргумент который можно задать для каждого параметра
// // аргументов может быть сколько угодно как и переменных(параметров)

// const sum = function (a, b) {
//     let res = a + b; // в нутри функции значит выведет в консоль
//     console.log(res);
//     console.log(a + b);
// };
// sum(3, 5) // --8   // sum выведет тк объявлена до функции

// console.log(res); // с наружи функции -- не выведет в консоль
// переменная объявленная в нутри видна только в нутри

// что бы получить значения res нужно задать ее до функции с нулевым значением либо пустую

// let res = 0;
// const sum = function (a, b) {
//     res = a + b;
//     console.log(a + b);        // переменная определится тк заданна перед функцией
// };
// sum(10, 35);
// console.log(res);


// return // оператор --  для того что бы можно было присвоить значение функ переменной
// arguments //  -- псевдо массив 

// const sum = function (a, b) {
//     console.log(arguments);
//     console.log(a); // 10
//     console.log(b); // 35
//     return a + b;         // после return функция прекращает работу(то есть с места где стоит return) 
//  };

// let res = sum(10, 35,); //// let res = sum(10, 35, 21, 5, 67); --выведется в консоль только сумма двух первых тк(a + b) --два параметра
// console.log(res); // но мы можем посмотреть вызвав псевдо массив написав внутри функции console.log(arguments);

/// вариант когда заданных параметров больше чем их значений

// const sum = function (a, b, c) {
//     if (a === undefined) { // можно записать так if(!a)
//         a = 0; // в данном случае
//     }
//     if (b === undefined) { // if(!b)
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }

//     return a + b + c;
// };

// let res = sum(10, 5);
// console.log(res); // выведет сложение имеющихся значений


////////////////////////////////////////////
//// Практика //// Код с последнего ДЗ-3 ///
//////Практика--функции под ним////////////
/////////////////////////////////////////////


// Предыдущее Задание

// // присовить значения переменным
// let money = 30000, // доход за месяц
//     income = 'Фриланс',
//     deposit = true,
//     mission = 1000000,
//     period = 12,
//     addExpenses = 'Жилье, Транспорт, Гульки, Шмульки';

// // методы и свойства
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission);
// //////
// addExpenses = addExpenses.toLocaleLowerCase().split(', ');
// console.log(addExpenses);
// ////////
// let budgetDay = (money / 30); // дневной бюджет
// console.log(budgetDay);


// // Третье Задание

// money = +prompt('Ваш месячный доход?');
// console.log(money);

// addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// // addExpenses = addExpenses.toLocaleLowerCase().split(', ');  // не знаю строкой или массивом
// console.log(addExpenses);

// deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);

// // // Новые переменные
// let expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название'),
//     amount1 = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название'),
//     amount2 = +prompt('Во сколько это обойдется?');

// console.log(expenses1);
// console.log(amount1);
// console.log(expenses2);
// console.log(amount2);




// let amount1 = 1000;    // просто для проверки условий
// let amount2 = 1110000;

// let budgetMonth = money - (amount1 + amount2); // Бюджет на месяц
// console.log(budgetMonth);

// за сколько месяцев будет достигнута цель mission
// let target = Math.ceil(mission / budgetMonth); // за сколько будеь достигнута цель
// console.log(target);

// // поправляем дневной бюджет
// budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);

// // Конструкция if/else по результатам ответов
// if (budgetDay >= 1200) {
//     console.log('У вас высокий уровень дохода');
// } else if (budgetDay > 600 && budgetDay < 1200) {
//     console.log('У вас средний уровень дохода');
// } else if (budgetDay <= 600 && budgetDay >= 0) {
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// } else if (budgetDay < 0) {
//     console.log('Что то пошло не так');
// }

// console.log(target);

///////////////////////////////
///// Практика функции ////////
///////////////////////////////

// создадим кот выводит это
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

// let showTypeOf = function (data) { // data -- какие то данные
//     console.log(data, typeof (data));
// };
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

// let getStatusIncome = function () {
//     if (budgetDay >= 1200) {
//         console.log('У вас высокий уровень дохода');
//     } else if (budgetDay > 600 && budgetDay < 1200) {
//         console.log('У вас средний уровень дохода');
//     } else if (budgetDay <= 600 && budgetDay >= 0) {
//         console.log('К сожалению у вас уровень дохода ниже среднего');
//     } else if (budgetDay < 0) {
//         console.log('Что то пошло не так');
//     }
// };

// getStatusIncome();

// Читсая Функция -- в нутри нее ничего не выводится в консоль а происходят только заданные действия

// let getStatusIncome = function () {
//     if (budgetDay >= 1200) {
//         return ('У вас высокий уровень дохода');
//     } else if (budgetDay > 600 && budgetDay < 1200) {
//         return ('У вас средний уровень дохода');
//     } else if (budgetDay <= 600 && budgetDay >= 0) {
//         return ('К сожалению у вас уровень дохода ниже среднего');
//     } else if (budgetDay < 0) {
//         return ('Что то пошло не так');
//     }
// };

// console.log(getStatusIncome());


// Дополнительное видео -- чистые функции /анонимные--функции /callback--функции ///

// Анонимная функция(anonymous) -- если после function нет имени(имени функции). 
// !!!!! Если после function есть имя -- функция именнованая !!!!!

// const sun = function (a, b) {
//     return a + b;
// };

// ////

// const sun2 = new Function('a', 'b', 'return a + b'); // другая запись


///// Анонимные функции могут вызывать сами себя ///

// Вся функция берется в () а ее вызов после } добавляем () так же можно и после ) перед ;

// (function () {
//     console.log('Hello!');
// }());

// // })();


//// Callback функции /////

// В качестве параметров можно принимать не только значения но и функции
// Любая функция которая передается как аргумент называется  -- функция обратного вызова(Callback)

// const doNum = function (a, b, callback) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         callback(a, b);
//     }
// };

// doNum(5, 10, function (a, b) {
//     console.log(a + b);
// });


// function mult(a, b) {
//     console.log(a * b);
// }
// // doNum(5, 5, mult);


// Для чего применяются Callback? //

// используются для обработки события
// правельного порядка вывода данных
// и выполнения последовательности действий
// !!!Передается в другую функцию и выполняется после выполнения той функции!!!


// function one() {
//     console.log(1);
// };

// function two() {
//     console.log(2);
// };

// one();
// two(2);      // -- 1 2

// если задать задержку на пример (может происходить сама когда работаем ссерверами и тд) то есть что первое загрузится то и выдаст
//  и можно так нарушить порядок вывода,
// что бы это исправить и не допустить применяют Callback

// function one() {
//     setTimeout(function () {
//         console.log('Я сварил суп');
//     }, 1000);
// };

// function two() {
//     console.log('Поел суп');
// };

// one();       // Поел суп
// two();       // Сварил суп -- получилось что сначала поел потом сварил

// исправление

// function one(callback) {
//     setTimeout(function () {
//         console.log('Я сварил суп');
//         callback();
//     }, 1000);
// };

// function two() {
//     console.log('Поел суп');
// };

// one(two); // порядок вывода правельный: Сварил.Поел


// Пример как это может работать на практике

// function one(callback) {
//     console.log('Делаем запрос на сервер');
//     setTimeout(function () {
//         console.log('Получаем данные от сервера');
//         callback();
//     }, 1000);
// };

// function two() {
//     console.log('Выводим на страницу');
// };

// one(two);


///// Чистые Функции //////


// Детерминированная функция зависит только от входных данных
// Это и есть читсая функция -- зависит только от входных данных
// Так же она не должна изменять данные и изменять что либо за приделами функции
// К этому относятся: alert console запись в файл Вывод на страницу и тд...то есть должна только получить сделать операцию и выдать результат

// function foo(a, b) {
//     const sum = a + b;
//     return sum; // вернем результат(используем) 
// }

// console.log(foo(5, 10)); // без return нельзя вывести результат объявленной внутри функции переменной
// console.log(foo(5, 10));
// console.log(foo(5, 10));
// console.log(foo(5, 10)); // результат 15 
// console.log(foo(5, 5)); // результат 10 тк поменяли данные


// Пример НЕ чистой функции
// функция зависит от внешней переменной

// let x = 5;
// console.log(x); // 5

// function foo2(a, b) {
//     const sum3 = a + b;
//     // console.log(sum);    // уже не чистая тк содержит вывод
//     // document.write(sum);    // то же тк (выводит на странуцу)
//     x += sum3;
//     return sum3;
// }
// console.log(foo2(10, 15));
// console.log(x); // x = 30 (10 + 25 и + x) переменная x изменена!


// function foo(a) {
//     const sum = a + Math.random(); // + рандомное число
//     return sum;
// }

// console.log(foo(3));
// console.log(foo(6));
// console.log(foo(8));

// Для чего использовать чистые функции?
// Проще в отладки
// Проще в понимании
// Проще в тестировании
// Результат всегда одинаковый



/////////////////////////////////////////////////////////////////////
/////////////////// Пятый Урок /////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Циклы

// рекурсия 

// function changeTires(snowTires) {
//     /*  демонтаж, разбортовка, забортовка, давление, 
//    балансировка, монтаж */
//     snowTires--;
//     console.log(snowTires);

//     if (snowTires > 0) {
//         changeTires(snowTires);
//     }

// };
// changeTires(4);


////////////////////////////
// Циклические свойства/////

//while() -- делай пока.. запускается пока тру

// let n = 0;

// while (n < 5) { //условия (работает до тех пор пока...)
//     console.log(n);
//     n++;
// };


// do while -- запустится один раз по любэ

// let n = 0;
// do {
//     console.log(n);
//     n++;
// }
// while (n < 5);
// while (n === 5); -- 0 все равно пройдет одна интерация!

// for

// for (начало; когда остановить; что происходит) {
// тело цикла(действия при каждой интерации цикла)
// };

// let n = 0;

// for (let i = 0; i < 5; i++) {
//     console.log(i);             /// 0 -- 4;
// };

// Остановка цикла break; continue;

// for (let i = 0; i < 10; i++) {

//     if (i === 4) {
//         continue;
//     }

//     if (i === 8) {
//         break;
//     }

//     console.log(i);
// };


////////////////////////////////////////////
///////////////////////////////////////////
////////// Практика циклы ////////////////
//////////////////////////////////////////

let money = 30000,
    mission = 100000,
    deposit = true,
    period = 12;

let showTypeOf = function (item) {
    console.log(typeof item);
};
showTypeOf(money);
showTypeOf(mission);
showTypeOf(deposit);

// let expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название'),
//     expenses1Amount = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название'),
//     expenses2Amount = +prompt('Во сколько это обойдется?');

// console.log(addExpenses.toLowerCase().split(','));

let expenses1, expenses2;
let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов - 1', 'Название');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов - 2', 'Название');
        }

        sum += +prompt('Во сколько это обойдется?');
    }

    console.log('Расходы за месяц: ' + sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

// console.log('Расходы за месяц ' + expensesAmount);

let getAccumulateMonth = function () {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulateMonth();

let getTargetMonth = function () {
    return mission / accumulatedMonth;
};