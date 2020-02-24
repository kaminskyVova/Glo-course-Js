'use strict';

// убираем рекламу
let adv = document.querySelector('.adv');
adv.setAttribute('style', 'display: none');

// меняем засьавку
let body = document.querySelector('body');
body.setAttribute('style', 'background: url(./image/adv.jpg)');


// получаем родителя списков
let books = document.querySelector('.books');
// console.log(books);

// получаем все книги
let booksList = document.querySelectorAll('.book');
// console.log(booksList);

//меняем порядок книг
books.insertBefore(booksList[1], booksList[0]);
books.insertBefore(booksList[4], booksList[2]);
books.insertBefore(booksList[2], null);


//меняем заголовок 3й книги
let book3 = booksList[4].querySelector('a');
// console.log(book3);
book3.innerHTML = 'Книга 3. this и Прототипы Объектов';


// Меняем порядок глав во 2й книге

//получили лишки книги 2
let book_2 = booksList[0].querySelectorAll("ul"),
    book_2List = booksList[0].querySelectorAll("li");
console.log(book_2[0]);

book_2[0].insertBefore(book_2List[3], book_2List[2]);
book_2[0].insertBefore(book_2List[6], book_2List[2]);
book_2[0].insertBefore(book_2List[8], book_2List[2]);
book_2[0].insertBefore(book_2List[4], book_2List[2]);
book_2[0].insertBefore(book_2List[5], book_2List[2]);
book_2[0].insertBefore(book_2List[2], book_2List[10]);


// Меняем порядок глав во 5й книге
//получили лишки книги 5

let book_5 = booksList[5].querySelectorAll("ul"),
    book_5List = booksList[5].querySelectorAll("li");

book_5[0].insertBefore(book_5List[9], book_5List[2]);
book_5[0].insertBefore(book_5List[3], book_5List[2]);
book_5[0].insertBefore(book_5List[4], book_5List[2]);
book_5[0].insertBefore(book_5List[5], book_5List[8]);



//добавляем главу в 6ю книгу
let book_6 = booksList[2].querySelectorAll('li');
// добавляем новый элемент li
let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
booksList[2].appendChild(newLi);
booksList[2].insertBefore(book_6[9], null);