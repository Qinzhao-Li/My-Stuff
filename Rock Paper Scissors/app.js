let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return ("Rock")
  if (letter === "p") return ("Paper")
  if (letter === "s") return ("Scissors")
}

function win(user, comp) {
  console.log("You win!");
  userScore ++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "[user]".fontsize(3).sup();
  const smallCompWord = "[comp]".fontsize(3).sup();
  result_p.innerHTML = convertToWord(user) + smallUserWord + " beats " + convertToWord(comp) + smallCompWord + " . You win! 🔥";
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('green-glow') }, 300);
}

function lose(user, comp) {
  console.log("You lost.");
  compScore ++
  compScore_span.innerHTML = compScore;
  const smallUserWord = "[user]".fontsize(3).sup();
  const smallCompWord = "[comp]".fontsize(3).sup();
  result_p.innerHTML = convertToWord(comp) + smallCompWord + " beats " + convertToWord(user) + smallUserWord + " . You lose. 💧";
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('red-glow') }, 300);
}

function draw(user, comp) {
  console.log("It is a draw.");
  result_p.innerHTML = " Draw! ⭐️";
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  // console.log("You picked " + userChoice);
  // console.log("Computer picked " + computerChoice);
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r")
  })
  paper_div.addEventListener('click', function() {
    game("p")
  })
  scissors_div.addEventListener('click', function() {
    game("s")
  })
}

main();
