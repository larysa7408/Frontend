/**
 * Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.
 */
const arr4 = [];

for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 50) + 1;
    arr4.push(randNum);
}
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log(arr4);
console.log(sum)
