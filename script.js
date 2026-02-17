let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
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

const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

function cleanGame() {
    const buttonClean = document.querySelectorAll('button');

    buttonClean.forEach(element => {element.remove();});
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a draw! No points!";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultDiv.textContent = "The player wins! Rock beats scissors.";
        humanScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        resultDiv.textContent = "The computer wins! Paper beats rock.";
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultDiv.textContent = "The computer wins! Rock beats scissors.";
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice== "paper") {
        resultDiv.textContent = "The player wins! Scissors beats paper.";
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        resultDiv.textContent = "The player wins! Paper beats rock.";
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        resultDiv.textContent = "The computer wins! Scissors beats paper.";
        computerScore += 1;
    }
    scoreDiv.textContent = `Player: ${humanScore}   Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent = "The player clinches the win!";
        cleanGame();
    }
    else if (computerScore == 5) {
        resultDiv.textContent = "The computer snags the win!";
        cleanGame();
    }
}


   

const rockButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const paperButton = document.createElement('button');

resultDiv.textContent = "Make your choice.";
scoreDiv.textContent = `Player: ${humanScore}   Computer: ${computerScore}`
rockButton.textContent = "Go with rock.";
scissorsButton.textContent = "Go with scissors.";
paperButton.textContent = "Go with paper.";

rockButton.addEventListener("click", () => {playRound("rock", getComputerChoice());});
scissorsButton.addEventListener("click", () => {playRound("scissors", getComputerChoice());});
paperButton.addEventListener("click", () => {playRound("paper", getComputerChoice());});

const bodyTemplate = document.querySelector("body");

bodyTemplate.appendChild(resultDiv);
bodyTemplate.appendChild(scoreDiv);
bodyTemplate.appendChild(rockButton);
bodyTemplate.appendChild(scissorsButton);
bodyTemplate.appendChild(paperButton);
