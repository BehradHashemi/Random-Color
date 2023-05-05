const body = document.querySelector("body");
const btn = document.querySelector(".btn");

const colors = ["red", "green", "pink", "blue", "white", "black", "orange", "yellow"]

btn.addEventListener("click", changColor)

function changColor() {
    const color = parseInt(Math.random() * colors.length);
    body.style.background = colors[color];
}