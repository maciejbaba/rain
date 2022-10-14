var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var speed = 50;
var rainDropX = getRandomX();
var rainDropY = 0;
canvas.addEventListener("keydown", upOrDownArrow);
setInterval(rain, 1000 / speed);
function rain() {
    drawBackground();
    drawRainDrop(rainDropX, rainDropY);
    rainDropY += 2;
    if (rainDropY > canvas.height) {
        rainDropY = 0;
        rainDropX = getRandomX();
    }
}
function getRandomX() {
    return Math.floor(Math.random() * canvas.width);
}
function drawRainDrop(x, y) {
    context.fillStyle = "blue";
    context.fillRect(x, y, 1, 2);
}
function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function upOrDownArrow(event) {
    var code = event.code;
    if (code == "38") {
        if (speed == 200)
            speed = 150;
        speed += 50;
    }
    else if (code == "40") {
        if (speed == 0)
            speed = 50;
        speed -= 50;
    }
}
