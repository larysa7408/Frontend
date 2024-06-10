const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
console.log(arr1[2]); //находим по второму индексу
console.log(arr1[6][2]);
console.log(arr1.length);// выводим длину массива

//! МЕТОДЫ ПО МАССИВУ

console.log('======Добавляем=======')
const newLenght = arr1.push(777); //добавляем элемент в конце массива 
console.log(arr1);
console.log(newLenght); // возвращает новую длину масива


console.log('======Удаляем=======')
arr1.pop();//удаляем последний элемент из массива
console.log(arr1.pop());
console.log(arr1);//возвращает то что удалил


console.log('======Вставить элемент в начало=======')
arr1.unshift("первый")
console.log(arr1);


console.log('======Удалить первый элемент из массива=======')
arr1.shift();
console.log(arr1);

//! 4 метода для добавления и удаления элементов в начале и конце массива

// Удаление с начала массива: shift()
// Удаление с конца массива: pop()
// Добавление в начало массива: unshift()
// Добавление в конец массива: push()

console.log('======Методы вставки в середину=======')
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // начиная с индекса 1 - первый аргумент, удалить 0 элементов, и на их место вставить третий аргумент
console.log(months);


console.log('======Перевернуть массив=======')
console.log(months.reverse());
console.log(months.reverse());


console.log('======Удаление по индексу =======')
//(начиная с индекса 1 - первый аргумент удалить 1 элемент - второй аргумент)
months.splice(1, 1);
console.log(months)
//число 1 индекс
//чило 2 это колво сколько нужно удалить
// число 3 что на место вставить


console.log('======Двумерный массив =======')
const doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(doubleArr[0][2]);
console.log(doubleArr[2][1]);


console.log('======Spread - спред/ деструктиризация=======')
const arrC = [1, 2, 3];
const arrY = [4, 5, 6];
const arr3 = [...arrC, ...arrY];
console.log(arr3)
console.log(Math.max(...arr3));

// const a = arrC[0]
// const b = arrC[1]
let a;
let b;
let c;

[a, b, c] = [...arrC];

console.log(b);