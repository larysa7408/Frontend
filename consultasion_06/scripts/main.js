// const fetchResult = fetch('https://api.github.com/users/acabook');
// fetchResult
// .then((response) => {
//     return response.json();
// })
// .then((result) => {
//     const imgElement = document.querySelector('#bild');
//     imgElement.src = result.avatar_url;
//     console.log(result.status);
// })
// .catch((response) => {
//     if(response.status !== 200) {
//         alert('Произошла ошибка');
//     }
// })

const ourButton = document.querySelector('#start');
ourButton.addEventListener('click', startNameGit);
function startNameGit() {
    const inputElement = document.querySelector('#name');
    const fetchResult = fetch("https://api.github.com/users/" + inputElement.value);

    fetchResult
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            const imgElement = document.querySelector('#bild');
            imgElement.src = result.avatar_url;
            console.log(result.status);
        })
        .catch((response) => {
            if (response.status !== 200) {
                alert('Произошла ошибка');
            }
        })
}