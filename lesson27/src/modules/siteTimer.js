const siteTimer = (function () {
  let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds'),
    deadline = '1 april 2020';

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

});

export default siteTimer;