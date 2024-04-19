const box = document.querySelector(".box");

const render = (post) => {
    box.innerHTML = post.map((item) => `
    <div>
    <h1 class="h1">${item.name}</h1>
    <button data-id="${item.id}">add</button>
    </div>
    `).join("");
}

const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        render(data)
    });
}

getData();

let arr = [];

box.addEventListener ("click", (e) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
    .then((res) => res.json())
    .then((data) => {
        arr.push(data)
        
    });
    localStorage.setItem("user", JSON.stringify(arr))

})