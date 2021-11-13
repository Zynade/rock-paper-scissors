let playerPoints = 0;
let computerPoints = 0;
const picks = ["rock", "paper", "scissors"];

function computerPlay() {
	// Generates the computer's play randomly.
	return picks[Math.floor(Math.random() * picks.length)];
}

function playRound(playerSelection, computerSelection) {
	// Plays one round of the game

	playerSelection = playerSelection.toLowerCase();

	if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'scissors' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'rock')) {

		playerPoints++;
		result = `${playerSelection} beats ${computerSelection}. You win! <br><br>Your score: ${playerPoints} <br> Computer score: ${computerPoints}`;

		if (playerPoints == 5) {
			result += `<br><br>You have won the game! Congratulations.`;
			disableButtons();
		}
	}

	else if (playerSelection === computerSelection) {
		result = `${playerSelection} and ${computerSelection}. It's a draw! <br><br>Your score: ${playerPoints} <br> Computer score: ${computerPoints}`;
	}

	else {
		computerPoints++;
		result = `${computerSelection} beats ${playerSelection}. Computer wins! <br><br>Your score: ${playerPoints} <br> Computer score: ${computerPoints}`;
	
		if (computerPoints === 5) {
			result += `<br><br>Computer has won the game. Better luck next time!`;
		}
	}

	document.getElementById('result').innerHTML = result;
}

function isValidSelection(selection) {
	if (!(picks.includes(selection.toLowerCase()))) {
		return false;
	}
	return true;
}

function disableButtons() {
	buttons.forEach((button) => {
		button.disabled = true;
	})
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
	button.addEventListener('click', () => {
		const playerSelection = button.value;
		while (!isValidSelection(playerSelection)) {
			playerSelection = alert("Invalid selection! Please choose a valid button.");
		}
		playRound(playerSelection, computerPlay());
	})
})