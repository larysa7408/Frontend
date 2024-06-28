/**
 * Сделать страничку-таймер обратного отсчета. На страничке должно быть поле для ввода времени в секундах, кнопка "старт" и обратный отсчет должен начаться при нажатии на кнопку. Отсчет должен быть виден на страничке и обновляться каждую секунду. По окончании отсчета должен появиться тест "время вышло", или звуковое оповещение, таймер при этом должен остановиться.
 */

const startButton = document.querySelector('#time-button');
const timerInput = document.querySelector('#time-input');
const timerBlock = document.querySelector('#time-block');
let inter;

startButton.addEventListener('click', timer);

  function timer() {
    clearInterval(inter);
    timerBlock.textContent = timerInput.value;
    let timeval = Number(timerInput.value);
    function interval() {
      timeval--;
      timerBlock.textContent = timeval;
      if (timeval <= 0) {
        clearInterval(inter);
      }
    }
    inter = setInterval(interval, 1000);
  }

// const stopInt = () => {
//     clearInterval(timerId)

// }
// setTimeout(stopInt, 6000)