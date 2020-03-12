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
      }
      if (target.classList.contains('close-btn')) {
        menu.classList.remove('active-menu');
      }
    });

  };
  toggleMenu();


  //popUp
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = popup.querySelector('.popup-content'),
      popupClose = document.querySelector('.popup-close');


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
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
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

});