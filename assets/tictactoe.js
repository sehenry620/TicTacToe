(function(){
    // console.log("hey");

    let currentPlayer = "X";
    let playerXSelections = [];
    let playerOSelections = [];

    const winningCombinations = [
        //horizontal combos
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        //vertical combos
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        //diagonal combos
        [1, 5, 9],
        [3, 5, 7]
    ];

    const cellElementArray = document.querySelectorAll('td')

    for (let i = 0; i < cellElementArray.length; i++) {
        let currentCell = cellElementArray[i]
        currentCell.addEventListener('click', function(event){
            const clickedCellElement = event.target;
            console.log("You clicked on cell number: " + clickedCellElement.id)

            if(clickedCellElement.innerHTML === ""){
                if(currentPlayer === "X"){
                    clickedCellElement.innerHTML = "X";
                    
                    currentPlayer = "O"
                    playerXSelections.push(parseInt(clickedCellElement.id))
                    checkForWin(playerXSelections, "X")
                    // console.log(playerXSelections)
                }
                else {
                    clickedCellElement.innerHTML = "O"
                    currentPlayer = "X"
                    playerOSelections.push(parseInt(clickedCellElement.id))
                    checkForWin(playerOSelections, "O")
                    // console.log(playerOSelections)
                } 
            }
            
           
    


        });

      
    }

    function checkForWin(playerSelections, currentPlayer){
        for(let i = 0; i < winningCombinations.length; i++){
            let matches = 0;
            // console.log(playerSelections)
            for(let j = 0; j < playerSelections.length; j++){
                console.log("hello")
                if(winningCombinations[i].includes(playerSelections[j])){
                    matches++;
                }
                if (matches === 3){
                    alert("Player " + currentPlayer + " wins");
                    return true;
                }
            }
        }
        return false;
    }
    
    function newGame(){
        playerXSelections = [];
        playerOSelections = [];
        currentPlayer = "X"
        for (let i = 0; i < cellElementArray.length; i++){
            cellElementArray[i].innerHTML = ""
        }
    }

    var button = document.querySelector("#button")
    button.addEventListener("click", newGame)




















})();