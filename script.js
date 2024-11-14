const game = document.getElementById('game');
const paddle = document.getElementById('paddle');
const fallingObject = document.getElementById('fallingObject');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameWidth = game.clientWidth;
let gameHeight = game.clientHeight;
let paddleWidth = paddle.clientWidth;
let paddleX = (gameWidth - paddleWidth) / 2;
let objectX = Math.random() * (gameWidth - 20);
let objectY = 0;
let objectSpeed = 2;

function updateGame() {
  objectY += objectSpeed;

  if (objectY + 20 > gameHeight) {
    if (objectX > paddleX && objectX < paddleX + paddleWidth) {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      objectY = 0;
      objectX = Math.random() * (gameWidth - 20);
      objectSpeed += 0.2;  // Increase speed as the score goes up
    } else {
      alert('Game Over! Final Score: ' + score);
      resetGame();
    }
  }

  fallingObject.style.top = objectY + 'px';
  fallingObject.style.left = objectX + 'px';
}

function resetGame() {
  score = 0;
  scoreDisplay.textContent = 'Score: 0';
  objectY = 0;
  objectX = Math.random() * (gameWidth - 20);
  objectSpeed = 2;
}

function movePaddle(event) {
  if (event.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= 20;
  }
  if (event.key === 'ArrowRight' && paddleX < gameWidth - paddleWidth) {
    paddleX += 20;
  }
  paddle.style.left = paddleX + 'px';
}

document.addEventListener('keydown', movePaddle);
setInterval(updateGame, 20);
