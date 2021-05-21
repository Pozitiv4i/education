let box1 = document.getElementById('box-1');
let randomColor = ["red", "pink", "yellow", "orange", "green"];
box1.addEventListener("click", function() {
    box1.style.backgroundColor = randomColor[Math.floor(Math.random(randomColor) * randomColor.length)]
});