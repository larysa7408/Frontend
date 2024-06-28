//ассихронный код vs синхронный

//синхронный код читается первым и поочередо только потом ассинхронный по заданному времени
console.log('hello!');

// асинхронный код всегда сработает позже синхронного
//Когда сознательно хотим чтобы код работал с какой нибудь задержкой
//функция setTimeout() кот принимает другую функцию и говорит о том пожалуйста сделай это через определенное количество аремени
setTimeout(() => {
    console.log('Hello after 5 sec')
}, 3000);

console.log('hello2');

// * 1
// setTimeout()
// - принимает в себя стрелочную функцию и время через которое должно произойти действие в миллисекундах.

setTimeout(() => {
    console.log('Mango');
}, 2000)

