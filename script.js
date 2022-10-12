var canvas = document.getElementById("canvas");
var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
var speed = 50;
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener("keydown", upOrDownArrow);
setInterval(rain, 1000 / speed);
function rain() {
    console.log(canvas.width);
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
