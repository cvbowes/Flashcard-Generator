var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
//test

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

//scope-safe constructor test
var test = new ClozeCard("i love  apples", "apple");
var test2 = ClozeCard("i love zebras", "zebras");
var test3 = ClozeCard("i love to dig", "love to");
console.log(test);
console.log(test2);
console.log(test3);
console.log(typeof test);
console.log(typeof test2);