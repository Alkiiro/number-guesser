// buttons
var clearGameBut = document.querySelector('.clear-game-but');
var deleteWinnerCardBut = document.querySelector('.delete-winnercard-but');
var resetGameBut = document.querySelector('.reset-game-but');
var updateRangeBut = document.querySelector('.update-range-but');
var submitGuessBut = document.querySelector('.submit-guess-but');
var randomInt;
var user1NameIn = document.querySelector('.user1-name-in'); // user 1 name
var user2NameIn = document.querySelector('.user2-name-in'); // user 2 name
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

// update current Range
var usersMinRange = document.querySelector('.users-min-range');
var usersMaxRange = document.querySelector('.users-max-range');

//
var inputBackgrounds = document.querySelectorAll('input');
// user guesses in
var user1GuessInValue = parseInt(user1GuessIn.value);
var user2GuessInValue = parseInt(user2GuessIn.value);

// random Number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomInt =  Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  // usersMinRange.innerText = minRangeIn.value;
  // usersMaxRange.innerText = maxRangeIn.value;
}
// Possible Random Number Range Inputs
var minRangeIn = document.querySelector('.min-range-in');
var maxRangeIn = document.querySelector('.max-range-in');

deleteWinnerCardBut.addEventListener('click', function() {
  console.log("delete winner card button")
});

resetGameBut.addEventListener('click', resetGame());

function clearGame() {
  emptyNameGuessInputs();
  toggleResetClearButton();
}

function resetGame() {
  emptyNameGuessInputs();
  toggleResetClearButton();
  getRandomInt();
  }

function emptyNameGuessInputs() {
  user1NameIn.value = "";
  user2NameIn.value = "";
  user1GuessIn.value = "";
  user2GuessIn.value = "";
}

function toggleResetClearButton() {
  if (user1NameIn.value !== "" ||
      user2NameIn.value !== "" ||
      user1GuessIn.value !== "" ||
      user2GuessIn.value !== "") {
    clearGameBut.disabled = false;
    clearGameBut.style.backgroundColor = "#6E6E6E";
    resetGameBut.disabled = false;
    resetGameBut.style.backgroundColor = "#6E6E6E";
  } else {
    clearGameBut.disabled = true;
    clearGameBut.style.backgroundColor = "#D0D2D3";
    resetGameBut.disabled = true;
    resetGameBut.style.backgroundColor = "#D0D2D3";
  }
}

user1NameIn.addEventListener('keyup', toggleResetClearButton);
user2NameIn.addEventListener('keyup', toggleResetClearButton);
user1GuessIn.addEventListener('keyup', toggleResetClearButton);
user2GuessIn.addEventListener('keyup', toggleResetClearButton);
clearGameBut.addEventListener('click', clearGame);

user1NameIn.addEventListener('keyup', toggleResetClearButton);
user2NameIn.addEventListener('keyup', toggleResetClearButton);
user1GuessIn.addEventListener('keyup', toggleResetClearButton);
user2GuessIn.addEventListener('keyup', toggleResetClearButton);
resetGameBut.addEventListener('click', resetGame);

updateRangeBut.addEventListener('click', function() {
    getRandomInt(minRangeIn.value, maxRangeIn.value);
    console.log(randomInt);
    usersMinRange.innerText = minRangeIn.value;
    usersMaxRange.innerText = maxRangeIn.value;
    console.log(minRangeIn.value, maxRangeIn.value);
    // isUserInputANumber(parseInt(user1GuessIn.value), parseInt(user2GuessIn.value));

});

submitGuessBut.addEventListener('click', function() {
     user1NamePGuessOut.innerText = user1NameIn.value;
     user2NamePGuessOut.innerText = user2NameIn.value;
     user1GuessOutP.innerText = user1GuessIn.value;
     user2GuessOutP.innerText = user2GuessIn.value;
     user1NamePWinnercard.innerText = user1NameIn.value;
     user2NamePWinnercard.innerText = user2NameIn.value;
     userGuessTester(parseInt(user1GuessIn.value), parseInt(user2GuessIn.value));

     user1GuessFeedback(parseInt(user1GuessIn.value));
     user2GuessFeedback(parseInt(user2GuessIn.value));

     // validateName1(user1NameIn); // check names
     // validateName2(user2NameIn); // check names
});

// function clearValues() {
//   user1NameIn.value = "";
//   user2NameIn.value = "";
//   user1GuessIn.value = "";
//   user2GuessIn.value = "";
//   toggleClearButton();
// }

user1NameIn.addEventListener('keyup', toggleResetClearButton);
user2NameIn.addEventListener('keyup', toggleResetClearButton);
user1GuessIn.addEventListener('keyup', toggleResetClearButton);
user2GuessIn.addEventListener('keyup', toggleResetClearButton);
clearGameBut.addEventListener('click', emptyNameGuessInputs);

function userGuessTester(num1, num2) {
  if (num1 === randomInt) {
    console.log("Yea you guessed right!");
  } else {
    console.log("Try again");
  }
};

function user1GuessFeedback(num1) {
  if (num1 > randomInt) {
    user1GuessFeedbackP.innerText = 'You guessed too high';
  } else if (num1 < randomInt) {
    user1GuessFeedbackP.innerText = 'You guessed too low';
  } else if (num1 === randomInt) {
    user1GuessFeedbackP.innerText = 'Winner' ;
  } else {
    console.log("What guess feedback")
  }
};

function user2GuessFeedback(num2) {
  if (num2 > randomInt) {
    user2GuessFeedbackP.innerText = 'You guessed too high';
  } else if (num2 < randomInt) {
    user2GuessFeedbackP.innerText = 'You guessed too low';
  } else if (num2 === randomInt) {
    user2GuessFeedbackP.innerText = 'Winner' ;
  } else {
    console.log("What guess feedback")
  }
};
