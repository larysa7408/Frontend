//fetch запрос
//с помощью fetch мы посылаем НТТР запросы на получение информации с сервера 
// чтобы дождаться этой информации - нам придется обработать promise

// JSON
// JavaScript Object Notation
// используется для хранения информации в парах: ключ - значение

// API
// application programming interface
// интерфейс для взаимодействия с программой


//Делаем наш первый fetch запрос

// объявили переменные и присвоили ссылку на элементы
const contant = document.querySelector('#contant');
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const img = document.createElement('img')
        img.src = data.message
        img.classList.add('dog-img')
        document.body.appendChild(img)
        console.log(data)
    })//Делаем fetch запрос и через then ответ на заврос к Promise на ссылку 
//чтобы получить первый раз данные они приходят в обьект json нам нужно эти данные превратить в JS для этого мы применяем метод кот называется  .json() в ответ на результат этого метода нам тоже приходит промис потэтому мы делает 2-й раз .then