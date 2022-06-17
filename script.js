// alert("ssd");
// var n = 5 ** 2;
// console.log(n);
// if (n ** 2 > 214) {
//     console.log('positive')
// } else {
//     console.log('u relly?')
// };
// var w = 4;
// var e = 3;
// if (w || e > 3) {
//     console.log('sdw')
// } else {
//     console.log('jjk')
// };
// var canvas = document.getElementById("canvas");


// var canvasWidth = 1378;
// var canvasHeight = 1460;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;


// var canvasContext = canvas.getContext("2d");


// canvasContext.fillStyle = "gray";
// canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);


// canvasContext.strokeStyle = "yellow";
// canvasContext.lineWidth = 5;
// canvasContext.beginPath();
// canvasContext.moveTo(150, 100);
// canvasContext.lineTo(200, 150);
// canvasContext.lineTo(200, 50);
// canvasContext.closePath();
// canvasContext.stroke();

// canvasContext.fillStyle = "red";
// canvasContext.strokeStyle = "white";
// canvasContext.lineWidth = 10;
// canvasContext.beginPath();
// canvasContext.arc(150, 100, 50, 0, 2 * Math.PI);
// canvasContext.fill();
// canvasContext.stroke();

// printSquare(5);

// function printSquare(a) {
//     console.log(a = a)
// }

// printSquare(6)
// printSquare(7)

// function drawCircle(fillColor, radius) {
//     canvasContext.fillStyle = fillColor
//     canvasContext.beginPath()
//     canvasContext.arc(150, 150, radius, 0, 2 * Math.PI)
//     canvasContext.fill()
// }


// drawCircle("red", 125)
// drawCircle("yellow", 100)
// drawCircle("green", 75)
// drawCircle("white", 50)
// drawCircle("red", 25)
var GAME = {
    width: 1378,
    height: 1460,
    ifLost: false,
    background: "red"

}


var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.width = GAME.width;
canvas.height = GAME.height;



var PLAYER = {
    x: 689,
    y: 1230,
    width: 50,
    height: 20,
    color: "white",
    score: 0,
    lives: 3,
    xDirection: 10,
}

var METEOR = {
    x: GAME.width * 0.5,
    y: 100,
    size: 20,
    color: "black"
}





function drowframe() {
    canvasContext.clearRect(0, 0, GAME.width, GAME.height)
    drawBackground();
    drawPlayer();
    drawMeteor();
}



function drawBackground() {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, GAME.width, GAME.height);
}


drawBackground();


function drawPlayer() {
    canvasContext.fillStyle = PLAYER.color;
    canvasContext.fillRect(PLAYER.x, PLAYER.y, PLAYER.width, PLAYER.height);
}




function drawMeteor() {
    canvasContext.fillStyle = METEOR.color;
    canvasContext.beginPath();
    canvasContext.arc(METEOR.x, METEOR.y, METEOR.size, 0, Math.PI * 2);
    canvasContext.fill();
}





function updateMeteor() {
    METEOR.y += 5;
}


function initEventListeners() {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("keydown", onCanvasKeyDown);
}


function onCanvasKeyDown(event) {
    if (event.key === "ArrowLeft") {
        PLAYER.x = PLAYER.x - PLAYER.xDirection;
    }
    if (event.key === "ArrowRight") {
        PLAYER.x = PLAYER.x + PLAYER.xDirection;
    }
    if (PLAYER.x < 0) (
        PLAYER.x = 0
    )
    if (PLAYER.x+PLAYER.width > GAME.width) {
        PLAYER.x = GAME.width - PLAYER.width
    }
}

function onMouseMove(event) {
    if((event.clientX + PLAYER.width < GAME.width)&& (event.clientX - PLAYER.width / 2 >0)) {
        PLAYER.x = event.clientX - PLAYER.width / 2;
    } else {
        if ((event.clientX + PLAYER.width > GAME.width)) {
        } else {
            PLAYER.x = 0;
        }
    }
}



function play() {
    drowframe();
    updateMeteor();
    requestAnimationFrame(play);

}


initEventListeners();
play();









