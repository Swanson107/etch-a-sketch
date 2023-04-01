const container = document.getElementById('container');
const input = document.getElementById('input');

let gridShow = false;

function drawGrid(size) {
    let boxSize = Math.round(((780 * 780) / size) / 780);
    container.style.width = (boxSize * size + 'px');
    container.style.height = (boxSize * size + 'px');
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        for (let n = 0; n < size; n++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");
            box.style.height = `${boxSize - 2}.px`;
            box.style.width = `${boxSize - 2}.px`;
            div.append(box);
            
        }

    container.append(div);
    }

    return boxSize;
    

    
}

function destroyGrid() {
    alert("Grid Destroyed");
    let element = document.querySelectorAll('box');
    element.remove();
}

function eventHandler(event) {
    //destroyGrid();
    if (event === 'submit') {
        let num = input.value;
        if (Number.isInteger(Math.floor(parseInt(num)))) {
            if (num < 2 || num > 100) {
                alert("Min: 2. Max: 100")
            } else {
                drawGrid(num);
            }
        } else {
            alert("No valid value in input");
        }
    }
}
