// make all the variables
const container = document.querySelector('.canvas')
const size1 = document.querySelector('.pixelNumbers')
let size = size1.value
const color = document.querySelector('.colourPicker')
const reset = document.querySelector('.resetBtn')
const eraseBtn = document.querySelector('.eraseBtn');

let draw = false
let erase = false;

// function for generating number of pixels and colouring
function createPixel(size){
    container.style.setProperty('--size', size)

    for(let i=0; i<size*size; i++)
    {
        const div = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('mousedown', function(){
            if (erase) {
                div.style.backgroundColor = '';
            } else {
                draw = true;
                div.style.backgroundColor = color.value;
            }
        });
        div.addEventListener('mouseenter', function (event) {
            if (draw && !erase) {
                div.style.backgroundColor = color.value;
            } else if (draw && erase) {
                div.style.backgroundColor = ''; // Erase color
            }
        });
        container.appendChild(div)
    }
}

//calling the function
createPixel(size)

//this is to make the colouring while dragging otherwise it happens only on hover
window.addEventListener('mousedown', function(){
    draw = true
})
window.addEventListener('mouseup', function(){
    draw = false
})

//reset thingy
function resetting(){
    container.innerHTML = ''
    createPixel(size)
}

reset.addEventListener('click', resetting)

//function to change pixels according to user input
size1.addEventListener('keyup', function(){
    size = size1.value
    resetting()
})
// function for eraser button
eraseBtn.addEventListener('click', function () {
    erase = !erase; // Toggle erase mode
    if (erase) {
        eraseBtn.textContent = 'Drawing';
    } else {
        eraseBtn.textContent = 'Erasing';
    }
});
