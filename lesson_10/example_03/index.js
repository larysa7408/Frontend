//! FUNCTIONS - функции
// Функции отличаются от процедур наличием возвращенного значения
// Функция без return возвращает undefined

//* Oбъявление функции через function declaration
//функции объявленные этим способом поднимаются (hoisting) и могут быть использованы до инициализации
function helloWorld(x) {
    console.log('hello', x);
    return 'hello ' + x + '! from function'
}
let returnFromHello = helloWorld('world');

// вызов функции - call
helloWorld('Javascript');

console.log(returnFromHello);

function sum(a, b) {
    return a + b
}
console.log(sum(22, 18))

//* 2 Function expression

const subtraction = function (a, b) {
    return a - b
}
console.log(subtraction(100, 1));

// функции могут принимать себя другие функции в качестве аргументов 
// здесь три параметра: два числа и функция для них 
// в возвращенном значении мы вызываем функцию-аргумент
function calculate(a, b, operation) {
    return operation(a.b)
}
let calcSubtraction = calculate(33, 3, subtraction)
console.log(calcSubtraction);


const helloEng = function (firstName, lastName) {
    console.log('Good day, ' + firstName + ' ' + lastName)
}
console.log(helloEng('Luke', 'Skywalker'));


// создайте функцию helloTurkish (используйте function expression)
// в ней два параметра- firstName,lastName
// пусть она выведет в консоль фразу "Merhaba,
// например HelloTurkish( 'Bilbo',' Baggins) //‹firstName><lastName>"'Merhaba, Bilbo Baggins"

const helloTurkish = function (firstName, lastName) {
    console.log('Merhaba ' + firstName + '' + lastName)
}
helloTurkish('Luke', 'Skywalker');

// создайте универсальную функцию universalHello(firstName,lastName, greetingFunction);
// universalHello('Jack','Shepard', HelloEng) 1/'Good day, Jack Shepard"

const universalHello = function (firstName, lastName,
    greetingFunction) {
    greetingFunction(firstName, lastName)

}
universalHello('Harry', 'Potter', helloEng);

//* Стрелочные функции
// arrow functions
//стрелочная функция без фигурных скобок - возвращает значение после '→' и не требует return
const multiplay = (a, b) => (a * b)
let multiplayV