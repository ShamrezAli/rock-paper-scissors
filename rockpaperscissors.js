/* getComputerChoice will randomly return rock,
   paper, or scissors */

function getComputerChoice() {
    if (Math.random() < (1/3)) {
        return 'Rock';
    } else if (Math.random() < (2/3)) {
        return 'Paper';
    } else return 'Scissors';
    }
