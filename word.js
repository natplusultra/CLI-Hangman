// dependencies
var Letter = require("./letter.js");
var colors = require("colors");

// constructor function used to create Word objects
function Word(text) {
	this.text = text;
	this.numGuesses = 7;
	this.letters = [];
	this.guessed = [];
	this.display = "";

	// method to parse the current word and push letters of that word into a letters array
	this.parseWord = function() {
		for (var i = 0; i < this.text.length; i++) {
			var textLetter = new Letter(this.text[i]);
			textLetter.updateLetterDisplay();
			this.letters.push(textLetter);
		}
	};

	// method to update the display 
	this.updateWordDisplay = function() {
		this.display = "";
		for (var i = 0; i < this.letters.length; i++) {
			this.display += this.letters[i].display + " ";
		}
	};

  	// searches for underscores in this.display to determine if the word has been solved or not
	this.checkSolved = function() {
		return this.display.indexOf("_") < 0;
	};
}

// method that applies to all Word objects so that key values are parsed
Word.prototype.wordSetUp = function() {
	this.parseWord();
	this.updateWordDisplay();
};

// method that applies to all Word objects and checks the guessed letter against the letters array
Word.prototype.checkLetter = function(guess) {
	var isCorrect = false;

	for (var i = 0; i < this.letters.length; i++) {
		if (guess === this.letters[i].letter) {
			this.letters[i].isGuessed = true;
			this.letters[i].updateLetterDisplay();
			isCorrect = true;
		} else {
			this.letters[i].isGuessed = false;
		}
	}

	if (isCorrect) {
		this.updateWordDisplay();
		console.log("\nCORRECT!\n\n".green + this.display + "\n");
	} else {
		this.updateWordDisplay();
		this.numGuesses--;
		this.guessed.push(guess);

		var guessedDisplay = this.guessed.join(" ");
		console.log("\nINCORRECT!\n\n".red + this.display + "\n\nYou have " + this.numGuesses + " guesses remaining.\nLetters already guessed: " + guessedDisplay + "\n");
	}
};

module.exports = Word;


// --------TEST-------
// var word = new Word("PUMPKIN");
// word.wordSetUp();
// console.log(word.letters);
// word.checkLetter("C");
// word.checkLetter("L");
// word.checkLetter("P");
// word.checkLetter("K");
// word.checkLetter("R");


