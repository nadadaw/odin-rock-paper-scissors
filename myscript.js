function computerPlay() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random()*options.length)];
}

let playerScore = 0, computerScore = 0;
const message = document.getElementById("message");
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER')
    {
        computerScore++;
        message.innerText = "Computer wins this round!";
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScore++;
        message.innerText = "You win this round!";
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        message.innerText = "You win this round!";
    }  else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++;
        message.innerText = "Computer wins this round!";
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
       playerScore++;
       message.innerText = "You win this round!";
    } else if (playerSelection === 'PAPER' && computerSelection == 'SCISSORS') {
        computerScore++;
        message.innerText = "Computer wins this round!";
    } else 
    {
        message.innerText = "It's a tie!";
    }
}

const winnerAnnouncement = document.getElementById("winner-announcement");
function announceWinner()
{
if(playerScore == 5 || computerScore == 5) {
    if(playerScore > computerScore) {
        winnerAnnouncement.innerText = "You won the game!";
    }
    else {
        winnerAnnouncement.innerText = "You lost the game!";
    }
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;
}
}
    const playerScoreText = document.getElementById("player-score");
    const computerScoreText = document.getElementById("computer-score");
    const rockChoice = document.getElementById("rock");
    rockChoice.addEventListener("click", function() {
        playRound("ROCK", computerPlay());
        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;
    });
    rockChoice.addEventListener("click", function() {
        announceWinner();
    });
    

    const paperChoice = document.getElementById("paper");
    paperChoice.addEventListener("click", function() { 
        playRound("PAPER", computerPlay());
        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;
    });
    paperChoice.addEventListener("click", function() {
        announceWinner();
    });

    const scissorsChoice = document.getElementById("scissors");
    scissorsChoice.addEventListener("click", function() { 
        playRound("SCISSORS", computerPlay());
        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;
    });
    scissorsChoice.addEventListener("click", function() {
        announceWinner();
    });

    const refreshButton = document.getElementById("refresh-button");
    refreshButton.addEventListener("click", function() {
        window.location.reload();
    });

