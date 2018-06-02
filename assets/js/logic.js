/**
 * Game lofic for Rochambeau
 * By Schuyler Ankele
 * May 2018
 */

 const gameMoves = ['r', 'p', 's'];
 var gameObj = {
    bestOf: 0, // 0 means unlimited
    computerWins: 0,
    userWins: 0,
    winnerOfRound: true,
    playerWin: ()=>{
        this.userWins++;
        this.winnerOfRound = true;
    },
    computerWin: (game)=>{
        this.computerWins++;
        this.winnerOfRound = false;
    },
    resetGame: ()=>{
        this.userWins = 0;
        this.computerWins = 0;
        this.bestOf = 0;
    },
    postMessage: (message)=>{
        $('.game-message').html(message);
    }

 };

 var gameMessages = {
     "ss": 'It\'s a Tie.  Both picked Scissors.',
     "rr": 'It\'s a Tie.  Both picked Rock.',
     "pp": 'It\'s a Tie.  Both picked Paper.',
     "sr": 'You Win! Rock beats Scissors.',
     "ps": 'You Win! Scissors beat Paper.',
     "rp": 'You Win!  Paper beats Rock.',
     "rs": 'You Lose. Rock beats Scissors.',
     "sp": 'You Lose.  Scissors beat Paper.',
     "pr": 'You Lose.  Paper beats Rock.'
 }

 const playerKey = document.addEventListener('keyup', (e)=>{playARound(e.key)});

 
function playARound(keyEntered){
    const computerSelection = Math.floor(Math.random() * 3);
    const matchup = gameMoves[computerSelection] + keyEntered;
    console.log(computerSelection);
    console.log(keyEntered);
    console.log(matchup);
    switch(matchup){
        // Tie conditions
        case 'ss':{
            console.log('It\'s a Tie.  Both picked Scissors.');
            postMessage('It\'s a Tie.  Both picked Scissors.');
            break;
        }
        case 'rr':{
            console.log('It\'s a Tie.  Both picked Rock.');
            postMessage('It\'s a Tie.  Both picked Rock.');
            break;
        }
        case 'pp':{
            console.log('It\'s a Tie.  Both picked Paper.');
            postMessage('It\'s a Tie.  Both picked Paper.');
            break;
        }
        // Player wins!
        case 'sr':{
            console.log('You Win! Rock beats Scissors.');
            postMessage('You Win! Rock beats Scissors.');
            gameObj.userWins++;
            gameObj.winnerOfRound = true;
            keepScore(gameObj);
            break;
        }
        case 'ps':{
            console.log('You Win! Scissors beat Paper.');
            postMessage('You Win! Scissors beat Paper.');
            gameObj.userWins++;
            gameObj.winnerOfRound = true;
            keepScore(gameObj);
            break;
        }
        case 'rp':{
            console.log('You Win!  Paper beats Rock.');
            postMessage('You Win!  Paper beats Rock.');
            
            keepScore(gameObj);
            break;
        } 
        // Computer wins :(
        case 'rs':{
            console.log('You Lose. Rock beats Scissors.');
            postMessage('You Lose. Rock beats Scissors.');
            keepScore(gameObj.computerWins++);
            break;
        }
        case 'sp':{
            console.log('You Lose.  Scissors beat Paper.');
            postMessage('You Lose.  Scissors beat Paper.');
            keepScore(gameObj.computerWins++);
            break;
        }
        case 'pr':{
            console.log('You Lose.  Paper beats Rock.');
            postMessage('You Lose.  Paper beats Rock.');
            keepScore(gameObj.computerWins++);
            break;
        }
        default:{
            console.log('You did not enter a valid key');
            postMessage('You did not enter a valid key.  Please push R,P, or S');
        }     
    }
}

const keepScore = function (game){
    if(game.winnerOfRound){
        $('.playerScore').html(game.userWins);
    }
    else if(!game.winnerOfRound){
        $('.playerScore').html(game.userWins);
    }
    else{
        $('.playerScore').addClass();
    }
    
}
