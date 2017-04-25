var userWord = prompt("Enter a sentence that we can cipher.");
console.log(userWord);

var firstLetter = userWord.charAt(0);
console.log(firstLetter);

var lastLetter = userWord.slice(-1);
console.log(lastLetter);

var newString = firstLetter + lastLetter;
console.log(newString);

var newStringUpper = newString.toUpperCase();
console.log(newStringUpper);
