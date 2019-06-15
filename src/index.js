import createButton from "./button";
import colorElement from "./colorElement";
import './index.css';
import url from "./icon.jpeg";

const img =document.createElement("img");
img.src = url;

const div = document.createElement("div");
div.innerText = "Hello World";
div.style.color = "red";

const button = createButton("HEY FIRST BUTTON YO!");

button.addEventListener("click", e => {
  colorElement(div, "cyan");
});

document.body.appendChild(button);
document.body.appendChild(div);
document.body.appendChild(img);
