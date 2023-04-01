const container = document.getElementById('container');
const input = document.getElementById('input');

let gridShow = false;

function drawGrid(size) {
    destroyGrid();
    let boxSize = Math.round(((780 * 780) / size) / 780);
    container.style.width = (boxSize * size + 'px');
    container.style.height = (boxSize * size + 'px');
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");
            box.style.height = `${boxSize - 2}.px`;
            box.style.width = `${boxSize - 2}.px`;
            div.append(box);   
        }
    container.append(div);
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
            if (num < 2 || num > 144) {
                alert("Min: 2. Max: 144")
            } else {
                drawGrid(num);
            }
        } else {
            alert("No valid value in input. Enter a number");
        }
    }
}
