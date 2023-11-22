let playerOneScore = document.querySelector('#scoreOne');
let playerTwoScore = document.querySelector('#scoreTwo');
const buttonPlayerOne = document.querySelector('#playerOne');
const buttonPlayerTwo = document.querySelector('#playerTwo');
const resetButton = document.querySelector('#reset');
const totalScore = document.querySelector('#finalScore');

buttonPlayerOne.addEventListener('click', () => {
    addPoints(playerOneScore);
    if(playerOneScore.innerText === totalScore.value){
        disableButtons();
    }
})

buttonPlayerTwo.addEventListener('click', () => {
    addPoints(playerTwoScore);
    if(playerTwoScore.innerText === totalScore.value){
        disableButtons();
    }
})

resetButton.addEventListener('click', () => {
    playerOneScore.innerText = '0';
    playerTwoScore.innerText = '0';
    buttonPlayerOne.disabled = false;
    buttonPlayerTwo.disabled = false;
})


function disableButtons() {
    buttonPlayerOne.disabled = true;
    buttonPlayerTwo.disabled = true;
}

function addPoints(score) {
    switch (score.innerText) {
        case '0':
            score.innerText = '1';
            break;
        case '1':
            score.innerText = '2';
            break;
        case '2':
            score.innerText = '3';
            break;
        case '3':
            score.innerText = '4';
            break;
        case '4':
            score.innerText = '5';
            break;
        case '5':
            score.innerText = '6';
            break;
        case '6':
            score.innerText = '7';
            break;
        case '7':
            score.innerText = '8';
            break;
        case '8':
            score.innerText = '9';
            break;
        case '9':
            score.innerText = '10';
            break;
    }
}


