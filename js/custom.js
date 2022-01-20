const player1score = document.querySelector('#player1score');
const player2score = document.querySelector('#player2score');
const winningScoreDisplay = document.querySelector('.winningScore');
const inputScore = document.querySelector('#inputScore');

const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const reset = document.querySelector('#reset');

let player1CurrentScore = 0;
let player2CurrentScore = 0;
let winningScore = 5;
let gameOver = false;

player1Btn.addEventListener('click', ()=>{
    // change data

    if( !gameOver ){
        player1CurrentScore = player1CurrentScore + 1;
    
        PlayerWinner(player1CurrentScore, winningScore);     

        // show data
        player1score.textContent = player1CurrentScore;
    }

});

player2Btn.addEventListener('click', ()=>{
    if( !gameOver ){
        // change data
        player2CurrentScore++;

        PlayerWinner(player2CurrentScore, winningScore);

        // show data
        player2score.textContent = player2CurrentScore;
    }
});


function PlayerWinner( currentBtnScore, winningValue ){
    if( currentBtnScore === winningValue ){
        gameOver = true;
        player1Btn.setAttribute('disabled', 'disabled');
        player2Btn.setAttribute('disabled', 'disabled');
    }
}

reset.addEventListener('click', myRset);
function myRset(){
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    gameOver = false;
    player1score.textContent = 0;
    player2score.textContent = 0;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
}


inputScore.addEventListener('click', () => {
    console.log( typeof(inputScore.value));
    winningScoreDisplay.textContent = Number(inputScore.value);
    winningScore = Number(inputScore.value);
    inputScore.value = '';
    myRset();
});