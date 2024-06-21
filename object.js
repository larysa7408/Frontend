//внутри { } пишутся элементы объекта в формате ключ: значение.
let obj = { 1: 'ПН', 2: 'ВТ', 3: 'СР', 4: 'ЧТ', 5: 'ПТ', 6: 'СБ', 7: 'ВС', } //создадим объект с данными:
//Выведем элемент объекта по его ключу:
console.log(obj);

let obj2 = { 1: 'Янв', 2: 'Фев', 3: 'Мар', 4: 'Апр', 5: 'Май', 6: 'Июн', 7: 'Июл', 8: 'Авг', 9: 'Сен', 10: 'Окт', 11: 'Ноя', 12: 'Дек', };
console.log(obj2);

let user = { name: 1, surname: 2, patronymic: 3 } //Выведите на экран фамилию, имя и отчество через пробел.
console.log(user);

let date = { year: 2024, month: 6, day: 16 }; //Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
console.log(date);

let obj3 = {
    '1a': 1,
    b2: 2,
    'с-с': 3,
    'd 4': 4,
    e5: 5
};//не могут начинаться с цифры и не могут содержать внутри себя дефис, пробел и тому подобные вещи.Если строка нарушает ограничение, то ее нужно брать в кавычки

let obj4 = {
    '1a': 1,
    b2: 2,
    'с-с': 3,
    'd 4': 4,
    e5: 5
};
console.log(obj4['1a']);
console.log(obj4.b2);
console.log(obj4['с-с']);
console.log(obj4['d 4']);
console.log(obj4.e5);

let obj5 = { a: 1, b: 2, c: 3 };//Элементы объектов можно изменять, обращаясь к ним по ключам
obj5['a'] = '!';
obj5.b = '!';
console.log(obj5);

let obj6 = { x: 1, y: 2, z: 3 };//Возведите в квадрат каждый элемент этого объекта.
for (let key in obj6) {
    if (obj6[key] = obj6[key] * obj6[key]) {
    }
}
console.log(obj6);

let obj7 = {};//добавляем новые элементы, записывая их в нужные ключи
obj7.lar = 1;
obj7.cris = 2;
obj7.vick = 3;
console.log(obj7);

let obj8 = { 63: 'l', 23: 'c', 37: 'v' };
console.log(obj8[63]);
console.log(obj8[23]);
console.log(obj8[37]);

let obj9 = { x: 1, y: 2, z: 3 }; //Получите массив ключей объекта:
let keys = Object.keys(obj9);
console.log(keys);

let obj10 = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj10).length);//получим массив ключей объекта и найдем его длину:
console.log('========11======')
let obj11 = { x: 1, y: 2, z: 3 };
let key = 'y';
console.log(obj11[key]);

let obj12 = { x: 1, y: 2, z: 3 };
console.log(obj12["x"]);

let obj13 = { x: 1, y: 2, z: 3 };
let key2 = 'x';
console.log(obj13[key2]);

let obj14 = { x: 1, y: 2, z: 3 };
let prop = 'x';
console.log(obj[prop]);

// let key3 = 'x';
// let obj15 = {
//     [key3]: 1,
//     y: 2,
//     z: 3
// };

// let obj16 = {
//     [key4 + '1']: 1,
//     [key5 + '2']: 2,
//     [key6 + '3']: 3
// };
// let key4 = 'x';
// let key5 = 'y';
// let key6 = 'z';

let obj17 = { x: 1, y: 2, z: 3 };
console.log('x' in obj17);  
console.log('w' in obj17);

let obj18 = {x: 1, y: 2, z: 3};
delete obj.x;
console.log('x' in obj18);

console.log( typeof {x: 1, y: 2, z: 3} );

let obj19 = {x: 1, y: 2, z: 3};
console.log( typeof obj19 );

let obj20 = {x: 1, y: 2, z: 3};
console.log( typeof obj20['x'] );

let arr = [1, 2, 3];
console.log( typeof arr );

let arr1 = [1, 2, 3];
console.log( typeof arr1[0] );

let arr2 = ['1', '2', '3'];
console.log( typeof arr2[0] );

console.log( Array.isArray([1, 2, 3]) );

console.log( Array.isArray({x: 1, y: 2, z: 3}) );

let test = {x: 1, y: 2, z: 3};
console.log(typeof test);

let test2 = {x: 1, y: 2, z: 3};
console.log(typeof test2.x);

let test3 = [1, 2, 3];
console.log(typeof test3);

let test4 = [1, 2, 3];
console.log(typeof test4[1]);

let arr22 = [1, 2, 3];
let arr23 = arr22;
arr22[0] = 'a';
console.log(arr23);

let rr1 = [1, 2, 3];
let rr2 = arr1;
rr1[0] = 'a';
rr2[1] = 'b';
console.log(rr2);

const ar = ['a', 'b', 'c'];
ar[1] = '!';
console.log(ar);

let obj21 = {x: 1, y: 2, z: 3};
let red='x'
console.log(obj[red]);

let ob = {x: 1, y: 2, z: 3};
let ke = 'x';

console.log(obj.ke);

let ob1 = {x: 1, y: 2, z: 3};
let ke1 = 'x';

console.log(ob1.ke1);

