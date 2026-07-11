const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");
let editIndex = -1;


let usersData = JSON.parse(localStorage.getItem("usersData")) || [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "image": "https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "image": "https://plus.unsplash.com/premium_photo-1739786995552-0a2ccfa62ba5?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Rohan Mehta",
        "email": "rohan.mehta@example.com",
        "image": "https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 4,
        "name": "Ananya Gupta",
        "email": "ananya.gupta@example.com",
        "image": "https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 5,
        "name": "Kabir Singh",
        "email": "kabir.singh@example.com",
        "image": "https://plus.unsplash.com/premium_photo-1739201499644-7878cbb4cdf9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

let saveData = () => {
    localStorage.setItem("usersData" , JSON.stringify(usersData));
}

const ui = () => {
    users.innerHTML = "";
    usersData.forEach((elem, idx) => {
        users.innerHTML += `<div class="user_card">
            <div class="img_card">
                <img src="${elem.image}" alt="image here">
            </div>
            <div class="text">
                <h3>${elem.name}</h3>
                <p>${elem.email}</p>
            </div>
            <div class="actions">
                <button onclick="editCard(${idx})" id="edit">Edit</button>
                <button onclick="deleteCard(${idx})" id="del">Delete</button>
            </div>
        </div>`
    });
};

ui();
saveData();

form.addEventListener("submit", (events) => {
    events.preventDefault();
    let name = inp1.value;
    let email = inp2.value;
    let image = url.value;

    if (name.trim() === "" || email.trim() === "" || image.trim() === "") return;

    if (editIndex === -1) {
        usersData.push({
            name,
            email,
            image
        });
    }
    else {
        usersData[editIndex] = {
            ...usersData[editIndex],
            name,
            email,
            image
        };
        editIndex = -1;
    }

    saveData();
    ui();

    form.reset();
});

let deleteCard = (idx) => {
    usersData.splice(idx, 1);
    saveData();
    ui();
};

let editCard = (idx) => {
    editIndex = idx;

    inp1.value = usersData[idx].name;
    inp2.value = usersData[idx].email;
    url.value = usersData[idx].image;
}
