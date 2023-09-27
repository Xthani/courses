//

// console.log('1');

const promise = new Promise((resolve, reject) => {
    let a = 2;
    let b = 2;
    if (a === b) {
        resolve('a равно b');
    } else {
        reject('a не равно b');
    }
    // console.log('2');
});

// console.log('3');

// promise.then((response) => {
    // console.log(response, '<<<');
    // console.log('4');
// });

// promise.catch((error) => {
    // console.log(error, 'Ошибка');
// });

// promise.finally(() => {
    // console.log('Финал');
// });

// console.log('5');
// console.log('end');

// 
const promise2 = new Promise((resolve, reject) => {
    resolve('Это');
});

// promise2
//     .then((res) => {
//         return `${res} промис`;
//     })
//     .then((res) => {
//         return `${res}!`
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Конец');
//     });

//
// Promise.all([promise, promise2])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('FINALLY');
//     });

// todo Async и await
function sum (x, y) {
    return new Promise((res) => {
        const result = x + y;
        res(result);
    });
}
// sum(3, 4).then((response) => {
//     console.log('Результат: ', response);
// });

async function test () {
    const res = await sum(3, 4).then((response) => {
        return response;
    });
    return console.log(res);
}
// const testFunc = async () => {
//     const res = await ...;
// }
// test();

function makeHttpRequest (method, url) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if (xhr.status === 200) {
                res(xhr.responseText);
            } else {
                rej(xhr.statusText);
            }
        };

        xhr.send();
    });
}
// makeHttpRequest('GET', 'https://jsonplaceholder.typicode.com/usersa')
//     .then((response) => {
//         console.log(JSON.parse(response));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const fetchData = async () => {
    try {
        const data = await makeHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users');
        console.log(JSON.parse(data));
    } catch (error) {
        console.log('ERROR: ', error);
    }    
}

fetchData();

// function ttt () {
//     console.log('ttt');
// }

function tryTest () {
    try {
        ttt();
    } catch (e) {
        console.log(e, '<<<');
    }
}

// tryTest();



