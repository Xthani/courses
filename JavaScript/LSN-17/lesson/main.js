const url = 'http://localhost:3000/data';

// GET
const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', url);
xhrGet.onreadystatechange = () => {
    console.log(JSON.parse(xhrGet.responseText));
}
xhrGet.send();

// POST
const xhrPost = new XMLHttpRequest();
const data = {
    title: 'title value',
    name: 'Name'
};
xhrPost.open('POST', url);
xhrPost.setRequestHeader('Content-Type', 'application/json');
xhrPost.onreadystatechange = () => {
    console.log(JSON.parse(xhrPost.responseText));
}
xhrPost.send(JSON.stringify(data));

// PUT
// const xhrPut = new XMLHttpRequest();
// const dataStr = {
//     title: 'new put title',
//     name: 'new put name'
// };
// // const dataStr = '{"key": "valueKey"}';
// const itemId = 3;
// const putUrl = `${url}/${itemId}`;
// // http://localhost:3000/data/3
// xhrPut.open('PUT', putUrl);
// xhrPut.setRequestHeader('Content-Type', 'application/json');
// xhrPut.onreadystatechange = () => {
//     console.log(JSON.parse(xhrPut.responseText));
// }
// xhrPut.send(JSON.stringify(dataStr));

// PATCH
const xhrPatch = new XMLHttpRequest();
const patchItemId = 3;
const patchUrl = `${url}/${patchItemId}`;
// const patchStr = '{"newKey": "updateValue"}';
const patchStr = {
    title: 'patch title',
};
// http://localhost:3000/data/3
xhrPatch.open('PATCH', patchUrl);
xhrPatch.setRequestHeader('Content-Type', 'application/json');
xhrPatch.onreadystatechange = () => {
    console.log(JSON.parse(xhrPatch.responseText));
}
xhrPatch.send(JSON.stringify(patchStr));

// DELETE
// const xhrDelete = new XMLHttpRequest();
// const deleteItemId = 1;
// const deleteUrl = `${url}/${deleteItemId}`;
// // http://localhost:3000/data/1
// xhrDelete.open('DELETE', deleteUrl);
// xhrDelete.onreadystatechange = () => {
//     console.log(JSON.parse(xhrDelete.responseText));
// }
// xhrDelete.send();