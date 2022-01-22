const faceButton = document.querySelector("face-button");
const face = document.getElementById("face")

face.addEventListener("mouseover", buttonHover)
face.addEventListener("mouseout", buttonExit)

function buttonHover (event) {
    console.log("hovering")
    face.src = "/img/happy.svg"
    
}

function buttonExit (event) {
    face.src = "/img/focused.svg"
}