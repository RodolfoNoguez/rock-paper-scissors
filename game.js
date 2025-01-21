function getCompuerChoice(){

    randomNumber = Math.random();

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
    

    if (humanAnswer == "rock" && computerChoice == "rock"){
        console.log("tie");
    }

    else if (humanAnswer == "rock" && computerChoice == "paper"){
        console.log('You Lose! paper beats rock');
        computerScore += 1;
    }

    else if (humanAnswer== "rock" && computerChoice == "scissors"){
        console.log('You win! rock beats scissors');
        humanScore += 1;
    }

    else if (humanAnswer == "paper" && computerChoice == "paper"){
        console.log('tie');
    }

    else if (humanAnswer == "paper" && computerChoice == "scissors"){
        console.log('you lose! scissors beats paper');
        computerScore += 1;
    }

    else if (humanAnswer == "paper" && computerChoice == "rock"){
        console.log('you win! paper beats rock');
        humanScore += 1;
    }       
    
    else if (humanAnswer == "scissors" && computerChoice == "scissors"){
        console.log('tie')
    }

    else if (humanAnswer == "scissors" && computerChoice == "rock"){
        console.log('you lose! rock beats scissors');
        computerScore += 1;
    }

    else if (humanAnswer == "scissors" && computerChoice == "paper"){
        
        console.log('you win! paper beats scissors');
        humanScore += 1;
    }
}



const humanSelection = getHumanChoice();
const computerSelection = getCompuerChoice();

function playGame(){

    
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getCompuerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You win the match congratulations!!");
    }
    else if(humanScore === computerScore){
        console.log("You tied!!");
    }
    else if(humanScore < computerScore){
        console.log("You lost better luck next time");
    }

    let choice = prompt("would you like to play again, please enter y/n");
    choice = choice.toLowerCase();
    if(choice === "y"){
        humanScore = 0;
        computerScore = 0;
        playGame();
    }
    else{
        alert("thank you for playing");
    }

}

playGame();

