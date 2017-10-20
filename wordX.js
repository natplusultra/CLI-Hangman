// global variables
var phraseBank = ["MY SO CALLED LIFE", "DARIA", "FARGO", "MAD MEN", "CURB YOUR ENTHUSIASM", "TWIN PEAKS", "PORTLANDIA", "ARRESTED DEVELOPMENT", "BEAVIS AND BUTTHEAD", "X FILES", "SILICON VALLEY", "MR ROBOT", "FREAKS AND GEEKS"];
var selectedPhrase;
var phraseArray = [];
var blanksArray = [];
var blanksDisplay;


// constructor function used to create Word objects
function Word() {
	// creates a method that randomly selects a phrase from the phrase bank
	this.selectPhrase = function() {
		selectedPhrase = phraseBank[Math.floor(Math.random() * phraseBank.length)];
	};

	// creates an array of letters from the selected phrase
	this.phraseArray = function() {
		phraseArray = [];
		phraseArray = selectedPhrase.split("");
	};

	// creates an array of underscores corresponding to the secret phrase and then joins the letters in the array to display to the terminal
	this.blanksArray = function() {
		var numBlanks = 0;
		blanksArray = [];
		numBlanks = phraseArray.length;

		for (var i = 0; i < numBlanks; i++) {
			blanksArray.push("_");
		}

		blanksDisplay = blanksArray.join(" ");
	};
}

// creates a makeWord method that applies to all Word objects
Word.prototype.makeWord = function() {
	this.selectPhrase();
	this.phraseArray();
	this.blanksArray();

	console.log("\n" + blanksDisplay + "\n");
};

// var word = new Word();
// word.makeWord();

module.exports = Word;