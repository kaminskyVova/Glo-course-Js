"use strict";
document.addEventListener('DOMContentLoaded', () => {

  let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds'),
    deadline = '17 march 2020';

  //доб 0
  function zeroBefore(number) {
    number += '';
    if (number.length === 1) {
      return (number = '0' + number);
    } else {
      return number;
    }
  };

  function countTimer(deadline) {
    function timeEnd(timer) {
      if (timer.timeRemaining < 0) {
        return {
          timeRemaining: timer.timeRemaining,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      } else {
        return timer;
      }
    };


    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

      return timeEnd({
        timeRemaining,
        hours,
        minutes,
        seconds
      });
    };


    function updateClock() {
      const timer = getTimeRemaining();
      timerHours.textContent = zeroBefore(timer.hours);
      timerMinutes.textContent = zeroBefore(timer.minutes);
      timerSeconds.textContent = zeroBefore(timer.seconds);
    };
    updateClock();
  };
  countTimer(deadline);
  setInterval(countTimer, 1000, deadline);


  //меню с урока
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      // closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');



    // делегир
    btnMenu.addEventListener('click', () => {
      menu.classList.add('active-menu');
    });

    const body = document.querySelector('body');

    body.addEventListener('click', (even) => {
      let target = even.target;
      // console.log(target)
      if (target.classList.contains('.menu')) {
        menu.classList.add('active-menu');
      } else if (target.classList.contains('close-btn')) {
        menu.classList.remove('active-menu');
      } else if (target.tagName === 'A') {
        menu.classList.remove('active-menu');
        // идиотская запись)))))
      } else if (target.tagName === 'HEADER' || target.tagName === 'MAIN' || target.tagName === 'H1' && 'H2') {
        menu.classList.remove('active-menu');
      }
    });
  };
  toggleMenu();


  //popUp
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = popup.querySelector('.popup-content');
    // popupClose = document.querySelector('.popup-close');


    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {

        let count = 0;
        let openPopup;

        let animate = function () {
          popup.style.display = 'block';
          if (window.innerWidth > 768) {
            openPopup = requestAnimationFrame(animate);
            count++;
            if (count < 15) {
              popupContent.style.top = 0;
              popupContent.style.top = count * 6 + 'px';
            } else {
              cancelAnimationFrame(openPopup);
            }
          }
        };
        openPopup = requestAnimationFrame(animate);
      });
    });

    ////////////////////////////////////////////////////////////////
    let popupClose = document.querySelector('.popup');
    popupClose.addEventListener('click', (event) => {
      let target = event.target;
      // console.log(target);
      if (target.classList.contains('popup') || target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      }
    });
  };
  togglePopup();


  //табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      while (target !== tabHeader) {

        if (target.classList.contains('service-header-tab')) {
          tab.forEach((item, i) => {

            if (item === target) {
              toggleTabContent(i);
            }

          });
          return;
        }
        target = target.parentNode;
      }
    });
  };
  tabs();


  // слайдер

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content');


    // перменная номер первый слайда
    let currentSlide = 0;

    // перем интервал
    let interval;

    // вынесем смены слайдов в отдельные фции
    const prevSlide = (elem, index, strClass) => {
      // slide[currentSlide].classList.remove('portfolio-item-active');
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      // slide[currentSlide].classList.add('portfolio-item-active');
      elem[index].classList.add(strClass);
    };

    // авто перемотка слайдера
    const autoPlaySlide = () => {
      // убераем у первого слайда класс
      // slide[currentSlide].classList.remove('portfolio-item-active');

      //вызываем смены
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      //замена активных точек
      prevSlide(dot, currentSlide, 'dot-active');
      // увеличиваем номер
      currentSlide++;
      // ограничиваем перемотку и возвращаемся к первому
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      //вызываем смены
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      //замена активных точек
      nextSlide(dot, currentSlide, 'dot-active');
      //добавляем следующиму класс
      // slide[currentSlide].classList.add('portfolio-item-active');

    };

    // start auto slide
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    // stop auto slide -- при нажатии на кнопки или стрелки стопорит автослайд
    const stopSlide = () => {
      clearInterval(interval);
    };


    ///переключение по стрелкам и кнопкам
    slider.addEventListener('click', (event) => {
      event.preventDefault(); // откл заданное

      let target = event.target;

      // ограничим по селекторам
      if (!target.matches('#arrow-right, #arrow-left, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      // target.matches() -- если целью было...
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      // возврат с последнего на первый слайд
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });


    //остановка автослайд при навидении на кнопки и точки... и запуск как убрали 
    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });
    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });


    startSlide(2000);

  };

  slider();


  ///////////////////////////////////////////////////////////////
  // задание добавление точек для слайдера
  // const addNewDots = () => {
  //   let slide = document.querySelectorAll('.portfolio-item'),
  //     dots = document.querySelector('.portfolio-dots');
  //   // console.log(slide);

  //   let newDots = [];
  //   // console.log(newDots)
  //   for (let i = 0; i < slide.length; i++) {
  //     newDots[i] = document.createElement('li');
  //     // console.log(newDots[i]);
  //     newDots[i].classList.add('dot');
  //     dots.appendChild(newDots[i]);
  //     newDots[0].classList.add('dot-active');
  //     // console.log(dots);
  //   }

  // };
  // addNewDots();
  /////////////////////////////////////////////////////////

});