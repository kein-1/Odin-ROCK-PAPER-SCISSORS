
function getRandom(){
    return Math.floor(Math.random()*3)
}

function computerSelection(){
    let choices = ["ROCK","PAPER","SCISSORS"]
    let x = getRandom()
    return choices[x]
}

function playRound(playerChoice,computerChoice){
    let choiceP = playerChoice.toUpperCase()
    
    switch(choiceP){
        case "ROCK":
            if (computerChoice == "SCISSORS"){
                return `You Win! ${choiceP} beats ${computerChoice}!`
            }
            else if (computerChoice == "ROCK"){
                return `Tie! ${choiceP} is tied with ${computerChoice}!`
            }
            return `You Lose! ${computerChoice} beats ${choiceP}!`

        case "PAPER":
            if (computerChoice == "ROCK"){
                return `You Win! ${choiceP} beats ${computerChoice}!`
            }
            else if (computerChoice == "PAPER"){
                return `Tie! ${choiceP} is tied with ${computerChoice}!`
            }
            return `You Lose! ${computerChoice} beats ${choiceP}!`

        case "SCISSORS":
            if (computerChoice == "PAPER"){
                return `You Win! ${choiceP} beats ${computerChoice}!`
            }
            else if (computerChoice == "SCISSORS"){
                return `Tie! ${choiceP} is tied with ${computerChoice}!`
            }
            return `You Lose! ${computerChoice} beats ${choiceP}!`
    }
}

let computerChoice = computerSelection()

for (let i = 0; i < 5; i++){
    let playerChoice = prompt("Input Rock, Paper, or Scissors! ")
    let computerChoice = computerSelection()
    console.log("Player Picked " + playerChoice.toUpperCase());
    console.log("Computer Picked " + computerChoice);
    console.log(playRound(playerChoice,computerChoice));
    console.log('\n');
}
