# Number Guesser Rubric

## Phase One

### Zero State

- [x] Two inputs to set a custom range for the random number to fall within
- [x] A button to update the custom range 
- [x] For each player an input field for guessing the number which can only accept numeric values
- [ ] For each player an input field for their name that can accept any alpha-numeric character
- [ ] One button that submits both players guesses
- [ ] A button for clearing the input field, which does not reset the random number
- [x] One button that resets the game and generates a new random number
- [ ] The clear button should be disabled if there is nothing to clear.
- [ ] The reset button should be disabled if there is nothing to reset.

### Players Guess State

- [ ] Display both player’s most recent guesses
- [ ] Display results and feedback for each players guess:
- [ ] If their guess is too high, it should display the error message: “That’s too high”
- [ ] If their guess is too low, it should display the error message: “That’s too low”
- [ ] If the guess is correct, it should display the success message: “BOOM!” and create a new card to display results (card details are outlined in Phase Three)

## Phase Two

- [ ] Range and guess input fields should only accept numerical entries
- [ ] The Guess fields should only accept values that fall within the defined min and max range.
- [ ] The application should display an error message if the value entered in the Max Range input is less than the value in the Min Range input
- [ ] The application should display an error message if the value entered in the Min Range input is greater than the value in the Max Range input
- [ ] The application should display an error message if either guess is not a number (e.g. parseInt() returns NaN).
- [ ] The application should display an error if either guess is outside of the range of possible answers.
- [ ] The application should display an error if the Update or Submit Guess buttons are clicked when their associated input fields do not have a value entered
