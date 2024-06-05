console.log("Hello");

let a = "b";
// a = 4;
const b = 4;

a = "c";
//a = 4;
//b = 3;

//var c = "444";

//типы данных в JS 
// 1. string
// 2. number
// 3. boolean
// 4. symbol
// 5. bigInt
// 6. undefined
// 7. null
// 8. обьекты ,массивы, -  типы данных которые передаются по ссылке

let x; //неопределенный тип данных
console.log(x);

console.log(typeof x); //возвращает результат тип переменной

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