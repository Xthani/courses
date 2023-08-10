// console.log('Первое сообщение на JS');
// alert('Уведомление в окне');

// confirm('Принять условия?');
// prompt('Введите ваше имя');

// var message = 'Принять условия?';
// confirm(message);

let firstName = 'Stas';
const age = 99;
// console.log(firstName, age);

firstName = 'Benazir';
// age = 3; нельзя переопределить константу
// console.log(firstName, age);

// let name = prompt('Введите ваше имя');
// console.log(name);

// let isActive = confirm('Авторизоваться?');
// console.log(isActive);


// TODO типы данных
let string = 'Строка в ковычках';
let number = 123235145; // Только числа и без ковычек
let str = '1243546'; // Это будет строковый тип данных
let boolean1 = true; // булевый тип данных
let boolean2 = false;

let und = undefined; // Когда переменной ничего не присвоено
// let pppp;
// console.log(pppp);

let n = null; // Это значение будет null - тоесть пустое

let obj = {
    name: 'Имя',
    age: 22,
    child: {},
}; // Хрванит ключи и значения любых типов

let array = [1, 'str', {}, obj, true]; // Список значений


// TODO операторы вычисления
let sum = 2 + 2; // сложение
// console.log(sum);
let difference = 5 - 3; // вычитание
let product = 4 * 6; // умножение
let quotient = 10 / 2; // деление

let remainder = 15 % 4; // возвращает остаток от деления
// console.log(remainder);

let increment = 7;
// console.log(increment);
increment++; // Инкремент - прибавление +1
// console.log(increment); 

let decrement = 6;
// console.log(decrement);
decrement--;
decrement--;
// console.log(decrement); // Декремент - отнимает -1

let num = 10;
// console.log(num);
// num = num + 5;
// num = num - 5;
// num = num * 5;
// num = num / 5;

num += 5;
num -= 5;
num *= 5;
num /= 5;
// console.log(num);

// TODO 
let textNum = '123';
let numNum = 3;
let sumText = textNum + numNum;
// console.log(sumText);
let obj1 = {}
// console.log(typeof textNum, typeof numNum, typeof obj1);

let fName = 'Name';
let lName = 'Last';
let fullName = fName + lName;
// console.log(fullName);

let login = undefined;
let isAutorization = !!login;
console.log(isAutorization);





