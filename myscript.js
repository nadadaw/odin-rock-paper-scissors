function computerPlay() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER')
    {
        return "You lose!";
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        return "It's a tie!"
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return "You win!"
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return "You win!";
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return "It's a tie!";
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return "You lose!";
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        return "It's a tie!";
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return "You win!";
    } else if (playerSelection === 'PAPER' && computerSelection == 'SCISSORS') {
        return "You lose!"
    }
    else {
        console.log("You can only use rock, paper, or scissors to play.");
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    for(let i=0; i<5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter either ROCK, PAPER, or SCISSORS to play.");
        let result = playRound(playerSelection, computerSelection);
        if(result === 'You win!') {
            playerScore++;
        }
        if(result === 'You lose!') {
            computerScore++;
        }
        console.log(`Score - ${playerScore} PLAYER ${computerScore} COMPUTER`);
    }

    if(playerScore > computerScore) {
        console.log("You won the game!");
    }
        else if(computerScore > playerScore) {
        console.log("You lost the game!");
        }
        else {
            console.log("It's a tie!");
        }
    }