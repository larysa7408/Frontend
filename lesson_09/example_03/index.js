//loops(циклы)

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
arr1.length;

for (let i = 0; i < 5; i++) {
    console.log(i);
}
//let i = 0; обьявляем переменную ;i < 5;проверяется условие ; i++ (i=i+1)увеличивается на 1 
//

let i = 0;
while (i < 5) {
    console.log(i);
    i++;

}
// выводим элементы массива в консоль
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
// for (let i = 0; i <= 7; i++) {
//     console.log(arr1[i])
// }

// создать пустой массив , заполнить случайными числами (Math.random)

const arrWithRandoms = [];
for (let i = 0; i < 5; i++) {
    const randNum = Math.random() * 10;
    arrWithRandoms.push(Math.round(randNum));
}
console.log(arrWithRandoms);

//задача про четверть часа
//if
//math
//%
//колво минут узнать чертверть часа
//let minutes = 0-59;

let minutes = 27;
if (minutes >= 0 & minutes < 15) {
    console.log(" 1 Viertel");
} else if (minutes >= 15 & minutes < 30) {
    console.log(" 2 Viertel");
} else if (minutes >= 30 & minutes < 45) {
    console.log(" 3 Viertel");
} else if (minutes >= 45 & minutes <= 60) {
    console.log(" 4 Viertel");
} else {
    console.log("Error");
}

let word = " четверть "
let numberOfQ = Math.ceil(minutes / 15);

console.log(minutes / 15)
Math.ceil(minutes / 15) + "четверть"
console.log(`${numberOfQ}четверть`)

let minutes1 = 27;
let quarter1 = Math.floor(minutes1 / 15) + 1;
// if (quarter1 > 4) {
//     return (
//         console.log("Minutes should be in the rande of 0 to 59."))
// }
console.log((`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`));
console.log("The minute " + minutes1 + " is in the " + quarter1 + " quarter of the hour.");

// `${   } ` это синтаксис шаблонных строк Шаблонные строки делают код более читаемым и удобным для работы с динамическим содержимым.
