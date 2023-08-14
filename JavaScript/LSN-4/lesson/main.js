const a = 4;
const b = 2;
const res = a + b;

const c = 5;
const d = 10;
const res2 = c + d;

// for () {}
function hello () {
    console.log('Hello function declaration!');
}
// hello();

const func1 = hello;
// func1();

// todo аргументы функции
function param (num, str, message, list) {
    console.log(num, str, message);
}
// param(123, 'строка', 'Hello!', [1, 2, 3]);

const obj = {
    name: 'Name',
    age: 12,
    data: ['str', 'str', 'str', 'str'],
}
function param2 (obj) {
    console.log(obj);
}
// param2(obj);

// todo дефолт аргументы
function calc1 (a = 1, b = 3) {
    console.log(a + b);
}
// calc1(5, 5);

function calc2(n1, n2) {
    let str = ' Результат';
    let sam = n1 + n2;
    let res = sam + str;
    return res;
}
// (n1, n2) {
    // let str = ' Результат';
    // let sam = n1 + n2;
    // let res = sam + str;
    // return res;
// }
const result1 = calc2;
// return res;
const result = calc2(2, 4);
// console.log(result);

function func2(num) {
    if (num === 10) {
        return 'Число равно 10';
    }

    console.log('<><><><><><>');
    return 'Число не равно 10';
}
// console.log(func2(12));
// console.log(func2(0));
// console.log(func2(10));
// console.log(func2(8));
// console.log(func2(10));

function func3(n, ...args) {
    console.log(n, args);
}
// func3(2, 3, '4');

// todo функция в качестве аргумента
function func4(a, b, f) {
    let res = a + b;
    return f(res);
}

function func5(res) {
    console.log(res);
}

// func4(2, 3, func5);

// todo анонимные функции
// const func6 = function () {
//     console.log('Анонимная функция');
// }
// func6();

// todo стрелочные функции
const stFunc = () => {
    console.log('Стрелочная функция');
}
// stFunc();

const sum = (a, b, f) => {
    let res = a + b;
    let pr = f(res);
    // console.log(pr);
} 
sum(2, 4, (res) => {
    return 'Результат: ' + res;
});

const stFunc1 = arg => console.log(arg);
// stFunc1('Функция без круглых скобок и без return');

// todo разные способы передачи аргументов
function func7 (params) { 
    // console.log(params);
}
func7({
    name: 'Benazir',
    age: 17,
    work: 'Avengers',
});
// todo деструктуризация параметров
// function func7 ({ name, age, work }) { 
//     console.log(name, age, work);
// }
// func7({
//     name: 'Benazir',
//     age: 17,
//     work: 'Avengers',
// });

// todo замыкание
function zam(num) {
    return function (a) {
        console.log(a + num);
    }
}
const resZam = zam(10);
// resZam(1);
// resZam(11);
// resZam(43);
// resZam(2);

// TODO ПРИМЕР
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [];
const array3 = [23, 4345, 45645, 234233, 34543, 3];
const funcS10 = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            res.push(arr[i]);
        } else {
            res.push('ЫЫЫЫ');
        }
    }
    return res;
}
console.log(funcS10(array1));
console.log(funcS10(array2));
console.log(funcS10(array3));





