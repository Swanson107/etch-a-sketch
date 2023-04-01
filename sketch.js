const container = document.getElementById('container');

function drawGrid(size) {
    let boxSize = Math.floor(((640 * 640) / size) / 640);
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

let boxes = document.onload = drawGrid();
