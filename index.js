
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
                console.log(`You Win! ${choiceP} beats ${computerChoice}!`)
                return 1
            }
            else if (computerChoice == "ROCK"){
                console.log(`Tie! ${choiceP} is tied with ${computerChoice}!`); 
                return 0
            }
            console.log(`You Lose! ${computerChoice} beats ${choiceP}!`);
            return -1
        case "PAPER":
            if (computerChoice == "ROCK"){
                console.log(`You Win! ${choiceP} beats ${computerChoice}!`)
                return 1
            }
            else if (computerChoice == "PAPER"){
                console.log(`Tie! ${choiceP} is tied with ${computerChoice}!`); 
                return 0
            }
            console.log(`You Lose! ${computerChoice} beats ${choiceP}!`);
            return -1
            
        case "SCISSORS":
            if (computerChoice == "PAPER"){
                console.log(`You Win! ${choiceP} beats ${computerChoice}!`)
                return 1
            }
            else if (computerChoice == "SCISSORS"){
                console.log(`Tie! ${choiceP} is tied with ${computerChoice}!`); 
                return 0
            }
            console.log(`You Lose! ${computerChoice} beats ${choiceP}!`);
            return -1
        }
}
let playerChoice = ""
let playerScore = 0
let computerScore = 0
function playGame(item){
    playerChoice = item;
    let computerChoice = computerSelection()
    console.log("Player Picked " + playerChoice.toUpperCase());
    console.log("Computer Picked " + computerChoice);
    scoreKeeper(playRound(playerChoice,computerChoice));
    
    console.log('\n');

    if (computerScore > 4){
        alert("Game OVER!")
        window.location.reload()
    }
    
    if (playerScore > 4){
        alert("You WIN!")
        window.location.reload()
    }
    
}

function scoreKeeper(score){

    if (score == 1){
        playerScore+=1
        document.getElementById("player-score").innerText = playerScore
        document.getElementById("prev-game").innerText = "You won this round!"
    }
    else if (score == -1){
        computerScore+=1
        document.getElementById("computer-score").innerText = computerScore
        document.getElementById("prev-game").innerText = "You lost this round!"
    }
    else{
        document.getElementById("prev-game").innerText = "Tie Round!"
    }
}


