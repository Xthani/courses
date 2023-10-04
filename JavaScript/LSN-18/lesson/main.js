const postsUrl = 'http://localhost:3000/posts';
const usersUrl = 'http://localhost:3000/users';

// TODO GET
async function fetchData() {
    try {
        const response = await fetch(postsUrl);
        const data = await response.json();
        // console.log(data);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
// fetchData();

// TODO POST
async function postData(obj) {
    try {
        const response = await fetch(postsUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
const obj = {
    value: 'Значение',
    isActive: true,
    firstName: null,
    lastName: undefined,
    price: 123,
    arr: [1, 2, 3],
};
// postData(obj);

// TODO PUT
async function putData(obj) {
    try {
        const response = await fetch(`${postsUrl}/2`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
const putObj = {
    value: 'put',
    isActive: false,
    firstName: null,
    lastName: 'Last name',
    price: 124,
    arr: [1, 2, 3],
};
// putData(putObj);

// TODO PATCH
async function patchData(obj) {
    try {
        const response = await fetch(`${postsUrl}/1`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
const patchObj = {
    arr: [
        {
            title: '1',
        },
        {
            title: '2',
        }
    ],
};
// patchData(patchObj);

// TODO DELETE
async function deleteData(id) {
    try {
        const response = await fetch(`${postsUrl}/${id}`, {method: 'DELETE'});
        // console.log(response);
        if (response.status === 404) {
            console.log(response);
            throw new Error(response.status);
            // console.log('Не удалось удалить объект!');
        }
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
// deleteData(3);

// TODO 
async function fetchAllData() {
    try {
        const [postsData, usersData] = await Promise.all([
            fetch(postsUrl),
            fetch(usersUrl)
        ]);
        const posts = await postsData.json();
        const users = await usersData.json();

        console.log(posts, '<<<');
        console.log(users, '<<<');
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
// fetchAllData();