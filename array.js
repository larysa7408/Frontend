let arr = [0, 8, 0, 7, 1, 9, 9, 2]
console.log(arr);

let arr1 = ['l', 'c', 'v', 't', 'r'];
console.log(arr1);

let arr2 = ['a', 'b', 'c'];
console.log(arr2[0]); // выведет 'a'
console.log(arr2[1]); // выведет 'b'
console.log(arr2[2]); // выведет 'c'

let arr3 = [1, 2, 3];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);

let arr4 = [1, 2, 3]; //Выведите на экран сумму элементов этого массива
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log(sum);

console.log('======arr5 ')
let arr5 = ['a', 'b', 'c', 'd'];
let obj = '';
for (let i = 0; i < arr5.length; i++) {
    obj += arr5[i];
    if (i < arr5.length - 1) {
        obj += '+';
    }
}
console.log(obj);

let arr6 = ['lar', 'cris', 'vic'];
console.log(arr6.length); //Выведите на экран количество элементов в этом массиве.
console.log(arr6[arr6.length - 1]); //Выведите на экран последний элемент этого массива.

let arr7 = ['a', 'b', 'c'];// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
arr7[0] = '1';
arr7[1] = '-2';
arr7[2] = '-3';
console.log(arr7);

let arr8 = [8, 7, 1, 9, 2];//Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
arr8[0] += '3';
arr8[1] += '3';
arr8[2] += '3';
arr8[3] += '3';
arr8[4] += '3';
console.log(arr8);

let arr9 = [1, 2, 3];//Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
arr9[0]++;
arr9[1]++;
arr9[2]++;
console.log(arr9);
arr9[0]--;
arr9[1]--;
arr9[2]--;
console.log(arr9);

let arr10 = [];//Можно вначале объявить этот массив, а затем добавить в него необходимые элементы, вот так:
arr10[0] = 1;
arr10[1] = 2;
arr10[2] = 3;
console.log(arr10);

let arr11 = [1, 2, 3];//обавлять элементы в массив, уже заполненный данными:
arr11[3] = 4;
arr11[4] = 5;
console.log(arr11);

let arr01 = [];//Узнайте длину следующего массива:

arr01[3] = 'a';
arr01[8] = 'b';
console.log(arr01.length);

let arr02 = [];//Заполните массив числами 1, 2 и 3.
arr02.push(1);
arr02.push(2);
arr02.push(3);
console.log(arr02);

let arr03 = [1, 2, 3];//Добавьте ему в конец элементы 4 и 5.
arr03.push(4);
arr03.push(5);
console.log(arr03);

let arr04 = ['a', 'b', 'c']; //Выведите на экран элемент, ключ которого хранится в переменной key.
let key = 2;
console.log(arr04[key]);

let arr05 = [1, 2, 3, 4, 5];//Найдите сумму элементов, ключи которых хранятся в наших переменных.
let key1 = 1;
let key2 = 2;
let sum1 = arr05[key1] + arr05[key2];
console.log(sum1);

let arr06 = ['a', 'b', 'c', 'd', 'e']; //Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
delete arr06[1];
delete arr06[3];
console.log(arr06);
console.log(arr06.length);

let arr07 = [1, 2, 3, 4, 5];//Код должен вывести последний элемент массива:
console.log(arr[arr.length-1]);

let arr08 = [1, 2, 3, 4, 5]; //Код должен найти сумму элементов массива:
let sum2=arr[1] + arr[2] + arr[3] 
+ arr[4] + arr[5];
console.log(sum2); 

let arr09 = [1, 2, 3, 4, 5]; //Код должен вывести длину массива:
console.log(arr09.length);