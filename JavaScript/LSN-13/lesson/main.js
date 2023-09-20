const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask () {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // todo создание тега li
    const taskItem = document.createElement('li');

    // todo добавление элементов
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='editBtn'>edit</button>
        <button class='deleteBtn'>delete</button>
    `;

    // todo добавление событий на кнопки удалить редактировать
    const editBtn = taskItem.querySelector('.editBtn');
    const deleteBtn = taskItem.querySelector('.deleteBtn');
    editBtn.addEventListener('click', () => editTask(taskItem));
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));

    // todo добавление тега li внутрь списка ul
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function editTask (taskItem) {
    const span = taskItem.querySelector('span');
    const taskText = span.textContent;
    const newText = prompt('Edit', taskText);

    if (newText) {
        span.textContent = newText;
    }
}

function deleteTask (taskItem) {
    taskList.removeChild(taskItem);
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

