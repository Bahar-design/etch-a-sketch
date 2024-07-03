const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createGrid(inp) {

    container.replaceChildren();
    const sqrSize = (750 / inp);

    for (let i=0; i < (inp * inp); i++ ) {
        let div = document.createElement("div");
        div.style.width = `${sqrSize}px`;
        div.style.height = `${sqrSize}px`;
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #353935";
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

btn.addEventListener("click", () => {
    let inp = parseInt(prompt("Enter a number between 0 and 100 for the updated grid:"));
    if (!isNaN(inp) && inp <= 100 && inp > 0) {
        createGrid(inp);
    }
    else {
        alert("Your input is not valid. Enter a number between 0 and 100.");
    }
});

createGrid(16);