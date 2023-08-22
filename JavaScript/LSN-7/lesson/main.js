const arr = ['str', 12, {}];
const arr2 = [...arr];
arr2.push('new');

// console.log(arr);

// todo map
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// const func1 = (fun) => {
//     let a = 'sss';
//     let b = 0;
//     let c = [];
//     return fun(a, b, c); 
// }

// func1((a, b, c) => {
//     console.log(a, b, c);
// })

const array = [
    {
        name: 'Tom',
        job: 'Developer',
    },
    {
        name: 'Bob',
        job: 'Designer',
    },
    {
        name: 'Jeck',
        job: 'Developer',
    },
    {
        name: 'Johny',
        job: 'Acter',
    },
    {
        name: 'Jeck',
        job: 'AAA',
    },
];

const arrMap = array.map((i) => {
    if (i.job === 'Developer') {
        return i;
    } else {
        return {
            ...i, 
            isDev: false,
        }
    }
});
// const arrMap2 = array.map((i) => i.job === 'Developer' ? i : 'ssss');
// console.log(arrMap);
// console.log(arrMap2);

// todo filter
const arrFilt = array.filter((e) => {
    if (e.job === 'Developer') {
        return e;
    }
});
const arrFilt2 = array.filter((e) => e.job === 'Developer' && e);
// console.log(arrFilt2);

// todo find
// const arrFilt3 = array.filter((e) => e.name === 'Jeck' && e);

// const arrFind = array.find((e) => e.name === 'Jeck' && e);
// console.log(arrFind);

// 
// const arr1 = [12, 324, 2, 45, 3, 10, 324];
// arr1.push(34);
// arr1.pop();

// arr1.unshift(1);
// arr1.shift();

// arr1.sort((a, b) => a - b);
// arr1.sort((a, b) => b - a);

// arr1.reverse();

// const isElem = arr1.includes(324);
// console.log(isElem);

// console.log(arr1);


// todo пример как работают методы массивов под капотом
// function sortArr (arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i + 1]) {
//             res.push(arr[i]);
//         } else res.push(arr[i + 1]);
//     }
//     console.log(res);
//     return res;
// }
// sortArr(arr1);

const arrU = [12, 324, 2, 45, 3, 10, 324, 3, 2, 45];

function uniq (arr) {
    let res = [];
    res.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(uniq(arrU));


