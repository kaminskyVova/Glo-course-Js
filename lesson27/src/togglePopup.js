 //4
  //popUp
  const togglePopup = (function () {
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

    return togglePopup;
  }());

  module.exports = togglePopup;