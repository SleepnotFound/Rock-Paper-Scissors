const choice = ['rock','paper','scissors'];                                                 //available options for player/computer
let playerPoints = 0;
let computerPoints = 0;
let playerPlay;
let computerPlay;
let round = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(button.id);
    })
})

function playGame(decision) {
    computerPlay = choice[Math.floor(Math.random() * choice.length)];
    playerPlay = decision;                                           
    let result = chooseResult(computerPlay, playerPlay);
    let points = awardPoints(result);
    round++;

    displayMatch(playerPlay, computerPlay, result);
}

function chooseResult(computerPlay, playerPlay) {
    let result = ['tie', 'win', 'lose'];
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
        //no points. no changes
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

    uPlays.textContent = `${player}`;  
    comPlays.textContent = `${computer}`;
    results.textContent = `${result}`;
    yourPoints.textContent = `${playerPoints}`;
    comPoints.textContent = `${computerPoints}`;
}