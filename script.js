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
const scoreDiv = document.querySelector('.score');
const messageDiv = document.querySelector('.message');

const player = document.createElement('div');
const computer = document.createElement('div');
const ties = document.createElement('div');
const winner = document.createElement('h2');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
const tryAgain = document.createElement('span');
const overlay = document.createElement('div');
const playerOverlay = document.createElement('div');
const computerOverlay = document.createElement('div');
const tiesOverlay = document.createElement('div');


tryAgain.textContent = 'Try again.';

playerScore.classList.add('score-player');
computerScore.classList.add('score-computer');
overlay.classList.add('overlay');
container.appendChild(overlay);


let UI = function () {
	let individualScore = [0, 0, 0];	//tS[0] -> tie, tS[1] -> player, tS[2] -> computer 
	let overallScore = [0, 0]; //stores the score after each final win (after bt5)
	let game_rock = 0;
	let game_paper = 0;
	let game_scissors = 0;



	button.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			winner.textContent = '';

			//  	console.table(game_rock, game_paper, game_scissors);

			if (e.target.className === 'rock') {
				game_rock = whoWon(game('rock'));
				individualScore[game_rock]++;
			}
			else if (e.target.className === 'paper') {
				game_paper = whoWon(game('paper'));
				individualScore[game_paper]++;
			}
			else if (e.target.className === 'scissors') {
				game_scissors = whoWon(game('scissors'));
				individualScore[game_scissors]++;
			}

			playerOverlay.textContent = `Player: ${individualScore[1]}`;
			computerOverlay.textContent = `Computer: ${individualScore[2]}`;
			tiesOverlay.textContent = `Ties: ${individualScore[0]}`;
			overlay.appendChild(playerOverlay);
			overlay.appendChild(computerOverlay);
			overlay.appendChild(tiesOverlay);

			if (individualScore[1] == 5) {
				overallScore[0]++;
				individualScore = [0, 0, 0];
				winner.textContent = `You won!`;

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
				playerScore.textContent = `Player:: ${overallScore[0]}`;
				computerScore.textContent = `Computer:: ${overallScore[1]}`;
				results.style = 'padding: 5rem 10rem; border: 6px solid #c6d8ff; border-radius: 12px; margin: 0 auto;';

				container.removeChild(buttons);
				container.removeChild(overlay);

				scoreDiv.appendChild(playerScore);
				scoreDiv.appendChild(computerScore);
				messageDiv.appendChild(winner);
				messageDiv.appendChild(tryAgain);
				results.appendChild(messageDiv);
				again();
			}

			else if (individualScore[2] == 5) {  //make sure to implement custom round number in the future, from user input
				overallScore[1]++;
				individualScore = [0, 0, 0];
				winner.textContent = `The computer won!`;

				player.textContent = '';
				computer.textContent = '';
				ties.textContent = '';
				playerScore.textContent = `Player:: ${overallScore[0]}`;
				computerScore.textContent = `Computer:: ${overallScore[1]}`;
				results.style = 'padding: 5rem 10rem; border: 6px solid #c6d8ff; border-radius: 12px; margin: 0 auto;';

				container.removeChild(buttons);
				container.removeChild(overlay);

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
	tryAgain.addEventListener('click', () => {
		playerOverlay.textContent = `Player: 0`;
		computerOverlay.textContent = `Computer: 0`;
		tiesOverlay.textContent = `Ties: 0`;

		messageDiv.removeChild(winner);
		messageDiv.removeChild(tryAgain);
		scoreDiv.removeChild(playerScore)
		scoreDiv.removeChild(computerScore)

		results.style = 'padding: null; border: null; border-radius: null; margin: null';

		container.appendChild(buttons);

		container.appendChild(overlay);
	}, { once: true });  //execute 'tryAgain' only once; without this, the code executes once->twice->...
}
