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
// let square = document.querySelector('.square');
// console.dir(square); // консоль дир выводит в виде объекта(так можно увидеть все свойства объекта)

// // вешаем клик
// square.onclick = function () {
//     console.log('вы кликнули на квадрат');
// };

// // События которые на элементе проверяем через консоль вкладка Event Listeners выбираем не отработанные события и смотрим на каком элементе

// // ограничиваем кол-во кликов
// //костыль весь onclick так не делают то есть не используют его
// let count = 0;
// square.onclick = function () {
//     if (count === 3) {
//         console.log('Упс')
//         return;
//     }
//     count++;
//     console.log('вы кликнули на квадрат');
// };
// // костыль полсле 3х кликов счет остановится но будет отрабатывать Упс

// // Как можно сделать без костылей
// square.onclick = function () {
//     if (count === 3) {
//         console.log('Упс')
//         square.onclick = null; // остановит клик полсе 3х
//         return;
//     }
//     count++;
//     console.log('вы кликнули на квадрат');
// };

// // Запускаем 2 функции по одному клику
// square.onclick = function () {
//     console.log('Вторая функция');
// };
// // отработает только вторая тк перезаписалась

// // Исправляем добавляем addEventListener навешивание слушателя
// // принимает три параметра 2 из которых обязательные
// // первый параметр событие(только уже без on)/действие 
// // второй параметр функция кот обрабатывает событие

// square.addEventListener('click', function () {
//     console.log('клик клик клик');
// });

// // вешаем несколько событий
// square.addEventListener('click', function () {
//     console.log('клик клик клик');
// });
// square.addEventListener('click', function () {
//     console.log('клак клак клак');
// });
// square.addEventListener('click', function () {
//     console.log('клиииик клиииик клиииик');
// });
// // они все 3 срабатывают по клику


// // Ограничение кликов
// // используем removeEventListener только с именной функцией

// // создаем именную 
// let clicked = function () {
//     console.log('клиииик клиииик клиииик');
// };

// // потом просто передаем вторым параметром имя функции
// let clicked = function () {
//     count++;
//     if (count === 3) square.removeEventListener('click', clicked); //отанавливаем обработчик
//     console.log('клиииик клиииик клиииик');
// };

// square.addEventListener('click', clicked); // вызов

// // У каждого события есть объект события который доступен только функции обработчику события что бы его получить и получить все его свойства нужно добавить event или просто e

// let square = document.querySelector('.square');

// let eventFunc = function (event) {
//     console.log(event);
// };

// square.addEventListener('click', eventFunc); // клик
// // повесим еще несколько событий
// square.addEventListener('mouseup', eventFunc); // клик отжат
// square.addEventListener('mousedown', eventFunc); // клик нажат
// square.addEventListener('mousemove', eventFunc); // движение мыши по объекту
// square.addEventListener('mouseenter', eventFunc); // заводим мышку на объект
// square.addEventListener('mouseleave', eventFunc); // покидаем объект
// square.addEventListener('mouseover', eventFunc); // заводим мышку на объект
// square.addEventListener('mouseout', eventFunc); //покидаем объект

// // различия между mouseenter/mouseover mouseleave/mouseout

// // mouseover\mouseout если есть объект в оюъекте(круг в квадрате)
// //  то при преходе с одного на другой сработает вход\выход
// // то есть событие срабатывает даже на детей

// // mouseenter / mouseleave в этих случаях события по детям не отрабатываются


// // СОБЫТИЯ ДЛЯ РАБОТЫ С ФОРМАМИ

// // получаем инпут по айди получаем изменения(value) в инпуте
// let eventFunc = function (event) {
//     console.log(event.type);
// };

// document.querySelector('#text').addEventListener('input', eventFunc); // input событие в консоле будет инпут и колво знаков
// document.querySelector('#text').addEventListener('change', eventFunc); // будет срабатывать при смене фокуса и при изменении значения инпута
// document.querySelector('#text').addEventListener('focus', eventFunc); // срабатывает при клике на инпут
// document.querySelector('#text').addEventListener('blur', eventFunc); // срабатывает при клике вне инпут

// // Input range имеет только событие change
// document.querySelector('#range').addEventListener('change', eventFunc); // срабатывает при изменении

// // Выведем его значение
// let eventFunc = function (event) {
//     console.log(event.type);
//     console.log(event.target.value); // значение 
// };

// // Кнопки
// document.querySelector('#text').addEventListener('keyup', eventFunc); // нажатие кнопки(не мышки) все кнопки
// document.querySelector('#text').addEventListener('keydown', eventFunc); // отжатие кнопки(не мышки) все кнопки


// // События загрузки документа

// // DOMContentLosded
// document.addEventListener('DOMContentLosded', function () {
//     'use strict';

//     let eventFunc = function (event) {
//         console.log(event.type);
//         console.log(event.target.value);
//     };

//     document.querySelector('#text').addEventListener('keyup', eventFunc);
// });
// // Дождется загрузки всей страницы и сработает скрипт!
// // используется редко и может задерживать загрузку


// // Событие перед уходом со страници(окно напоминание об сохранении данных на пример) onbeforeunload

// window.onbeforeunload = function () {
//     return 'Вы уверены что хотите уйти со страницы?'
// };
// // некоторые браузеры перелавливают сообщение и выводят свое



// ///////
// // СОБЫТИЕ ОТМЕНЯЮЩЕЕ СТАНДАРТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА!!!

// // preventDefault

// // на пример переход по ссылке
// // на пример при нажатии кнопки отменять оправку формы
// // на пример пока не выполнит что то(заполнил форму)
// // на пример хотим при нажатии на ссылку выполнить свои действия

// // отмена перехода по ссылке
// document.querySelector('#link').addEventListener('click', function (event)) {

//     event.preventDefault(); // отменили переход по данной ссылке
//     console.log('сколько кликов');
// };

// // Можно отменять всплытие подсказок(вспомогательное меню) при нажатиии правой кнопки мыши

// document.addEventListener('contextmenu', function (event)) {

//     event.preventDefault(); // отменили всплытие меню правой мыши

// };



// //////
// //////ВСПЛЫТИЕ И ЗАХВАТ СОБЫТИЙ
// // Дано: кнопка\круг\квадрат\боди все одно в другом
// let clickElem = null;

// function greenHundler(event) {

//     if (clickElem) {
//         clickElem.classList.remove('green'); // удаляем элемент если он не фолс(существует)
//     }

//     clickElem = event.currentTarget; // присваиваим новый элемент
//     clickElem.classList.add('green')
// };

// //каждому из этих элементов по клику добавится класс green если его нет
// document.querySelector('.event_btn').addEventListener('click', greenHundler);
// document.querySelector('.circle').addEventListener('click', greenHundler);
// document.querySelector('.square').addEventListener('click', greenHundler);
// document.querySelector('.body').addEventListener('click', greenHundler);
// // в данном случае поменятся цвет боди тк все элементы находятся в боди
// // через дебагер если его поставить перед вызовами то по шагам мы увидим как с каждым шагом меняется цвет у всех элементов
// // а не видим цвета у других тк функция их принудительно уберает и бади последний шаг и на нем остается
// // если убрать remove('green')то при нажатии покрасятся все элементы сразу


// // Что бы посмотреть как работает захват нужно добавить третим параметром true в вызове
// document.querySelector('.event_btn').addEventListener('click', greenHundler, true);
// document.querySelector('.circle').addEventListener('click', greenHundler, true);
// document.querySelector('.square').addEventListener('click', greenHundler, true);
// document.querySelector('.body').addEventListener('click', greenHundler, true);

// /////////////////////////////////////////////////////////




// ////////////////////////////////////////////////////////////////////////
// /////////////////////////Урок 12////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////

// // контекст вызова this

// // this -- ссылка на кокойто объект
// // всегда вызывается и находится в нутри функции

// // call site -- место вызова функции
// // call steck -- порядок вызова и обратный порядок завершения


// // четыре правила this 
// // 1) привязка по умолчанию foo();
// // 2) не явная привязка obj.foo();
// // 3) явная привязка apply, call, bind
// // 4) привязка new

// // 1e 
// // привязка по умолчанию обычный вызов
// var a = 10;

// function test() {
//     // console.log('Hello', this); // в таком случае this смотрит на глобальный объект(виндов)
//     console.log('Hello', this.a); /// смотрит на а(обращаемся через this  к а)

// };
// test();

// // ВСЕГДА когда вызов без точки(без привязки к объекту) this смотрит на виндов


// // 2е правило
// // не явная привязка
// // когда привязываем объект и его метод

// let obj = {
//     x: 10,
//     y: 15,
//     // test: function () {
//     //     console.log(this);
//     // }
//     test: newTest
// };

// //можно и так вывод будет тот же
// function newTest() {
//     console.log(this);
// };

// obj.test();

// // а если вызовим так то глоб обдж будет виндов
// newTest();

// // можно обратится к свойству объекта
// function newTest() {
//     console.log(this.x); // 10
// };

// obj.test();

// /// по сложнее пример
// let obj2 = {
//     x: 20,
//     y: 25,
//     testObj: obj
// };

// obj.test();
// obj2.testObj.test();


// // 3) явная привязка apply, call, bind
// let obj = {
//     x: 10,
//     y: 25,
// };

// function newTest() {
//     console.log(this);
// };

// newTest.apply(obj); // первый параметр объект привязки(на который будет ссылаться зыз) принимает мвссив
// newTest.call(obj); // первый параметр объект привязки(на который будет ссылаться зыз) принимет сколько угодно параметров через ,

// // Жесткая привязка
// function hardBing() {
//     newTest.call(obj);
// };
// hardBing();

// let foo = newTest.bind(obj); // передали объект кот привязан к newTest

// foo(); // получим объект



///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////урок 13дцатый//////////////////////////////////
///////////////////////////////////////////////////////////

// localStorage -- сохраняет на нужное время

// const inputText = document.getElementById('myText'),
//     myBtn = document.getElementById('myBtn'),
//     text = document.getElementById('text');

// добавляем данные в локалСторедж
// myBtn.addEventListener('click', () => {
//     // myText--поля ввода(инпут)
//     localStorage.myText = inputText.value;
//     inputText.value = '';

//     showText();
// });
// // выводим из локал данные на страницу
// const showText = () => {
//     text.textContent = localStorage.myText;
// };

// если буду запускать ф-цию за приделами скрипта то будет доставаться текс записанный в локал
// showText();


// sessionStorage -- сохраняет на время сессии

// myBtn.addEventListener('click', () => {
//     // myText--поля ввода(инпут)
//     sessionStorage.myText = inputText.value;
//     inputText.value = '';

//     showText();
// });
// // выводим из локал данные на страницу
// const showText = () => {
//     text.textContent = sessionStorage.myText;
// };

/////////////
// Методы для получения и записи значений

// .setItem() --метод добавления
// передаем два параметра "ключь" и  значение;

// .getItem() -- метод извлечения


// myBtn.addEventListener('click', () => {
//     // добавляем значение
//     localStorage.setItem('memory', inputText.value);
//     inputText.value = '';

//     showText();
// });
// // выводим из локал данные на страницу
// const showText = () => {
//     text.textContent = localStorage.getItem('memory');
// };

//метод удаления данных с локал
// .removeItem('ключь');
// можно также удалить в ручную через корсоль знак круг с полоской


// myBtn.addEventListener('click', () => {
//     // добавляем значение
//     localStorage.setItem('memory', inputText.value);
//     inputText.value = '';

//     showText();
// });
// // выводим из локал данные на страницу
// const showText = () => {
//     text.textContent = localStorage.getItem('memory');
// };

// localStorage.removeItem('myText');


/////////////////////////////////
// cookies -- работает только через СЕРВЕР
//  при открытие файла по путю не сработает куки
// cookies -- по умолчанию сохраняют данные до конца сессии


// // document.cookie = 'имя ключа=значение';
// document.cookie = 'имя=значение';

// // куки сохраняет одно значение за раз 
// // что бы сохранить несколько надо так
// // куки не создается с одинаковым ключем 

// document.cookie = 'имя2=значение2';
// document.cookie = 'имя3=значение3';
// document.cookie = 'имя4=значение4';

// // получение куки
// console.log(document.cookie);
// // что бы получить отдельно нужно разьить на массив
// // document.cookie.split('; ');
// console.log(document.cookie.split('; '));
// console.log(document.cookie.split('; ')[1]);


/////////////////////////////
// Заставим куки жить долго!
// expires -- прописываем когда удалить куки
// document.cookie = 'hope=life; expires=Tue, 7 May 2024 00:00:00 GMT';

///////////
// функция создания и добавления куки

// function setCookie(key, value, year, month, day, path, domain, secure) {
//     let cookieStr = key + '=' + value; //encodeURI(value) -- закодировали
//     if (year) {
//         const expires = new Date(year, month - 1, day);
//         cookieStr += '; expires=' + expires.toGMTString();
//     }

//     cookieStr += path ? '; path=' + path : '';
//     cookieStr += domain ? '; domain=' + domain : '';
//     cookieStr += secure ? '; secure' : '';

//     document.cookie = cookieStr;
// };

// // создаем!
// setCookie('Привет', 'Мир');

// // куки посложнее
// // setCookie('Любимый праздник детей', 'Новый год', 2020, 1, 1);
// console.log(document.cookie);
// // console.log(decodeURI(document.cookie)); //раскодировали
// //


///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////// 14й урок//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// ООП

// Prototype -- скрытая ссылка объекта
// Prototype -- это объект из которого текущий объект черпает недостающие свойства
// если в объекте не хватает свойства то поднимается по прототипу и берет нужное
// главный объект не знает сколько у него потомков -- запрос с низу вверх



// let arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(Array.prototype);

// let car = {
//     doors: 4,
//     turbocharging: false,
//     ride: () => {
//         console.log('Машина едет');
//     }
// };
// // car.ride();

// // создадим новый объект на основе car 
// let newCar = Object.create(car);


// newCar.model = 'mazda 3';
// console.log(newCar);
// console.log(newCar.doors);

// метод hesOwnProperty проверяет есть ли такое свойство возвращает true or false
// не видет наследуемые свойства
// console.log(newCar.hasOwnProperty('model'));

// // что бы проверить есть ли у кого то такое свойство(наследуемое) пишем
// console.log(newCar.__proto__.hasOwnProperty('doors'));

// // метод isPrototypeOf -- показывает является данный объект прототипом
// console.log(car.isPrototypeOf(newCar));

/////////////////////////////////////
/////////Конструкторы///////////

// конструктор -- функция для описания какой то сущности

// function Car() {
//     boors: 4,
//     this.model = 'mazda',
//     this.doors = 4

// };

// // последующие объекты создаются через оператор new
// // this будет указывать на car1 
// // если в новом объекте нет свойства то оно будет присвоенно через this 
// // let car1 = new Car();
// // console.log(car1);

// // создадим новое свойство
// Car.prototype.ride = function () {
//     console.log('Gogogo');
// };
// // car1.ride();

// function Car(model, color) {
//     this.model = model,
//         this.color = color;
// };

// let car1 = new Car('Mazda', 'Red');
// console.log(car1);
// let car2 = new Car('Vaz', 'black');
// console.log(car1.ride === car2.ride);


////////////////////////////////////////////
//////////Классы в JS/////////////
//////////

// Класс -- обстрактная единица описывающая объект 
// Каждый объект должен быть создан на основе класса который его декларирует

// Класс
// есть объект класс которого на самом деле не существует тк описанно все обстрактно
// function Car(brand, model, options) {
//     this.brand = brand;
//     this.model = model;
//     options = options || {}; // будут передаваться целым объектом
//     this.color = options.color;
//     this.transmisson = options.transmisson;
// };

// Car.prototype.ride = function () {
//     console.log(this.brand + ' ' + this.model + ' поехала!');
// }; //


// // на основе класса создадим объекты
// let car1 = new Car('Mazda', '3', {
//     color: 'blue'
// });
// let car2 = new Car('BMW', 'X3', {
//     ABS: true
// }); // ABS -- undef

// console.log(car1);
// console.log(car2);
// car1.ride();
// car2.ride();
// // проверим является ли Car прототипом для car1
// console.log(Car.prototype.isPrototypeOf(car1));

// // оператор instanceof 
// console.log(car2 instanceof Car);



//////////////////////////////////////////////////////////////////////
//////////////////урок 15//////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Особенности современного стандарта ES6 
// Интерполяция. Стрелочные функции

// // переменные заключенные в {}видны только в этой области
// // const нельзя преопределить (константа)
// // но в нутри const [1, 2, 3]переопредилять и заменять можно
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);
// // так же косается и объектов перезаписать нельзя но изменить свойстрва можно
// const agent = {
//     firstName: 'Jon',
//     lastNamne: 'Weck',
//     age: 46
// };

// agent.artist = 'Keanu Reeves';
// agent.firstName = 'Johnny';
// console.log(agent);

// // получение переменных со  страници нужно объявлять через const 
// // так же функции объекты и массивы


// // Шаблонные строки ``
// // const str = "Двойные кавычки";
// // const str1 = 'Одинарные кавычки';

// const newStr = `Обратные 
// кавычки`;
// console.log(newStr);

// // ${} в место плюса
// const name = 'Alex',
//     age = 30;

// // const fulName = `${name} ${age}`;
// const fulName = `${name} ${age + 1}`;
// console.log(fulName);

// // параметры по умолчанию

// const createHome = function (wall = 3, doors = 1, window = 5) {
//     console.log(`Дом имеет:
// стен: ${wall},
// дверей: ${doors},
// окон: ${window}`)
// };

// createHome();
// // createHome(4, 6, 10);


// /////////////
// // Стрелочные функции

// // const sum = (a, b) => {
// //     return a + b;
// // };

// // console.log(sum(2, 10));

// // если функция должна вернуть разовое значение то можно и так:
// const sum = (a, b) => a + b;
// console.log(sum(10, 10));

// // если передаем один параметр то можно и так
// const sum2 = a => a + 3;
// console.log(sum2(10));

// // если хотим передать объект через стрелочную функцию то ее надо заключить в ()
// const sum3 = (a, b) => ({
//     a: a,
//     b: b,
//     sum: a + b
// });
// console.log(sum3(10, 20));


// // можно использовать в обработчике событий
// // const btn = document.querySelector('button');
// // btn.addEventListener('cmick', () => {
// //     console.log('hello');
// // });

// // btn.addEventListener('cmick', (e) => {
// //     console.log(e.target); // будем получать по клику кнопку(цель)
// // });

// // много кнопак перебор
// // const btn = document.querySelectorAll('button');
// // btn.addEventListener('cmick', (e) => {
// //     btn.forEach((e) => {
// //         console.log(e); //получим все кнопки
// //     });
// // });

// // 25.52 this там где не прошло но getExpenses не переводить!

// // так как у стрелочной функции нет this то this будет та функция в которой объявленна стрелочная


// // следует использовать стрелки везде где нет контекста вызова!!!
// //////////////////////////////////////////////////////////////////////
// // тут не прокатит
// const Human = function (firstName, lastNamne, age) {
//     this.firstName = firstName;
//     this.lastNamne = lastNamne;
//     this.age = age;
// };

// const newHuman = new Human('John', 'Wick', 46);
// console.log(newHuman);



// //////////////////////////////////////////////////////////
// // defineProperty, Геттеры, Сеттеры

// // раньше было так 
// const mazda = {
//     model: 3,
//     year: 2006
// };

// mazda.color = 'blue';
// // mazda['color'] = 'blue'; //так тож можно
// // console.log(mazda);

// // defineProperty -- объявляет свойства объекта и настраивает поведенчиские свойства
// Object.defineProperty(mazda, 'color', {
//     //свойство
//     value: 'blue',
//     //атрибуты
//     writable: true, //разрешает или запрещает присвяевать свойства
//     configurable: true, //разрешвет запрещает удаление свойств
//     enumerable: true // разрешвет запрещает видеть свойство во время перебора цикла
// });
// console.log(mazda);

// // можно приметить к отдельному свойству
// Object.defineProperty(mazda, 'year', {

//     writable: false,
//     configurable: true,
//     enumerable: false
// });
// console.log(mazda);


// // геттеры и сеттеры
// // const car = {
// //     brand: 'mazda',
// //     model: 3,
// //     year: 2006
// // };
// // car.color = 'blue';

// // Object.defineProperty(car, 'fullTitle', {
// //     //геттер(отдает значение) --  самовызывающийся метод оно же свойство
// //     get: function () {
// //         return this.brand + ' ' + this.model;
// //     },
// //     // сеттер(задает значение) -- 
// //     set: function (val) {
// //         this.brand = val;
// //     }
// // });
// // car.fullTitle = 'BMW';
// // console.log(car.fullTitle);

// //Es6 get set

// // const car = {
// //     brand: 'mazda',
// //     model: 3,
// //     year: 2006,
// //     get fullTitle() {
// //         return this.brand + ' ' + this.model;
// //     },

// //     set fullTitle(val) {
// //         this.brand = val;
// //     }
// // };
// // car.fullTitle = 'BMW';
// // console.log(car.fullTitle);


// /////////////////////////////////////////////////
// //////Классы ES6

// // class Car {
// //     constructor() {
// //         this.brand = 'mazda';
// //     }
// // };
// // const car1 = new Car();
// // console.log(car1);

// // можно и так предавать
// class CarWash {
//     constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//         this.brand = brand;
//         this.model = model;
//         this.washed = false;
//         // добавим гетеры сеттеры
//         // this.services = services;
//         // для сокрытия переменной из вне добавим _(инкапсуляция) что бы кто то ни начудил скрыли доступ
//         // а что бы влиять есть гетеры и сетеры
//         // если не добавлять инкапсуляцию то просто перезатрем
//         this._services = services
//     }

//     // статический метод нельзя вызвать из вне объекта(car4.noCarBaseModel())
//     static noCarBaseModel() {
//         return 'none';
//     }

//     // добавим метод (только после конструктора)
//     washReady() {
//         this.washed = true;
//         CarWash.counter++; // количество помытых авто(так добавляем)
//         this.report();
//     }
//     report() {
//         console.log(this.brand, this.model, this.washed);
//     }
//     // добавим гетеры 
//     get services() {
//         console.log(this._services);
//         return this._services.length > 0 ? 'Есть доп услуги' : 'Доп услуг нет';
//         // если есть услуги (длинна строки больше 0 то вывести "" а если нет то вывести "")
//     }

//     //добавим сетеры
//     set services(addServices) {
//         return this._services.push(addServices);
//     }
// };

// // статические методы класса(так же нельзя вызвать из вне car1.counter())
// CarWash.counter = 0; // количество помытых авто(так создаем)

// //////////////////////////////////
// // const car1 = new CarWash('mazda', 3);
// // car1.report();
// // console.log(car1);

// console.log(CarWash.counter); //0
// // car1.washReady();
// console.log(CarWash.counter); //1
// // car1.washReady();
// console.log(CarWash.counter); //2
// const car2 = new CarWash('BMW', 5);
// const car3 = new CarWash('Volvo', 120);
// car2.washReady();
// car3.washReady();
// const car4 = new CarWash('ZAZ');
// car4.washReady();
// console.log(CarWash.counter);


// //добавим мазде новые свойства(гетеры сетеры)
// let car1 = new CarWash('mazda', 3, ['black tires', 'wax']);
// // выводим гетер
// console.log(car1.services);
// console.log(car2.services);
// //добавим сетер
// car1.services = 'Протирка стекол';


// //////////////////////////////////////
// // Наследование: открываем вторую мойку
// // extends -- указывает от кого наследуем

// class PassCar extends CarWash {
//     // принял все свойства первой мойки
//     //////
//     // создадим конструктор у наследуемого класса
//     // super -- ключеове слово
//     constructor(brand, model, services, pass = 5) {
//         super(brand, model, services); // унаследовали именно эти свойства
//         // добавим свои новые
//         this.pass = pass; // пасажир места
//     }
//     // так же можно создавать и изменять методы
//     washReady() {
//         // this.washed = true;
//         // CarWash.counter++;
//         // this.report();
//         super.washReady();
//         this.reportOffice();
//         // что бы не писать все заново можно так

//     }

//     reportOffice() {
//         console.log('На мойке для легковых была помыта машина');
//     }
// };


// const car5 = new PassCar('Жигуль', 'копейка', 'services');
// console.log(car5);
// console.log(car5.services);
// car5.washReady();
// console.log(car1);
// console.log(car5);
// car5.washReady();




//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////урок 16/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// Rest, spread, Деструктуризация

// Rest параметр

// раньше было так
// function test() {
//     console.log(arguments); // получили псевдомассив с преданными параметрами
//     // а если хотели наст массив то надо было писать так
//     const arg = Array.prototype.slice.call(arguments);
//     console.log(arg);
// }
// test('red', 5, 12, 'black', [], true, 9);

// // теперь так 
// function test2(...arr) { //... rest параметр
//     console.log(arr);
// };
// test2('red', 5, 12, 'black', [], true, 9); // если не передать аргументы то получим просто пустой массив


// // если на пример передаем не все параметры то не переданые тоже запишутся в массив

// function test3(a, b, c, ...arr) { // ... rest парметр всегда идет последним
//     console.log(a, b, c);
//     console.log(arr);
// };
// test3('red', 5, 12, 'black', [], true, 9);

// /////////////////
// // spread -- оператор
// // раньше получали прараметры из массива так
// // const arr = ['red', 5, 12];
// // const arr2 = ['black', true];

// // function test5(a, b, c, d, e) {
// //     console.log(a, b, c);
// //     console.log(d, e);

// // }

// // test5(arr[0], arr[1], arr[2], arr2[0], arr2[1]);

// // // сейчас получаем так
// // test5(...arr, ...arr2);

// // При помощи spread можно собрать из нескольких массивов один
// const arr = ['red', 5, 12];
// const arr2 = ['black', true];

// // const arr3 = [...arr, ...arr2];
// // console.log(arr3);

// // так же можно комбенировать с доп параметрами
// const arr3 = [1, ...arr, 55, ...arr2];
// console.log(arr3);

// // так же можно преобразовать ДОМ коллекцию в массив
// // есть 5 картинок
// // const allImg = document.querySelectorAll('img');
// // console.log(allImg); // nodelist
// // const newImg = [...allimg];
// // console.log(newImg); // массив


// //////
// // Деструктиризация объекта
// const car = {
//     brand: 'Mazda',
//     model: 3,
//     color: 'red',
//     options: {
//         abs: true,
//         doors: 4
//     }
// };

// // раньше присваивали свойства в переменную так
// // const brand = car.brand;
// // console.log(brand);

// // сейчас так
// const {
//     brand,
//     color,
//     model
// } = car;

// console.log(brand, model, color);
// const {
//     options: {
//         abs,
//         doors
//     }
// } = car;
// console.log(doors, abs);

// // поместим свойства в переменные
// const {
//     options: {
//         doors: carDoors,
//         abs: carAbs
//     }
// } = car;
// console.log(carDoors, carAbs);

// // если мы не знвем есть ли свойство то можем задать по умолчанию
// const {
//     // turbo,
//     turbo = true
// } = car;
// console.log(turbo);
// // не получится со вложенными свойствами options: { color = 'red'}

// // но есть способ!
// const {
//     sumOptions: {
//         color2 = 'red'
//     } = {}
// } = car;
// console.log(color2);


// // ПРИМЕНЕНИЕ! есть ф-ция кот принимает объект
// // const createCar = (car) => {
// //     console.log(`Запущено производство автомобиля ${car.brand} ${car.model}
// //     цвет кузова: ${car.color}
// //     цвет салона: ${car.colorInt}`);
// // };
// // // передаем объект
// // // нужно передавать Все свойства
// // createCar({
// //     brand: 'Mazda',
// //     model: 3,
// //     color: 'blue',
// //     colorInt: 'black'
// // });

// // можно так же деструкторизировать для того что бы задать праметры по умолчанию
// const createCar = ({
//     brand = 'BMW',
//     model = 'x3',
//     color = 'white',
//     colorInt = 'yellow'
// }) => {
//     console.log(`Запущено производство автомобиля ${brand} ${model}
//     цвет кузова: ${color}
//     цвет салона: ${colorInt}`);
// };
// // передаем объект
// // нужно передавать Все свойства
// createCar({
//     brand: 'Mazda',
//     model: 3,
//     color: 'blue', // если не предать то будут те что по умолч
//     colorInt: 'black'
// });

// //даже если передать пустой объект то все будет оке
// // передадуться праметры по умолч
// createCar({});

// // так же можно использовать рест параметры
// const {
//     ...options
// } = car;
// console.log(options);


// //////
// // Можно так же дистроктуризировать массивы

// // const cars = ['mazda', 'bmw', 'audi', 'mers', 'Zil'];
// const cars = [
//     ['mazda', 'bmw'],
//     ['audi', 'mers'], 'Zil'
// ];

// const [a, b, c] = cars; // если хотим пропустить один из параметров const [a,, b, c] = cars;
// console.log(a);
// console.log(b);
// console.log(c);

// можно получить отдельно каждый элемент массива
// и работают параметры по умолч
// const [
//     [a, b],
//     [c, d], e = 'volvo'
// ] = cars;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// так же работают рест
// const [
//     [a, b],
//     [...c], // мы получаем весь массив с и d но если будут и другие праметры в c то получим и их
//     e = 'volvo'
// ] = cars;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);


// Можно применить одновременно деструктеризацию массива и объекта

// const carModel = {
//     brand: 'volvo',
//     models: {
//         sedan: ['s60', 's90'],
//         cross: ['v60', 'v90']
//     }
// };

// // дестр передаем параметры в переменные
// const {
//     models: {
//         sedan: [s1, s2],
//         cross: [c1, c2]
//     }
// } = carModel;
// console.log(s1, s2, c1, c2); // вывели переменные

// Раньше было так
// получение объекта из переменных
// const car5 = 'bentley';
// const cycle = 'bmx';
// const bike = 'honda';

// const transport = {
//     car: car5,
//     cycle: cycle,
//     bike: bike,
//     ride: function () {
//         console.log('go');
//     }
// };
// transport.ride();
// console.log(transport);


// сейчас так
// const car5 = 'bentley';
// const cycle = 'bmx';
// const bike = 'honda';

// const transport = {
//     car5,
//     cycle,
//     bike,
//     ride() {
//         console.log('gogo');
//     }
// };
// transport.ride();
// console.log(transport);

/////
// новый метод объекта assign() -- при помощи записываем в объект обновленные данные
// const transport = {
//     car5: 'bentley',
//     cycle: 'bmx',
//     bike: 'honda'
// };

// const newTransport = {
//     bike: 'suzuki',
//     quadBike: 'polaris'
// };


// Object.assign(transport, newTransport); //все данные с объекта newTransport запишутся в transport
//существующие перезапишутся а новые добавятся
// что бы не перезаписывать существ а добавить как новые то
// const currentTransport = Object.assign({}, transport, newTransport);
// // можно создать копию
// const currentTransport2 = Object.assign({}, transport);
// console.log(currentTransport2);

/////////////////////////
// объединение объектов ссамыми актуальными данными
// const curTrans = {
//     ...transport,
//     ...newTransport,
//     ...currentTransport2
// };
// console.log(curTrans);

// так же можно задать и новое значение и методы как обычное свойство
// const ship = 'Photinia';
// const carTrans = {
//     ...transport,
//     ...newTransport,
//     ...currentTransport2,
//     ship,
//     ride() {
//         console.log('Hello');
//     }
// };
// console.log(carTrans);
// carTrans.ride();


///////////////////////////////////////
//Коллекции Map и Set
// в которых можно хранить данные кроме как в массивах и объектах

// созд объект
// const obj = {
//     a: 5,
//     b: 10
// };
// console.log(obj);
// объекты содержат ключи только строки(ключ всегда строка)
// у объекта нет свойства ленгс(длинна) можно только так Object.keys(obj).length

////
// map -- решает эти проблеммы
// хранит ключ значение
// ключем может быть любое значение
// порядок по мере добавления

// const map = new Map();

// можно передавать при создании
// const map = new Map(
//     // можно передавать при создании ввиде массива
//     [
//         [2019, 'audi'],
//         ['joker', 1]
//     ]);

// // при помощи set добавим(передадим) свойства в обект
// map.set('car', {
//     brand: 'mazda',
//     model: '3'
// });

// map.set(777, 'три топора');

// map.set(null, 'даже так');

// map.set(NaN, 'Ух ты');

// map.set(undefined, 'неожиданно');

// const obj = {
//     name: 'Vova',
//     age: 38
// };
// map.set(obj, 123);

// const func = () => {
//     console.log('Hello');
// };
// map.set(func, 'ухх')
//     // можно так вызвать один за другим
//     .set(false, true);

// console.log(map);


// // при помощи get получим свойства из обекта
// console.log(map.get(func));

// //при помощи has проверим наличие
// console.log(map.has(123));

// // при помощи size получим кол-во элементов
// console.log(map.size);

// // создадим новую коллекцию
// const collectMap = new Map([
//     ['Hello', 'world'],
//     ['year', 1812]
// ]);
// console.log(collectMap);

// // метод delite -- удаление
// collectMap.delete('year');
// console.log(collectMap);

// //метод clear -- удаляет все элементы
// collectMap.clear();
// console.log(collectMap);

// //from--объеденит объект
// const arr33 = Array.from(map);
// console.log(arr33);

// //forEach 
// map.forEach((value, key) => {
//     console.log(`ключ: ${key} значение: ${value}`);
// });

// //for of
// for (let [key, value] of map) {
//     console.log(`ключ: ${key} значение: ${value}`);
// };

// // Когда стоит использовать map:
// // 1 когда ключи разных типов
// // 2 если ключи генерируются на этапе выполнения когда - то есть они динамические
// // 3 если выполняется много действий с парой ключ - значение
// // 4 если необходимо переберать ключ - значение


// ///////////////
// // Колекция set -- для хранения уникальных значений

// const cars1 = new Set();

// cars1.add('mazda');
// cars1.add('volvo');
// cars1.add('Bmw');
// // если продублировать значения то не добавятся-- хранит только уникальные

// console.log(cars1);

// // геттер сета-- size
// console.log(cars1.size);

// // так же может содержать любые типы данных
// // так же работает метод has
// // так же работает delete
// // так же работает clear
// // так же работает короткий синтакс добавления
// // так же добавляются при создании(объявлении) через массив

// // forEach
// cars1.forEach((elem) => {
//     console.log(elem);
// });

// //деструктур
// const [car2, car3] = cars1;
// console.log(car2);
// console.log(car3);

// // при помощи spred оператора можно привратить в массив
// console.log([...cars1]);

// // можем объединять
// const caars = new Set(['mazda', 'Volvo', 'bmw']);
// const newCaars = new Set(['toyota', 'zil', 'volvo']);

// const allCaars = new Set([...caars, ...newCaars]);
// console.log(allCaars);
// //volvo перезаписалась тк хранит ток уникал знач


// // Когда стоит применять Set:
// // 1 когда часто приходится проверять имеюься значения или нет



// //////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// ////////////Доп урок СПОСОБЫ перебора массива!/////////////////////////
// //////////////////////////////////////////////////////////////////////

// const number = [54, 20, 80, -35, 32, 29, 15];
// // const names = ['vladiMir', 'Mark', 'Logan', 'VicTor', 'maks', 'Kate', 'Alex'];
// let names = ['vladiMir', 'Mark', 'Logan', 'VicTor', 'maks', 'Kate', 'Alex'];
// const mix = ['Glo', 25, true, 'Academy', '15', -2, null];
// const badNam = [45, 20, 74, -35, 'hi', 32, 29, 5];


// // for
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]); //массив микс а в нем элемент i
// };

// // for in 
// for (let index in mix) { // обратились именно к индексу(номер)
//     console.log(index); // выполнит столько интераций сколько элементов в массиве
//     // покажет индекс каждого элемента
//     console.log(mix[index]); // опкажет сами элементы
// }

// // for of 
// for (let elem of mix) {
//     console.log(elem); // элементы 
// };

// // forEach
// mix.forEach((item, index, arr) => { // элемент тндекс и сам массив
//     // console.log(item);
//     // console.log(index);
//     console.table({
//         item,
//         index
//     });
//     // console.log(arr);
// });
// // в стрелочную функцию нельзя передать this
// mix.forEach((item) => console.log(item));



// ////////////
// //исправим слова (нач сзагл)
// for (let i = 0; i < names.length; i++) {
//     names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
//     // каждый элемент = берем 1ю букву элемента и кверх регистр + прибавляем остаток слова с первого индекса и приводим к ниж рег
// };
// console.log(names);

// //тоже ток forEach
// names.forEach(function (item, i, arr) {
//     arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(names);


// //map -- вернет новый массив(может принимать три параметра)
// const correctNames = names.map(function (item) {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(correctNames);
// //так же можно поместить в переменную только надо names задать через let
// names = names.map(function (item) {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(names);
// //та же запись ток стрелкой
// names = names.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(names);


// //выведим только строки из массива
// // задаем пустой массив
// let forWords = [];

// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === 'string' && isNaN(mix[i])) { // isNaN(mix[i]) -- уберет если можно привести к числу '15'
//         forWords.push(mix[i]);
//     }
// }
// console.log(forWords);


// // filter -- добавит все что true
// let filterWords = mix.filter((elem) => {
//     return typeof elem === 'string' && isNaN(elem);
// });
// // let filterWords = mix.filter((elem) => typeof elem === 'string' && isNaN(elem));
// console.log(filterWords);

// // добавим в массив все положительные числа
// let positiveNumbers = number.filter((item) => item > 0);
// console.log(positiveNumbers);


// //проверим есть ли в массиве числа
// // остановится как найдет число
// // созд прем со значением false
// let result = false;
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === 'number') {
//         result = true;
//         break;
//     }
// }
// console.log(result);

// //тоже самое можно сделать методом some(получаем true/false)
// let result2 = number.some(function (item) {
//     return typeof item !== 'number'; // есть ли что то кроме чисел
//     // return item < 0; // есть ли отриц числа
//     // return typeof item === 'number'; // есть ли числа
// });
// console.log(result2);


// // every -- проверяет каждый элемент если все элементы подходят условию вернет true
// // то есть проверяет все ли элементы подходят условию 
// let result3 = number.every(function (item) {
//     return typeof item === 'number';
// });
// console.log(result3);


// //reduce -- работает с лева на право
// // reduceRight -- работает с право на лево


// // цикл как раньше было бы
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     sum += number[i]; // суммма всех элементов
// }
// console.log(sum);

// // новый
// let sum2 = number.reduce(function (accumulator, item) { // accumulator -- содержит в себе первый элемент скоторого нач инрац 
//     console.log(accumulator); //54
//     return accumulator + item; // 54+20..74+80 ...
// }, 0); // ,0 либо другое число -- точка отпрвления для редусе(стоит задавать)
// console.log(sum2);


// //сгрупируем двумерный массив

// const arr1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// const res = arr1.reduce((acc, item) => acc.concat(item), []); // reduce -- переберает
// //concat -- собирает
// console.log(res);



/////////////////////////////////////////////
////практика пререборов




///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////урок 17////////////////////////////
///////////////////////////////////////////

// Скрипты и время выполнения
// setTimeout, setInterval и requestAnimationFrame
// Объект Date

// setTimeout(function(){}, 3000)--первый параметр колбек фция второй время задержки в милисек

// setTimeout(function () { //через сколько времени запустить фцию
//     console.log('dfgafbbrearber');

// }, 3000);

// setInterval(() => {
//     console.log('234567');
// }, 2000);

// let count = 0;
// let idIntterval =
//     console.log( // можем узнать идентификатор интервала(скок раз типа)
//         setInterval(() => { // с каким интервалом запускать
//             count++;
//             console.log('asdfghjk ' + count);
//         }, 2000)
//     );


// остановим

// let count = 0;
// let idInterval = setInterval(function () {
//     count++;
//     console.log('asdfghjk ' + count);
// }, 2000);
// // setInterval(idIntterval);

// setTimeout(function () {
//     clearInterval(idInterval);
// }, 6000);


/////////////////////////////////////////////////
// передача именной функции
// let getMessage = function (name) {
//     console.log('Hello ' + name + '!');
// };
// let idInterval = setInterval(getMessage, 2000, 'Vova');

// let idTimeout = setTimeout(getMessage, 5000, 'Vov4ik');
// clearTimeout();
///////////////надо разобраться!!!!////////////////////


// есть 2 картинки (самолет и парашутист)
// получаем
// let worm = document.querySelector('.worm'),
//     airplane = document.querySelector('.airplane'),
//     // счетчик
//     count = 0;

// фунуция парашутист прыг
// рекурсивный
// let wormDown = function () {
//     count++;
//     worm.style.top = count + 'px'; // парашут
//     airplane.style.left = count * 2 + 'px'; // самолет полетел
//     // setTimeout(wormDown, 10);// так падает в беск
//     if (count < 350) {
//         setTimeout(wormDown, 10); // 350px вниз и стоп
//     }
// };
// setTimeout(wormDown, 10);


// let worm = document.querySelector('.worm'),
//     airplane = document.querySelector('.airplane'),
//     // счетчик
//     count = 0;

// let flyInterval;

// let flyAnimate = function () {
//     flyInterval = requestAnimationFrame(flyAnimate);
//     count++;
//     if (count < 100) {
//         worm.style.top = count + 'px';
//         airplane.style.left = count * 2 + 'px';
//     } else if (count < 200) {
//         airplane.style.left = count * 2 + 'px';
//     } else {
//         cancelAnimationFrame(flyInterval);
//     }
// };
// flyInterval = requestAnimationFrame(flyAnimate);

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// let animate = true;

// function fly() {
//     document.addEventListener('click', function () {

//         let flyAnimate = function () {
//             flyInterval = requestAnimationFrame(flyAnimate);
//             count++;
//             if (count < 100) {
//                 worm.style.top = count + 'px';
//                 airplane.style.left = count * 2 + 'px';
//             } else if (count < 200) {
//                 airplane.style.left = count * 2 + 'px';
//             } else {
//                 cancelAnimationFrame(flyInterval);
//             }
//             return flyInterval;
//         };

//         if (animate) {
//             flyInterval = requestAnimationFrame(flyAnimate);
//             animate = false;
//         } else {
//             animate = true;
//             cancelAnimationFrame(flyInterval);
//         }

//     });
// };
// fly();




//////////////////////////////
// class объект Date
// месяци с нуля
// дни недели с нуля
// let date = new Date(); // показывает текущее время
// let date = new Date('10 march 1987'); // можем передать так
// let date = new Date(1982, 6, 27); // можно и так ток месяци с нуля!
// let date = new Date(1982, 6, 27, 10, 30, 23); // тоже самое ток с часами и мин сек
// console.log(date);

// получаем даты и время
// console.log('year: ' + date.getFullYear());
// console.log('month: ' + date.getMonth());
// console.log('Day of month: ' + date.getDate());
// console.log('Day of week: ' + date.getDay());
// console.log('Hours ' + date.getHours());
// console.log('Minutes ' + date.getMinutes());
// console.log('Seconds ' + date.getSeconds());
// console.log('Milisec ' + date.getMilliseconds());

//по гривичу
// console.log('month: ' + date.getUTCMonth());

// передаем даты и время
// date.setFullYear(2100);
// date.setFullYear(2100, 2, 10);
// date.setMonth(6, 10);
// date.setDate(21);
// console.log(date);

// узнаем какое число будет через 100 дней
// date.setDate(date.getDate() + 100);
// console.log(date);
//что было 100 дней назад
// date.setDate(date.getDate() - 100);
// console.log(date);

// console.log(date.getTime()); //суолько мили сек с нг 1970г 00.00.00

// можно получить в виде строки
// console.log(date.toTimeString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString('ru'));
// console.log(date.toLocaleDateString('ru'));
// console.log(date.toLocaleTimeString('en'));
// console.log(date.toLocaleDateString('en'));

// /////
// console.log(date.toISOString());
// console.log(date.toISOString().substr(0, 10));
// //
// // милисек во время вызова
// console.log(Date.now());
// console.log(Date.parse('27 july 1982'));



/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////урок 18//////////////////////////////
/////////////////////////////////////////////////////

// Параметры документа, окна и работа с ними

// console.log(screen) // выводит парамеиры экрана

// console.dir(document);
// //получим размеры видимости экрана(документа)
// // на это повлиять не можем
// const height = document.documentElement.clientHeight;
// const width = document.documentElement.clientWidth;
// console.dir(height);
// console.dir(width);

// // на это повлиять можем
// const scroll = document.documentElement.scrollTop; // покажет скок от верха

// // присвоим
// const scroll = document.documentElement.scrollTop = 0;
// const scroll = document.documentElement.scrollTop = 500;


//////////////////////////////
// есть блок со скролом и вноем всякое

// const block = document.querySelector('.boxing');
// console.dir(block);

// const height = block.clientHeight;
// const width = block.clientWidth;
// показывет ширину высоту именно видимого без падинг шмадинг
// и плюс скрол
// если box-sizing то учитывает все!

// если нужны все размеры с прокруткой и тд то
// offsetHeight
// offsetWidth
// const width = block.offsetWidth;

// узнать размеры бокса и того что за скролом
// scrollHeidth
// scrollWidth

// повесим на кнопку событие что бы открыть весь бокс
// const boxBtn = document.querySelector('.box-button');
// boxBtn.addEventListener('click', () => {
//     block.style.height = `${block.scrollHeight}px`;
//     block.style.width = `${block.scrollWidht}px`;
// });
// //покажет на скок прокрутили
// console.log(block.scrollTop);
// console.log(block.scrollLeft);
// // можно указавать
// console.log(block.scrollTop = 100);
// console.log(block.scrollLeft = 100);

// boxBtn.addEventListener('click', () => {
//     //каждый раз плюс 10
//     block.scrollTop += 10;
//     block.scrollLeft += 10;
// });

// boxBtn.addEventListener('click', () => {
//     //каждый раз право низ на 10
//     block.scrollBy(10, 10);
//     // на сколько переместится одинажды
//     block.scrollTo(10, 10);
// });


// boxBtn.addEventListener('click', () => {
//     //получим все координаты
//     console.log(block.getBoundingClientRect());
//     // так же можно получить конкретные
//     console.log(block.getBoundingClientRect().top);
//     //можем поместить в переменную
//     const domRect = block.getBoundingClientRect();
//     console.log(domRect.top);
//     console.log(domRect.right);
// });



//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////урок 19//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Делегирование -- навешивание собитыя на родителя вместо каждого эллемента

// let buttons = document.querySelectorAll('.button');
// const content = document.querySelector('.content'),
//     wrapButtons = document.querySelector('.wrapper-button'),
//     addButton = document.querySelector('.add__button');

// const changeText = (element) => {
//     content.textContent = element.textContent;
//     // buttons = document.querySelectorAll('.button');
// };

// // const changeText = (event) => {
// //     content.textContent = event.target.textContent;
// // };

// buttons.forEach((elem) => {
//     elem.addEventListener('click', changeText);
//     // elem.addEventListener('click', () => {
//     //     changeText(elem);
//     // });  
// });

// // for (let i = 0; i < buttons.length; i++) {
// //     buttons[i].addEventListener('click', () => {
// //         changeText(buttons[i]);
// //     });
// // };

// const getButton = () => {
//     const newButton = buttons[0].cloneNode();
//     let textButton = buttons.length + 1;
//     if (textButton < 10) {
//         textButton = `0${textButton}`;
//     }
//     newButton.textContent = textButton;
//     // newButton.addEventListener('click', changeText);
//     wrapButtons.appendChild(newButton);
//     buttons = document.querySelectorAll('.button');

//     newButton.addEventListener('click', () => {
//         changeText(newButton);
//     });


//     // newButton.addEventListener('click', changeText);

// };
// addButton.addEventListener('click', getButton);


////////////////////////////////////////////////////////
// let buttons = document.querySelectorAll('.button');
// const content = document.querySelector('.content'),
//     wrapButtons = document.querySelector('.wrapper-button'),
//     addButton = document.querySelector('.add__button');

// const changeText = (event) => {
//     content.textContent = event.target.textContent;
// };

// // buttons.forEach((elem) => {
// //     elem.addEventListener('click', changeText);
// // });

// const getButton = () => {
//     const newButton = buttons[0].cloneNode();
//     let textButton = buttons.length + 1;
//     if (textButton < 10) {
//         textButton = `0${textButton}`;
//     }
//     newButton.textContent = textButton;
//     // newButton.addEventListener('click', changeText);
//     wrapButtons.appendChild(newButton);
//     buttons = document.querySelectorAll('.button');
// };
// addButton.addEventListener('click', getButton);

// wrapButtons.addEventListener('click', () => {
//     // console.log(event.target);
//     // if (event.target.tagName !== 'BUTTON') {
//     //     return;
//     // }
//     // changeText(event);

//     // if (!event.target.classList.contains('button')) {
//     //     return;
//     // }
//     // changeText(event);

//     // if (!event.target.matches('button')) {
//     //     return;
//     // }
//     // changeText(event);

//     if (!event.target.matches('#super')) { // кнопка 6
//         return;
//     }
//     changeText(event);
// });



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////урок 21///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Работа с атрибутами. Дата Атрибуты

// Регулярные Выражения

// Работа с атрибутами:

// есть заголовок линк и картинка

// мф можем получить любой атрибут
// console.log(header.style);
// console.log(link.style);
// console.log(img.style);

// console.log(header.id);
// console.log(header.title);
// console.log(header.style);

// можем задать
// header.title = 'заголовок'; // появляется в верстке

// свойство атрибьютс
// console.log(link.attributes); // видим все атрибуты:href,style,class
// изменять на прямую мы не можем

// методы для работы с атрибутами
// hes get set remuve

// hasAttribute('alt'); проверяет наличие атрибута возвращает true/false
// getAttribute('alt'); возвращает значение атрибута
// setAttribute('alt', 'новый атрибут'); устанавливает атрибут
// removeAttribute('alt'); удаляет атрибут


// работа с классами
// img.className(); выводит класс
// можем установить класс
// img.className = 'new_class можно установить несколько через пробел';
// img.classList получаем массив с класаами
// classList.contains(''); проверяет есть ли такой класс
// classList.add(''); добавляет
// classList.remove(''); удалаяет
// classList.toggle(''); удаляет если есть добавляет если нет

// Дата атрибуты
// img.dataset получили атрибуты data-img=
// img.dataset.img получили значение по кключу miniglo.jpg
// Headers.dataset.aboutHeader = 'заголовок'; добавился data-about-header 

// скрипт
img.addEventListener('mouseenter', (e) => {
    event.target.src = event.target.dataset.img;
});
// мы получим атрибут дата у аимдж и запишим его в срс


/////////////////
// РЕГУЛЯРКИ


// создадим

const reg = /привет/; //будет искать в строке

// или
const reg2 = new RegExp('привет');

// методы
// console.log(reg.test('всем привет, добро пожаловать'));вернет тру тк нащел слово привет
// console.log(reg.test('всем хай, добро пожаловать'); вернет фолс тк нет привет

// можно и так
console.log(/привет/.test('всем привет, добро пожаловать'));
console.log(/привет/.test('всем хай, добро пожаловать'));

// если хотим проверить строку кот начинается с определенного слова
// то перед ним должны поставить^
console.log(/^привет/.test('всем привет, добро пожаловать'));
console.log(/^привет/.test('привет друзья, добро пожаловать'));

// если хотим проверить на конец то 
console.log(/пожаловать$/.test('привет друзья, добро пожаловать'));

//если хотим проверить что бы начиналась и заканчивалась
console.log(/^привет$/.test('привет друзья, добро пожаловать,привет'));

///////////
const string = `Привет друг, добро пожаловать, прошу проходи`;

const res = string.match(/п/);
console.log(res) // вернет массив с подстрокой где находиться п index19

////////////
// Флаги
// const res = string.match(/п/i); игнор регистра первая буква index0

//  g-- флаг для глобального поиска
const res = string.match(/п/ig); // вернет массив из всех п


///////////////////////////////
// спец символы регулярок

// const string2 = 'спецсимволы: + * . ^ $ ][ {} () ? / \';

const res = string.match(/\+/ig); // получим +
const res = string.match(/./g); // получим всю строку в массив разбитую на каждый символ
// [] -- нужны для объединения что бы задать диапозон
const res = string.match(/[абв]/g); // найдем все буквы абв

const res2 = 'hello my darling eba nah, просто черти что текст';
// найдем все русские буквы
const res3 = string.match(/[А-Яа-я]/g);
const res4 = res2.match(/[a-z]/g);
// i--вернет все без регистра

// найдем цифры
const res5 = 'мой номер 8-999-34-54-890';
const res6 = res5.match(/[0-9]/g);

// получим все символы кроме цифр
const res6 = res5.match(/[^0-9]/g);
// кроме букв
const res6 = res5.match(/[^а-я]/g);

// есть заданные выражения
// цифры
const res6 = res5.match(/\d/g);
// не цыфры
const res6 = res5.match(/\D/g);
// все пробелы и переносы
const res6 = res5.match(/\s/g);
// все без пробелов и переносов
const res6 = res5.match(/\S/g);

// все буквы цифры и ниж подчерк
const res6 = res5.match(/\w/g);
// и все наоборот
const res6 = res5.match(/\W/g);

const string6 = 'номер телефона 09-848-77-32 номер домофона 48485';
const res7 = string6.match(/телефона|домофона/gi);
const res7 = string6.match(/(теле|домо)фона/gi);

// девушка
// дедушка
// const res7 = string6.match(/де[вд]|ушка/gi);


////////////////
// кантификация -- показать кол-во повторений

const res8 = string.match(/номера?/gi); // символ а
// или 
const res8 = string.match(/н(ом?)ера/gi); // символы в скобках

const res8 = string.match(/номера+/gi); // все а одно должно быть
const res8 = string.match(/номера*/gi); // любое кол во а есть или нет
const res8 = string.match(/номера{2}/gi); // два символа а

const res8 = string.match(/о.{3}о/gi); // до трех о
const res8 = string.match(/о.{1,3}о/gi); // от 1 до трех о


// получим только тег

const res87 = 'div class = "best" > Привет мир! < /div>';

const ress = res87.match(/<.*>/g); //получили всю строку
const ress = res87.match(/<.*?>/g); //получили каждый див отдельно

////////
// positive look ahead
// negative look ahead
// вперед смотрящее утверждение 
// назад смторящее

const res = string.match(/номер(?= домофона)/gi); // вернет тот номер кот перед домофоном

const res = string.replace(/номер(?= домофона)/gi, 'пинкод'); // заменит номер на пинкод

const res = string.match(/номер(?! домофона)/gi); //найдет первый номер
const res = string.match(/номер(?! домофона)/gi, 'пинкод'); //заменит превый номер на пинкод

const res = string.search(/номер/gi); // вернет индекс н в строке


//////
// можно найти номер телефона или меил по регулярке

string = 'мой почтовый ящик kaminskijvova59@gmail.com или kamok@bk.ru пишите! номер телефона +972545473335 0546784432 +7(999)123-456-7';

const email = string.match(/\w+@\w.+\.\w{2,4}/g);

const tel = string.match(/+?[789]([-()]*\d){10, 15}/g); // получим все варианты номеров но можно поднастроить
const tel = string.replace(/+?[789]([-()]*\d){10, 15}/g, '***'); // скроим все номера ***

///
const res = string.split(' ') // выделим каждое слово отдельно
// s -- пробелы табы и переносы строк
const res = string.split(/[\s,]+/);


//инпуты
const input = document.querySelector('input'), // input
    output = document.querySelector('.output'); // div

input.addEventListener('input', () => {
    let text = input.value;
    // output.textContent = text; // выводим текст
    output.textContent = text.replace(/a/g, ''); // исключаем букву а
    output.textContent = text.replace(/блядь/g, '***'); // заменим на ***
    output.textContent = text.replace(/\d/g, ''); // сключим цифры
    output.textContent = text.replace(/\D/g, ''); // исключим буквы
    output.textContent = text.replace(/вова/gi, (match) => match.toUpperCase()); // ВОВА
    output.textContent = text.replace(/(\w+)@(\w+\.\w{2,3})/gi, (match, val1, val2) => val2); // выведет все что после @
    input.value = input.value.replace(/\d/g, ''); // только буквы
});