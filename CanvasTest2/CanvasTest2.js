"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777200).toString(16);
    randomColor = "#" + randomColor;
    return randomColor;
}
console.log(randomColor());
let grad = ctx.createLinearGradient(300, 0, 300, 600);
grad.addColorStop(0, randomColor());
grad.addColorStop(1, randomColor());
ctx.fillStyle = grad;
ctx.fillRect(0, 0, 600, 600); //Gradient
let path = new Path2D();
path.moveTo(50, 50);
path.lineTo(300, 70);
path.lineTo(70, 200);
path.lineTo(50, 50);
ctx.strokeStyle = randomColor();
ctx.stroke(path); //triangle
ctx.scale(5, 5);
for (let i = 0; i < 5; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360},50%, 50%)`;
    ctx.fillRect(50, 50, 100, 100);
    ctx.rotate(10 * Math.PI / 180);
}
