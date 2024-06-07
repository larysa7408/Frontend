console.log("Hello");

let a = "b";
// a = 4;
const b = 4;

a = "c";
//a = 4;
//b = 3;

//var c = "444";

//* Примитивные типы данных в JS :

//! 1. string - строка
let planet = 'Earth'
planet = "Mercury"
planet = `Mars`
console.log(planet)


//! 2. number - число 
let n1 = 9
let n2 = 8.5
console.log (Number.MAX_SAFE_INTEGER) //* Самое большое safe число которое может быть использовано в JS


//! 3. boolean - логическое значение // true / false
//* рекомендуется называть переменную в кот лежит булевое значение через вопросительные слова (is?, has?)
let isDrink = false
let hasMother = true //* таким образом мы понимаем что лу нас в переменной лежит булевое значение

//! 4. symbol - символ - уникальное и неизменяемое значение  //особо с ним работать не будем
let s1 = Symbol('smth')



//! 5. bigInt - большое число// мы с ним не будем работать , расширяет возможности языка , используется если нужно работать с большими числами
let n3 = 9n
console.log (typeof n3) //* typeof способ по которому можно узнать тип в JS


//! 6. undefined - неопределенный тип данных (в переменной может быть пустота!! Пустота 2-х типов:  1 если неопределенно ничего коолбочка в которую ничего не положили или что то не сработало не получилось обращаемся к ключу проектра там тоже ничего нет тогда undefined)
let u1 = undefined
// например если не задали значение переменной
let u2
console.log(typeofu2)


//! 7. null - в ней ничего не лежит,тоже ниче нет это если мы сами точно сказали что там ничего нет
let null1 = null




//! 8. обьекты ,массивы, -  типы данных которые передаются по ссылке

//! NaN - Not a Number ->не число , не отдельный тип данных, а специальное значение 

// результат невыполнимых математических операций
let result = 10 / 'привет'
console.log(result)
console.log(typeof result) // NaN имеет тип NUMBER

let x; //*неопределенный тип данных
console.log(x);

console.log(typeof x); //*возвращает результат тип переменной

x = null;
console.log(x);
console.log(typeof x);

console.log(typeof a);
console.log(typeof b);

//arrays
const arr1 = [1, 2, 3];

let testA = a;
console.log(a);
console.log(testA);

a = "cc"
console.log(a);
console.log(testA);

const arr2= arr1;

arr1.push(4);
console.log(arr1);
console.log(arr2);