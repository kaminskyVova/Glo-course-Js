//3
  //меню с урока
  const toggleMenu = (function () {
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

    return toggleMenu;
  }());


  module.exports = toggleMenu;