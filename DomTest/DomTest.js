"use strict";
console.log("Hello World!");
const randomBackground = Math.floor(Math.random() * 16777200).toString(16);
document.body.style.backgroundColor = "#" + randomBackground; //random Backgroud
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 300;
px;
let repeatNumber = Math.floor(Math.random() * 100); // generate random repeat lengh
let spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World"; // change span to world
/*window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
*/
function getRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 500 + 1);
}
let i = 0;
do {
    i++;
    let newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "#" + getRandomColor();
} while (i < repeatNumber); // title loop
let t = 0;
do {
    t++;
    let circle = document.querySelector("circle");
    let newCircle = document.createElement("circle");
    document.style.height;
    document.style.backgroundColor = "#" + getRandomColor();
    document.body.appendChild(newCircle);
} while (t < repeatNumber);
