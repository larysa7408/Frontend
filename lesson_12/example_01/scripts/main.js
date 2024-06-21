// Выделяем (находим) нужный нам элемент
const mainHeaderOfDoc = document.querySelector('.main-header');
console.log(mainHeaderOfDoc);

const textElement = document.querySelector('.text'); // находит только первый
// textElement.textContent = "Test of text";
const textElementAll = document.querySelectorAll('.text'); // находит все, создает NodeList (массив с урезанной функциональностью)
console.log([...textElementAll]); // превращаем в обычный массив спред оператором

console.log(textElementAll.length);


//Изменяем элемент
mainHeaderOfDoc.textContent = "DOM - Document Object Model"; //для одного элемента текстовае содержимоее


// а здесь для списка элементов(нод)
for (let i = 0; i < textElementAll.length; i++) {
    textElementAll[i].textContent = "Работаем в цикле";
}

//добавляем удаляем классы

mainHeaderOfDoc.classList.add('add-font-color');
mainHeaderOfDoc.classList.remove('main-header');

//добавляем элементы
const testLinkElement = document.createElement('a');
//a></a> ссылка
testLinkElement.href = 'http://google.com';
testLinkElement.textContent = 'Ссылка на ГуГл';
textElement.append(testLinkElement);

// удаляем элемент
//mainHeaderOfDoc.remove(); // удляем полностью вместе с тегом
//textElement.innerHTML=''; // или удаляем то что внутри
//textElement.textContent = '';


// Работаем с кннопкой
const buttonElement = document.querySelector('#test-button');
//console.log(buttonElement);

//инпут тоже используем
const inputElement = document.querySelector('#test-input');


const btnClickHandler = () => {
    console.log('Button Click!!!');
    const textFromInput = inputElement.value;
    mainHeaderOfDoc.textContent = `Мы ввели в инпут ${textFromInput}`;
}

buttonElement.addEventListener('click', btnClickHandler);//-будем ждать клика а когда дождемся выполним какуюто функцию

