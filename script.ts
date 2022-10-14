const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const context = <CanvasRenderingContext2D> canvas.getContext("2d")

let speed = 50

let rainDropXspeed = 0
let rainDropYspeed = 1

let rainDropX = 0
let rainDropY = 0

canvas.addEventListener("keydown", upOrDownArrow)

setInterval(rain, 1000/speed)

function rain() {
  drawBackground()
  drawRainDrop(rainDropX, rainDropY)
  rainDropY += rainDropYspeed
}

function drawRainDrop(x: number, y: number) {
  context.fillStyle = "blue"
  context.fillRect(x, y, 1, 2)
}

function drawBackground() {
  context.fillStyle = "black"
  context.fillRect(0, 0, canvas.width, canvas.height)
}

function upOrDownArrow(event: { code: any }) {
  let code = event.code
  
  if (code == "38") {
    if (speed == 200) return
    speed += 50
  }
  else if (code == "40") {
    if (speed == 0) return
    speed--
  }
}