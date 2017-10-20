// imports the Letter module
var Letter = require("./letter.js");

// global variables
var wins = 0;
var losses = 0;
var numGuesses = 7;
var currentGuess;

	// if there are no blanks left, call the youWin function; if there are no guesses left, call the gameOver function
	if (blankArray.indexOf("_") < 0) {
		youWin();
	} else if (numGuesses === 0) {
		gameOver();
	}