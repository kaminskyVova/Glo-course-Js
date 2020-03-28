const sendFormAjax = (() => {
  const inputPhone = document.querySelectorAll('input[name="user_phone"]');
  inputPhone.forEach((elem) => {
    elem.addEventListener('input', (event) => {
      elem.value = elem.value.replace(/[^\d\+]/g, '');
    });
  });

  const inputName = document.querySelectorAll('input[name="user_name"]');

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

    let body = {};
    const formData = new FormData(event.target);

    formData.forEach((val, key) => {
      body[key] = val;
    });

    event.target.appendChild(statusMessage);

    statusMessage.textContent = loadMesage;

    const inputsForm = event.target.querySelectorAll('input');
    inputsForm.forEach((input) => {
      input.value = '';
    });

    return fetch('./server.php', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      .then(response => {
        if (response.status !== 200) {
          throw new Error('Status network was not 200');
        } else if (response.status == 200) {
          successHandler();
        }
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 3000)
      })

      .catch(error => {

        errorHandler();
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 7000)
      })
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
  statusMessage.style.cssText = `font-size: 2rem;
                               color: white;`;

  function successHandler() {
    statusMessage.textContent = successMesage;
  };

  function errorHandler() {
    statusMessage.textContent = errorMessage;
  };

});

export default sendFormAjax;