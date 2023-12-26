function getComputerChoice() {
    const CHOICE = ["rock", "paper", "scissors"]
    return CHOICE[(Math.floor(Math.random() * CHOICE.length))]
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++;
        return "You Won! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Tie! Rock ties with Rock";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        userScore++;
        return "You Won! Paper beats Rock" 
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats paper" 
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Tie! Paper ties with Paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore++;
        return "You Won! Scissors beats Paper" 
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Tie! Scissors ties with Scissors";
    } 
}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playAgainBtn = document.createElement("button");

const div = document.querySelector("#roundText");

const userScoreDiv = document.querySelector("#scoreUser");
const computerScoreDiv = document.querySelector("#scoreComputer");
const winnerDiv = document.querySelector("#winnerText");
const imgContainer = document.querySelector("#scoreContainer")

const playerSelectionImg = document.createElement("img");
const computerSelectionImg = document.createElement("img");

function handleButtonClick(playerSelection) {
    const computerChoice = getComputerChoice();
    div.textContent = playRound(playerSelection.name, computerChoice);

    userScoreDiv.textContent = "User Score: " + userScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
    
    playerSelectionImg.src = "images/" + playerSelection.name + ".png";
    computerSelectionImg.src = "images/" + computerChoice + ".png";

    document.querySelector("#userChoiceImg").src = playerSelectionImg.src;
    document.querySelector("#computerChoiceImg").src = computerSelectionImg.src;

    if (userScore == 5) {
        winnerDiv.textContent = "User Wins The Game!";
        removeButtons();
    } else if (computerScore == 5){
        winnerDiv.textContent = "Computer Wins The Game!";
        removeButtons()
    }
}

rockBtn.addEventListener("click", () => handleButtonClick(rockBtn));
paperBtn.addEventListener("click", () => handleButtonClick(paperBtn));
scissorsBtn.addEventListener("click", () => handleButtonClick(scissorsBtn));

playAgainBtn.addEventListener("click", () => {
    playAgainBtn.remove()
    winnerDiv.textContent = "Choose your weapon";
    div.textContent = "First to score 5 points wins the game";
    
    userScore = 0;
    computerScore = 0;

    document.querySelector("#userChoiceImg").src = " ";
    document.querySelector("#computerChoiceImg").src = " ";

    userScoreDiv.textContent = "User Score: " + userScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;

    const buttonContainer = document.querySelector("#imgContainer");
    buttonContainer.appendChild(rockBtn);
    buttonContainer.appendChild(paperBtn);
    buttonContainer.appendChild(scissorsBtn);
    
})

function removeButtons() {
    playAgainBtn.textContent = "Play Again"
    playAgainBtn.classList.add("restartButton")
    imgContainer.appendChild(playAgainBtn);

    const buttonContainer = rockBtn.parentElement;
    buttonContainer.insertBefore(playAgainBtn, rockBtn);

    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();

}
