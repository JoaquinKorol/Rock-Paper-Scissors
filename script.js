function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"]
    return CHOICE[(Math.floor(Math.random() * CHOICE.length))]
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Won! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       return "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Tie! Rock ties with Rock"
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Won! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats paper"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Tie! Paper ties with Paper"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Won! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Tie! Scissors ties with Scissors"
    }
}



function game() {
    for (i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        console.log(playerSelection)
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

game()