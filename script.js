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
}

let whoWon = (score) => {
	if (score[0] > score[1]) {
		return 1;
	}
	else if (score[0] < score[1]) {
		return 2;
	}
	else {
		return 0;
	}
}

const container = document.querySelector('.container');
const results = container.querySelector('.results');
const button = document.querySelectorAll('.btn');
const buttons = document.querySelector('.buttons');

const player = document.createElement('div');
const computer = document.createElement('div');
const ties = document.createElement('div');
const winner = document.createElement('h2');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
const scoreDiv = document.querySelector('.score');
const messageDiv = document.querySelector('.message');
const tryAgain = document.createElement('p');

tryAgain.textContent = 'Try again.';

playerScore.classList.add('score-player');
computerScore.classList.add('score-computer');


let UI = function () {
	let individualScore = [0, 0, 0];	//tS[0] -> tie, tS[1] -> player, tS[2] -> computer 
	let overallScore = [0, 0]; //stores the score after each final win (after bt5)

	button.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			winner.textContent = '';

			if (e.target.className === 'rock') {
				individualScore[whoWon(game('rock'))]++;
			}
			else if (e.target.className === 'paper') {
				individualScore[whoWon(game('paper'))]++;
			}
			else if (e.target.className === 'scissors') {
				individualScore[whoWon(game('scissors'))]++;
			}

			// player.textContent = `Player: ${individualScore[1]}`;
			// results.appendChild(player);
			// computer.textContent = `Computer: ${individualScore[2]}`;
			// results.appendChild(computer);
			// ties.textContent = `Ties: ${individualScore[0]}`;
			// results.appendChild(ties);

			if (individualScore[1] == 5) {
				individualScore[0] = 0;
				individualScore[1] = 0;
				individualScore[2] = 0;
				overallScore[0]++;

				winner.textContent = `You won!`;

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
				playerScore.textContent = `Player:: ${overallScore[0]}`;
				computerScore.textContent = `Computer:: ${overallScore[1]}`;

				container.removeChild(buttons);
				scoreDiv.appendChild(playerScore);
				scoreDiv.appendChild(computerScore);
				messageDiv.appendChild(winner);
				messageDiv.appendChild(tryAgain);
				results.appendChild(messageDiv);
				again();
			}
			else if (individualScore[2] == 5) {  //make sure to implement custom round number in the future, from user input
				individualScore[0] = 0;
				individualScore[1] = 0;
				individualScore[2] = 0;
				overallScore[1]++;

				winner.textContent = `The computer won!`;

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
				playerScore.textContent = `Player:: ${overallScore[0]}`;
				computerScore.textContent = `Computer:: ${overallScore[1]}`;

				container.removeChild(buttons);
				scoreDiv.appendChild(playerScore);
				scoreDiv.appendChild(computerScore);
				messageDiv.appendChild(winner);
				messageDiv.appendChild(tryAgain);
				results.appendChild(messageDiv);
				again();
			}
		});
	});
}

UI();

function again() {
	tryAgain.addEventListener('click', (e) => {
		console.log(winner);
		messageDiv.removeChild(winner);
		messageDiv.removeChild(tryAgain);
		scoreDiv.removeChild(playerScore)
		scoreDiv.removeChild(computerScore)
		container.appendChild(buttons);
	}, { once: true });  //execute 'tryAgain' only once; without this, the code executes once->twice->...
}
