let first = document.querySelector(".first");
let last = document.querySelector(".last");
let title = document.querySelector(".title");

fetch("https://randomuser.me/api")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        first.innerHTML += `<img src =${data.results[0].picture.large} />`
        first.innerHTML += `<h2>Имя: ${data.results[0].name.first}</h2>`
        first.innerHTML += `<h2>Фамилия : ${data.results[0].name.last}</h2>`
        first.innerHTML += `<h2>Телефон : ${data.results[0].phone}</h2>`
        first.innerHTML += `<h2>возраст: ${data.results[0].dob.age}</h2>`
        first.innerHTML += `<h2>Почта: ${data.results[0].email}</h2>`
        first.innerHTML += `<h2>Пол: ${data.results[0].gender}</h2>`
        first.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`
        console.log(data)
    });
fetch("https://randomuser.me/api")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        last.innerHTML += `<img src =${data.results[0].picture.large} />`
        last.innerHTML += `<h2>Имя: ${data.results[0].name.first}</h2>`
        last.innerHTML += `<h2>Фамилия : ${data.results[0].name.last}</h2>`
        last.innerHTML += `<h2>Телефон : ${data.results[0].phone}</h2>`
        last.innerHTML += `<h2>возраст: ${data.results[0].dob.age}</h2>`
        last.innerHTML += `<h2>Почта: ${data.results[0].email}</h2>`
        last.innerHTML += `<h2>Пол: ${data.results[0].gender}</h2>`
        last.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`
        console.log(data)
    });fetch("https://randomuser.me/api")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        title.innerHTML += `<img src =${data.results[0].picture.large} />`
        title.innerHTML += `<h2>Имя: ${data.results[0].name.first}</h2>`
        title.innerHTML += `<h2>Фамилия : ${data.results[0].name.last}</h2>`
        title.innerHTML += `<h2>Телефон : ${data.results[0].phone}</h2>`
        title.innerHTML += `<h2>возраст: ${data.results[0].dob.age}</h2>`
        title.innerHTML += `<h2>Почта: ${data.results[0].email}</h2>`
        title.innerHTML += `<h2>Пол: ${data.results[0].gender}</h2>`
        title.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`
        console.log(data)
    });
