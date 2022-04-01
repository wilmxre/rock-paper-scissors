function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playSel, compSel) {
    console.log(playSel);
    console.log(compSel);

    if (playSel === 'rock' && compSel === 'paper') {
        return 2;
    }
    else if (playSel === 'paper' && compSel === 'scissors') {
        return 2;
    }
    else if (playSel === 'scissors' && compSel === 'rock') {
        return 2;
    }
    else if (playSel === 'rock' && compSel === 'scissors') {
        return 1;
    }
    else if (playSel === 'paper' && compSel === 'rock') {
        return 1;
    }
    else if (playSel === 'scissors' && compSel === 'paper') {
        return 1;
    }
    else if (playSel === 'rock' && compSel === 'rock') {
        return 0;
    }
    else if (playSel === 'paper' && compSel === 'paper') {
        return 0;
    }
    else if (playSel === 'scissors' && compSel === 'scissors') {
        return 0;
    }
    else {
        return -1;
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Select Rock, Paper or Scissors for the ${i + 1}. game!`).toLowerCase();
        const computerSelection = computerPlay();
        let res = playRound(playerSelection, computerSelection);

        if (playerScore == 3 || computerScore == 3) {
            break;
        }
        else if (res < 0) {
            alert("You didn't type one of the words from the listed options!");
        }
        else if (res == 1) {
            playerScore++;
        }
        else if (res == 2) {
            computerScore++;
        }
        else if (res == 0) {
            playerScore += 0;
            computerScore += 0;
        }
    }

    if (playerScore > computerScore) {
        alert(`You won with ${playerScore} points! The computer had only ${computerScore} points.`);
    }
    else {
        alert(`You lost with ${playerScore} points! The computer won with ${computerScore} points.`);
    }
}

game();
