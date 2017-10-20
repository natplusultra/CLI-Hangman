// imports the Word module
var Word = require("./word.js");

// dependency for the inquirer npm package
var inq = require("inquirer");

// global variables
var currentGuess;
var numGuesses = 7;
var lettersGuessed = [];
var guessedDisplay;
var validKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// constructor function used to create Letter objects
function Letter() {
	this.guess = function() {
		// if there are still guesses left and the phrase has not been solved, user is prompted for a guess, else return
		if ((numGuesses > 0) || (blanksArray.indexOf("_") > -1)) { 
			inq.prompt(
				{
					name: "guess",
					type: "input",
					message: "\nGuess a letter!\n"
				}
			).then(function(answer) {
				currentGuess = answer.toUpperCase();
				this.checkLetter();
				this.guess();
			});
		} else { 
			return;
		}	
	};

	// method that checks the guessed letter against the secret phrase
	this.checkLetter = function() {
		if (validKeys.indexOf(currentGuess) > -1) {
			if ((selectedPhrase.indexOf(currentGuess) > -1)) {
				for (var i = 0; i < selectedPhrase.length; i++) {
					if (phraseArray[i] === currentGuess) {
						blanksArray[i] = currentGuess;
						blanksDisplay = blankArray.join(" ");
						console.log("CORRECT!\n" + blanksDisplay);
					}
				}
			} else {
				lettersGuessed.push(currentGuess);
				guessedDisplay = lettersGuessed.join(" ");
				numGuesses--;
				console.log("\nINCORRECT!\nLetters guessed: " + guessedDisplay + "\nYou have " + numGuesses + " remaining.\n");
			}
		} else {
			console.log("\nPlease guess a valid letter.\n");
		}
	};
}

Letter.prototype.checkAgainstWord = function() {
	var word = new Word();
	word.makeWord();
	
	this.guess();
};

var letter = new Letter();
letter.checkAgainstWord();

module.exports = Letter;

