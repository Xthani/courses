const arr = [
    {
        name: 'Tom',
        isActive: true,
    },
    {
        name: 'Bob',
        isActive: true,
    },
    {
        name: 'Benazir',
        isActive: false,
    },
    {
        name: 'Enai',
        isActive: false,
    },
];

let res = [
    {
        name: 'Tom',
        isActive: true,
    },
    {
        name: 'Bob',
        isActive: true,
    },
    {
        name: 'Benazir',
        isActive: false,
        job: 'sdsd',
    },
];

const newArr = arr.map((e) => e.isActive ? e : {...e, job: 'asd'});


// todo splice() удаляет элементы с определенного индекса
const arrSplice = ['Bob', 'Jeck', 'Tom', 'Vi', 'Kate', 'Tom'];
// const del = arrSplice.splice(2);
// const del = arrSplice.splice(2, 1);
const del = arrSplice.splice(2, 1, 'Zamena', 'Name');
// console.log(arrSplice);
// console.log(del);

// todo concat() служит для объединения массивов
const arrConcat1 = ['Привет', 'мир'];
const arrConcat2 = ['и', 'JS', '!'];
const conc = arrConcat1.concat(arrConcat2);
// const conc = [...arrConcat1, ...arrConcat2];
// console.log(conc);

//todo join() объединяет все элементы массива в одну строку
const strJoin = conc.join(' ');
// console.log(strJoin);

// todo forEach() и map() осуществляют перебор элементов и выполняют с ними определенный операции
const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
const newNumbers = arrNumbers.map((i) => i + 10);
// console.log(newNumbers);
// arrNumbers.forEach((i) => console.log(i + 10));

// todo flat() упрощает массив с учетом указанной вложенности элементов
const arrFlat = [1, 'we', {}, [2, 3, 4, {}], [2, 'sd', [2, 'we', [2, 3]]]];
// const newArrFlat = arrFlat.flat();
// const newArrFlat = arrFlat.flat(2);
const newArrFlat = arrFlat.flat(Infinity);
// console.log(arrFlat);
// console.log(newArrFlat);




// TODO СТРОКИ
const a = 'Hello ';
const b = 'World';
const ab = a.concat(b);
// console.log(ab);

const length = ab.length;
// console.log(length);

// todo Удаление пробелов trim()
const login = 'admin        ';
const log = login.trim();
// console.log(login.length);
// console.log(log.length);

// todo toLowerCase() (для перевода в нижний регистр) и toUpperCase() (для перевода в верхний регистр)
const str = 'Холодильник';
const srr1 = str.toLowerCase()
const srr2 = str.toUpperCase();
// console.log(srr1);
// console.log(srr2);

// todo includes() возвращает true, если строка содержит определенную подстроку
const strIncl = 'Привет Мир, это мой 8-й урок по JS!'
const isWorld = strIncl.toLowerCase().includes('мир');
// console.log(isWorld);

// todo split() разбивает строку на массив подстрок по определенному разделителю
const strSplit = 'Привет Мир, это мой 8-й урок по JS!'
const strToArr = strSplit.split(' '); 
// console.log(strToArr);
const arrToStr = strToArr.join(' ');
// console.log(arrToStr);


const arrU = [1, 2, 3, 6, 7, 8, 9, 1, 23, 6, 757, 3];
function uniq (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let isHave = false;
        
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] === arr[y]) {
                isHave = true;
            }
        }

        if (isHave) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(uniq(arrU));
// uniq(arrU);





