"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
crc2.fillStyle = "chartreuse";
crc2.strokeStyle = "#c406a8";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeRect(120, 50, 350, 350);
//Arc
crc2.beginPath();
crc2.arc(200, 600, 50, 5, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();
crc2.beginPath();
crc2.ellipse(600, 300, 70, 70, Math.PI * 0.25, 0, 2 * Math.PI);
crc2.closePath();
crc2.fillStyle = "#c406a8";
crc2.fill();
/*crc2.fillStyle = "black";
crc2.font = "100px Arial Narrow";
crc2.fillText("brat", 200, 250); */
crc2.strokeStyle = "black";
crc2.beginPath();
crc2.moveTo(0, 10);
crc2.lineTo(window.innerWidth, 10);
crc2.stroke();
