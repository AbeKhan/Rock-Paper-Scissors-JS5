

function playerSelection() {
  let vaild = false;
  let answer;
  while (!vaild) {
    answer = prompt("Rock, Paper, or Scissors?");
    answer = answer.toLowerCase();
    // console.log(answer);

    if (answer === "rock" || answer === "paper" || answer === "scissors") {
      vaild = true;

    }
    else {
      alert("Try AGAIN! 😡😡")
    }


  }
  return answer;

}

function computerSelection() {
  let randomInt = Math.floor(Math.random() * 3) + 1;
  //console.log(randomInt);

  if (randomInt == 1) {
    return "rock";
  }
  else if (randomInt == 2) {
    return "paper"
  }
  else {
    return "scissors"
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie! " + playerSelection.toUpperCase() + " is the same as " + computerSelection.toUpperCase() + "!";
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
    return "You Win! CPU Loses! " + playerSelection.toUpperCase() + " BEATS " + computerSelection.toUpperCase() + "!";
  }
  else {
    return "You Lose! CPU Wins! " + computerSelection.toUpperCase() + " BEATS " + playerSelection.toUpperCase() + "!";
  }

}

let gameRound;
let playerScore = 0;
let cpuScore = 0;
let result;


function Rounds() {
  let rounds;
  let vaild = false;
  while (!vaild) {
    rounds = prompt("How many round do you want to play?")

    if (rounds % 1 === 0) {
      vaild = true;
    }
    else {
      console.log("Try again");
    }
  }

  for (let i = 0; i < rounds; i++) {
    gameRound = i + 1

    result = playRound(playerSelection(), computerSelection())

    if (result.includes("Win!")) {
      playerScore++;
    } else if (result.includes("Lose!")) {
      cpuScore++;
    }
    else {
      playerScore++;
      cpuScore++;
    }

    console.log("Game: " + gameRound + " " + result);
    if (gameRound == rounds) {
      console.log("Player Score: " + playerScore + " CPU Score: " + cpuScore);
    }
  }
}

Rounds();







