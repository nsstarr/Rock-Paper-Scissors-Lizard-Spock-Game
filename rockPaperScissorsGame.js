/*Tasks 1-2
- Declaring new variables and calculating permutations of all possible moves.
- Creating a function to determine the winner, and count wins and losses
*/

let playerMove = 'rock';
let computerMove = 'paper';
let pWin = 'Player wins!';
let cWin = 'Computer wins!';
let draw = 'Draw!'
let tryAgain = 'Pick a valid option! Try again!'


function getWinner(player1, player2) { //Extension 1: Adding in Spock and Lizard
    if (player1 === 'rock') {
        if (player2 === 'scissors' || player2 === 'lizard'){
            return 1;
        } else if (player2 === 'paper' || player2 === 'spock'){
            return -1;
        } else{
            console.log(tryAgain)
        }
    }

    if (player1 === 'paper') {
        if (player2 === 'rock' || player2 === 'spock'){
            return 1;
        } else if (player2 === 'lizard' || player2 === 'scissors'){
            return -1;
        } else{
            console.log(tryAgain)
        }
    }

    if (player1 === 'scissors') {
        if (player2 === 'paper' || player2 === 'lizard'){
            return 1;
        } else if (player2 === 'rock' || player2 === 'spock'){
            return -1;
        } else{
            console.log(tryAgain)
        }
    }

    if (player1 === 'lizard') {
        if (player2 === 'spock' || player2 === 'paper'){
            return 1;
        } else if (player2 === 'scissors' || player2 === 'rock'){
            return -1;
        } else{
            console.log(tryAgain)
        }
    }

    if (player1 === 'spock') {
        if (player2 === 'scissors' || player2 === 'rock'){
            return 1;
        } else if (player2 === 'paper' || player2 === 'lizard'){
            return -1;
        } else{
            console.log(tryAgain)
        }
    }

    if (player1 === player2){
        return 0;
    }
}
  
/*Tasks 3-4
- Creating a prompt to get the input from the user for the player's move
- Giving an alert to show the result
- Creating a function to give a random move for the computer
*/

const computerMoves = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

/*function getComputerMove(array) {
    let randomIndex = Math.floor(Math.random() * 5);
    return array[randomIndex];
}
*/
function getComputerMove(array) {
if (playerMove = 'rock') {
    return computerMoves [1];
} else if (playerMove = 'paper') {
    return computerMoves [4];
} else if (playerMove = 'scissors'){
    return computerMoves [3];
} else if (playerMove = 'lizard'){
    return computerMoves [2];
} 
else {
    return computerMoves [1];
}}
/*
Task 5 
- Creating a variable and a loop to repear the game till the user presses cancel
*/
let letsContinue = true;
let gamesPlayed = 0;
let wins = 0;
let draws = 0;
let losses = 0;

let userName;

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

userName = prompt('Please enter your username');
while (userName.length > 10 || isCharacterALetter(userName[0]) === false || userName[0] === userName[0].toLowerCase()){
    alert('Your username should be less than 10 characters, and should start with a letter (not a number or symbol!)')
    userName = prompt('Please enter your username');
}

while (letsContinue === true){
    //computerMove = getComputerMove(computerMoves);
    
    playerMove = prompt(`Hi ${userName}. Choose rock, paper, scissors, lizard or spock`);
    while (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors' && playerMove !== 'lizard' && playerMove !== 'spock'){
        alert('You need to choose rock, paper, scissors, lizard or spock!')
        playerMove = prompt('Choose rock, paper, scissors, lizard or spock');
    }

    let result = getWinner(playerMove, computerMove);

    if (result === 1){ //Task 6: Tracking number of wins, draws, losses and games played, and printing this after each round
        wins++;
    } else if (result === 0){
        draws ++;
    } else{
        losses++;
    }

    alert(result);

    gamesPlayed++;

    console.log(`You picked ${playerMove}, and the computer picked ${computerMove}. ${userName}, You have ${wins} wins, ${draws} draws, and ${losses} losses in ${gamesPlayed} games played.`);

    letsContinue = confirm(`${userName} press ok to continue`);
}