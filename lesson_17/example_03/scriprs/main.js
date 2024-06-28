const fetchResult = fetch('https://jsonplaceholder.typicode.com/pots');
console.log(fetchResult);
fetchResult
.then((response) => {
    if(response.status === 200) {
        return response.json();
    } else {
        return response.status
    }
})
.then((result) => {
    if(Array.isArray(result))
        {showTodos(result)}
    else {
        console.log(result)
    }
})
.catch((error) => {alert('произошла ошибка' + error)})
function showTodos(todos) {
    const todoList = todos.map(elem => {
        const item = document.createElement('li');
        item.textContent = elem.title;
        return item;
    });
    document.querySelector('ul').append(...todoList);
}