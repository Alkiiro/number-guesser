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

          // function validateName1(name1) {
          //   var regex = /^[0-9a-zA-Z]+$/;
          //   var user1AddClassError = document.querySelector('.user1-name-in');
          //   if (regex.test(name1.value) !== true){
          //     console.log("name1 error")
          //     user1AddClassError.classList.add('pink');
          //   } else {
          //     console.log("name1 OK")
          //   }
          // }
          // function validateName2(name2) {
          //   var regex = /^[0-9a-zA-Z]+$/;
          //   var user2AddClassError = document.querySelector('.user2-name-in');
          //   if (regex.test(name2.value) !== true){
          //     console.log("name2 error")
          //     user2AddClassError.classList.add('pink');
          //   } else {
          //     console.log("name2 OK")
          //   }
          // }

function validateNumber(num, error) {
var numGuess = parseInt(num.value);
var regex = /^[0-9]+$/;
if (regex.test(numGuess) !== true){
  addError(num);
  error.removeAttribute('hidden', false);
}
if (num.value === ""){
  error.setAttribute('hidden', true);
  removeError(num);
}
}

////// begin code from mod3

        // function validateNames(challName) {
        //   var regex = /^[0-9a-zA-Z]+$/;
        //   if (regex.test(challName.value) !== true){
        //     addError(challName);
        //   } else {
        //     removeError(challName);
        //   }
        // }
        //
        // function validateNumber(num, error) {
        //   var numGuess = parseInt(num.value);
        //   var regex = /^[0-9]+$/;
        //   if (regex.test(numGuess) !== true){
        //     addError(num);
        //     error.removeAttribute('hidden', false);
        //   }
        //   if (num.value === ""){
        //     error.setAttribute('hidden', true);
        //     removeError(num);
        //   }
        // }

//// end code from mod3

clearGameBut.addEventListener('click', function() {
  console.log("clear game button")
});

deleteWinnerCardBut.addEventListener('click', function() {
  console.log("delete winner card button")
});

resetGameBut.addEventListener('click', function() {
  console.log("reset game button")
  user1GuessIn.value = '';
  user2GuessIn.value = '';
  user1GuessOutP.innerText = "";
  user2GuessOutP.innerText = "";

});

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

function enableClearButton() {
  var disableClearButton = document.querySelector(".clear-game").disabled;
  // var disableClearButtonHover = document.querySelector(".clear-game"). 
  if (usersMinRange.value !== "") {
    disableClearButton = false;
    document.querySelector(".clear-game").style.backgroundColor = #D0D2D3;

  } else {
    disableClearButton = true;
  }

}

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
