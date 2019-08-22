// buttons
var clearGameBut = document.querySelector('.clear-game-but');
var deleteWinnerCardBut = document.querySelector('.delete-winner-card-but');
var resetGameBut = document.querySelector('.reset-game-but');
var updateRangeBut = document.querySelector('.update-range-but');
var submitGuessBut = document.querySelector('.submit-guess-but');
var randomInt;
var user1NameIn = document.querySelector('.user1-name-in');
var user2NameIn = document.querySelector('.user2-name-in');
var user1NamePGuessOut = document.querySelector('.user1-name-p-guess-out');
var user2NamePGuessOut = document.querySelector('.user2-name-p-guess-out');
var user1NamePWinnercard = document.querySelector('.user1-name-p-winnercard');
var user2NamePWinnercard = document.querySelector('.user2-name-p-winnercard');
var user1GuessIn = document.querySelector('.user1-guess-in');
var user2GuessIn = document.querySelector('.user2-guess-in');
var user1GuessOutP = document.querySelector('.user1-guess-out-p');
var user2GuessOutP = document.querySelector('.user2-guess-out-p');
var user1GuessFeedbackP = document.querySelector('.user1-guess-feedback-p');
var user2GuessFeedbackP = document.querySelector('.user2-guess-feedback-p');


var user1GuessInValue = parseInt(user1GuessIn.value);
var user2GuessInValue = parseInt(user2GuessIn.value);

// random Number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomInt =  Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}
// inputs
var minRangeIn = document.querySelector('.min-range-in');
var maxRangeIn = document.querySelector('.max-range-in');

// var user1NameIn = document.querySelector('.user1-name-in').value;
// var user1Guess = document.querySelector('.user1-guess').value;
// var user2NameIn = document.querySelector('.user2-name-in').value;
// var user2Guess = document.querySelector('.user2-guess').value;


clearGameBut.addEventListener('click', function() {
  console.log("clear game button")
});
deleteWinnerCardBut.addEventListener('click', function() {
  console.log("delete winner card button")
});
resetGameBut.addEventListener('click', function() {
  console.log("reset game button")
});
updateRangeBut.addEventListener('click', function() {
    getRandomInt(minRangeIn.value, maxRangeIn.value);
    console.log(randomInt);

});

submitGuessBut.addEventListener('click', function() {
     user1NamePGuessOut.innerText = user1NameIn.value;
     user2NamePGuessOut.innerText = user2NameIn.value;
     user1NamePWinnercard.innerText = user1NameIn.value;
     user2NamePWinnercard.innerText = user2NameIn.value;
     user1GuessOutP.innerText = user1GuessIn.value;
     user2GuessOutP.innerText = user2GuessIn.value;

     userGuessTester(parseInt(user1GuessIn.value), parseInt(user2GuessIn.value));
     user1GuessFeedback();
});

function userGuessTester(num1, num2) {
  if (num1 === randomInt) {
    console.log("Yea you guessed right!");
  } else {
    console.log("Try again");
  }
};

function user1GuessFeedback() {

};

// var inputBox = document.querySelector('input');
// var nameDogButton = document.querySelector('button');
//
//
// nameDogButton.addEventListener('click', function() {
//     var changeH1Dog = document.querySelector('h1 span');
//     changeH1Dog.innerText = inputBox.value;
//     console.log(inputBox.value);
// })
