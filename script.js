function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playSel, compSel) {
    console.log(playSel);
    console.log(compSel);

    if (playSel === 'rock' && compSel === 'paper') {
        return `You lose: ${compSel} beats ${playSel}!`;
    }
    else if (playSel === 'paper' && compSel === 'scissors') {
        return `You lose: ${compSel} beats ${playSel}!`;
    }
    else if (playSel === 'scissors' && compSel === 'rock') {
        return `You lose: ${compSel} beats ${playSel}!`;
    }
    else if (playSel === 'rock' && compSel === 'scissors') {
        return `You win: ${playSel} beats ${compSel}!`;
    }
    else if (playSel === 'paper' && compSel === 'rock') {
        return `You win: ${playSel} beats ${compSel}!`;
    }
    else if (playSel === 'scissors' && compSel === 'paper') {
        return `You win: ${playSel} beats ${compSel}!`;
    }
    else if (playSel === 'rock' && compSel === 'rock') {
        return `It's a tie, you both selected ${compSel}!`;
    }
    else if (playSel === 'paper' && compSel === 'paper') {
        return `It's a tie, you both selected ${compSel}!`;
    }
    else if (playSel === 'scissors' && compSel === 'scissors') {
        return `It's a tie, you both selected ${compSel}!`;
    }
    else {
        return 'You did not type one of the mentioned words!'
    }

}

const playerSelection = prompt('Select Rock, Paper or Scissors!').toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));