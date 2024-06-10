/**
 * Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.
 */
const array = [];
for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 75) + 1
    array.push(randNum);
}
console.log(array)
console.log(Math.max(...array));
console.log(Math.min(...array));
console.log(Math.max(...array) + Math.min(...array));
