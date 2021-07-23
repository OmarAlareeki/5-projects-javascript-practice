const increaseEl = document.getElementById('increase');
const decreaseEl = document.getElementById('decrease');
const resetEl = document.getElementById('reset');
var textBox = document.getElementById("number");

var a = 0;

function increase(){
    textBox.value++;
}  
increaseEl.addEventListener('click', increase);  

function decrease(){
    textBox.value--;
}    
decreaseEl.addEventListener('click', decrease);

function reset(){
    textBox.value = 0;
}    
resetEl.addEventListener('click', reset);
