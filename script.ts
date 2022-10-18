const canvas = <HTMLCanvasElement> document.getElementById('canvas')
const context = <CanvasRenderingContext2D> canvas.getContext('2d')

const rainTypes = ['drizzle', 'normal', 'heavy rain']

let rainType = getRandomRainType()

const rainDropHeight = 2
const rainDropWidth = 1

interface Drop {
  x: number,
  y: number,
  speed: number
}

const slowSpeed = 2
const mediumSpeed = 3
const highSpeed = 4

const speeds = [slowSpeed, mediumSpeed, highSpeed]

let rainDrops = createRainDrops()

document.addEventListener("keydown", (e) => {
  let key = e.key
  
  if (key == 'ArrowUp') {
    if (rainType == 'heavy rain') rainType = 'heavy rain'
    else {
      let indexOfCurrentType = rainTypes.indexOf(rainType)
      rainType = rainTypes[indexOfCurrentType + 1]
    }
  }
  else if (key == 'ArrowDown') {
    if (rainType == 'drizzle') rainType = 'drizzle'
    else {
      let indexOfCurrentType = rainTypes.indexOf(rainType)
      rainType = rainTypes[indexOfCurrentType - 1]
    }
  }
  rainDrops = createRainDrops()
})

setInterval(rain, 1000/50)

function rain() {
  drawBackground()
  rainDrops.forEach(drop => {
    drawRainDrop(drop)
    drop.y += drop.speed
    if(drop.y > canvas.height) {
      drop.y = 0
      drop.x = getRandomX()
      drop.speed = getRandomSpeed()
    }
  })
}

function getRandomSpeed() {
  return speeds[Math.floor(Math.random() * speeds.length)]
}

function createRainDrop(): Drop {
  let drop: Drop = {
    x: getRandomX(),
    y: 0,
    speed: getRandomSpeed()
  }
  return drop
}

function createRainDrops(): Drop[] {
  let amountOfDrops = 30
  if (rainType == 'drizzle') amountOfDrops = 30
  else if (rainType == 'normal') amountOfDrops = 80
  else if (rainType == 'heavy rain') amountOfDrops = 200

  let drops: Drop[] = []
  for (let i = 0; i < amountOfDrops; i++) {
    drops.push(createRainDrop())
  }
  return drops
}

function getRandomX(): number {
  return Math.floor(Math.random() * canvas.width)
}

function drawRainDrop(drop: Drop) {
  context.fillStyle = 'blue'
  context.fillRect(drop.x, drop.y, rainDropWidth, rainDropHeight)
}

function getRandomRainType(): string {
  return rainTypes[Math.floor(Math.random() * rainTypes.length)]
}

function drawBackground() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
}