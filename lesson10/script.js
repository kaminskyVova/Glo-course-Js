'use strict';

// убираем рекламу
let adv = document.querySelector('.adv');
adv.setAttribute('style', 'display: none');

// меняем засьавку
let body = document.querySelector('body');
body.setAttribute('style', 'background: url(./image/adv.jpg)');


// получаем родителя списков
let books = document.querySelector('.books');
console.log(books);

// получаем все книги
let booksList = document.querySelectorAll('.book');
console.log(booksList);

//меняем порядок книг
books.insertBefore(booksList[1], booksList[0]);
books.insertBefore(booksList[4], booksList[2]);
books.insertBefore(booksList[2], null);


//меняем заголовок 3й книги
let book3 = booksList[4].querySelector('a');
console.log(book3);
book3.innerHTML = 'Книга 3. this и Прототипы Объектов';


// Меняем порядок глав во 2й книге
console.log(booksList[0]);

//получили лишки книги
let book_2 = booksList[0].querySelectorAll('li');
console.log(book_2);

// меняем порядок глав 2й книги
booksList[0].insertBefore(book_2[5], null);
console.log(book_2[4]);
// booksList[0].insertBefore(book_2[6], book_2[4]);