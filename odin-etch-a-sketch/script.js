const container = document.getElementById("container");
const changeGrid = document.getElementById("changeGrid");

window.onload = defaultGrid();

function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        div.style.flexBasis = "6.25%";
        div.style.maxHeight = "6.25%";
        container.appendChild(div);
    }
    let gridList = document.querySelectorAll(".grid");
    gridList.forEach(element => {
        element.addEventListener("mouseover", changeColor);
    });
}

function createGrid(size,sizePow) {
    gridList = document.querySelectorAll(".grid");
    gridList.forEach(element => {
        element.remove();
    });
    for(let i=0;i<sizePow;i++) {
        let div = document.createElement("div");
        let num = (100/size) + "%";
        div.style.flexBasis = num;
        div.style.maxHeight = num;
        div.classList.add("grid");
        container.appendChild(div);
    }
    gridList = document.querySelectorAll(".grid");
    gridList.forEach(element => {
        element.addEventListener("mouseover", changeColor);
    });
}

function changeColor() {

    this.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}

changeGrid.addEventListener("click", () => {
    let size = Number(prompt("How many tiles? (max 64)"));
    if (size <= 64 && size > 0) {
        let sizePow = Math.pow(size, 2);
        createGrid(size,sizePow);
    } else {
        return false;
    }
})