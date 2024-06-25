
//запуск ожидания кника
const ourButton = document.querySelector('#btn');
ourButton.addEventListener('click', () => { console.log('Button pressed') });

//prompt('всплывающее окошко');

//цикл на 5 секунд
const startTime = new Date(); //фиксирует текущую дату и время

for (let i = 0; i < 5000000000; i++) {

}
const endTime = new Date(); //
console.log(endTime - startTime); // разница времени
// получаем время 
// один поток все по очереди

//функция setTimeout
setTimeout(()=>{console.log('timeout 1000')},4000);
setTimeout(()=>{console.log('timeout 0')},0);

for (let i = 0; i < 7000000000; i++) {

}

console.log('Console after setTimeout');

//wait 5000;




