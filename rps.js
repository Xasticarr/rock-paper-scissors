const choices = ["Rock", "Paper", "Scissors"]; 

function getComputerChoice (choice) {
    let x = Math.random();
    let text1 = ("Computer has chosen ");
        if (x <= 0.34){
            choice = ("ROCK");
            console.log(text1 + choice);
            return("ROCK");
        } else if (x <= 0.67) {
            choice = ("PAPER");
            console.log(text1 + choice);
            return("PAPER");
        } else {
            choice = ("SCISSORS");
            console.log(text1 + choice);
            return("SCISSORS");

        }

}

//getComputerChoice("") //This is calling the function to show a console log with CPU Choice

function getPlayerChoice (choice) {

let playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
let playerSelection = playerChoice.toUpperCase();
let text2 = ("You have chosen ");
    if (playerSelection == "ROCK") {
        choice = ("ROCK");
        console.log(text2 + playerSelection);
        return("ROCK");
    } else if (playerSelection == "PAPER") {
        choice = ("PAPER");
        console.log(text2 + playerSelection);
        return("PAPER");
    } else if (playerSelection == "SCISSORS") {
        choice = ("SCISSORS");
        console.log(text2 + playerSelection);
        return("SCISSORS");
    } else {
         alert("Please choose Rock, Paper, or Scissors");
    }
}

// getPlayerChoice()
//This is the code I tried for Player Selection. Now I need to include it in the PLAY function.


function playRPS (playerSelection, computerSelection) {
    switch(playerSelection) {
        case("ROCK"):
            if (computerSelection == "ROCK") {
                console.log("Game ends in a tie.");
                return("Tie");
            }
            if (computerSelection == "PAPER") {
                console.log("Computer wins! Paper covers Rock!");
                return("Computer Wins");
            }
            if (computerSelection == "SCISSORS") {
                console.log("Player wins! Rock smashes Scissors!");
                return("Player Wins");
            }
                break;

        case("PAPER"):
            if (computerSelection == "ROCK") {
                console.log("Player wins! Paper covers Rock!");
                return("Player Wins");
            }
            if (computerSelection == "PAPER") {
                console.log("Game ends in a tie.");
                return("Tie");
            }
            if (computerSelection == "SCISSORS") {
                console.log("Computer wins! Scissors cut Paper!");
                return("Computer Wins");
            }
                break;

        case("SCISSORS"):
            if (computerSelection == "ROCK") {
                console.log("Computer wins! Rock smashes Scissors");
                return("Computer Wins");
            }
            if (computerSelection == "PAPER") {
                console.log("Player wins! Scissors cut Paper!");
                return("Player Wins");
            }
            if (computerSelection == "SCISSORS") {
                console.log("Game ends in a tie.");
                return("Tie");
            }
                break;
            
    }

    

}

function score(playerScore, computerScore) {
    if(playerScore > computerScore) {
        return("Player wins RPS");
    } else if (playerScore < computerScore) {
        return("Computer wins RPS");
    } else {
        return("RPS ends in a tie");
    }
}
