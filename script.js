let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.33) {
        return "rock";
    }
    else if (rand >= 0.34 && rand < 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }

}

function getHumanChoice() {
    let answer = prompt("Enter your choice (rock, paper, scissors): ");
    answer = answer.toLowerCase();
    switch (answer) {
        case("scissors"): 
            return "scissors";
        

        case("paper"): 
            return "paper";
        

        case("rock"): 
            return "rock";
        

        default:
            return null;
    }
}

function playGame(roundcount=5) {

    let humanSelect;
    let computerSelect;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw! Both players get a point!");
            computerScore += 1;
            humanScore += 1;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("The player wins! Rock beats scissors.");
            humanScore += 1;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("The computer wins! Paper beats rock.");
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("The computer wins! Rock beats scissors.");
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice== "paper") {
            console.log("The player wins! Scissors beats paper.");
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("The player wins! Paper beats rock.");
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("The computer wins! Scissors beats paper.");
            computerScore += 1;
        }
    }

    for (i=0;i<roundcount;i++) {
        humanSelect = getHumanChoice();
        computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
        console.log("Current Score: Player-" + humanScore + " Computer-" + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("The player clinches the win in the BO5!");
    }
    else {
        console.log("The computer snags the win from the BO5!");
    }
}
