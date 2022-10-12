const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const context = canvas?.getContext("2d")

let speed = 50

canvas?.addEventListener("keydown", upOrDownArrow)

setInterval(rain, 1000/speed)

function rain() {
  console.log(canvas.width)
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