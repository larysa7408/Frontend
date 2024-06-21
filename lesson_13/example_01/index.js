const arr1 = [2, 3, 4]; // [4,9,16];

const pow2 = (a) => {
    return a ** 2;
}
//console.log(pow2(4));
const arr1Pow = arr1.map(pow2);
console.log(arr1Pow);

const arr1Plu2 = arr1.map((element, index, array) => {
    return element + index;
});
console.log(arr1Plu2);

//const = toBuy = ['молоко', 'пиво', 'вода'] =>  <li>молоко</li>, <li>пиво</li>, <li>вода</li> возвращает элемент списка

const toBuy = ['молоко', 'пиво', 'вода'];
const strToTag = (str) => {
    return (`<li>${str}</li>`);
}
const newArrToBay = toBuy.map(strToTag);
console.log(newArrToBay);

toBuy.forEach(element => {
    console.log(`Надо купить ${element}`);
});

// пример map для двумерного массива
const doubleArr = [[1, 2], [10, 20], [100, 200]];
const call1 = element => {
    element[0] * 2;
    element[1] * 2;
    return [element[0] * 2, element[1] * 2];
}
const call2 = element => element[0]* 2 + element[1]*2
    console.log(doubleArr.map(call2));

