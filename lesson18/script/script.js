"use strict";
document.addEventListener('DOMContentLoaded', () => {

  let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

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
  setInterval(countTimer, 1000, '12 march 2020');


  //меню с урока
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const hendlerMenu = () => {
      if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        menu.style.transform = `translate(0)`;
      } else {
        menu.style.transform = `translate(-100%)`;
      }
    };

    btnMenu.addEventListener('click', hendlerMenu);
    closeBtn.addEventListener('click', hendlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', hendlerMenu));
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
});