console.log("Сравнение чисел:")
const a = 17;
console.log(a); //17

const b = 5;
console.log(b); //5

console.log(a > b);// true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); //true

console.log("Сравнение строк:")
console.log('a' < 'b'); //true
console.log('ab' > 'a'); //true

console.log("Сравнение строки и числа:")
console.log('17' > 1); //true

console.log("Строгое сравнение чисел:")
console.log(17 === 1) //false
console.log(17 === 17); //true 
console.log(17 === '17'); //false
console.log(17 === true); // false
console.log('0' === ''); // false
console.log(true === false); // false
console.log(true === true); //true
console.log(null === undefined); //false
console.log(false === 0); //false

console.log("Не строгое сравнение:")
console.log(17 == '17'); //true
console.log('0' == ''); //false
console.log(0 == ''); //true
console.log(null == undefined);//true
console.log(false == 0); //true

console.log("Сравнение с undefined и null:")
console.log(undefined == null); //true
console.log(undefined == 0); //false
console.log(null == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false