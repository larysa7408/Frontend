async function example() {
    //console.log('I am func example');
    return 1;
}
const example02 = async () => {
}
example().then(res => console.log(res));
console.log('main code');
//async асинхронная
const gitHubFetch = async () => {
    const response = await fetch('https://api.github.com/users/facebook');
    const responseForrepos = await fetch('https://api.github.com/users/facebook/repos');

    const bodyData = await response.json();
    const responsofUser = await responseForrepos.json();

    console.log(bodyData);
    console.log(responsofUser);
    console.log(bodyData.avatar_url);

    return bodyData.avatar_url;
}
gitHubFetch().then((data) => console.log(data + ' ========='));
console.log('main code');
