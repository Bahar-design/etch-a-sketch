const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createGrid(inp) {

    container.replaceChildren();
    const sqrSize = container.clientWidth / inp;

    for (let i=0; i < (inp * inp); i++ ) {
        const div = document.createElement("div");
        div.style.width = `${sqrSize}px`;
        div.style.height = `${sqrSize}px`;
        div.style.boxSizing = "border-box";
        div.style.border = "0.5px solid black";
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
    let inp = parseInt(prompt("Write down a number between 0 and 100:"));
    if (typeof (inp) === Number && inp <= 100 && inp > 0) {
        createGrid(inp);
    }
    else {
        alert("Your input is not valid. Enter a number between 0 and 100.");
    }
});

createGrid(16);