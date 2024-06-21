const exampleFunc = (a) => {
    return a / 2;

}

function arrExample2() {

}
const arrExample3 = function (a, exampleFunc) {
    re

}
exampleFunc(4);

// создать функцию  кот принимает масив и колбек функцию для обработки элементов массива
const arrIn = [1, 3, 5, 7];

const power = (y) => {
    y = Math.floor(y);
    return y * y;
}
const changeArray = (arr, callB) => {
    const arr1 = [];
    for (i = 0; i < arr.length; i++) {
        arr1.push(callB(arr[i]));
        //callB(arr[i]);
    }
    return arr1;
}
console.log(changeArray(arrIn, power));
