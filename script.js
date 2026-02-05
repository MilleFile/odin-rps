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