//* Асинхронность pt2

function getName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tom Cruise')
        }, 2000)
    })
}
getName().then(data => console.log(data));

// 
// Async / Await - аналог синтаксиса с цепочкой из •then и .catch
// используется для обработки Promise

//Async - синхронности 
//Await - дожидаемся чего то

// Они работают с ф-циями и становятся ассинхронные ф-ции

// пишите ключевое слово async перед объявлением функции 
// await пишите перед получением асинхронных данных

async function func() {
    const response = await getName() // await ставим перед з-апросом на получение данных Промис и через await будем обрабатывать 
    console.log(response + 'из async / await');

}
//func()

//Пример

function getFiveVer1() {
    return new Promise((resolve) => {
        resolve(5)
    })
}
function getSix() {
    return 6
}

getFiveVer1().then(response => console.log(response))
console.log(getSix());