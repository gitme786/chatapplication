const socket = io("http://localhost:8000");

var audio = new Audio("/1.mp3");

console.log("HIMANSHU");
audio.play();

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messagecontainer = document.querySelector(".messageContainer");

const name1 = prompt("Enter Your Name To Join");
socket.emit("new-user-joined", name1);
console.log(name1);

// APPEND MESSAGE
const append = (message, position) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("message");
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
};
// APPEND USER JOINING INFORMATION
const appendJoin = (message) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("chatcenter");
    messagecontainer.append(messageElement);
};

socket.on("user-joined", (name) => {
    appendJoin(`${name} joined the chat`);
    audio.play();
});
socket.on("receive", (data) => {
    append(`${data.name} : ${data.message}`, "left");
    audio.play();
});
socket.on("left", (name) => {
    appendJoin(`${name} left the chat`);
    audio.play();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You : ${message}`, "right");
    socket.emit("send", message);
    messageInput.value = "";
});

appendJoin("You Joined Chat");