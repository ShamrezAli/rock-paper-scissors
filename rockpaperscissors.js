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
            return 'You win! Scissors beats paper!'}
        else if (computerSelection === 'rock') {
            return 'You lose! Scissors loses to rock!'}
        else return 'Draw! Both chose scissors!'
    }
    else return 'Invalid move! You lose that turn!'
}

// Initial setting of the score
let playerWins = 0;
let computerWins = 0;

// Initial setting to hide images until button is clicked
window.onload = function() {
    rockImage.style.visibility='hidden';
    paperImage.style.visibility='hidden';
    scissorsImage.style.visibility='hidden';
}

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

// Determines and announces winner based on player or computer score
function endGame() {
    if (playerWins >= 3) {
        finalResultText.textContent = 'You WIN!'
        rockButton.style.visibility = 'hidden';
        paperButton.style.visibility = 'hidden';
        scissorsButton.style.visibility = 'hidden';
    }else if (computerWins >= 3) {
        finalResultText.textContent = 'You LOSE!';
        rockButton.style.visibility = 'hidden';
        paperButton.style.visibility = 'hidden';
        scissorsButton.style.visibility = 'hidden';
    }else return;
}

// Reset button to return values to their intial settings
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    playerWinsNumber.textContent = playerWins;
    computerWinsNumber.textContent = computerWins;
    finalResultText.textContent = "-";
    resultText.textContent = "Press a button to begin the game!"
    rockButton.style.visibility = 'visible';
    paperButton.style.visibility = 'visible';
    scissorsButton.style.visibility = 'visible';
    rockImage.style.visibility='hidden';
    paperImage.style.visibility='hidden';
    scissorsImage.style.visibility='hidden';
    return;
}

// Define the buttons, images, and text needed for the DOM
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
const rockImage = document.getElementById('image1');
const paperImage = document.getElementById('image2');
const scissorsImage = document.getElementById('image3');
const dotImage = document.getElementById('dot');


// Game instance when rock is clicked
rockButton.addEventListener('click', function() {
    resultText.textContent = singleRound('rock', getComputerChoice());
    rockImage.style.visibility='visible';
    paperImage.style.visibility='hidden';
    scissorsImage.style.visibility='hidden';
    winStatus();
    endGame();
}   
);

// Game instance when paper is clicked
paperButton.addEventListener('click', function() {
    resultText.textContent = singleRound('paper', getComputerChoice());
    rockImage.style.visibility='hidden';
    paperImage.style.visibility='visible';
    scissorsImage.style.visibility='hidden';
    winStatus();
    endGame();
}
);

// Game instance when scissors is clicked
scissorsButton.addEventListener('click', function() {
    resultText.textContent = singleRound('scissors', getComputerChoice());
    rockImage.style.visibility='hidden';
    paperImage.style.visibility='hidden';
    scissorsImage.style.visibility='visible';
    winStatus();
    endGame();
}
);

// Reset command sent when reset is clicked
resetButton.addEventListener('click', function() {
    resetGame();
}
)

