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
var rainDrops = [createRainDrop()];
canvas.addEventListener("keydown", function (e) { return upOrDownArrow(e); });
setInterval(rain, 1000 / 50);
function rain() {
    drawBackground();
    rainDrops.forEach(function (drop) {
        drawRainDrop(drop);
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = getRandomX();
            drop.speed = getRandomSpeed();
        }
    });
}
function getRandomSpeed() {
    return speeds[Math.floor(Math.random() * speeds.length)];
}
function createRainDrop() {
    var drop = {
        x: getRandomX(),
        y: 0,
        speed: getRandomSpeed()
    };
    return drop;
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
