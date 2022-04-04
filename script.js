function computerPlay() {
	let arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * 3)];
}

function playRound(playSel, compSel) {
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

function game(playerSelection) {
	let playerScore = 0;
	let computerScore = 0;

	const computerSelection = computerPlay();
	let res = playRound(playerSelection, computerSelection);

	console.table(playerSelection, computerSelection);

	if (res == 1) {
		playerScore++;
	}
	else if (res == 2) {
		computerScore++;
	}

	// if (playerScore > computerScore) {
	//     alert(`You won with ${playerScore} points! The computer only had
	//             ${computerScore} points.`);
	// }
	// else if (playerScore < computerScore) {
	//     alert(`You lost with ${playerScore} points! The computer won with
	//             ${computerScore} points.`);
	// }
	// else {
	//     alert(`It was a tie, you both picked ${playerSelection}`)
	// }
}

game('rock');

// const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
// console.log(buttons);

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		if (e.target.className === 'btn-rock') {
			game('rock');
		}
		else if (e.target.className === 'btn-paper') {
			game('paper')
		}
		else if (e.target.className === 'btn-scissors') {
			game('scissors')
		}
	});
});

