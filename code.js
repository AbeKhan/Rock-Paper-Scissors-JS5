

function playerSelection() {
  let vaild = false;
  while (!vaild) {
    let answer = prompt("Rock, Paper, or Scissors?");
    answer = answer.toLowerCase();
    // console.log(answer);

    if (answer == "rock" || "paper" || "scissors") {
      vaild = true;
    }
    else {
      alert ("Try AGAIN! 😡😡")
    }

    return answer;
  }

  

}

function computerSelection() {
  let randomInt = Math.floor(Math.random() * 3) + 1;
  console.log(randomInt);

  if (randomInt == 1) {
    return "rock";
  }
  else if (randomInt == 2) {
    return "paper"
  }
  else {
    return "scissor"
  }
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie"
  }
  else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "You Win!"
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win!"
  }
  else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "You Win!"
  }
  else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }

}

//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
console.log(playRound(playerSelection(), computerSelection()));


// playerSelection();

// console.log(computerSelection());
