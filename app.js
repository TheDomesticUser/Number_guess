let totalGuesses = 3;

// Get the random generated number between 1-10 for guessing
const randomGeneratedNumber = Math.ceil(Math.random() * 10);

// Get the submit number button
const submitNumberButton = document.getElementById('submitNumberButton');

submitNumberButton.addEventListener('click', checkNumberGuessed);

console.log(randomGeneratedNumber)
function checkNumberGuessed(e)
{
    const userNumberGuess = document.getElementById('userNumberGuess').value;
    if (userNumberGuess < 1 || userNumberGuess > 10) {
        window.alert('Please input a number between 1 and 10.');
    } else {
        if (userNumberGuess != randomGeneratedNumber) {
            totalGuesses--;

            if (totalGuesses === 0) {
                window.alert('You ran out of guesses. You lose!');
                location.reload();
            } else {
                window.alert('You guessed the wrong number. You have ' + totalGuesses + ' guess(es) left.');
            }
        } else {
            window.alert('Congratulations! You guessed the secret number!');
            location.reload();
        }
    }
    e.preventDefault();
}