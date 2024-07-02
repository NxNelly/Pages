"use strict";
const canva = document.getElementById("canvas");
const crc = canva.getContext("2d");
canva.width = window.innerWidth;
canva.height = window.innerHeight;
function getRandomInt() {
    return Math.floor(Math.random() * 1200);
}
let grad = crc.createLinearGradient(300, 0, 300, 600);
grad.addColorStop(0, "rgb(100,100,200)");
grad.addColorStop(1, "rgb(200,150,100)");
crc.fillStyle = grad;
crc.fillRect(0, 0, canva.width, canva.height); //Background
crc.beginPath();
crc.ellipse(getRandomInt(), 100, 50, 50, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(255,200,100)";
crc.fill(); //Moon
crc.beginPath();
crc.ellipse(500, 500, 300, 400, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(150,120,90)";
crc.fill(); //hill
crc.beginPath();
crc.ellipse(100, 500, 200, 200, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(180,140,80)";
crc.fill();
crc.beginPath(); //hill
crc.beginPath();
crc.ellipse(800, 500, 200, 500, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(190,140,80)";
crc.fill();
crc.beginPath(); //hill
crc.beginPath();
crc.ellipse(1300, 600, 500, 500, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(200,150,80)";
crc.fill();
crc.beginPath(); //hill
let gradGround = crc.createLinearGradient(0, 500, 0, 700);
gradGround.addColorStop(0, "rgb(200,150,80)");
gradGround.addColorStop(1, "rgb(250,250,200)");
crc.fillStyle = gradGround;
crc.fillRect(0, 500, canva.width, canva.height); // ground
crc.ellipse(getRandomInt(), 800, 280, 200, Math.PI * 0.25, 0, 2 * Math.PI);
crc.ellipse(getRandomInt(), 800, 200, 300, Math.PI * 0.25, 0, 2 * Math.PI);
crc.ellipse(getRandomInt(), 900, 400, 200, Math.PI * 0.25, 0, 2 * Math.PI);
crc.fillStyle = "rgb(50,150,150)";
crc.stroke();
crc.fill(); //Oasis
let trees = {
    tree0: { height: 200,
        width: 40,
        treePosX: 150,
        treePosY: 520,
        leafPosX: 170,
        leafPosY: 320, },
    tree1: { height: 300,
        width: 50,
        treePosX: 1000,
        treePosY: 600,
        leafPosX: 1025,
        leafPosY: 300, },
    tree2: { height: 250,
        width: 30,
        treePosX: 300,
        treePosY: 550,
        leafPosX: 315,
        leafPosY: 300, }
}; //Array of trees and positions
function drawLeaves(getleafPosX, getleafPosY) {
    crc.fillStyle = "green";
    let path = new Path2D();
    path.moveTo(getleafPosX, getleafPosY);
    path.lineTo(getleafPosX + 120, getleafPosY - 20);
    path.lineTo(getleafPosX + 70, getleafPosY - 40);
    path.lineTo(getleafPosX, getleafPosY);
    path.lineTo(getleafPosX - 120, getleafPosY - 70);
    path.lineTo(getleafPosX - 50, getleafPosY - 80);
    path.lineTo(getleafPosX, getleafPosY);
    path.lineTo(getleafPosX - 120, getleafPosY);
    path.lineTo(getleafPosX - 50, getleafPosY - 20);
    path.lineTo(getleafPosX, getleafPosY);
    path.lineTo(getleafPosX + 20, getleafPosY - 50);
    path.lineTo(getleafPosX + 60, getleafPosY - 60);
    path.lineTo(getleafPosX, getleafPosY);
    crc.fill(path);
    crc.strokeStyle = "rgb(80,190,80)";
    crc.stroke(path);
}
crc.fillStyle = "rgb(150,100,50)";
for (let tree in trees) {
    let { height, width, treePosX, treePosY, leafPosX, leafPosY } = trees[tree];
    crc.fillStyle = "rgb(150,100,50)";
    crc.fillRect(treePosX, treePosY - height, width, height);
    drawLeaves(leafPosX, leafPosY);
} // draw trees from array
function drawAnimal(posX, posY) {
    crc.strokeStyle = "rgb(80,50,10)";
    let path = new Path2D();
    path.moveTo(posX, posY);
    path.lineTo(posX, posY - 15);
    path.lineTo(posX - 10, posY);
    path.lineTo(posX - 15, posY - 15);
    path.lineTo(posX - 20, posY);
    path.lineTo(posX - 25, posY + 10);
    path.lineTo(posX - 25, posY + 20);
    path.lineTo(posX - 5, posY + 30);
    path.lineTo(posX + 10, posY + 45);
    path.lineTo(posX + 40, posY + 45);
    path.lineTo(posX + 50, posY + 20);
    path.lineTo(posX + 40, posY + 10);
    path.lineTo(posX + 10, posY + 10);
    path.lineTo(posX, posY);
    crc.fillStyle = "rgb(150,120,100)";
    crc.fill(path); //body
    let pathEyes = new Path2D();
    pathEyes.ellipse(posX - 10, posY + 9, 5, 5, Math.PI * 0.25, 0, 2 * Math.PI);
    pathEyes.ellipse(posX - 27, posY + 9, 5, 5, Math.PI * 0.25, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.fill(pathEyes);
    path.moveTo(posX + 20, posY + 45);
    path.lineTo(posX + 25, posY + 70);
    path.lineTo(posX - 10, posY + 70);
    crc.stroke(path);
    path.moveTo(posX + 30, posY + 45);
    path.lineTo(posX + 33, posY + 60);
    path.lineTo(posX - 5, posY + 60);
    path.moveTo(posX + 50, posY + 20);
    path.lineTo(posX + 70, posY + 40);
    path.lineTo(posX + 100, posY + 40);
    crc.stroke(path);
}
let PosAnimalX = 100;
let PosAnimalY = 550;
drawAnimal(PosAnimalX, PosAnimalY);
//# sourceMappingURL=Interface.js.map