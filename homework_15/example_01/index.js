/**
 * Написать функцию, которая принимает на вход массив имен и возвращает массив имен, начинающихся на букву "а" (большую или маленькую).
 */

const names = ['Лариса', 'александр', 'Родион', 'Анна', 'Виталий', 'Мухлис', 'Антон'];
const filteredNames = (array) => {
    return array.filter(name => name[0].toLowerCase() === 'а');
}
console.log(filteredNames(names));


