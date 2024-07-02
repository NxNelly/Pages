console.log("Hello World!")

const randomBackground = Math.floor(Math.random()*16777200).toString(16);
document.body.style.backgroundColor = "#" + randomBackground; //random Backgroud

let i:number = 0;

let repeatNumber:number = Math.floor(Math.random()*100) // generate random repeat lengh

let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = "World"; // change span to world

function getRandomColor(){

    let randomColor:string = Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}
    function getRandomInt(): number {
        return Math.floor(Math.random() *100);
     }

do{
    i++;

    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent="Hello";
    document.body.appendChild(newSpan);

    newSpan.style.left;
    newSpan.style.backgroundColor = "#" + getRandomColor();
    let fontsize:number = (getRandomInt())
    newSpan.style.fontSize = `${fontsize}px`;
    newSpan.addEventListener("mouseover", hndClick)

}while(i < repeatNumber); // title loop

document.body.addEventListener("mouseover",hndClick);

function hndClick(_event: Event): void {

console.log(_event.currentTarget);
    let target:HTMLElement = <HTMLElement>_event.target;
    if (target == document.body)
        return;
    target.textContent ="You clicked here";
    target.style.backgroundColor = "white";
    target.style.fontSize = "x-large";
}



/*let t:number = 0;
do{
    t++;

    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent="Ohh Noo";
    newSpan.style.position
    document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "#" + getRandomColor();  
}while(i < repeatNumber); // text loop
*/


/*let t:number =0;
do{
    t++;
    let rect = document.querySelector("rectangle")

    let newCircle: HTMLElement= document.createElement("circle");

    newCircle.style.position = "absolute";
    newCircle.style.left = 100;
    newCircle.style.top = 100;
    newCircle.style.backgroundColor = "#" + getRandomColor();

}while(t < repeatNumber);
*/


function createRectangle() {
    let rectangle:HTMLElement = document.createElement('div');
    let color:string = "#" + getRandomColor();

    let width = getRandomInt() + 20;  
    let height = getRandomInt() + 20; 

    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.style.backgroundColor = color;
    rectangle.style.position = 'absolute';
    rectangle.style.left = `${Math.random() * (window.innerWidth - width)}px`;
    rectangle.style.top = `${Math.random() * (window.innerHeight - height)}px`;

    document.body.appendChild(rectangle);

    for (let i = 0; i < 100; i++) {
        createRectangle();
}
}
