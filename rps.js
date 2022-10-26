const choices = ["Rock", "Paper", "Scissors"]; 

function getComputerChoice (choice) {
    let x = Math.random();
        if (x <= 0.34){
            choice = ("ROCK");
        } else if (x <= 0.67) {
            choice = ("PAPER");
        } else {
            choice = ("SCISSORS");

        }
    let text1 = ("Computer has chosen ");
console.log(text1 + choice);

}

//getComputerChoice("") //This is calling the function to show a console log with CPU Choice

let playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
let playerSelection = playerChoice.toUpperCase();
let text2 = ("You have chosen ");
console.log(text2 + playerSelection);


function playRPS (playerSelection, computerSelection) {

}
