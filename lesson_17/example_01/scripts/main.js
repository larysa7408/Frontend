//синхронный код
console.log('Script start');
//const result = prompt('Введите Ваш возраст');
//console.log(`Введенный возраст ${result}`);

//асинхронный код
console.log('Script start');
let result;
const inputElement = document.querySelector('#age');
document.querySelector('#ok-btn').addEventListener('click', okHandler);

function okHandler() {
    const result = inputElement.value
    console.log(result);
}
console.log(`Введенный возраст ${result}`);


//promise - если создаем принимает один аргумент функция екзeткюта
const firstPromise = new Promise(
    //     (resolve) => {
    //         setTimeout(
    //             () => {resolve(true)}, 20000
    //         )
    // }
    (resolve) => {
      const inputElement = document.querySelector('#age');
      document.querySelector('#ok-btn').addEventListener('click', okHandlerInPromise);
      function okHandlerInPromise() {
        const result = inputElement.value;
        resolve(result);
      }
    }
  );
  firstPromise.then(promiseFullfilled);
  function promiseFullfilled(a) {
    console.log(a);
  }