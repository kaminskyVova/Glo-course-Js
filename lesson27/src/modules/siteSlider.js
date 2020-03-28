const siteSlider = (() => {
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
});

export default siteSlider;