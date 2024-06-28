// const fetchResalt = fetch('https://api.github.com/users/facebook')
// fetchResalt
//     .then()
//     .catch()
//     .finally()

fetch('https://api.github.com/users/facebook')
    .then((response) => { return response.json() })
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })
    .finally(() => { console.log('Finally') })
console.log("Hello world!");