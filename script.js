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

	if (playerSelection === "rock") {
		if (computerSelection === "rock") {
			return "Rock and rock. Draw";
		} else if (computerSelection === "paper") {
			computerPoints++;
			return "Paper beats rock. Computer wins!";
		} else {
			playerPoints++;
			return "Rock beats scissors. You win!";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			playerPoints++;
			return "Paper beats rock. You win!";
		} else if (computerSelection === "paper") {
			return "Paper and paper. Draw";
		} else {
			computerPoints++;
			return "Scissors beats paper. Computer wins!";
		}
	} else {
		if (computerSelection === "rock") {
			computerPoints++;
			return "Rock beats scissors. Computer wins!";
		} else if (computerSelection === "paper") {
			playerPoints++;
			return "Scissors beats paper. You win!";
		} else {
			return "Scissors and scissors. Draw";
		}
	}
}

function isValidSelection(selection) {
	if (!(picks.includes(selection.toLowerCase()))) {
		return false;
	}
	return true;
}

function game() {
	// Main game loop
	for (let i = 1; i < 6; i++) {
		console.log(`Round ${i}:`);

		playerSelection = prompt("Your move: ");
		while (!isValidSelection(playerSelection)) {
			playerSelection = prompt("Invalid selection! Please choose a valid shape.");
		}
		computerSelection = computerPlay();

		console.log(`Your play: ${playerSelection},  Computer's play: ${computerSelection}`);
		console.log(playRound(playerSelection, computerSelection));
		console.log(
			`Your score: ${playerPoints},  Computer's score: ${computerPoints}`
		);
		console.log('\n');
	}

	if (computerPoints > playerPoints) {
		console.log("Computer has won the game. Better luck next time!");
	} else if (playerPoints > computerPoints) {
		console.log("You have won the game! Congratulations.");
	} else {
		console.log("The game was a draw! Thank you for playing.");
	}
}

game();