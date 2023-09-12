// const handleClick = (arg) => {
//     console.log(arg, 'click');
// }

// todo addEventListener
// const button = document.getElementById('btn-id');
// button.addEventListener('click', (e) => {
    // console.log(e, 'click');
    // console.log(e.target.value, 'click');
    // console.log(e.type, 'type');
// });

// todo preventDefault
// const link = document.getElementById('link-id');
// link.addEventListener('click', (e) => {
//     e.preventDefault();
// });

// todo stopPropagation
// const block_1 = document.getElementById('block-1');
// block_1.addEventListener('click', (e) => {
    // console.log('1');
    // e.stopPropagation();
// });

// const block_2 = document.getElementById('block-2');
// block_2.addEventListener('click', (e) => {
//     console.log('2');
//     e.stopPropagation();
// });

// const block_3 = document.getElementById('block-3');
// block_3.addEventListener('click', (e) => {
//     console.log('3');
//     e.stopPropagation();
// });

// todo mousemove
// const mouseBlock = document.getElementById('mouse-id');
// mouseBlock.addEventListener('mousemove', (e) => {
//     e.target.style.backgroundColor = 'red';
//     console.log(e.target.style, 'mouse');
// });

// mouseBlock.addEventListener('click', (e) => {
//     console.log(e.screenX);
//     console.log(e.screenY);
    // console.log(e.clientX);
    // console.log(e.clientY);
// });

// todo 
addEventListener('keydown', (e) => {
    console.log(e.key, 'keydown');
});
addEventListener('keypress', (e) => {
    console.log(e.key, 'keypress');
});
addEventListener('keyup', (e) => {
    console.log(e.key, 'keyup');
});

// todo 
const addBtn = document.getElementById('add-id');
const deleteBtn = document.getElementById('delete-id');

const wrapperBlock = document.getElementById('wrapper-id');

const elem = document.createElement('div');

addBtn.addEventListener('click', () => {
    elem.innerText = 'text';
    wrapperBlock.appendChild(elem);
});

deleteBtn.addEventListener('click', () => {
    wrapperBlock.removeChild(elem);
});


