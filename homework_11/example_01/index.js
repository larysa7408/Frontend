/**
 * Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
 */

const array = ['a', 36.6, 'John Doe'];
function arrayToObject(arr) {
    const object = [];
    for (let i = 0; i < arr.length; i++) {
        object[arr[i]] = arr[i];
    }
    return object;
}
console.log(arrayToObject(array))