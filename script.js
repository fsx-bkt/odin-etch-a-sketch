 const defaultGridSize = 16;
 const squareContainer = document.querySelector(".container");
 const changeGridButton = document.querySelector("#changeGridSize");

changeGridButton.addEventListener("click", changeGridSize);

function changeGridSize(){
    let newGridSize = prompt("Enter new number of squares per side:");
    if (!Number.isInteger(newGridSize) && newGridSize <= 0 && newGridSize > 100){
        alert("Please enter a number between 1 - 100!");
        return;
    }

    squareContainer.textContent = '';
    makeSquareGrid(newGridSize);
}

function makeSquareGrid(gridSize){
    let totalSquares = gridSize ** 2;
    let flexBasisModifier = (100 / gridSize) + '%';
    let counter = 0;

    while(counter < totalSquares){
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.flexBasis = flexBasisModifier;
        squareContainer.appendChild(square);
        counter++;
    }
}

makeSquareGrid(defaultGridSize);