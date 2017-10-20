// dependencies
var Word = require("./word.js");
var inq = require("inquirer");

// global variables
var phraseBank = ["MY SO CALLED LIFE", "DARIA", "FARGO", "MAD MEN", "CURB YOUR ENTHUSIASM", "TWIN PEAKS", "PORTLANDIA", "ARRESTED DEVELOPMENT", "BEAVIS AND BUTTHEAD", "X FILES", "SILICON VALLEY", "MR ROBOT", "FREAKS AND GEEKS"];
var currentPhrase;

// function for selecting the current phrase and parsing the object's key values
function selectPhrase() {
	var randomPhrase = phraseBank[Math.floor(Math.random() * phraseBank.length)];
	currentPhrase = new Word(randomPhrase);
	currentPhrase.wordSetUp();
}

// function that initializes values and starts the game
function startGame() {
	selectPhrase();

	console.log("\n-----------------------------------------------\n              Welcome to Hangman!              \n-----------------------------------------------\n\nGuess the name of the TV show!\nYou are allowed 7 incorrect guesses. Good luck!\n\n" + currentPhrase.display + "\n");

	guessLetter();
}

// function that prompts the user for a guess
function guessLetter() {
	inq.prompt(
		{
			name: "letter",
			type: "input",
			message: "Guess a letter!"
		}
	).then(function(answer) {
		var guess = answer.letter.toUpperCase();
		currentPhrase.checkLetter(guess);
		var isWin = currentPhrase.checkSolved();

		if (isWin) {
			console.log("\nYOU WIN! : : : : YOU WIN! : : : : YOU WIN!\n".rainbow);
			return playAgain();
		} else if (currentPhrase.numGuesses > 0) {
			guessLetter();
		} else {
			console.log("\nSORRY, YOU LOST!\n\nThe correct answer was: ".red + currentPhrase.text + "\n\n");
			return playAgain();
		}
	});
}

//
function playAgain() {
	inq.prompt(
		{
			name: "playAgain",
			type: "confirm",
			message: "Would you like to play again?"
		}
	).then(function(answer) {
		if (answer.playAgain) {
			startGame();
		} else {
			console.log("\n-----------------------------------------------\n              Thanks for playing!              \n-----------------------------------------------\n");
		}
	});
}

// calls the function that starts the game
startGame();


// --------TEST-------
// selectPhrase();
// console.log(currentPhrase);
// console.log(currentPhrase.text)