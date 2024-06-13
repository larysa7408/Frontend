/**
 * Стрелочная ф-ция, водящая число в квадрате
которая создает ф-цию, возвращает квадрат числа
функция принимает значение числа
Если число не имеет значения - округлите его в меньшую сторону.
функция вернуть эту половину этого числа
 */

const createSquareFunction = () => {
    return (num) => {
        if (typeof num != 'number') {
            num = Math.floor(Number(num));
        } else {
            num = Math.floor(num);
        }
        return (num * num) / 2;
    }
}
const squareNumber = createSquareFunction();

console.log(squareNumber(6));
console.log(squareNumber(44));
console.log(squareNumber(5.9));
console.log(squareNumber(239));