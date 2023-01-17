const choices = ["Rock", "Paper", "Scissors"]; 
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const results = document.querySelector(".results");

let playerScore = 0;
let computerScore = 0;

let playing = true;






buttonRock.addEventListener("click", function() {
    const playerChoice = (this.textContent);
    const computerChoice = getComputerChoice();
    playRPS(playerChoice, computerChoice);
    console.log(playerScore, computerScore);
    

});
buttonPaper.addEventListener("click", function(){
    const playerChoice = (this.textContent);
    const computerChoice = getComputerChoice();
    playRPS(playerChoice, computerChoice);

});
buttonScissors.addEventListener("click", function(){
    const playerChoice = (this.textContent);
    const computerChoice = getComputerChoice();
    playRPS(playerChoice, computerChoice);

});










function game(playerChoice, computerChoice){
    console.log(playerChoice, computerChoice);
};


            //Now we want to call the functions to play a single round of RPS
        //     let round = playRPS(playerChoice, computerChoice);
        //         if (round == "Player Wins") {
        //             playerScore++;
        //         } else if (round == "Computer Wins") {
        //             computerScore++;
        //         }
        //         //Else a tie, but since the score doesn't change we don't need it.

        //     console.log("Player: " + playerScore);
        //     console.log("Computer: " + computerScore);
        // }
        // console.log(score(playerScore, computerScore));


















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

// function getPlayerChoice (choice) {



// getPlayerChoice()
//This is the code I tried for Player Selection. Now I need to include it in the PLAY function.


function playRPS (playerSelection, computerSelection) {

    if(playing){
    switch(playerSelection) {
        case("Rock"):
            if (computerSelection == "ROCK") {
                results.textContent = "Game ends in a tie.";
                console.log("Game ends in a tie.");
                return("Tie");
            }
            if (computerSelection == "PAPER") {
                results.textContent = "Computer wins! Paper covers Rock!";
                console.log("Computer wins! Paper covers Rock!");
                computerScore++;
                computerScoreElement.textContent = computerScore;
                score(playerScore, computerScore);
                return("Computer Wins");
            }
            if (computerSelection == "SCISSORS") {
                results.textContent = "Player wins! Rock smashes Scissors!";
                console.log("Player wins! Rock smashes Scissors!");
                playerScore++;
                playerScoreElement.textContent = playerScore;
                score(playerScore, computerScore);
                return("Player Wins");
            }
                break;

        case("Paper"):
            if (computerSelection == "ROCK") {
                results.textContent = "Player wins! Paper covers Rock!";
                console.log("Player wins! Paper covers Rock!");
                playerScore++;
                playerScoreElement.textContent = playerScore;
                score(playerScore, computerScore);
                return("Player Wins");
            }
            if (computerSelection == "PAPER") {
                results.textContent = "Game ends in a tie.";
                console.log("Game ends in a tie.");
                return("Tie");
            }
            if (computerSelection == "SCISSORS") {
                results.textContent = "Computer wins! Scissors cut Paper!";
                console.log("Computer wins! Scissors cut Paper!");
                computerScore++;
                computerScoreElement.textContent = computerScore;
                score(playerScore, computerScore);
                return("Computer Wins");
            }
                break;

        case("Scissors"):
            if (computerSelection == "ROCK") {
                results.textContent = "Computer wins! Rock smashes Scissors";
                console.log("Computer wins! Rock smashes Scissors");
                computerScore++;
                computerScoreElement.textContent = computerScore;
                score(playerScore, computerScore);
                return("Computer Wins");
            }
            if (computerSelection == "PAPER") {
                results.textContent = "Player wins! Scissors cut Paper!";
                console.log("Player wins! Scissors cut Paper!");
                playerScore++;
                playerScoreElement.textContent = playerScore;
                score(playerScore, computerScore);
                return("Player Wins");
            }
            if (computerSelection == "SCISSORS") {
                results.textContent = "Game ends in a tie.";
                console.log("Game ends in a tie.");
                return("Tie");
            }
                break;
            
        }


    }

    // if(playerScore >= 5 || computerScore >=5){
    //     playerScore.textContent
    // }
}

function score(playerScore, computerScore) {
   if (playerScore >= 5){
    results.textContent = "Player wins RPS! Refresh to play again!";
    playing = false;
}

   if (computerScore >=5){
    results.textContent = "Computer wins RPS! Refresh to play again!";
    playing = false;
   }
}

// function game() {
//     //First I want to start with a score of 0 for player and computer
//     let playerScore = 0;
//     let computerScore = 0;

//     // //We no longer need 5 rounds total, so commenting out
//          for(let i = 0; i < 5; i++){
//             //Now we want to call the functions to play a single round of RPS
//             let playerChoice = getPlayerChoice();
//             let computerChoice = getComputerChoice();
//             let round = playRPS(playerChoice, computerChoice);
//                 if (round == "Player Wins") {
//                     playerScore++;
//                 } else if (round == "Computer Wins") {
//                     computerScore++;
//                 }
//                 //Else a tie, but since the score doesn't change we don't need it.

//             console.log("Player: " + playerScore);
//             console.log("Computer: " + computerScore);
//         }
//         console.log(score(playerScore, computerScore));
//     }
// game();
