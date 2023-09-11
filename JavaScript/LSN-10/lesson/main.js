// const arr = [1, 3, 4, 5];
// console.log(arr);


// Todo объкт window
// console.log(window);

// todo Функция setTimeout setInterval
// console.log('111');
// setTimeout(() => {
//     console.log('Прошло 3 секунды');
// }, 3000);
// console.log('222');

// setInterval(() => {
    // console.log('interval');
// }, 1000);



// console.log(window.document);
// console.log(document);

// todo getElementById querySelector
// const headerElemId = document.getElementById('header-id');
// console.log(headerElemId);

// const header = document.querySelector('.header');
// const header = document.querySelector('#header-id');
// console.log(header);

// todo createElement(elementName): создает элемент html, тег которого передается в качестве параметра. Возвращает созданный элемент
// const newElem = document.createElement('div');
// console.log(newElem);

// todo appendChild(newNode): добавляет новый узел newNode в конец коллекции дочерних узлов
// const header = document.getElementById('header-id');
// header.appendChild(newElem);

// const elem = document.createElement('h2');
// newElem.appendChild(elem);

// todo Для удаления элемента вызывается метод removeChild()
// const main = document.getElementById('main-id');
// const main1 = document.getElementById('main-1');

// main.removeChild(main1);

// todo Для замены элемента применяется метод replaceChild(newNode, oldNode)
// const title = document.createElement('title');
// main.replaceChild(title, main1);

// todo Свойства innerText и innerHTML
const header = document.getElementById('header-id');
// header.innerHTML = 'DOM';
// header.innerText = 'hello';

// todo Методы объекта Element
const id = header.getAttribute('id');
const className = header.getAttribute('class');
// console.log(id, className);

// header.setAttribute('class', 'newClass');
const newClass = `${className} newClass`;
header.setAttribute('class', newClass);

// todo Свойство className
header.className = `${className} className`;


// todo
const input = document.getElementById('text-id');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Введите число');

const form = document.getElementById('form-id');
const label = document.createElement('label');
form.appendChild(label);

label.innerText = 'Label';

