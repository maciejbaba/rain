var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var rainType = 'drizzle';
var rainTypes = ['drizzle', 'normal', 'heavyRain'];
var rainDropHeight = 2;
var rainDropWidth = 1;
var slowSpeed = 1;
var mediumSpeed = 2;
var highSpeed = 3;
var speeds = [slowSpeed, mediumSpeed, highSpeed];
var rainDrops = [];
var rainDrop = createRainDrop(getRandomX(), 0, getRandomSpeed());
canvas.addEventListener("keydown", function (e) { return upOrDownArrow(e); });
setInterval(rain, 1000 / 50);
function rain() {
    drawBackground();
    drawRainDrop(rainDrop);
    rainDrop.y += mediumSpeed;
    if (rainDrop.y > canvas.height) {
        rainDrop.y = 0;
        rainDrop.x = getRandomX();
    }
}
function getRandomSpeed() {
    return speeds[Math.floor(Math.random() * speeds.length)];
}
function createRainDrop(x, y, speed) {
    return { x: x, y: y, speed: speed };
}
function getRandomX() {
    return Math.floor(Math.random() * canvas.width);
}
function drawRainDrop(drop) {
    context.fillStyle = "blue";
    context.fillRect(drop.x, drop.y, rainDropWidth, rainDropHeight);
}
function getRandomRainType() {
    return rainTypes[Math.floor(Math.random() * rainTypes.length)];
}
function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function upOrDownArrow(event) {
    var code = Number(event.code);
    if (code == 38) {
        if (rainType == 'drizzle')
            rainType = 'drizzle';
        else {
            var indexOfCurrentType = rainTypes[rainType];
            rainType = rainTypes[indexOfCurrentType + 1];
        }
    }
    else if (code == 40) {
        if (rainType == 'heavyRain')
            rainType = 'heavyRain';
        else {
            var indexOfCurrentType = rainTypes[rainType];
            rainType = rainTypes[indexOfCurrentType - 1];
        }
    }
}
