/**Написать функцию, которая принимает на вход массив чисел и возвращает массив из тех же элементов, но в обратном порядке. */

let numbers = [1, 2, 3, 4, 5]

function getReversedArray(numbers) {
    return numbers.slice().reverse();
}
let reversedArray = getReversedArray(numbers);
console.log(reversedArray);