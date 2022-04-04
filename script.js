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
	let score = [0, 0];	//storing the score: score[0] -> player, score[1] -> computer

	const computerSelection = computerPlay();
	let res = playRound(playerSelection, computerSelection);

	console.table(playerSelection, computerSelection);

	if (res == 1) {
		score[0]++;
	}
	else if (res == 2) {
		score[1]++;
	}

	return score;

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

let whoWon = (score) => {
	if (score[0] > score[1]) {
		return 'The player has won!';
	}
	else if (score[0] < score[1]) {
		return 'The computer has won!';
	}
	else {
		return 'It was a tie!';
	}
}

const container = document.querySelector('.container');
const results = container.querySelector('.results');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		if (e.target.className === 'btn-rock') {
			results.textContent = whoWon(game('rock'));
		}
		else if (e.target.className === 'btn-paper') {
			results.textContent = whoWon(game('paper'));
		}
		else if (e.target.className === 'btn-scissors') {
			results.textContent = whoWon(game('scissors'));
		}
	});
});

