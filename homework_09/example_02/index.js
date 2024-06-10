/**
 * Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.
 */

const fruits = ['apple', 'plum', 'peach', 'strawberry', 'banana', 'lemon', 'orange', 'grape', 'pineapple', 'mango'];
console.log(fruits);
console.log(fruits.length);
const firstFruit = fruits.shift();
const newLenght = fruits.push(firstFruit);
console.log(fruits);
console.log(newLenght);