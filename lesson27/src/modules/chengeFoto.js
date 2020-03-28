const chengeFoto = (() => {
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
});

export default chengeFoto;