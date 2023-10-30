class Engine {
    constructor(){

    }
}

/////////////////////////////////////
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

let engine = new Engine();

c.fillStyle = "red";
c.fillRect(0,0,canvas.width, canvas.height);

