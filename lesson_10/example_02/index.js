function sumOfnumbers(a, b) {
    return a + b;
}
console.log(sumOfnumbers(4, 6));

//написать функцию кот возвращает квадрат числа

function squareNumber(c) {
    return c * c;
}
console.log(squareNumber(3));

//
const squareNumber1 = (c) => c * c;
console.log(squareNumber1(5));

const powNumberArrow = (num, powN) => Math.pow(num, powN);
console.log(powNumberArrow(5, 2));

//
const makeOperations = (a, b) => {

    function sumOfnumbers(a, b) {
        return a + b;
    }
    console.log('Сумма наших чисел = ' + sumOfnumbers(a, b))

}
makeOperations(7, 3)

const makeOperations2 = (a, b) => {

    function sumOfnumbers(a, b) {
        return a + b;
    }
    console.log('Сумма наших чисел = ' + sumOfnumbers(a, b))

}
makeOperations(7, 4)

// callback функции
const makeOperationsWithCallBack = (a, b, operation1) => {
    return operation1(a, b);

}
console.log(makeOperationsWithCallBack(5, 3, sumOfnumbers));

// напишем функцию, которая принимает 2 числа, и две колбек функции.
// функция которая возваращает сумму чисел
// функция которая возвращает возведение в степень
// результат выполнения функции:
// Сумма чисел = 
// Число а в степени б =  

// function sumOfNumbers(a, b) {
//     return a + b;
// }

// const powNumberArrow = (num, powN) => Math.pow(num, powN);


const sumNumberArrow1 = (a, b) => a + b;
const makeOperationsWithCallBacks = (a, b, sumCallback, powCallback) => {
    const sum = sumCallback(a, b);
    const pow = powCallback(a, b);
    console.log(a, b);
    console.log(a, b);
}
makeOperationsWithCallBacks(5, 3, sumOfnumbers, powNumberArrow);

//

const sumOfNumbersArrow = (a, b) => a + b;

const makeOperationsSummeAndSquare = (a, b, sumOfNumbersArrow, powNumberArrow) => {
    console.log(sumOfNumbersArrow(a, b));
    console.log(powNumberArrow(a, b));
}

makeOperationsSummeAndSquare(5, 2, sumOfNumbersArrow, powNumberArrow);

//

// Решение

function sumOfNumbers(a, b) {
    return a + b;
}

const powNumberArrow2 = (num, powN) => Math.pow(num, powN);

const callBackOperation = (a, b, x, y) => {
    console.log(x(a, b));
    console.log(y(a, b));
};

// можно так -
callBackOperation(5, 8, sumOfNumbers, powNumberArrow2);
// а можно так -
callBackOperation(
    5,
    9,
    (l, m) => {
        return l + m;
    },
    (num, powN) => Math.pow(num, powN)
);

// Last task for today
//Функция принимает как аргумент массив и колбек функцию
//возвращает массив такой же длины где каждый элемент это результат вызова
// колбек функции с аналогичным элементом

// [1, 2, 3]
// const call = (a) => a * 4;

// ([1, 2, 3], call)

// [4, 8, 12]


const arr = [2, 3, 5, 10];

const callFunk = a => a * 2;

const callBackArray = (arr, operation) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
}
console.log(callBackArray(arr, callFunk));