'use strict';

const body = document.getElementById('body');
const number = document.getElementById('number');
const input = document.getElementById('guess');
const submit = document.getElementById('check');
const score = document.getElementById('score');
const message = document.getElementById('message');
const againBtn = document.getElementById('again');
const highest = document.getElementById('highscore');

let secretNumber = getRandomNum(1, 20);
let guess = input.value;
let qtdScore = 20;
let highScore = 0;

submit.addEventListener('click', function () {
  // player does not enter a number
  if (guess === '') {
    message.textContent = 'Please, enter a number!';
    // player enters a number higher than the secret number
  } else if (guess > secretNumber && guess <= 20) {
    message.textContent = 'Too high!';
    qtdScore--;
    // player enters a number lower than the secret number
  } else if (guess < secretNumber && guess >= 1) {
    message.textContent = 'Too low!';
    qtdScore--;
    // player guesses the secret number
  } else if (guess == secretNumber) {
    message.textContent = '🎉 Congratulations, you guessed it right!';
    againBtn.classList.remove('hidden');
    body.classList.remove('bg-gray-800');
    body.classList.add('bg-green-600');
    number.textContent = secretNumber;
    if (highScore < qtdScore) {
      highScore = qtdScore;
      highest.textContent = highScore;
    }
    // player enters an invalid number
  } else {
    message.textContent = 'Please, enter a number between 1 and 20!';
  }

  score.textContent = qtdScore;
});

// reset button
againBtn.addEventListener('click', function () {
  qtdScore = 20;
  score.textContent = qtdScore;
  message.textContent = 'Start guessing...';
  againBtn.classList.add('hidden');
  body.classList.remove('bg-green-600');
  body.classList.add('bg-gray-800');
});

// function to generate the secret number
function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled)) + minCeiled;
}
