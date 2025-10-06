const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const buttons = document.querySelectorAll(".controls button");

let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const choices = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const player = button.getAttribute("data-choice");
    const computer = getComputerChoice();
    const result = getResult(player, computer);

    playerChoice.textContent = choices[player];
    computerChoice.textContent = choices[computer];

    animate(playerChoice);
    animate(computerChoice);

    updateScores(result);
    displayResult(result);
  });
});

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function displayResult(result) {
  if (result === "draw") {
    resultText.textContent = "CURRENTLY DRAW";
    resultText.style.color = "#000";
  } else if (result === "win") {
    resultText.textContent = "YOU WIN 🎉";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "YOU LOSE 💀";
    resultText.style.color = "red";
  }
}

function updateScores(result) {
  if (result === "win") playerScore++;
  if (result === "lose") computerScore++;

  playerScoreText.textContent = `player ${playerScore}`;
  computerScoreText.textContent = `computer ${computerScore}`;
}

function animate(el) {
  el.classList.add("animate");
  setTimeout(() => el.classList.remove("animate"), 200);
}
