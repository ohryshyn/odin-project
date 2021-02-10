function computerSelection() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  }
}
let playerCounter = 0;
let computerCounter = 0;
const defaultResult = "Pick your weapon!";
const defaultScore = "0-0";
const buttons = Array.from(document.querySelectorAll(".pchoice"));
const result = document.getElementById("announcement");
const score = document.getElementById("score");
result.textContent = defaultResult;
score.textContent = defaultScore;
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    result.textContent = getResult(button.id, computerSelection());

    if (result.textContent.includes("win")) {
      playerCounter++;
    } else if (result.textContent.includes("lose")) {
      computerCounter++;
    }
    score.textContent = `${playerCounter}-${computerCounter}`;
  })
);

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  playerCounter = computerCounter = 0;
  result.textContent = defaultResult;
  score.textContent = defaultScore;
});
