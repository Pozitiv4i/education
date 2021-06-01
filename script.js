let box1 = document.getElementById('box-1');
let randomColor = ["red", "pink", "yellow", "orange", "green"];
let box2 = document.getElementById('task-2');
let paragraph = document.getElementById('task-3')
box1.addEventListener("click", function() {
    box1.style.backgroundColor = randomColor[Math.floor(Math.random(randomColor) * randomColor.length)]
});
box2.addEventListener('click', event => { 
    event.target.style.borderColor = "red"
});
paragraph.addEventListener('click', event => { 
    event.target.style.color = event.target.textContent;
});
