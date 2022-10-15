const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const context = <CanvasRenderingContext2D> canvas.getContext("2d")

let speed = 50

let rainDropX = getRandomX()
let rainDropY = 0
let slowSpeed = 1
let mediumSpeed = 2
let highSpeed = 3

canvas.addEventListener("keydown", upOrDownArrow)

setInterval(rain, 1000/speed)

function rain() {
  drawBackground()
  drawRainDrop(rainDropX, rainDropY)
  rainDropY += mediumSpeed
  if (rainDropY > canvas.height) {
    rainDropY = 0
    rainDropX = getRandomX()
  }
}

function getRandomX(): number {
  return Math.floor(Math.random() * canvas.width)
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
    if (speed == 200) speed = 150
    speed += 50
  }
  else if (code == "40") {
    if (speed == 0) speed = 50
    speed -= 50
  }
}