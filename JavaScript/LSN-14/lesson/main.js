// todo localStorage sessionStorage
const obj = {
    id: 'id0123',
    name: 'Stas',
};
localStorage.setItem('user', JSON.stringify(obj));
const user = localStorage.getItem('user');
// console.log(JSON.parse(user));

sessionStorage.setItem('user', JSON.stringify(obj));
const sessionUser = sessionStorage.getItem('user');
// console.log(JSON.parse(sessionUser));

// todo cookies
const expire = new Date();
document.cookie = 'user=bob; expires=' + expire;
// console.log(expire);
// console.log(document.cookie);


// todo 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.onload = function () {
    if (xhr.status === 200) {
        // десериализация
        const todos = JSON.parse(xhr.responseText);
        // сериализация
        const jsonTodos = JSON.stringify(todos);

        localStorage.setItem('todos', jsonTodos);
    } else {
        console.log('Ошибка: ' + xhr.status);
    }
}

// xhr.onerror = function () {
//     console.error('Произошла ошибка!');
// }


const todos = localStorage.getItem('todos');
// console.log(JSON.parse(todos));
if (!todos) xhr.send();

// todo 
const todoList = JSON.parse(todos);
const ulList = document.getElementById('root');

for (let i = 0; i < todoList.length; i++) {
    const liTodo = document.createElement('li');
    liTodo.innerText = todoList[i].title;
    ulList.appendChild(liTodo);
}

const objNewTodo = {
    id: 'sfadsfdsfsdf',
    title: 'new Todo',
}

todoList.push(objNewTodo);


