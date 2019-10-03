(function(){
    // console.log("hey");

    let currentPlayer = "X";
    let playerXSelections = [];
    let playerOSelections = [];

    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    const cellElementArray = document.querySelectorAll('td')

    for (let i = 0; i < cellElementArray.length; i++) {
        let currentCell = cellElementArray[i]
        currentCell.addEventListener('click', function(event){
            const clickedCellElement = event.target;
            console.log("You clicked on cell number: " + clickedCellElement.id)

            if(currentPlayer === "X"){
                clickedCellElement.innerHTML = "X";
                currentPlayer = "O"
            }else {
                clickedCellElement.innerHTML = "O"
                currentPlayer = "X"
            }

            











        });
    }

    






















})();