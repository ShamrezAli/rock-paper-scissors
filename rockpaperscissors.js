/* getComputerChoice will randomly return rock,
   paper, or scissors */

function getComputerChoice() {
    if (Math.random() < (1/3)) {
        return 'rock';
    } else if (Math.random() < (2/3)) {
        return 'paper';
    } else return 'scissors';
    }


/* singleRound takes in a playerselection and the computer selection
Check if the player selecton is same as computer, return draw
Check if player has scissors and computer has rock, return LOSS
Check if player has scissors and computer has paper, return WIN
Check if player has paper and computer has scissors, return LOSS
Check if player has paper and computer has rock, return WIN
Check if player has rock and computer has scissors, return WIN
Check if player has rock and computer has paper, return LOSS
*/

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

// function that checks result for a win

function winStatus(result) {
    return (result.includes("win"));

}

// function that checks results for a draw, adds one round to the game

function drawStatus(result) {
    return (result.includes("Draw"));

}

// function that checks for a win, then +1 to count

let wins = 0;

function winCount(winStatus) {
    if (winStatus === true) {
        return ++wins
    } else return wins
}

// function that counts the wins and reports a victory or defeat

function victory(winCount) {
    if (wins >= 2) {
        return 'You win the round overall!'
    }else return 'You lose the round overall!'
}

// function that runs ONE game and returns result and win count

function playRound() {
    let playerSelection = prompt("Choose rock, paper, or scissors.");
    let computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log("Your current win count is:")
    console.log(winCount(winStatus(singleRound(playerSelection, computerSelection))));
    if (playerSelection == computerSelection) {
        console.log('Draw means redo the round!')
        playRound();

    }
}

// function that lets the game run 3 times total (unless draw)

function game() {
    for (let step = 0; step < 3; step++) {
        playRound();
    }
}

// function that runs a game and displays the victor or loser

function threeRoundGame(wins) {
    game();
    console.log(victory(wins))
}


threeRoundGame();