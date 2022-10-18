var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var rainTypes = ['drizzle', 'normal', 'heavy rain'];
var rainType = getRandomRainType();
var rainDropHeight = 2;
var rainDropWidth = 1;
var slowSpeed = 2;
var mediumSpeed = 3;
var highSpeed = 4;
var speeds = [slowSpeed, mediumSpeed, highSpeed];
var rainDrops = createRainDrops();
document.addEventListener("keydown", function (e) {
    var key = e.key;
    if (key == 'ArrowUp') {
        if (rainType == 'heavy rain')
            rainType = 'heavy rain';
        else {
            var indexOfCurrentType = rainTypes.indexOf(rainType);
            rainType = rainTypes[indexOfCurrentType + 1];
        }
    }
    else if (key == 'ArrowDown') {
        if (rainType == 'drizzle')
            rainType = 'drizzle';
        else {
            var indexOfCurrentType = rainTypes.indexOf(rainType);
            rainType = rainTypes[indexOfCurrentType - 1];
        }
    }
    rainDrops = createRainDrops();
});
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
function createRainDrops() {
    var amountOfDrops = 30;
    if (rainType == 'drizzle')
        amountOfDrops = 30;
    else if (rainType == 'normal')
        amountOfDrops = 80;
    else if (rainType == 'heavy rain')
        amountOfDrops = 200;
    var drops = [];
    for (var i = 0; i < amountOfDrops; i++) {
        drops.push(createRainDrop());
    }
    return drops;
}
function getRandomX() {
    return Math.floor(Math.random() * canvas.width);
}
function drawRainDrop(drop) {
    context.fillStyle = 'blue';
    context.fillRect(drop.x, drop.y, rainDropWidth, rainDropHeight);
}
function getRandomRainType() {
    return rainTypes[Math.floor(Math.random() * rainTypes.length)];
}
function drawBackground() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}
