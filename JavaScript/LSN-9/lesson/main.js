// todo создание класса

class Person {
    #name;
    age;
    constructor(name, age) {
        // console.log(name, 'это имя');
        this.#name = name;
        this.age = age;
    }
    #getName() {
        console.log(this.#name);
    }
    setName(name) {
        this.#name = name;
        this.#getName();
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}

// todo инстанс или эксземпляр
const jeck = new Person('Jeck');
const bob = new Person('Bob');
// jeck.getName();


// jeck.setAge(18);
// jeck.getAge();
// bob.setAge(23);
// bob.getAge();

// todo задать аргумент на прямую
// jeck.name = 'Jeck';
// jeck.setName('Jeck 2');

// console.log(jeck);
// console.log(bob);

// todo наследование 
class Worker extends Person {
    job = 'Developer';
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    getJob() {
        console.log(this.job);
    }
}

const tom = new Worker('Tom', 33, 'SMM');
// tom.getJob();
// tom.getAge();
// console.log(tom, '<<<<<<<');


// TODO ПРИМЕР

class Todo {
    #dataArr = [];
    getData() {
        console.log(this.#dataArr);
    }

    setData(data) {
        this.#dataArr.push(data);
    }

    deleteData(id) {
        const arr = this.#dataArr.filter((i) => {
            if (i.id !== id) {
                return i;
            }
        });
        this.#dataArr = arr;
    }

    editData(data) {
        const arr = this.#dataArr.map((i) => {
            if (i.id === data.id) {
                return data;
            } else {
                return i;
            }
        });
        this.#dataArr = arr;
    }
}

const myTodo = new Todo();
// создаю задачу
myTodo.setData({
    id: '1',
    text: 'Покушать',
});
myTodo.setData({
    id: '2',
    text: 'Почистить зубы',
});
myTodo.setData({
    id: '3',
    text: 'Пойти на работу',
});
myTodo.setData({
    id: '4',
    text: 'Выучить JS',
});

// удаляю задачу
myTodo.deleteData('1');

// редактирование текста
myTodo.editData({
    id: '2',
    text: 'Почистить зубы и умыться',
});

// смотрю весь список задач
myTodo.getData();



