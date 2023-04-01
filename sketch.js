const container = document.getElementById('container');
const input = document.getElementById('input');

let gridShow = false;

function drawGrid(size) {
    destroyGrid();
    let boxSize = Math.round(((680 * 680) / size) / 680);
    container.style.width = (boxSize * size + 'px');
    container.style.height = (boxSize * size + 'px');
    for (let i = 0; i < size; i++) {
    
        let div = document.createElement('div');
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");
            box.style.height = `${boxSize}.px`;
            box.style.width = `${boxSize}.px`;
            box.style.backgroundColor = 'white';
            box.style.userSelect = 'none';
            box.addEventListener('mouseover', function(e) { changeColor(e, this); });
            div.append(box);   
        }
    container.append(div);
    }
}


function changeColor(event, element) {
    if (event.buttons === 1) {
        if (element.style.backgroundColor === 'white') {
            element.style.backgroundColor = 'black';
        } else if (element.style.backgroundColor === 'black') {
            element.style.backgroundColor = 'white';
        }
    }
}


function destroyGrid() {
    console.log("Grid Destroy Starting...");
    let boxes = document.querySelectorAll('.box');
    boxes = Array.from(boxes);
    for (i = 0; i < boxes.length; i++){
        destroyBox = document.querySelector('.box');
        destroyBox.remove()
    }
}

function eventHandler(event) {
    if (event === 'submit') {
        let num = input.value;
        if (Number.isInteger(Math.floor(parseInt(num)))) {
            if (num < 2 || num > 100) {
                alert("Number must be at least 2 and no greater than 100")
            } else {
                drawGrid(num);
            }
        } else {
            alert("No valid value in input. Enter a number");
        }
    }
}
