const callBF = (n) => {
    console.log(`Hello World ${n}`);
    const paragrafElement = document.querySelector('#paragraf');
    paragrafElement.textContent = n;
}

//setInterval(callBF, 1000);// принимает два аргумента кол бек функцию и время
// setTimeout(callbackFunction, 6000);
// const intervalID = setInterval(callBackFunction, 1000);

// const stopInt = () => {
//     clearInterval(intervalID);
// }
// setTimeout(stopInt, 6500);

//clearInterval(intervalID)


//setInterval точное кол вл=о раз
const intervalQ = (num, callback) => {// примет 1 колвл раз 
    let counter = 0;// счетчик чтобы знвли сколько раз запустился
    const callbackModified = () => {
        counter++;
        callback(counter);
        if (counter >= num) {
            clearInterval(intervalID)
        }
    }
    const intervalID = setInterval(callbackModified, 1000);

}
intervalQ(10, callStart);



