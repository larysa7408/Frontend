/**
 * Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. Вывести в консоль.
 */

const arr1 = [];
for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 100) + 1;
    arr1.push(randNum);
}
console.log(arr1);
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));