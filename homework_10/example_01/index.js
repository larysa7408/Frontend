/**
 * Задание 1. Четное/Нечетное
создать ф-цию, определяющую паритет числа 
функция принимает значение числа
Если число не имеет значения - округлите его в меньшую сторону.
функция возвращает текст 'even', если число чётное
функция возвращает значение 'нечетное', если число нечетное
 */

function determineParity(num) {
    if (typeof num !== 'number') {
        num = Math.floor(Number(num));
    } else {
        num = Math.floor(num);
    }
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'нечетное';
    }
}
console.log(determineParity(2));
console.log(determineParity(3));
console.log(determineParity(4));
console.log(determineParity(-53));
console.log(determineParity(6.9));
console.log(determineParity(77));