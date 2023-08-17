// todo объекты
const firstName = 'Stas';

// const user = {
//     firstName,
// }
const user2 = new Object();

// user.age = 17;

// console.log(user);
// console.log(user2);

// todo методы объектов
const user = {
    'vk com': 'asd',
    firstName: 'Stas',
    age: 99,
    getName: function () {
        console.log(user.firstName);
    },
    getAge () {
        console.log(user.age);
    },
    getThis (num) {
        console.log(this.firstName);
        console.log(this.age);
        let res = this.age - num;
        console.log(res);
    },
}
// user.getName();
// user.getAge();
// user.getThis(23);
// console.log(this);

// todo синтаксис массивов
user['last Name'] = 'JOSH';
user['google.com'] = 'JOSH';


// todo удаление из объекта
delete user.firstName;
delete user['google.com'];

// console.log(user);

// todo

// let a = 'aaaa';
// let b = a;

// a = 'bbbb';
// console.log(a);
// console.log(b);



let tom = {
    name: 'Tom',
    age: 22,
}

let tomClone = tom;

// tomClone.job = 'developer';

// console.log(tom === tomClone);
// console.log(tomClone);

// сперд оператор
const tom2 = { ...tom };
// console.log(tom2);
const tom3 = Object.assign({}, tom);
// console.log(tom3 === tom);


const master = {
    ...tom,
    age: 19,
    job: 'developer',
    skills: ['html'],
}

const master2 = {
    ...tom,
    age: 19,
    job: 'developer',
}
// console.log(master);

// todo оператор in
function logger (obj) {
    console.log('skills' in obj);
    if ('skills' in obj) {
        console.log('Скиллы: ', obj.skills);
    } else {
        console.log('Скиллов нет!');
    }
}
// logger(master);
// logger(master2);

// todo 
function User(argName, argAge) {
    this.name = argName;
    this.age = argAge;
}
User.prototype.getUser = function() {
    console.log(this.name);
}

const bob = new User('Bob', 22);
const jeck = new User('Jeck', 52);
const bill = new User();
// bob.getUser();
// jeck.getUser();
// bill.getUser();

// console.log(bob);
// console.log(jeck);
// console.log(bill);

// const obj = {};
// console.log(obj);
// const arr = [];
// console.log(arr);



