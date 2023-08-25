// Randomly returns rock, paper, or scissors
function getComputerChoice() {
    if (Math.random() < (1/3)) {
        return 'rock';
    } else if (Math.random() < (2/3)) {
        return 'paper';
    } else return 'scissors';
}

// Returns a win/loss message based on player and computer choice
function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win! Rock beats scissors!'}
        else if (computerSelection === 'paper') {
            return 'You lose! Rock loses to paper!'}
        else return 'Draw! Both chose rock!'
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats rock!'}
        else if (computerSelection === 'scissors') {
            return 'You lose! Paper loses to scissors!'}
         else return 'Draw! Both chose paper!'
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win! Scissors beats paper'}
        else if (computerSelection === 'rock') {
            return 'You lose! Scissors loses to rock'}
        else return 'Draw! Both chose rock!'
    }
    else return 'Invalid move! You lose that turn!'
}

let playerWins = 0;
let computerWins = 0;

// Checks result for a win
function winStatus() {
    if ((resultText.textContent.includes("win"))) {
        ++playerWins;
        playerWinsNumber.textContent = playerWins;
    }else if ((resultText.textContent.includes("lose"))) {
        ++computerWins;
        computerWinsNumber.textContent = computerWins;
    }else if ((resultText.textContent.includes("Draw"))) {
        return;
    }else return;
}

function endGame() {
    if (playerWins >= 3) {
        finalResultText.textContent = 'Game over! You WIN!'
    }else if (computerWins >= 3) {
        finalResultText.textContent = 'Game over! You LOSE!';
    }else return;
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    alert('hi');
    return;
}

// Define the three buttons for the DOM
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result');
const playerWinsText = document.getElementById('playerWins');
const playerWinsNumber = document.getElementById('playerWinsNumber');
const computerWinsText = document.getElementById('computerWins');
const computerWinsNumber = document.getElementById('computerWinsNumber');
const finalResultText = document.getElementById('finalResultText');
const resetButton = document.getElementById('resetButton');

rockButton.addEventListener('click', function() {
    resultText.textContent = singleRound('rock', getComputerChoice());
    winStatus();
    endGame();
}   
);

paperButton.addEventListener('click', function() {
    resultText.textContent = singleRound('paper', getComputerChoice());
    winStatus();
    endGame();
}
);

scissorsButton.addEventListener('click', function() {
    resultText.textContent = singleRound('scissors', getComputerChoice());
    winStatus();
    endGame();
}
);

resetButton.addEventListener('click', function() {
    resetGame();
}
)

