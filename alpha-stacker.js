// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	// Created a variable with an empty string
	var alphaString = "";
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     for(var i = 0; i < theAlphabetArray.length; i++) {
     	alphaString = alphaString + theAlphabetArray[i]; 
     	if (i % 3 === 2){
     		alphaString += " "; 
     	} else {
     			alphaString;
     		}
     	console.log(alphaString) 
    	}
     }

// Invoke the function and pass in the array
stackLetters(alphabet)