let todoList = [
    { task: "Купить молоко", done: false },
    { task: "Заплатить за интернет", done: true },
    { task: "Позвонить маме", done: false },
    { task: "Почитать книгу", done: false },
    { task: "Сделать домашнее задание", done: true },
    { task: "Посмотреть фильм", done: false },
    { task: "Помыть посуду", done: true },
    { task: "Погулять с собакой", done: false },
    { task: "Заказать пиццу", done: false },
    { task: "Посетить врача", done: true },
    { task: "Починить компьютер", done: false },
    { task: "Подарить цветы подруге", done: true },
    { task: "Поиграть в видеоигры", done: false },
    { task: "Послать резюме", done: true },
    { task: "Поехать в отпуск", done: false }
];
const funktionprint = (array) => {
    const list = document.querySelector('.list');
    list.innerHTML = ''; //! очистить список
    const lager = array.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.task;
        listItem.classList.add('list-item'); //!
        if (item.done === true) {
            listItem.classList.add('list-item_done');
        }
        return listItem;
    });
    document.querySelector('#lager').append(...lager);//list
}
//funktionprint(todoList);

const allButton = document.getElementById('all');
const allButtonClickHandler = () => {
    funktionprint(todoList)
}
allButton.addEventListener('click', allButtonClickHandler);

const completedButton = document.getElementById('completed');

const completedButtonClick = () => {
    const completedTasks = todoList.filter((task) => task.done == true);
    funktionprint(completedTasks);
}
completedButton.addEventListener('click', completedButtonClick);

const uncompletedButton = document.getElementById('uncompleted');

const uncompletedButtonClick = () => {
    const uncompletedTasks = todoList.filter((task) => task.done == false);
    funktionprint(uncompletedTasks);
}
uncompletedButton.addEventListener('click', uncompletedButtonClick);

const input1 = document.getElementById('input1');
const k1 = document.getElementById('k1');
k1.addEventListener('click', () => {
    const taskText = input1.value.trim();
    todoList.push({ task: taskText, done: false });
    input1.value = '';
    funktionprint(todoList);
});






