

function playerSelection() {
  let vaild = false;
  let answer;
  while (!vaild) {
    answer = prompt("Rock, Paper, or Scissors?");
    answer = answer.toLowerCase();
    // console.log(answer);

    if (answer === "rock" || answer === "paper" || answer === "scissors") 
    {
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

let playerScore;
let cpuScore;

function Score()
{
  
}

for(let i = 0; i < 5; i++)
{

}


console.log(playRound(playerSelection(), computerSelection()));



