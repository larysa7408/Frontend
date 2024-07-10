/**
 * https://jsonplaceholder.typicode.com/todos
с помощью fetch взять список дел по ссылке выше, обрезать (slice) до 10-15, потом с помощью map привести элементы к нужному нам виду, и использовать этот массив для вывода в нашем проекте ту ду листа.
 */

const fetchResult = fetch('https://jsonplaceholder.typicode.com/posts');

fetchResult
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        showTodos(result)
    });

function showTodos(todos) {
    const todoList = todos.map(elem => {
        const item = document.createElement('li');
        item.textContent = elem.title;
        return item;
    });

    document.querySelector('ol').append(...todoList.slice(0, 10));
}