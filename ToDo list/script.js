'use strict';


//загрузка после загрузки страници
document.addEventListener('DOMContentLoaded', function () {
  // элементы страници
  const form = document.querySelector('.todo-control');
  const todoList = document.getElementById('todo');
  const completedList = document.getElementById('completed');
  const headerInput = document.querySelector('.header-input');


  //создаем объект в кот получаем списки
  let data = {
    todo: [],
    completed: []
  };


  // проверяем наличие данных в локал
  if (localStorage.getItem('localData')) {
    data = JSON.parse(localStorage.getItem('localData'));
  }

  //функция проверяет существующие данные в локале и рендерит их  в объект если они есть
  const renderItemForUpdate = function () {
    // если объект пустой
    if (!data.todo.length && !data.completed.length) {
      return;
    }
    // если объект не пустой то перебераем его
    for (let i = 0; i < data.todo.length; i++) {
      renderItem(data.todo[i]);
    }
    for (let i = 0; i < data.completed.length; i++) {
      renderItem(data.completed[i], true);
    }
  };


  // функция добавления\обновления в localStorage
  const dataUpdateToLocalS = function () {
    localStorage.setItem('localData', JSON.stringify(data)); // JSON такой формат покажет нам наш новый объект
    console.log(localStorage.getItem('localData'));
  };


  //добавляет элемент и записывает в сторедж, добавляет в объект(в туду) и обновляет инпут
  // и запускает рендринг одного элемента
  const addItem = function (text) {
    renderItem(text);
    headerInput.value = '';
    data.todo.push(text);

    //запускаем обновление localStorege
    dataUpdateToLocalS();
  };


  //функции кнопок
  // функция удаляет элемент из его родителя
  const itemRemove = function (elem) {
    // получаем родителя div todo-buttons а в нем li
    const item = elem.parentNode.parentNode;
    // получаем ul 
    const itemParent = item.parentNode;
    // получаем id ула 
    const id = itemParent.id;
    // получаем текст
    const text = item.textContent;

    // пишем условие удаления в выполненые из объекта
    if (id === 'todo') {
      data.todo.splice(data.todo.indexOf(text), 1);
    } else {
      data.completed.splice(data.completed.indexOf(text), 1);
    }

    // удаляем со страницы созданный элемент
    itemParent.removeChild(item);

    dataUpdateToLocalS();

  };


  // функция переноса в список выполнено
  // делаем айтем выполненым(переносим в список выполненых)
  const itemComplete = function (elem) {
    // получаем родителя div todo-buttons а в нем li
    const item = elem.parentNode.parentNode;
    // получаем ul 
    const itemParent = item.parentNode;
    // получаем id ула 
    const id = itemParent.id;
    // получаем текст
    const text = item.textContent;

    // создаем переменную таргет
    let target;

    // пишем условие определяющее цель
    if (id === 'todo') {
      target = completedList;
    } else {
      target = todoList;
    }

    // пишем условие закидываем в выполненые\не выполненые в наш объект
    if (id === 'todo') {
      data.todo.splice(data.todo.indexOf(text), 1); // взяли элемент
      data.completed.push(text); // поместили в выполненые
    } else {
      // тут наоборот
      data.completed.splice(data.completed.indexOf(text), 1);
      data.todo.push(text);
    }

    // рендерим наши элементы(переносим в выполненые)
    itemParent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

    dataUpdateToLocalS();

  };


  //создаем элементы записываем значения и передаем на стр
  // Записывает на основе данных кот  в сторадж
  const renderItem = function (text, completed = false) {
    //создаем элементы
    const item = document.createElement('li');
    const btnBlock = document.createElement('div');
    const btnRemove = document.createElement('button');
    const btnComplete = document.createElement('button');

    //цель куда закинем нужные элементы сразу елси они были уже в локал
    let list;
    if (completed) {
      list = completedList;
    } else {
      list = todoList;
    }


    // Формируем создаем последовательно блок
    //добавляем классы элементам
    item.classList.add('todo-item');
    btnBlock.classList.add('todo-buttons');
    btnRemove.classList.add('todo-remove');
    btnComplete.classList.add('todo-complete');

    // добавляем текст
    item.textContent = text;

    //вкладываем кнопки в блок
    btnBlock.appendChild(btnRemove);
    btnBlock.appendChild(btnComplete);

    //вставляем блок в item
    item.appendChild(btnBlock);

    //вешаем события на кнопки
    btnRemove.addEventListener('click', function (event) {
      itemRemove(event.target);
    });

    btnComplete.addEventListener('click', function (event) {
      itemComplete(event.target);
    });


    //помещаем собранный блок первым на страницу
    list.insertBefore(item, list.childNodes[0]);
  };


  //обработчик события
  form.addEventListener('submit', function (even) {
    //отмена перезагрузки страницы
    event.preventDefault();

    if (headerInput.value !== '') {
      addItem(headerInput.value);
    }
  });

  // вызов функции которая при наличии данных отрендерит их
  renderItemForUpdate();

});