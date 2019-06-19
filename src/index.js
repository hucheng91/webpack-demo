import createButton from "./button";
// import colorElement from "./colorElement";
import './index.scss';
import url from "./icon.jpeg";
import _ from 'lodash';
import './test-babel';
import './test-resolve'
import {sayHi} from './ts/index';
const getColorElement = () => import("./colorElement");
const setButtonColor = colorName => import(`./button-colors/${colorName}`);

const img =document.createElement("img");
img.src = url;

const div = document.createElement("div");
div.innerText = "Hello World";
div.style.color = "red";

const button = createButton("HEY FIRST BUTTON YO!");
const button1 = createButton("CHANGE THIS THEME");
button.addEventListener("click", e => {
  getColorElement().then(m => {
    let colorElement = m.default;
    colorElement(div, "cyan");
  });
});
button1.addEventListener("click", e => {
  const colorVal = "blue";
  setButtonColor(colorVal).then(({ color }) => {
    button1.style.color = color;
  });
});
document.body.appendChild(button);
document.body.appendChild(div);
document.body.appendChild(img);
document.body.appendChild(button1);
console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);
sayHi("TypeScript");