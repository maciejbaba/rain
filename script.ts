const body = document.getElementById("body")

let speed = 1

body?.addEventListener("keypress", function(event) {
  let code = event.code
  
  if (code == "38") {
    if (speed == 10) return
    speed++
  }
  else if (code == "40") {
    if (speed == 0) return
    speed--
  }
})