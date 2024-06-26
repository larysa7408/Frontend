// Promise - обещание
// обещание, что мы получим данные

// * cамое главное как мы обрабатываем полученный Promise

// это обьект кот к нам приходит в результате   синхронной операции 
// мы с ним работать в тот момент когда мы не до конца уверены через сколько к нам придет ответ и придет ответ вообще или нет 
// может быть сценарий того что ответ вообще не придет

// У примиса есть 3 состояния к которому он может прийти обратно 
// 1 ссостояние
// Promise { <pending> } педдинг  ожидание  нажали на кнопку и пошли на сервер за данными пока данные на пришли промис находится в состоянии обьект действия находятся в состоянии ожидания ы этот мометнт можем показать Лодер(индикатор загрузки) 
// мф тоже обрабатываем сценарий пока мне данные еще на пришли  я покажу пользователю  Пожалуйста ждите а дальше может быть либо отказ Руджект либо ФуллФилт когда будет что Промис исполнился и нам пришли данные 

//! По сути в ответ на синхронное действие которое возвращает Промис мы обрабатываем 3 состояния Промиса 1 Ожидание жанных 2 Не успешное Отказ 3 Успещное полусение данных 

function getSix() { // есть фу-ция getSix
    setTimeout(() => { // в ней лежит setTimeout =>стрелочная ф-ция
        return 6 // вернет 6
    }, 3000) // которая через 3 секунды
}
// мы говорим что у нас есть let x=6;
let x = getSix();
console.log(x); //undefined синхронный код сработает раньше асинхронного

// чтобы достать 6  нужно setTimeout достать обернуть его в особый тип обьектоа Промис 

// Задача из setTimeout получить возращаемое значение
function getSeven() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7);// пож можешь мне в случае успеха вернуть 7

        }, 3000)
    })// скажем возвращай пожалуйста new Promise (внутри кот стрелочная ф-ция) и в нее положем setTimeout
    //resolve для обработки успешного сценария 
    //reject он для обработки ошибки 
}
const promise = getSeven();
console.log(promise); // Promise { <pending> } стандартная ситуация мы слелали запрос к нам пришел ответ от сервера что он находится в ожидании

// специальный вид объектов Promise, ответ на результат асинхронного запроса

// ‹Pending> - ожидание
// <Fulfilled> - ycnex (resolved)
// ‹Rejected» - отказ

// Чаще промисы мы не готовим а получаем 
// Когда мы получили промис на нужно его  неким образом обраюотать 

// когда мы получили наш промис чтобы получить доступ к значению мы импользуем метод .then()- он говорит нам данные еще не пришли но я дождусь когда данные поступят и если все будет хорошо то я тебе покажу что у тебя в задании написано => он в себя принимает стрелочную ф-цию 
promise.then(data => {
    console.log('наконец-то наши данные пришли!')
    console.log(data)
});

//Если мы хотим обработать ошибку
// пример Promise с обработчиком ошибки

//Ф-ция кот будет возвращать число и имя пользователя если мы правильное значение передали строкой придет имя пользователя если нет то выдаст ошибку кот будет приходит в соответствующее время 
function getAgeOfUser(username) { // ф-ция будет принимать username
    return new Promise((resolve, reject) => { // будет возвращать Промис - всегда принимает стрелочную ф-цию с параметрами обычно resolve (успешно), reject ( неуспешно)
        if (username === 'John') { // условный оператор if если - username === будет равен 'John' то тогда 
            setTimeout(() => { // через  setTimeout вернум данные
                resolve(`Age of ${username}is 18`) // чтобы вернуть положительные данные с Промиса используем  resolve- передаем то значение которое хотим вывести
            }, 2000) // через 2 секунды
        } else { // может быть негативная ситуация если мы в if не попадаем ткогдла мы передали не те значения
            setTimeout(() => {
                reject(new Error(`Wrong username ${username}! Acces denei`)) // В reject передаем новую ошибку new Error- Не даем пользователю доступ 
            }, 4000) // будет больше setTimeout 4 секунды
        }
    })
}
getAgeOfUser('John')
    .then(data => console.log(data)) // .then реагирует на успех (data параматр и что мы будем делать с этим параметром)
    .catch(error => console.log(error)) // второй способ кода мы можем получить ответ от сервера это .catch он работает таким же образом как then но он реагирует на ошибку (в ошибке тоже содержатся данные) он выдаст нам ответ получему ошибка



// создайте функцию, которая принимает на вход данные // и возвращает строку с определением четное число или нет

// положительный ответ должен придти 5 сек
// ошибка через 3 сек

// если это четное число она нам вернет строку "«num» - четное число!" если это нечетно число"<num> -нечетное число!"
// а если это не число, то вернет ошибку "Ошибка - функция принимает только числа"

function checkIsNumber(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'number') {// проверяем вводим мы число или не число
            setTimeout(() => {
                reject('Ошибка - функция принимает только числа')

            }, 3000)
        } else {
            setTimeout(() => {
                if (input % 2 === 0) {
                    resolve(`${input} -четное число!`)
                } else
                    resolve(`${input} -нечетное число!`)
            }, 5000)
        }
    })
}
checkIsNumber('gg').then(data => console.log(data)).catch(error => console.log(error))


//Задание 1
//Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Аnrі" и возрастом 32), с задержкой 4
//Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

function getStudent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Anri', age: 32 })
        }, 4000)
    })
}
getStudent()
    .then(student => console.log(`name: ${student.name}, age: ${student.age}`));


// Задание 2 (Дополнительно)
// Напишите функцию getDriverLicense, которая принимает в себя два аргумента success и failure.
// Сделайте внутри этой функции проверку: если выпадет какое-то число, которое будет > 0.1, то вызовется Success со строкой"успех!". В иных случаях вызови failure со строкой "упс, неудача
// используйте Math. random()
// Ниже,.под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
// Функция success принимает в себя аргумент, например result, и выводит в консоль текст "успешно завершено с результатом (и указать, каким результатом)".
// Функция failure принимает в себя аргумент,например еггог, и выводит в консоль текст "Завершено с ошибкой (и указать, какой ошибкой)",
// Ниже вызвать функцию getDriverLicense, передав в нее аргументами две другие функции.

function getDriverLicense(success, failure) {
    if (Math.random() > 0.1) {
        success('успех!')
    } else {
        failure('упс неудача')
    }
}
function success(result) {
    console.log(`успешно завершено с результатом ${result}`);
}
function failure(error) {
    console.log(`Завершено с ошибкой ${error}`);
}
getDriverLicense(success,failure);