let playerOneScore = document.querySelector('#scoreOne');
let playerTwoScore = document.querySelector('#scoreTwo');
const buttonPlayerOne = document.querySelector('#playerOne');
const buttonPlayerTwo = document.querySelector('#playerTwo');

buttonPlayerOne.addEventListener('click', () => {
    switch(playerOneScore.innerText) {
        case '0':
            playerOneScore.innerText = '1';
            break;
        case '1':
            playerOneScore.innerText = '2';
            break;
        case '2':
            playerOneScore.innerText = '3';
            break;
        case '3':
            playerOneScore.innerText = '4';
            break;
        case '4':
            playerOneScore.innerText = '5';
            break;          
        case '5':
            playerOneScore.innerText = '6';
            break;          
        case '6':
            playerOneScore.innerText = '7';
            break;          
        case '7':
            playerOneScore.innerText = '8';
            break;          
        case '8':
            playerOneScore.innerText = '9';
            break;          
        case '9':
            playerOneScore.innerText = '10';
            break;          
    }
})

