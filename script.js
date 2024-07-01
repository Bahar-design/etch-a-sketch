let size = 16;



function createGrid() {
    for (let i=0; i < (size*size); i++ ) {
        let div = document.createElement("div");
        container.appendChild("div");
        div.style.cssText = "width: 2px; height: 2px;";
    }
}