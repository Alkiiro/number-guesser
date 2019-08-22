// buttons
var clearGameBut = document.querySelector('.clear-game-but');
var deleteWinnerCardBut = document.querySelector('.delete-winner-card-but');
var resetGameBut = document.querySelector('.reset-game-but');
var updateRangeBut = document.querySelector('.update-range-but');
var submitGuessBut = document.querySelector('.submit-guess-but');


// random Number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
getRandomInt(1, 100);
// inputs
// var minRangeIn = document.querySelector('.min-range-in').value;
// var maxRangeInIn = document.querySelector('.max-range-in').value

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
    // var minRangeIn = document.querySelector('.min-range-in');
    // // var maxRangeIn = document.querySelector('.max-range-in');
    //
    // minRangeInValue = minRangeIn.value;
    // // maxRangeInValue = maxRangeIn.value;
    // console.log(minRangeInValue, maxRangeInValue);


});
submitGuessBut.addEventListener('click', function() {
    console.log("submit guess button");
});


// var inputBox = document.querySelector('input');
// var nameDogButton = document.querySelector('button');
//
//
// nameDogButton.addEventListener('click', function() {
//     var changeH1Dog = document.querySelector('h1 span');
//     changeH1Dog.innerText = inputBox.value;
//     console.log(inputBox.value);
// })
