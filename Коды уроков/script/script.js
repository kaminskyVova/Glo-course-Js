// 'use strict';

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


////////////////////////////
////////// for/
//////////////////////////////


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



/////////////////////////////////////////////////
/////////// Шестой урок /////////////////////////
/////////////////////////////////////////////////

///// Область Видимости ///////////////////////


// если не использован 'use strict';
// переменная созданная без let/var ( y = 10) -- как и глобальная переменная видна везде не смотря на вложенность

// x = 5;

// function one() {
//     console.log(x);
// };
// one();
// console.log(x);

// область видимости зависит от ее расположения -- в нутри функции видно только внутри
// за пределами -- глобально
// после создания переменой любые переопредиления переопредиляют начальное значение
// если переменная с таким же именем созданна в нутри функции она видна тольков нутри 
// но ранее заданную не миняет просто другая область видимости

// let y = 5;

// function two() {
//     let y = 10;
//     console.log(y); // 10
//     function three() {
//         let y = 7;
//         console.log(y); // 7
//     }
//     three();
// }
// two();
// console.log(y); // 5



/// lexicalEnvironment -- лексическое окружение

// let y = 10;

// function two(x, z) {
//     //lexicalEnvironment = {x: 3, z: undef};
//     let y = 10;
//     //lexicalEnvironment = {x: 3, y: 4, z: undef};
//     console.log(x, y, z); // 3 10 undef

//     function three() {
//         //lexicalEnvironment = {}; -- обратился к lexicalEnvironment -- ничего не нащел
//         //scope -- ссылка на родителя lexicalEnvironment
//         // scope = one.lexicalEnvironment = {x: 3, y: 4, z: undef};
//         // и так далее на верх пока не найдет данные
//         // если не нашел в нутри то смотрит на globalScope -- глобальная область видимости
//         // globalScoupe = window.y = 10;
//         let y = 7;
//         console.log(y);
//     }

//     three();
// }

// two(3);

// let y = 5;

// function one(x) {
//     // scope = globalScope = window = {y: 5};
//     console.log(x + y); // 8
// };


// function two() {
//     let y = 15;
//     one(3);
// }
// two(); // 8 тк глобально задан y;// scope = globalScope = window = {y: 5};

// lexicalEnvirenment -- создается только во время вызова(выполнения) функции и в дальнейшем применяет заданные значения


/////замыкания/////
// все переменные видимые фукцией попадают в область замыкания функции

// function one() {
//     let x = 10; // x замкнута с фун one

//     function two(y) {
//         return x + y;
//     }
//     return two(15);

//     function three() {
//         let y = 20; // эта y; в видимости только функ three!
//     }
// }

// console.log(one()); // 25

// 'use strict';

// let a = 50;

// function one() {
//     let x = 10; // замыкание переменной

//     function two(y) {
//         return x + y + a;
//     }
//     console.dir(two);

//     function three() {
//         let y = 5; // область видимости закрыта в нутри ф-ции
//         return x * y;
//     }

//     return two(15);

// }
// console.log(one()); // 75  5 * 15


// let a = 50;

// function one() {
//     let x = 10; // замыкание переменной

//     function two(y) {
//         function three() {
//             return x * y;
//         }
//         console.dir(three);
//         return x + y + three(); // сейчас два замыкания ф two y: 15  x: 10;
//     }

//     return two(15);

// }
// console.log(one());


// function funcMath() {
//     const a = 10;
//     return function () {
//         console.log(a * a);
//     }
// };

// const mathPow = funcMath();
// console.dir(mathPow); // замыкание а = 10;


// function funcMath(a) {
//     return function (b) {
//         console.log(a + b);
//     }
// };

// const mathPow = funcMath(6);
// mathPow(5); // передается параметр анонимной ф-ции 
// console.dir(mathPow); // замыкание а 

// /////// итог //////
// переменная обьявленная в нутри ф - ции видна только в нутри ф - ции--локальная
// переменная обьявленная за пределами ф - ции--глобальная видна всем
// функция внутри функции и в каждой обьявленна переменная -- замыкание на переменной в выше стоящей ф-ции




////////////////////////////////////////////////
//////////// Урок 7 //////////////////////////
////////////////////////////////////////////////

////// object ////////////

// let car = { ///// объект
//     model: 'mazda', /// свойства объекта (имена свойств -- ключи)
//     year: 2006 //// 
// };

// let obj = new Object(); //// можно и так создавать Конструктор

// car.turbocharging = true; /// в объект car добавили новое свойство

// console.log(car);

// /// обращение к свойству объекта//

// console.log(car.model);

// ////
// obj.color = 'black';
// console.log(obj);
// /////

// car.style = obj; //// объединяем объекты получаем вложенный объект
// console.log(car);

// console.log(car.style === obj); /// получаем равные объекты то есть один объект имеет все свойства другого

// car.style.color = 'red'; /// обращаемся к свойству и меняем его
// console.log(obj);

/////////// любые типы данных //////////

// let car = {
//     model: 'mazda',
//     year: 2006,
//     turbocharging: true,
//     specifications: [], /// может содержать массив
//     style: {
//         color: 'blue' /// другой объект
//     }
// };

// // так же может содержать функции... добавим

// car.ride = function (speed) { /// добавляется через свойство в которое добавляем функция
//     console.log('Машина едет со скоростью ' + speed + ' km/h'); // такая ф-ция называется методом объекта
// };

// car.ride(180); /// вызов ф-ции
// console.log(car);

// ///// функция которая не привязанная к переменной ////
// function stop() {
//     console.log('Машина стоит со скоростью 0 km/h');
// };
// car.stop = stop; /// присваиваем через свойство
// car.stop(); /// вызываем (можно вызвать в любом месте выше на пример тк ф-ция глобальная)
// console.log(car);
// // stop();   // можно вызвать и просто ф-цию


// ////////// альтернативный синтаксис обращения /////

// console.log(car['model']); /// В СКОБКАХ НУЖНО УКАЗЫВАТЬ СТРОКУ!!!!

// // таким же способом можно добавлять или изменять свойства

// car['best place'] = 'city';
// console.log(car);

// // так же значения могут приходить из переменных
// let titleTrance = 'Коробка передач';
// let bodyTrance = 'Автоматическая коробка передач';

// car[titleTrance] = bodyTrance; ////bodyTrance стала параметром titleTrance.. а titleTrance -- свойством
// console.log(car);


// ///////////////////////////////////////
// //////// Массивы /////////////

// // Массив это объект в котором ключи(свойства) заполняются автоматически

// let arr = [1, 2, 3, 4]; // [] значения массива 
// // порядковый номер всегда начинается с 0 ля
// // а кол-во как обычно
// // кол-во = порядковый номер + 1

// // так же может содержать любые типы данных и объекты и массивы

// console.log(arr);


// // обращения к эллементам массива
// console.log(arr[0]); // 1
// console.log(arr[2]); // 3
// console.log(arr[5]); // undefined


// // изменения элементов по индексу

// arr[0] = 'cat';
// console.log(arr);

// // свойства массива
// console.log(arr.length); // длинна -- кол-во элементов вмассиве(последний номер + 1)
// arr[arr.length] = 'dog'; // добавление элемента в конец массива
// console.log(arr);

// arr[10] = 'human'; // добавление элемента с любым индексом
// console.log(arr);

// // так как массив является так же объектом то можно создавать конструктором

// // let array = new Array();
// // console.log(array);

// let array = new Array(1, 2, 3, 4, 5); // добавляем элементы
// // let array = new Array(55);  // если указан один параметр то он будет длинной массива
// console.log(array);

// // можем пропускать элементы
// let mas = [, , , , 5];
// console.log(mas);

// // можно установить длинну
// mas.length = 30;
// console.log(mas.length); // 30 но все не заданные будут пустыми
// //если установить длинну меньше чем кол-во элементов то лишние удалятся!


////// методы массивов /////////

// let fruit = ['Apple', 'Orange', 'Banana'];

///push -- добавляет в конец элементы
// fruit.push('Kiwi');
// console.log(fruit);

// // unshift -- добавляет в начало массива
// fruit.unshift('Papaya');
// console.log(fruit);

//pop -- удаляет последний элемент
// fruit.pop();
// console.log(fruit);
// console.log(fruit.pop()); // показывает удаленный элемент

//shift -- удаляет первый элемент
// fruit.shift();
// console.log(fruit);
// console.log(fruit.shift());

// sort -- сортирует массив по алфавиту УЧИТЫВАЕТ РЕГИСТР(большая мал буква)
// console.log(fruit.sort());

// //slice -- возвращает массив с указанного индекса
// console.log(fruit.slice(2));
// // либо между указанных -1
// console.log(fruit.slice(1, 3));
// так же принимает отриц значения (с конца те что задали задали)
// console.log(fruit.slice(-2)); // не изменяет массив

// splice -- удаляет элементы и добавляет новые в массив
// console.log(fruit);
// console.log(fruit.splice(1, 1, 'avacado', 'papaya')); // показывает удалленный элеемнт
// как работает метод splice:
//    первая цифра--индекс элемента с которого начинаем удаление 'Orange- indecs1'
//    вторая цифра -- количество элементов которые хотим удалить
//    все последующие аргументы мы передаем что бы добавить их в массив с места удаления
// console.log(fruit); // показывает измененый массив
// изменяет массив

// join -- возвращает встроку содержимое массива
// console.log(fruit.join()); // автоматом ставит разделение запятую
// console.log(fruit.join(' - ')); // но может принимать аргумент разделения

// reverse -- возвращает массив в обратном порядке
// console.log(fruit.reverse());
// изменяет массив


// concat -- складывает массив с другим массивом или элементом
// не изменяет текущий массив а возвращает новый

// console.log(fruit.concat(['avocado', 'papaya', 'kiwi'], 'mango'));



/// перебор свойств объекта циклом for in /////////////

// let car = {
//     model: 'mazda',
//     year: 2006,
//     turbocharging: true,
//     specifications: [],
//     style: {
//         color: 'blue'
//     }
// };

/// переберем все свойства 

// for (let key in car) {
//     console.log('Кулюч: ' + key + ' Значение ' + car[key]); // car[key] -- получаем значение ключа
// };

// получаем кол-во элементов (length -- записывается по другому чем в массиве)

// console.log(Object.keys(car)); // получаем все элементы
// console.log(Object.keys(car).length); // получаем длинну кол-во элементов



/// перебор свойств массива циклом for in -- получаем индекс элементов /////////////

// 1 способ for
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// 2 способ for.Each() 
// arr.forEach(function (item, i, array) { // item -- переменная которой при каждой интерации присв новое знач  i -- индекс элемента array -- сам массив(ТОЛЬКО имя должно отличатся (для старых брауз))
// console.log(item); // выводим только значения
// console.log(i); // выводим индекс (с 0 ля)
// console.log(array); // выводим массив
// console.log(item, i, array); // либо так -- все вместе
// });

// 4 способ for of -- получаем сами элементы (похож на for in только в отличии от него мы получаем элементы а не индекс)

// for (let item of arr) {
//     console.log(item);
// };




// удаление элементов с массива

// delete arr[3]; // индекс элемента кот хотим удал
// console.log(arr);


// удаление элементов с объекта

// let obj = {
//     a: 3,
//     b: true,
//     c: 'js'
// };
// console.log(obj);

// delete obj.b;
// console.log(obj);


////// псевдомассив! ////
// имеет такую же структуру но к нему не применяются методы! свойства да

// function test() {
//     console.log(arguments);
// };
// test(1, 2, 3, 4, 5);



///////////////////////////////////////////////
/////////////Урок девятый//////////////////////
///////////////////////////////////////////////

// Получение элементов со страници

// document -- корень
// console.log(document); -- выведет всю структуру документа
// console.log(document.children); -- выведет всю колекцию элементов с их свойствами

//Методы нахождения элементов

// console.log(document.getElementById('one_span')); // получаем элемент по йд 
// console.log(document.getElementsByClassName('hello')); // получаем массив элементов по классу// без методов -- HtmlColection
// console.log(document.getElementsByTagName('h1')); // получаем массив элементов по тэгу

// // получение отдельного элемента из полученого массива(по классу или айди)
// // при помощи индекса элемента в массиве(нач с 0)
// console.log(document.getElementsByClassName('hello')[1]);
// console.log(document.getElementsByTagName('h1')[0]);

// // Удобный способ!
// console.log(document.querySelector('h1')); // по тэгу 
// console.log(document.querySelector('.hello')); //по классу но получаем только верхний элемент
// console.log(document.querySelector('#one_span')); //по id

// console.log(document.querySelectorAll('.hello')); // получаем все элементы с данным классом // с методами NodeList

// //управление получиными элементами

// // присвоение значения в пременную
// let myElem = document.querySelectorAll('.hello');
// console.log(myElem);

// // получение атрибута
// console.log(myElem.getAttribute('id')); // получаем значение(сам айди) эллемента кот присвоенно айди

// // добавление css свойств элементам
// myElem.setAttribute('style', 'font-size: 24px');

// //все элементы которые есть в HTML мы можем использовать как свойства
// let myVar = document.querySelector('main'); // тег main
// console.log(myVar.title); // у него есть свойство title и мы получили его значение

// // так же можно задавать свое значение меняя предыдущее
// myVar.title = "Урок по DOM";
// console.log(myVar.title);

// //что бы получить класс нужно прописать className

// myVar2 = document.querySelector('#one_p'); // получили весь элемент с айди
// console.log(myVar2.classList); // получили коллекцию со всеми классами

// // Удаление и прибавление классов
// // добавим
// myVar2.classList.add('js'); // в скобках класс кот хотим добавить

// // удалим
// myVar2.classList.remuve('hi');


// //Работа с несколькими элементами
// // есть 2 списка ul class="colections" и ol class="collections" и li class="elem" 
// let collect = document.querySelectorAll('.collections'),
//     elem = document.querySelectorAll('.elem');

// console.log(collect, elem);

// //удаление элементов из коллекций
// collect[0].removeChild(elem[3]); // первая коллекция(по индексу из 2х) удаляем из нее 3й элемент(ребенок)
// // добавим эллемент
// collect[0].appendChild(elem[3]); // вернули его в конец списка
// collect[1].appendChild(elem[3]); // добавили его во вторую коллекцию(список ол)
// // переместим еще пару элементов из одного списка в другой
// collect[1].appendChild(elem[5]);
// collect[1].appendChild(elem[0]);
// collect[1].appendChild(elem[1]);

// // пермещение в конкретное место
// collect[0].insertBefore(elem[5]);
// collect[0].insertBefore(elem[4], elem[2]); // первым прараметром указываем какой элемент хотим преместить а вторым перед каким
// collect[0].insertBefore(elem[4], null); // если указать null то переместиться в конец как и appendChaild

// // замена элемента
// collect[0].replaceChild(elem[4], elem[2]); // первый каким элементом второй какой элемент им заменить
// // показать заменненый элемент
// let elemRep = collect[0].replaceChild(elem[4], elem[2]);
// console.log(elemRep);
// //вставляем замененый элемент во второй список (но можно куда угодно)
// collect[1].appendChild(elemRep);


// // копирование элементов
// let elemClone = elem[2].cloneNode(); // скопировали элемент
// elem[1].appendChild(elemClone); // перенесли его во второй список (НО БЕЗ ЕГО СОДЕРЖИМОГО!!!)

// // что бы клонировать все содержимое со всеми "детми" нужно добавить параметр true (передает обсалютно все что вложенно в элемент)
// // но так как принимает булиновое значение то если зададим в параметре цифру то тоже перенесет НО 0 выдаст false
// let elemClone = elem[2].cloneNode(true);


// //создание элементов

// console.log(collect[0].innerHTML); // возвращает разметку внетри коллекции
// console.log(collect[0].textContent); // возвращает только содержимое тегов

// // добавляем текст
// collect[0].textContent = 'Новый текст'; //добавляет текст(затирает предыдущий) но не меняет разметку
// collect[0].innerHTML = '<b>Новый текст</b>'; // добавляет разметку но перетирает предыдущую

// // добавляем новый элемент
// let newElem = document.createElement('li'); // принимает ввиде строги тег который хотим добавить в разметку
// newElem.textContent = 'новый текст';
// collect[1].appendChild(newElem); // добавили в разметку тег ли




//////////////////////////////////////////////////////////////
///////////////Урок одинадцатый///////////////////////////////
//////////////////////////////////////////////////////////////


//Обработчик событий

// есть див квадрат класс square
// get square 
let square = document.querySelector('.square');
console.dir(square); // консоль дир выводит в виде объекта(так можно увидеть все свойства объекта)

// вешаем клик
square.onclick = function () {
    console.log('вы кликнули на квадрат');
};

// События которые на элементе проверяем через консоль вкладка Event Listeners выбираем не отработанные события и смотрим на каком элементе

// ограничиваем кол-во кликов
//костыль весь onclick так не делают то есть не используют его
let count = 0;
square.onclick = function () {
    if (count === 3) {
        console.log('Упс')
        return;
    }
    count++;
    console.log('вы кликнули на квадрат');
};
// костыль полсле 3х кликов счет остановится но будет отрабатывать Упс

// Как можно сделать без костылей
square.onclick = function () {
    if (count === 3) {
        console.log('Упс')
        square.onclick = null; // остановит клик полсе 3х
        return;
    }
    count++;
    console.log('вы кликнули на квадрат');
};

// Запускаем 2 функции по одному клику
square.onclick = function () {
    console.log('Вторая функция');
};
// отработает только вторая тк перезаписалась

// Исправляем добавляем addEventListener навешивание слушателя
// принимает три параметра 2 из которых обязательные
// первый параметр событие(только уже без on)/действие 
// второй параметр функция кот обрабатывает событие

square.addEventListener('click', function () {
    console.log('клик клик клик');
});

// вешаем несколько событий
square.addEventListener('click', function () {
    console.log('клик клик клик');
});
square.addEventListener('click', function () {
    console.log('клак клак клак');
});
square.addEventListener('click', function () {
    console.log('клиииик клиииик клиииик');
});
// они все 3 срабатывают по клику


// Ограничение кликов
// используем removeEventListener только с именной функцией

// создаем именную 
let clicked = function () {
    console.log('клиииик клиииик клиииик');
};

// потом просто передаем вторым параметром имя функции
let clicked = function () {
    count++;
    if (count === 3) square.removeEventListener('click', clicked); //отанавливаем обработчик
    console.log('клиииик клиииик клиииик');
};

square.addEventListener('click', clicked); // вызов

// У каждого события есть объект события который доступен только функции обработчику события что бы его получить и получить все его свойства нужно добавить event или просто e

let square = document.querySelector('.square');

let eventFunc = function (event) {
    console.log(event);
};

square.addEventListener('click', eventFunc); // клик
// повесим еще несколько событий
square.addEventListener('mouseup', eventFunc); // клик отжат
square.addEventListener('mousedown', eventFunc); // клик нажат
square.addEventListener('mousemove', eventFunc); // движение мыши по объекту
square.addEventListener('mouseenter', eventFunc); // заводим мышку на объект
square.addEventListener('mouseleave', eventFunc); // покидаем объект
square.addEventListener('mouseover', eventFunc); // заводим мышку на объект
square.addEventListener('mouseout', eventFunc); //покидаем объект

// различия между mouseenter/mouseover mouseleave/mouseout

// mouseover\mouseout если есть объект в оюъекте(круг в квадрате)
//  то при преходе с одного на другой сработает вход\выход
// то есть событие срабатывает даже на детей

// mouseenter / mouseleave в этих случаях события по детям не отрабатываются


// СОБЫТИЯ ДЛЯ РАБОТЫ С ФОРМАМИ

// получаем инпут по айди получаем изменения(value) в инпуте
let eventFunc = function (event) {
    console.log(event.type);
};

document.querySelector('#text').addEventListener('input', eventFunc); // input событие в консоле будет инпут и колво знаков
document.querySelector('#text').addEventListener('change', eventFunc); // будет срабатывать при смене фокуса и при изменении значения инпута
document.querySelector('#text').addEventListener('focus', eventFunc); // срабатывает при клике на инпут
document.querySelector('#text').addEventListener('blur', eventFunc); // срабатывает при клике вне инпут

// Input range имеет только событие change
document.querySelector('#range').addEventListener('change', eventFunc); // срабатывает при изменении

// Выведем его значение
let eventFunc = function (event) {
    console.log(event.type);
    console.log(event.target.value); // значение 
};

// Кнопки
document.querySelector('#text').addEventListener('keyup', eventFunc); // нажатие кнопки(не мышки) все кнопки
document.querySelector('#text').addEventListener('keydown', eventFunc); // отжатие кнопки(не мышки) все кнопки


// События загрузки документа

// DOMContentLosded
document.addEventListener('DOMContentLosded', function () {
    'use strict';

    let eventFunc = function (event) {
        console.log(event.type);
        console.log(event.target.value);
    };

    document.querySelector('#text').addEventListener('keyup', eventFunc);
});
// Дождется загрузки всей страницы и сработает скрипт!
// используется редко и может задерживать загрузку


// Событие перед уходом со страници(окно напоминание об сохранении данных на пример) onbeforeunload

window.onbeforeunload = function () {
    return 'Вы уверены что хотите уйти со страницы?'
};
// некоторые браузеры перелавливают сообщение и выводят свое



///////
// СОБЫТИЕ ОТМЕНЯЮЩЕЕ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА!!!

// preventDefault

// на пример переход по ссылке
// на пример при нажатии кнопки отменять оправку формы
// на пример пока не выполнит что то(заполнил форму)
// на пример хотим при нажатии на ссылку выполнить свои действия

// отмена перехода по ссылке
document.querySelector('#link').addEventListener('click', function (event)) {

    event.preventDefault(); // отменили переход по данной ссылке
    console.log('сколько кликов');
};

// Можно отменять всплытие подсказок(вспомогательное меню) при нажатиии правой кнопки мыши

document.addEventListener('contextmenu', function (event)) {

    event.preventDefault(); // отменили всплытие меню правой мыши

};



//////
//////ВСПЛЫТИЕ И ЗАХВАТ СОБЫТИЙ
// Дано: кнопка\круг\квадрат\боди все одно в другом
let clickElem = null;

function greenHundler(event) {

    if (clickElem) {
        clickElem.classList.remove('green'); // удаляем элемент если он не фолс(существует)
    }

    clickElem = event.currentTarget; // присваиваим новый элемент
    clickElem.classList.add('green')
};

//каждому из этих элементов по клику добавится класс green если его нет
document.querySelector('.event_btn').addEventListener('click', greenHundler);
document.querySelector('.circle').addEventListener('click', greenHundler);
document.querySelector('.square').addEventListener('click', greenHundler);
document.querySelector('.body').addEventListener('click', greenHundler);
// в данном случае поменятся цвет боди тк все элементы находятся в боди
// через дебагер если его поставить перед вызовами то по шагам мы увидим как с каждым шагом меняется цвет у всех элементов
// а не видим цвета у других тк функция их принудительно уберает и бади последний шаг и на нем остается
// если убрать remove('green')то при нажатии покрасятся все элементы сразу


// Что бы посмотреть как работает захват нужно добавить третим параметром true в вызове
document.querySelector('.event_btn').addEventListener('click', greenHundler, true);
document.querySelector('.circle').addEventListener('click', greenHundler, true);
document.querySelector('.square').addEventListener('click', greenHundler, true);
document.querySelector('.body').addEventListener('click', greenHundler, true);

/////////////////////////////////////////////////////////