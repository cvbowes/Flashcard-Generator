// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

var BasicCard = function(front, back) {
	//check to see if the object is an instance of the correct type
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	//creates a new instance of this class,this will happen if 'new' keyword not used when creating object
	} else {	
		return new BasicCard(front, back);
	}
	
};

module.exports = BasicCard;