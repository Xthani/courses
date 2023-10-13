const url = 'http://localhost:3000/todos';

// todo DELETE
async function deleteTodo(id) {
    try {
        await fetch(`${url}/${id}`, { method: 'DELETE' });
        getTodos();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

// todo PATCH
async function todoUpdate(todo) {
    try {
        await fetch(`${url}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        getTodos();
    } catch (error) {
        console.error('Error partially updating data:', error);
    }
}

function displayTodoList(data = []) {
    const todoList = document.getElementById('todo-list');
    // todo нужно для очистки старых html
    todoList.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const todo = document.createElement('li');

        const text = document.createElement('p');
        text.innerText = data[i].value;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'DELETE';
        deleteBtn.addEventListener('click', () => {
            deleteTodo(data[i].id);
        });

        const editBtn = document.createElement('button');
        editBtn.innerText = 'EDIT';
        editBtn.addEventListener('click', () => {
            const newValue = prompt('Enter new text', data[i].value);
            todoUpdate({
                ...data[i],
                value: newValue,
            });
        });

        todo.appendChild(text);
        todo.appendChild(deleteBtn);
        todo.appendChild(editBtn);

        todoList.appendChild(todo);
    }
}

// todo GET
async function getTodos() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayTodoList(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getTodos();

// todo POST
async function addTodo(todo) {
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        getTodos();
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    if (inputTask.value.trim()) {
        addTodo({
            value: inputTask.value,
        });
        inputTask.value = '';
    }
});



