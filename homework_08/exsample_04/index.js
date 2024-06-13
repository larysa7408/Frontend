/**
 * Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3.
Выведите значение
myNumber в консоль.
 */

const myNumber = 100 / (25 % 3);
console.log(myNumber);//100

/**
 * Создайте переменную myString и присвойте ей значение, которое является результатом конкатенации следующих строк: "Hello,","world", "!", и числа 2024.
Выведите значениеmyString в консоль.
 */

let myString
myString = "Hello," + "world" + "!" + 2024
console.log(myString);

/**
 * Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42.
Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.
 */

let isHuman = 42 == '42';
let isHumanFalse = 42 === '42';
console.log(isHuman);
console.log(isHumanFalse);

/**
 * Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число.Выведите значение myNumber в консоль.
 */

let myNumberInt = parseInt("123smth")
let myNumberNan = Number("123smth")
console.log(myNumberInt);
console.log(myNumberNan);