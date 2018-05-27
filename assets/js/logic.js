/**
 * Game lofic for Rochambeau
 * By Schuyler Ankele
 * May 2018
 */

 const gameMoves = ['r', 'p', 's'];

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
            break;
        }
        case 'rr':{
            console.log('It\'s a Tie.  Both picked Rock.');
            break;
        }
        case 'pp':{
            console.log('It\'s a Tie.  Both picked Paper.');
            break;
        }
        // Player wins!
        case 'sr':{
            console.log('You Win! Rock beats Scissors.');
            break;
        }
        case 'ps':{
            console.log('You Win! Scissors beat Paper.');
            break;
        }
        case 'rp':{
            console.log('You Win!  Paper beats Rock.');
            break;
        } 
        // Computer wins :(
        case 'rs':{
            console.log('You Lose. Rock beats Scissors.');
            break;
        }
        case 'sp':{
            console.log('You Lose.  Scissors beat Paper.');
            break;
        }
        case 'pr':{
            console.log('You Lose.  Paper beats Rock.');
            break;
        }     
    }
}