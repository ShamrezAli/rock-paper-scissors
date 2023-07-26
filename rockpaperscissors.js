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

// Function that checks result for a win
function winStatus(result) {
    return (result.includes("win"));

}

// Function that checks for a win +1 to count

let wins = 0;

function winCount(winStatus) {
    if (winStatus === true) {
        return ++wins
    } else return wins
}

function victory(wins) {
    if (wins >=3) {
        return 'You win the round overall!'
    }else return 'You lose the round overall!'
}

//function that runs ONE game and returns result and win count
function playRound() {
    let playerSelection = prompt("Choose rock, paper, or scissors.");
    let computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(winCount(winStatus(singleRound(playerSelection, computerSelection))));
}

function game() {
    for (let step = 0; step < 5; step++) {
        playRound()
    }
}

function fiveRoundGame() {
    game();
    console.log(victory())
}

fiveRoundGame();




/* Game function
 let wins = 0
 run a singleround
 console log singleround
 console log winCount
 
 run that 5 times until it has been run 5 times
 after the 5th time, check if wins >=3, console log You Win, else Lose
*/
