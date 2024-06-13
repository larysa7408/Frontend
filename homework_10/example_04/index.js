/**
 *   Задание 4. Простые числа в заданном промежутке
Нужно создать две функции.
Первая функция должна принять число и вернуть результат левого типа - это либо простое число, либо нет. Расчет прост: если оно поделится без остатка только на 1 и само на себя.
Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n — первый аргумент функции.
Вторая функция должна использовать первое ограничение для определения простых чисел.
Первая функция не должна быть колбеком, просто рядом или даже внутри второй функции. По вашему выбору.
 */

const isPrime = (num) => {
    // if(typeof num !== 'number'){
    //     console.log("Not a number");
    //     return false;
    // }
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime('f' + 7));
console.log(isPrime(15));

const getPrimesInRange = (n) => {
    const primes = [];
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(getPrimesInRange(50));
console.log(getPrimesInRange(20));




function checkForPrimeNumber(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      console.log('Not a number');
      return false;
    }
  
    num = Math.floor(num);
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(checkForPrimeNumber(NaN));