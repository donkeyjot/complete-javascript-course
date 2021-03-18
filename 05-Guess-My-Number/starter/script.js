'use strict';

// document.querySelector('.message').textContent = 'Happy, that is correct!!!';

// document.querySelector('.message').textContent;

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 3;
// console.log((document.querySelector('.guess').value = 23));

function CalcSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secret = CalcSecret();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!!!');
  } else if (guess === secret) {
    displayMessage('Correct guess. Yay!');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too big!' : 'Too small!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost sucker!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = CalcSecret();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...!');

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
