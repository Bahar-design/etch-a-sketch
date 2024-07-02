let size = 16;

function createGrid() {
    for (let i=0; i < (size * size); i++ ) {
        const container = document.querySelector(".container");
        let div = document.createElement("div");
        div.style.width = "calc(100% / 16)";
        div.style.height = "calc(100% / 16)";
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #ddd";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColors();
        });
        container.appendChild(div);
    }
}
function getRandomColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
createGrid();