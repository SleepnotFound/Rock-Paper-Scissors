const choice = ['rock','paper','scissors'];                                                 //available options for player/computer
const result = ['tied', 'win', 'lose'];
let playerPoints = 0;
let computerPoints = 0;
let round = 0;
let imgRock = 'images/RockBubble.PNG';
let imgPaper = 'images/PaperBubble.PNG';
let imgScissors = 'images/ScissorsBubble.PNG';
let imgThumbs = 'images/thumbsUp.PNG';
let imgPointsRight = 'images/PointsRight.PNG';
let imgPointsLeft  = 'images/PointsLeft.PNG'
let imgclap = 'images/Clap.PNG';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(button.id);
    })
})

function playGame(decision) {
    let computerPlay = choice[Math.floor(Math.random() * choice.length)];
    let playerPlay = decision;                                           
    let result = chooseResult(computerPlay, playerPlay);
    awardPoints(result);
    round++;

    displayMatch(playerPlay, computerPlay, result);

    if (playerPoints == 5 || computerPoints == 5) {
        endGame();
    }
}

function chooseResult(computerPlay, playerPlay) {
    if (computerPlay == choice[0]) {
        switch (playerPlay) {
            case choice[0]:
                return result[0];
                break;
            case choice[1]:
                return result[1];
                break;
            case choice[2]:
                return result[2];
                break;
        }
    }
    else if (computerPlay == choice[1]) {
        switch (playerPlay) {
            case choice[0]:
                return result[2];
                break;
            case choice[1]:
                return result[0];
                break;
            case choice[2]:
                return result[1];
                break;
        }
    }
    else if (computerPlay == choice[2]) {
        switch (playerPlay) {
            case choice[0]:
                return result[1];
                break;
            case choice[1]:
                return result[2];
                break;
            case choice[2]:
                return result[0];
                break;
        }
    }
}

function awardPoints(result) {
    if (result == 'tie') {
    }
    else if (result == 'win') {
        playerPoints++;
    }
    else if (result == 'lose') {
        computerPoints++;
    }
}

function displayMatch(player, computer, result) {
    const uPlays = document.querySelector('.uPlays');
    const results = document.querySelector('.results');
    const comPlays = document.querySelector('.comPlays')
    const yourPoints = document.querySelector('.yourPoints');
    const comPoints = document.querySelector('.comPoints');
    const currentRound = document.querySelector('.currentRound');
    const firstImg = document.querySelector('.plaImage img');
    const secondImg = document.querySelector('.resImage img');
    const thirdImg = document.querySelector('.comImage img');

    firstImg.src = choosePic(player);
    thirdImg.src = choosePic(computer);
    secondImg.src = chooseRes(result);

    uPlays.textContent = `${player}`;  
    comPlays.textContent = `${computer}`;
    results.textContent = `You ${result}`;
    yourPoints.textContent = `${playerPoints}`;
    comPoints.textContent = `${computerPoints}`;
    currentRound.textContent = `${round}`;
}

function choosePic (played){
        switch(played) {
            case choice[0]:
                return imgRock;
                break;
            case choice[1]:
                return imgPaper;
                break;
            case choice[2]:
                return imgScissors;
                break;
        }
    }
function chooseRes (played){
    switch(played) {
        case result[0]:
            return imgThumbs;
            break;
        case result[1]:
            return imgPointsLeft;
            break;
        case result[2]:
            return imgPointsRight;
            break;
    }
}

function endGame() {
    const endMsg = document.querySelector('.endMatch');
    let winner; 
    playerPoints == 5? winner = 'player' : winner = 'computer';

    endMsg.textContent = `${winner} Wins!`;
    
    buttons.forEach(button => {
        button.disabled = true;
    })
    
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    playAgain.addEventListener('click', function() {
        location.reload();
    })
    endMsg.appendChild(playAgain);
}