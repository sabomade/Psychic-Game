// VARIABLES
//=================================
//array of letters
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//initalizing score & game info variables
var win = 0;
var lose = 0;
var guessLeft = 10;
var guessSoFar = [];
var result = "";

//get p tags to print to
var targetWin = document.getElementById("win");
var targetLose = document.getElementById("lose");
var targetGL = document.getElementById("guessLeft");
var targetGSF = document.getElementById("guessSoFar");


// FUNCTIONS
//=================================
//resets the game
function resetGame(){
    //sets guesses to 10 and empties guess array
    guessLeft = 10;
    guessSoFar = [];
    
    //print values to p tags on screen
    targetWin.innerHTML = "Win: "+ win;
    targetLose.innerHTML = "Loss: "+ lose;
    targetGL.innerHTML = "Guesses Left: " + guessLeft;
    targetGSF.innerHTML = "Letters Guessed: " + guessSoFar;

    //select random letter from array letter
    const randomLetter = letter[Math.floor(Math.random()*letter.length)];
    console.log("randomLetter: " + randomLetter);
    return randomLetter;
}

// MAIN PROCESS
//=================================

//Call function to (re)start game
result = resetGame();

//listening for key press before executing code inside
document.onkeyup = function(event){
    //Captures the key press, converts to lowercase, and saves
    var guess = event.key.toLowerCase();

    //adds guess to array guessSoFar
    guessSoFar.push(guess);

    //print guesses to screen
    targetGSF.innerHTML = "Letters Guessed: " + guessSoFar;

    //subtracts 1 from guess and prints out # of remaining guesses
    --guessLeft;
    targetGL.innerHTML = "Guesses Left: " + guessLeft;    

    //if guess = result, user wins, score updated & game restarted
    if(guess === result){
        win++;
        result = resetGame();
    }
    //else guess !== result & no more guesses left, user loses, score updated and game restarted
    else if(guess !== result && guessLeft < 1){
        lose++;
        result = resetGame();
    }
    
}