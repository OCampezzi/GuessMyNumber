'use strict';

const body = document.getElementById('body');
const number = document.getElementById('number');
const input = document.getElementById('guess');
const submit = document.getElementById('check');
const score = document.getElementById('score');
const message = document.getElementById('message');
const againBtn = document.getElementById('again');
const highest = document.getElementById('highscore');

let secretNumber = getRandomNum(1, 20); // Generate the random secret number
let qtdScore = 20; // Set the initial score to 20
let highScore = 0; // Set the initial high score to 0

// Checking the player's guess
submit.addEventListener('click', function () {
  const guess = input.value;

  // If player doesn't enter a number
  if (!guess) {
    message.textContent = 'Please, enter a number!';
  }
  // If the player wins
  else if (guess == secretNumber) {
    message.textContent = '🎉 Congratulations, you guessed it right!';
    againBtn.classList.remove('hidden'); // Show the 'Again' button
    body.classList.remove('bg-gray-800'); // Remove default background color
    body.classList.add('bg-green-600'); // Add success background color
    number.textContent = secretNumber; // Display the secret number

    // Update the highscore if the current score is greater than the highscore
    if (highScore < qtdScore) {
      highScore = qtdScore;
      highest.textContent = highScore; // Update the displayed high score
    }
  }
  // If player enters a guess outside the range
  else if (guess < 1 || guess > 20) {
    message.textContent = 'Please, enter a number between 1 and 20!';
  }
  // If the guess is incorrect
  else {
    // if the player have tries left
    if (qtdScore > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      qtdScore--; // Decrease the score
      score.textContent = qtdScore;
    } else {
      message.textContent = '💥 You lost the game!';
      score.textContent = 0; // Set score to 0
      againBtn.classList.remove('hidden'); // Show the 'Again' button
      body.classList.remove('bg-gray-800'); // Remove default background color
      body.classList.add('bg-red-600'); // Add loser background color
    }
  }
});

// Resetting the game ('Again' button)
againBtn.addEventListener('click', function () {
  qtdScore = 20; // Reset the score to 20
  score.textContent = qtdScore;
  message.textContent = 'Start guessing...';
  againBtn.classList.add('hidden'); // Hide the 'Again' button
  body.classList.remove('bg-green-600'); // Remove winner background color
  body.classList.remove('bg-red-600');
  body.classList.add('bg-gray-800'); // Add default background color
  secretNumber = getRandomNum(1, 20); // Generate a new secret number
  number.textContent = '?'; // Hide the secret number
});

// Function to generate the secret number
function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled)) + minCeiled;
}
