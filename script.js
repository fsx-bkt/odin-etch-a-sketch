let squareContainer = document.querySelector(".container");
function MakeSquareGrid(){
    let number = 16 ** 2;
    let counter = 0;

    while(counter < number){
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        squareContainer.appendChild(square);
        counter++;
    }

    console.log(counter);
}

MakeSquareGrid();