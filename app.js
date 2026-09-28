function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    alert('Computer chose ' + computerChoice);
    return computerChoice;

}

function getHumanChoice(){
    let askHuman = prompt("Pick rock, paper, or scissor");
    let humanChoice = askHuman.trim().toLocaleLowerCase();
    if(humanChoice === "rock"){
        alert('Human chose rock');
    }else if(humanChoice === "paper"){
        alert('Human chose paper');
    }else if(humanChoice === "scissor"){
        alert('Human chose scissor');
    }else{
        alert("try again");
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'paper' || 
        humanChoice === 'paper' && computerChoice === 'scissor' ||
        humanChoice === 'scissor' && computerChoice === 'rock'){
        alert("Computer won")
        computerScore += 1;
        }else if(humanChoice === 'rock' && computerChoice === 'scissor' || 
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissor' && computerChoice === 'paper'){
                alert("Human won")
                humanScore += 1;
            }else if(humanChoice === computerChoice){
                alert('It was a tie');
            }
            
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    alert("Final score: You " + humanScore + " - Computer " + computerScore);
}
playGame();
console.log(humanScore, computerScore);