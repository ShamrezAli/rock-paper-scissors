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

const playerSelection = prompt("Choose rock, paper, or scissors.");
const computerSelection = getComputerChoice();


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
}


function winCount(result) {
    return (result.includes("win"));
}

console.log(singleRound(playerSelection, computerSelection));
console.log(winCount(singleRound(playerSelection, computerSelection)));

