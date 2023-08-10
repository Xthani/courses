// todo массивы
const arr = ['str', 123, true, null, undefined, {}];
// console.log(arr);

// todo добавление нового элемента в массив
arr[6] = 'name';
// console.log(arr);

// todo добавление через push
arr.push(4444);
// console.log(arr);

// todo метод для получения длинны массива
const len = arr.length;
// console.log(len);

const navigate = ['Главная', 'О компании', 'Магазин'];
const a = navigate[0];
// console.log(a);

const arr2 = [['1', 2, true], []];
const num = arr2[0][0];
// console.log(arr2);
// console.log(num);

// todo объекты
const obj = {
    firstName: 'Enai',
    age: 20,
    skill: ['js', 'react', 'html', 'css'],
    project: {
        name: 'IOPEND',
        rating: '3/10',
    },
};
// console.log(obj);

// todo добавление новго ключа
obj.height = 160;
// console.log(obj);

const firstName = obj.firstName;
// console.log(firstName);

const project = obj.project.name;
// console.log(project);

const html = obj.skill[2];
// console.log(html);

// todo операторы сравний
// const q1 = 1 == '1';
// const q2 = 1 === '1';
// const w1 = 1 != '1';
// const w2 = 1 !== '1';
// const e1 = 1 > 2;
// const e2 = 1 < 2;
// const r1 = 2 >= 2;
// const r2 = 2 <= 2;

// todo цикл for
// const arrFor = ['str', 123, true, null, undefined, {}];
// for (let i = 0; i < arrFor.length; i++) {
//     console.log(arrFor[i]);
// }

// for (let i = 0; i < arrFor.length; i++) {

//     for (let j = 0; j < 3; j++) {
//         console.log(arrFor[i]);
//     }

// }

// todo цикл while
const arrWhile = ['str', 123, null, undefined, true, {}];
let i = 0;
// while (i < arrWhile.length) {
//     console.log(arrWhile[i]);
//     i++;
// }

// let j = 0;
// do {
//     console.log(arrWhile[j]);
//     j++;
// } while (j < arrWhile.length);


// todo break и continue
// for (let i = 0; i < 6; i++) {
//     if (i === 3) {
//         break
//     }
//     console.log(i);
// }

// for (let i = 0; i < arrWhile.length; i++) {
//     if (arrWhile[i] === true) {
//         continue;
//     }
//     console.log(arrWhile[i]);
// }

// todo fot in и for of
const arrForOf = ['str', 123, null, undefined, true, {}];

// for (let elem of arrForOf) {
//     console.log(elem);
// }

const objForIn = {
    firstName: 'Enai',
    age: 20,
    skill: ['js', 'react', 'html', 'css'],
    project: {
        name: 'IOPEND',
        rating: '3/10',
    },
};

// for (let key in objForIn) {
    // if (objForIn[key].name) {
    //     console.log(objForIn[key].name);
    // }
    // console.log(objForIn[key].name);
// }

// todo строка тоже своего рода массив
// const strArr = 'НАМ ПОРА ДОМОЙ';
// strArr.length;
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i]);
// }