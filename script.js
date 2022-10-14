var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var speed = 50;
var rainDropXspeed = 0;
var rainDropYspeed = 1;
var rainDropX = 0;
var rainDropY = 0;
canvas.addEventListener("keydown", upOrDownArrow);
setInterval(rain, 1000 / speed);
function rain() {
    drawBackground();
    drawRainDrop(rainDropX, rainDropY);
    rainDropY += rainDropYspeed;
    if (rainDropY > canvas.height)
        rainDropY = 0;
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
            return;
        speed += 50;
    }
    else if (code == "40") {
        if (speed == 0)
            return;
        speed--;
    }
}
