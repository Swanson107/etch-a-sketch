const container = document.getElementById('container');
const input = document.getElementById('input');

function drawGrid(size) {
    let boxSize = Math.round(((640 * 640) / size) / 640);
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        for (let n = 0; n < size; n++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");
            box.style.height = `${boxSize - 2}.px`;
            box.style.width = `${boxSize - 2}.px`;
            div.append(box);
            container.width = (boxSize * size);
            container.height = (boxSize * size);

        }

    container.append(div);
    }

    
}

function destroyGrid() {
    const element = document.getElementById('div');
    element.removeChild;
}

//let boxes = document.onload = drawGrid();

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
