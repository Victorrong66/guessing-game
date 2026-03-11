let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

function checkGuess() {
    if (gameOver) return;

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100!';
        message.style.color = '#f5a623';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = 'Attempts: ' + attempts;

    if (userGuess < secretNumber) {
        message.textContent = 'Too low! Try higher.';
        message.style.color = '#a8b2d8';
    }
    else if (userGuess > secretNumber) {
        message.textContent = 'Too high! try lower.';
        message.style.color = '#a8b2d8';
    }
    else {
        message.textContent = 'You got it! The number was ' + secretNumber + '. You guessed it in ' + attempts + ' attempts!';
        message.style.color = '#2ecc71';
        gameOver = true;
        restartBtn.style.display = 'block';
    }

    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    message.textContent = '';
    attemptsDisplay.textContent = '';
    guessInput.value = '';
    restartBtn.style.display = 'none';
    guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventlistener('click', restartGame);
guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});