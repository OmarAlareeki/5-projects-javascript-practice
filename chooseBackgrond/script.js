
const buttonEl = document.getElementById('button');


function changeColor(colorInput) {

    colorInput = document.getElementById('input').value;
    document.body.style.backgroundColor = colorInput;
    
}
buttonEl.addEventListener('click',changeColor);
changeColor()