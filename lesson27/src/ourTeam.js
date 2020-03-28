 //7
 //Наша команда смена фото при навидении
 const ourTeam = (function () {

   const comandBlock = document.getElementById('command'),
     comandImages = comandBlock.querySelectorAll('img.command__photo');

   const chengEmages = (function () {
     comandImages.forEach((elem) => {
       elem.addEventListener('mouseenter', (event) => {
         let target = event.target.src;
         event.target.src = event.target.dataset.img;

         elem.addEventListener('mouseleave', (event) => {
           event.target.src = target;
         });
       });
     });
   }());

   return chengEmages;

 }());

 module.exports = ourTeam;