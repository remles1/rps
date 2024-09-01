function convertNumToString(x){
    switch (x){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    return choice;
}

function getHumanChoice(){
    const x = prompt("1 - rock, 2 - paper, 3 - scissors") - 1;
    return x;
}

function playRound(humanChoice, computerChoice){
    console.log("human: " + convertNumToString(humanChoice));
    console.log("computer: " + convertNumToString(computerChoice));
    if(humanChoice === computerChoice){
        console.log("draw");
        return;
    }
    if(humanChoice != 2 && computerChoice != 2){
        if(humanChoice == 1){
            console.log("human wins");
            humanScore++;
            
        }
        else{
            console.log("computer wins");
            computerScore++;
        }
    }
    else if(humanChoice != 1 && computerChoice != 1){
        if(humanChoice == 0){
            console.log("human wins");
            humanScore++;
        }
        else{
            console.log("computer wins");
            computerScore++;
        }
    }
    else{
        if(humanChoice == 2){
            console.log("human wins");
            humanScore++;
        }
        else{
            console.log("computer wins");
            computerScore++;
        }
    }
}

let humanScore = 0, computerScore = 0;

while(humanScore < 3 && computerScore < 3){
    
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    playRound(getHumanChoice(),getComputerChoice());
}

console.log("human score: " + humanScore);
console.log("computer score: " + computerScore);


