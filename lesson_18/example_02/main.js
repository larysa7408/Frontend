//Написать функцию, которая принимает как аргумент endpoint (адрес куда нужно обращаться fetch), и вовзращает нам обьект промиса - результат работы fetch

const url = 'https://api.github.com/users/facebook'

function promis(url) {
    return fetch(url).then(response => response.json())
}
promis(url).then(data => console.log(data))
