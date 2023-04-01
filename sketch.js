const container = document.getElementById('container');
let size = 20;

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        for (let n = 0; n < size; n++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");

            div.append(box);
        }
    container.append(div);
    }

}

document.onload = drawGrid(20);