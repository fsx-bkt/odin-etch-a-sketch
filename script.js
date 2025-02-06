 const defaultGridSize = 16;
 const squareContainer = document.querySelector(".container");
 const changeGridButton = document.querySelector("#changeGridSize");

changeGridButton.addEventListener("click", changeGridSize);

function changeGridSize(){
    let newGridSize = Number(prompt("Enter new number of squares per side:"));
    if (!newGridSize ||
         !Number.isInteger(newGridSize) ||
          newGridSize < 1 ||
           newGridSize > 100){
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
        square.addEventListener("mouseover", setRandomRGBColour);
        square.addEventListener("mouseout", () => {
            square.style.transition = "background-color 1500ms"
            square.style.backgroundColor = "white";
        });
        squareContainer.appendChild(square);
        counter++;
    }
}

function setRandomRGBColour(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    //this.style.transitionDuration = '0ms';
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
makeSquareGrid(defaultGridSize);