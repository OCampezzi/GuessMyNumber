'use strict';

const input = document.getElementById('guess');
const submit = document.getElementById('check');
const score = document.getElementById('score');
const message = document.getElementById('message');
const againBtn = document.getElementById('again');

// function to generate the secret number
function getRandomNum(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled)) + minCeiled;
}

const secretNumber = getRandomNum(1, 20);
const highScore = 0;

submit.addEventListener('click', function () {
  if (input.value === '') {
    message.textContent = 'Please, enter a number!';
  } else if (input.value > secretNumber && input.value <= 20) {
    message.textContent = 'Too high!';
    score.textContent = Number(score.textContent) - 1;
  } else if (input.value < secretNumber && input.value >= 1) {
    message.textContent = 'Too low!';
    score.textContent = Number(score.textContent) - 1;
  } else if (input.value == secretNumber) {
    message.textContent = '🎉 Congratulations, you guessed it right!';
    highScore = score.textContent;
  } else {
    message.textContent = 'Please, enter a number between 1 and 20!';
  }
});
