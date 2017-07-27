// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var ClozeCard = function(text, cloze) {
	//check to see if the object is an instance of the correct type
	if (this instanceof ClozeCard) {
		this.fullText = text.trim();
		this.cloze = cloze.trim();
		this.partial = '';

		if (text.trim().includes(cloze.trim())) {
			this.partial = text.replace(cloze.trim(), '...');
		} else {
			console.log("Oops! That card will not work.");
			console.log("Cannot find \"" + this.cloze + "\" in \"" + this.fullText + "\".");
		}	
	//creates a new instance of this class, this will happen if 'new' keyword not used when creating object
	} else {
		return new ClozeCard(text, cloze);
	}
	
	
};


var test = new ClozeCard("i love  apples", "apple");
var test2 = ClozeCard("i love zebras", "zebras");
var test3 = ClozeCard("i love to dig", "love to");
console.log(test);
console.log(test2);
console.log(test3);
console.log(typeof test);
console.log(typeof test2);
module.exports = ClozeCard;