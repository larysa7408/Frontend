//! Math - это глобальный обьект который в JS вшит есть всегла и везде. Он предоставляет нам математические функции 
// const obj = {
//     height:170,
//     width: 100,
//     func: function(){},
// }

const randNum = Math.random() * 10;
console.log(randNum);
//console.log(Math.random()); возвращает рандомное число от 0 до 1, присваеваем переменную const randNum

console.log(Math.ceil(randNum)) // округляет cлучайное число к большему Напиример : 1.2 будет округлено 2

сonsole.log(Math.floor(randNum)); // округляет cлучайное число к меньшему

сonsole.log(Math.round(randNum));//классическое округлкние по законам матем.

console.log(Math.pow(2, 3));// возведение в степень

console.log(Math.max(3, 9, 134, 3, 1)) // ищет максимальное 

console.log(Math.min(3, 9, 134, 3, 1))//минимальное число