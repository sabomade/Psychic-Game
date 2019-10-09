// VARIABLES
//========================================

//array of letters
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var result = letter[Math.floor(Math.random()*letter.length)];
console.log("result: " + result);

var win = 0;
var lose = 0;
var guessLeft = 10;
var guessSoFar = '';

var targetWin = document.getElementById('win');
var targetLose = document.getElementById("lose");
var targetGL = document.getElementById("guessLeft");
var targetGSF = document.getElementById("guessSoFar");

// FUNCTIONS
//==========================================

//print initial values to screen
targetWin.appendChild(win.toString());
// targetLose.appendChild(lose.toString());
// targetGL.appendChild(guessLeft.toString());

//listening for key press before executing code inside
document.onkeyup = function(event){

   //subtracts 1 from guess and prints out # of remaining guesses
    --guessLeft;
    targetGL.appendChild(guessLeft.toString());

    //Captures the key press, converts to lowercase, and saves
    var guess = event.key.toLowerCase();

    //print guess to screen
    targetGSF.appendChild(guess.toString());    


    // //if guess === result, user wins
    // if(guess === result) {
    //     win++;
    //     var w = document.createTextNode(guess);
    //     document.getElementById("#win");
        
    // }

}