let totalGuesses = 3;

// Get the random generated number between 1-10 for guessing
const randomGeneratedNumber = Math.round(Math.random() * 10);

// Get the submit number button
const submitNumberButton = document.getElementById('submitNumberButton');

submitNumberButton.addEventListener('click', checkNumberGuessed);

function checkNumberGuessed(e)
{
    const userNumberGuess = document.getElementById('userNumberGuess').value;
    if (userNumberGuess < 1 || userNumberGuess > 10) {
        
    }
}