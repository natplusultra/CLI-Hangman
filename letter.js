// constructor function used to create Letter objects
function Letter(letter) {
	this.letter = letter;
	this.isGuessed = false;
	this.display = "";

	// method used display the correctly guessed letter or an underscore when a guess is made
	this.updateLetterDisplay = function() {
		if (this.letter === " ") {  // automatically displays spaces so that the user only needs to guess letters
			this.display = " "; 
			this.isGuessed = true;
		} else if (this.isGuessed) {
			this.display = this.letter;
		} else {
			this.display = "_";
		}
	};
}

module.exports = Letter;