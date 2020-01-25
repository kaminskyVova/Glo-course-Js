// Первый урок

// Типы данных

let myVar;

myVar = 10;
myVar = 'Hello world';
myVar = true;
myVar = null;
myVar = undefined;
myVar = Symbol();

myVar = {};


console.log(typeof myVar); // показывает тип объекта

myVar = [];
let regExp = /w+/g;
let func = function () {};
let error = Error('error message');
let date = new Date();

let arr = [1, 2, 3];
console.log(arr[5]); // обращение к несуществующему объекту -- undefined;   

// преобразуем в булиновое значение

console.log(Boolean(5));
console.log(Boolean('Hello'));
// любое значение будет 'true'; исключения: 0/undefinded/null/NaN/'';

// логические операторы || && ! или и не
console.log(!true); // false

// числа 
console.log(50);
console.log(8.5);
console.log(0.5); // console.log(.5);
console.log(Infinity); // console.log(-Infinity);//Выход за допустимый диапозон// может быть и отрецательным 
console.log(NaN);

// мат знаки 
// + - * / %  % -- приводит к остатку(четное не четное 4 % 2 = 0 -- четное без остатка(выводит в консоль остаток))
// Варианты записи n = n + 2; n += 2; и тд;

// операторы сравнения > < >= <= === !== == =;
// метод извлечения корня conso;e.log(Math.sqrt(25)); -- 5;
// метод возвидения в степень console.log(Math.pow(5, 3)); -- 125  первое число возводимое второе степень
// метод возвидения в степень НОВЫЙ ВАРИК ** z = 2 ** 2; -- 4;
// проверка целое число console.log(Number.isIneger(5.5)); -- false; (5) -- true;
// Math.floor Округляет вниз
// Math.ceil Округляет вверх
// Math.round Округляет до ближайшего целого

// Строки '' || "";
// \t применили табуляцию (перед определенным словом в строке) /n перенесли следующее слово за /n на другую строку;
// '' + '' -- конкатинация (склеивание строки) если один из оперантов строка либо оба;

// Методы и свойства строки 
let str = 'Hello my friends!';
console.log(str.length); // длинна строки (кол-во символов);
console.log(str.toUpperCase()); // все символы приведены к верхнему регистру(Большие буквы);
console.log(str.toLowerCase()); //нихний регистр;
console.log(str.charAt()); // возвращает символ указанный в скобочках (начинается строка с номера 0) ели выбран 0 то H а если 1 то e и тд;
// новый способ вывода символа 
// console.log(str.[0, 1, 2, ...]);
console.log(str.substring()); // выведет сроку с определенного индекса до конца строки
console.log(str.substring(2, 10)); // выведет со второго до 15го не включая его
console.log(str.slice()); // работает так же как substring
console.log(str.slice(-n)); // выведет строку с конца от введенного индекса
console.log(str.substr(n, z)); // первый параметр начало второй сколько символов от него хотим вывести
console.log(str.indexOf('friends')); // покажет индекс первой буквы слова (--9 в данном случае) 
console.log(str.indexOf('d')); // получим индекс символа 'd' в строке --14
console.log(str.indexOf('a')); // получим -1 тк такого символа нет
// эти методы не меняют строку а только выводят то что задали

console.log(str.replace('my friends', 'world')); // заменит слово my friends на world
console.log(str.split(' ')); // разделяет строку на масив по разделению в данном случае разделение пробел выведет масив из 3х элементов ['Hello', 'my', 'friends']
// let str = 'apple, kiwi, orange'; // тут разделитель ', '