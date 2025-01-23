function getComputerChoice(){

    let randomNumber = Math.random();

    if (randomNumber < .33){
        return "rock";
    }
    else if (randomNumber >.33 && randomNumber < .66){
        return "paper";
    }
    else if (randomNumber > .66){
        return "scissors";
    } 
}



function getHumanChoice(){
    let answers = prompt("enter your choice:");
    answers = answers.toLowerCase()
    return answers;     
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanAnswer, computerChoice){
    let resultMessage = "";

    if (humanAnswer == "rock" && computerChoice == "rock"){
        resultMessage = "tie";
    }

    else if (humanAnswer == "rock" && computerChoice == "paper"){
        computerScore += 1;
        resultMessage = 'You Lose! paper beats rock';
    }

    else if (humanAnswer== "rock" && computerChoice == "scissors"){
        humanScore += 1;
        resultMessage = 'You win! rock beats scissors';
    }

    else if (humanAnswer == "paper" && computerChoice == "paper"){
        resultMessage = 'tie';
    }

    else if (humanAnswer == "paper" && computerChoice == "scissors"){
        resultMessage = 'you lose! scissors beats paper';
        computerScore += 1;
    }

    else if (humanAnswer == "paper" && computerChoice == "rock"){
        humanScore += 1;
        resultMessage = 'you win! paper beats rock';
    }       
    
    else if (humanAnswer == "scissors" && computerChoice == "scissors"){
        resultMessage = 'tie';
    }

    else if (humanAnswer == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        resultMessage = 'you lose! rock beats scissors';
    }

    else if (humanAnswer == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        resultMessage = "you win! paper beats scissors";
    }

    document.getElementById("playerScore").textContent = `player score is ${humanScore}`;
    document.getElementById("computerScore").textContent= `computer score is ${computerScore}`;
    document.getElementById("resultMessage").textContent = resultMessage;

    if(humanScore === 5){
        document.getElementById("resultMessage").textContent = "you have won!";
        startOver();
    }
    else if(computerScore === 5){
        document.getElementById("resultMessage").textContent = "computer has won!";
        startOver();
    }

}

function startOver(){
    humanScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = `player score is ${humanScore}`;
    document.getElementById("computerScore").textContent= `computer score is ${computerScore}`;  
}





document.getElementById("RockButton").addEventListener("click", () => {playRound("rock", getComputerChoice())});
document.getElementById("PaperButton").addEventListener("click", () => {playRound("paper", getComputerChoice())});
document.getElementById("ScissorsButton").addEventListener("click", () => {playRound("scissors", getComputerChoice())});
