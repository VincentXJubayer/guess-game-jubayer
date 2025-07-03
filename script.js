let secretNumber = Math.floor(Math.random() * 100) + 1;
let chances = 7;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const chancesSpan = document.getElementById("chances");

function checkGuess() {
  if (gameOver) return;

  const guess = parseInt(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    message.innerHTML = "⚠️ Enter a number between 1 and 100!";
    return;
  }

  chances--;
  chancesSpan.textContent = chances;

  if (guess === secretNumber) {
    message.innerHTML = `🎉 <span class="confetti">You got it!</span>`;
    hint.innerHTML = `✅ The number was <b>${secretNumber}</b>.`;
    gameOver = true;
    return;
  }

  if (chances === 0) {
    message.innerHTML = `💥 Game Over!`;
    hint.innerHTML = `The number was <b>${secretNumber}</b>.`;
    gameOver = true;
    return;
  }

  const diff = Math.abs(secretNumber - guess);
  message.innerHTML = guess < secretNumber ? "🔻 Too low!" : "🔺 Too high!";

  hint.innerHTML =
    diff <= 5 ? "🔥 Very close!" :
    diff <= 15 ? "🌡️ Warm!" :
    "🥶 Cold guess.";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  chances = 7;
  gameOver = false;
  message.innerHTML = "";
  hint.innerHTML = "";
  chancesSpan.textContent = chances;
  guessInput.value = "";
}
