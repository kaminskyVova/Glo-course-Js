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

  // задание добавление точек для слайдера
  const addNewDots = () => {
    let slide = document.querySelectorAll('.portfolio-item'),
      dots = document.querySelector('.portfolio-dots');

    let newDots = [];
    for (let i = 0; i < slide.length; i++) {
      newDots[i] = document.createElement('li');
      newDots[i].classList.add('dot');
      dots.appendChild(newDots[i]);
      newDots[0].classList.add('dot-active');
    }

  };
  addNewDots();


  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content');


    let currentSlide = 0;

    let interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    // авто перемотка слайдера
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
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
      event.preventDefault();

      let target = event.target;

      if (!target.matches('#arrow-right, #arrow-left, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

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


  //Наша команда смена фото при навидении
  const comandBlock = document.getElementById('command'),
    comandImages = comandBlock.querySelectorAll('img.command__photo');

  comandImages.forEach((elem) => {
    elem.addEventListener('mouseenter', (event) => {
      let target = event.target.src;
      event.target.src = event.target.dataset.img;

      elem.addEventListener('mouseleave', (event) => {
        event.target.src = target;
      });
    });
  });


  // проверка на число в инпут
  const inputNum = document.querySelectorAll('.calc-item');

  inputNum.forEach((elem) => {
    elem.addEventListener('input', (event) => {
      event = elem.value.replace(/\D/g, '');
    });
  });


  //калькулятор

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');


    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;


      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }


      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }


      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }


      totalValue.textContent = total;

    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      // if (target.matches('.calc-type') || target.matches('.calc-square') ||
      //   target.matches('.calc-day') || target.matches('.calc-count')) {
      //   console.log(1);
      // }

      // if (target === calcType || target === calcSquare ||
      //   target === calcDay || target === calcCount) {
      //   console.log(1);
      // }

      if (target.matches('select') || target.matches('input')) {
        countSum();
      }

    });

  }
  calc(100);



  // отправка формы ajax

  // const inputPhone = document.querySelectorAll('input[name="user_phone"]');
  // inputPhone.forEach((elem) => {
  //   elem.addEventListener('input', (event) => {
  //     elem.value = elem.value.replace(/[^\d\+]/g, '');
  //   });
  // });

  // const inputName = document.querySelectorAll('input[name="user_name"]');
  // inputName.forEach((elem) => {
  //   elem.addEventListener('input', (event) => {
  //     elem.value = elem.valuereplace(/[^а-яё\s]/gi, '');
  //   });
  // });

  const inputPhone = document.querySelectorAll('input[name="user_phone"]');
  console.log(inputPhone);

  inputPhone.forEach((elem) => {
    elem.addEventListener('input', (event) => {
      elem.value = elem.value.replace(/[^\d\+]/g, '');
    });
  });

  const inputName = document.querySelectorAll('input[name="user_name"]');
  console.log(inputName);

  inputName.forEach((elem) => {
    elem.addEventListener('input', (event) => {
      elem.value = elem.value.replace(/[^а-яё\s]/gi, '');
    });
  });


  const inputMessage = document.querySelector('.mess');

  inputMessage.addEventListener('input', (event) => {
    inputMessage.value = inputMessage.value.replace(/[^а-яё\s]/gi, '');
  });


  const formHandler = (event) => {
    event.preventDefault();
    sendForm(event.target, successHandler, errorHandler);

    const inputsForm = event.target.querySelectorAll('input');
    inputsForm.forEach((input) => {
      input.value = '';
    });

  };


  const form1 = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('form3');

  form1.addEventListener('submit', formHandler);
  form2.addEventListener('submit', formHandler);
  form3.addEventListener('submit', formHandler);


  const errorMessage = 'Что то пошло не так...',
    loadMesage = 'Загрузка...',
    successMesage = 'Спасибо! Мы скоро с вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem`;


  function successHandler() {
    statusMessage.textContent = successMesage;
  };

  function errorHandler() {
    statusMessage.textContent = errorMessage;
  }


  const sendForm = (form) => {
    form.appendChild(statusMessage);
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      statusMessage.textContent = loadMesage;

      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        successHandler()
      } else {
        errorHandler()
      }

    });

    request.open('POST', './server.php');
    // request.setRequestHeader('Content-Type', 'multipart/form-data');
    request.setRequestHeader('Content-Type', 'application/json');
    const formData = new FormData(form);
    let body = {};

    // for (let val of formData.entries()){
    //   body[val[0]] = val[1];
    // }

    formData.forEach((val, key) => {
      body[key] = val;
    });

    request.send(JSON.stringify(body));
  };

});