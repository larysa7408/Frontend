/** Перевернуть массив (аналог reverse). */

const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}
console.log(reversedArray);