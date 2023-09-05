let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",function(detss){
    cursor.style.left = detss.x + "px"
    cursor.style.top = detss.y + "px"
})