const choices = ["Rock", "Paper", "Scissors"]; 

function getComputerChoice (choice) {
    let x = Math.random();
        if (x <= 0.34){
            choice = ("Rock");
        } else if (x <= 0.67) {
            choice = ("Paper");
        } else {
            choice = ("Scissors");

        }
    let text1 = ("Computer has chosen ");
console.log(text1 + "'" + choice + "'");

}

getComputerChoice("")