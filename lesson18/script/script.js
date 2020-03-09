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

    // стоп
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

      // menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', hendlerMenu);
    closeBtn.addEventListener('click', hendlerMenu);

    // for (let i = 0; i < menuItems.length; i++) {
    //   menuItems[i].addEventListener('click', hendlerMenu);
    // }

    menuItems.forEach((elem) => elem.addEventListener('click', hendlerMenu));

  };

  toggleMenu();

  //popUp
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');
    let popupContent = popup.querySelector('.popup-content');
    let count = 0;


    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        // popup.style.display = 'block';

        // popupContent.style.top = 0;
        if (window.innerWidth > 768) {
          let poupDown = () => {
            popup.style.display = 'block';
            count++;
            // popupContent.style.top = (count * 7 + 'px');
            if (count < 10) {
              // setTimeout(poupDown, 10);
              popupContent.style.top = (count * 7 + 'px');
            } else {
              clearInterval(idInterval);
            }
          }
          setTimeout(poupDown, 10);
          let idInterval = setInterval(poupDown, 10);
        } else {
          popup.style.display = 'block';
        }
      })


    });



    popupClose.addEventListener('click', () => {
      // popup.style.display = 'none';
      if (window.innerWidth > 768) {
        let poupCl = () => {
          count--;
          // popupContent.style.top = (count * 10 + 'px');
          // popup.style.top = (count * 10 + 'px');

          if (count < 10) {
            // setTimeout(poupCl, 10);
            popupContent.style.top = (count * 10 + 'px');
            popup.style.top = (count * 10 + 'px');
          } else {
            clearInterval(idInterval);
          }
        }
        setTimeout(poupCl, 10);
        let idInterval = setInterval(poupCl, 10);
      } else {
        popup.style.display = 'none';
      }
    });

  };
  togglePopUp();

});

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// function date() {
//   let day = new Date();
//   const weekDay = new Array(7);
//   weekDay[0] = "Воскресенье";
//   weekDay[1] = "Понедельник";
//   weekDay[2] = "Вторник";
//   weekDay[3] = "Среда";
//   weekDay[4] = "Четверг";
//   weekDay[5] = "Пятница";
//   weekDay[6] = "Суббота";


//   function checkTime(item) {
//     if (item < 10) {
//       item = "0" + item;
//     }
//     return item;
//   }
//   let date = new Date();
//   let consoleTime = (checkTime('Текущее время: ' + date.getHours()) + ":" + checkTime(date.getMinutes()) + ":" + checkTime(date.getSeconds()));

//   function amPm() {
//     if (date > 12) {
//       consoleTime = consoleTime + ' PM';
//     } else {
//       consoleTime = consoleTime + ' AM';
//     }
//   };
//   amPm();

//   // t.setHours(23);

//   function dayNight() {

//     let time = date.getHours();
//     if (time >= 6 && time <= 11) {
//       console.log('Доброе утро');
//     } else if (time > 11 && time < 18) {
//       console.log('Добрый день');
//     } else if (time > 18 && time <= 22) {
//       console.log('Добрый вечер');
//     } else {
//       console.log('Пора спать какая тебе на хрен разница что за день был???');
//     }
//   };
//   dayNight();


//   let month = new Date();
//   const monthNow = new Array(12);
//   monthNow[0] = "Январь";
//   monthNow[1] = "Февраль";
//   monthNow[2] = "Март";
//   monthNow[3] = "Апрель";
//   monthNow[4] = "Май";
//   monthNow[5] = "Июнь";
//   monthNow[6] = "Июль";
//   monthNow[7] = "Август";
//   monthNow[8] = "Сентябрь";
//   monthNow[9] = "Октябрь";
//   monthNow[10] = "Ноябрь";
//   monthNow[11] = "Декабрь";
//   console.log("Текущий месяц: " + monthNow[month.getMonth()]);

//   console.log("Сегодня: " + weekDay[day.getDay()]);
//   console.log(consoleTime);

//   function newYear() {
//     let lastDay = new Date('31 december 2020').getTime(),
//       nowDay = new Date().getTime(),
//       howDays = Math.floor((((((lastDay - nowDay) / 1000) / 60) / 60) / 24));
//     console.log('До Нового Года осталось: ' + howDays + 'дней');

//   }
//   newYear();

// };
// date();