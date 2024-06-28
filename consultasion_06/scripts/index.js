
const ourButton = document.querySelector('#start');
ourButton.addEventListener('click', startNameGit);

function showAvatar(result) {
    const imgElement = document.querySelector('#bild');
    imgElement.src = result.avatar_url;
}

function startNameGit() {
    const inputElement = document.querySelector('#name');
    getUserAvatar(inputElement.value);
}

function getUserAvatar(userName) {
    const fetchResult = fetch("https://api.github.com/users/" + userName);

    fetchResult
        .then((response) => {
            return response.json();
        })
        .then((result) => {

            showAvatar(result);
        })
        .catch((response) => {
            if (response.status !== 200) {
                alert('Произошла ошибка');
            }
        })
}