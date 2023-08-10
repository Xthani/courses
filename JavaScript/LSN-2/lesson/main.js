let login = prompt('Введите логин');
// let password = prompt('Введите пароль');


let userName = 'admin';
let userPassword = '12345qwerty';


let isLogin = login === userName;
if (!isLogin) {
    alert('Ты не админ');
} else {
    alert('Ты админ');
}

// if (login === userName && password === userPassword) {
    // alert('Вы авторизовались');
// } else {
    // alert('Неверный логин или пароль');
// }


// console.log('Два равно: ', null == undefined); 
// console.log('Три равно: ', null === undefined);

// console.log('Два равно: ', 1 == '1');
// console.log('Три равно: ', 1 === '1');

const name = 'sd';
const result = !!name ? name : 'Имени нет';

// console.log(result);

// console.log(!name);



