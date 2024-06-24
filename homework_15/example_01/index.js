/**
 * Написать функцию, которая принимает на вход массив имен и возвращает массив имен, начинающихся на букву "а" (большую или маленькую).
 */

const names = ['Лариса', 'александр', 'Родион', 'Анна', 'Виталий', 'Мухлис', 'Антон'];
function getCapitalLetters(names) {
    const filteredNames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name[0].toLowerCase() === 'а') {
            filteredNames.push(name);
        }
    }
    return filteredNames;
}
const namesStartingWithA = getCapitalLetters(names);
console.log(namesStartingWithA);
