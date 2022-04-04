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
const buttons = document.querySelectorAll('button');

const player = document.createElement('div');
const computer = document.createElement('div');
const ties = document.createElement('div');
const winner = document.createElement('div');
const score = document.createElement('div');

function UI() {
	let totalScore = [0, 0, 0];	//tS[0] -> tie, tS[1] -> player, tS[2] -> computer 
	let overallScore = [0, 0]; //stores the score after each final win (after bt5)

	buttons.forEach((btn) => {
		btn.addEventListener('click', function showResults(e) {
			winner.textContent = '';
			score.textContent = `The overall score is: @Player:: ${overallScore[0]}, @Computer:: ${overallScore[1]}`;
			results.appendChild(score);

			if (e.target.className === 'btn-rock') {
				totalScore[whoWon(game('rock'))]++;
			}
			else if (e.target.className === 'btn-paper') {
				totalScore[whoWon(game('paper'))]++;
			}
			else if (e.target.className === 'btn-scissors') {
				totalScore[whoWon(game('scissors'))]++;
			}

			player.textContent = `Player: ${totalScore[1]}`;
			results.appendChild(player);
			computer.textContent = `Computer: ${totalScore[2]}`;
			results.appendChild(computer);
			ties.textContent = `Ties: ${totalScore[0]}`;
			results.appendChild(ties);

			if (totalScore[1] == 5) {
				totalScore[0] = 0;
				totalScore[1] = 0;
				totalScore[2] = 0;
				overallScore[0]++;

				winner.textContent = `You won!`;
				results.appendChild(winner);

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
			}
			else if (totalScore[2] == 5) {
				totalScore[0] = 0;
				totalScore[1] = 0;
				totalScore[2] = 0;
				overallScore[1]++;

				winner.textContent = `The computer won!`;
				results.appendChild(winner);

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
			}
		}
		);
	});
}

UI();
