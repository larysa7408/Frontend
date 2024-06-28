
//запуск ожидания кника
//записывает кнопку в переменную ourButton
const ourButton = document.querySelector('#btn');
ourButton.addEventListener('click', () => { console.log('Button pressed') });

//prompt('всплывающее окошко');

//цикл на 5 секунд
const startTime = new Date(); //фиксирует текущую дату и время
// new Date(); глобальный обьект JS даты и времени
for (let i = 0; i < 5000000000; i++) {

}// запускаем цикл который ничего не делает но запускает его  5000000000 раз по кругу
const endTime = new Date(); //
console.log(endTime - startTime); // фиксируем разницу времени
// получаем время сколько выполнялся этот цикл
// один поток все по очереди

//функция setTimeout ассинхронные операции
setTimeout(()=>{console.log('timeout 1000')},4000); //1 функция кот выводит в консоль timeout 2 через сколько милисек 4000 запускать
setTimeout(()=>{console.log('timeout 0')},0); // в конце очереди

for (let i = 0; i < 7000000000; i++) {

}

console.log('Console after setTimeout');

//wait 5000;




