const choice = ['rock','paper','scissors'];                                             //available options for game
//let start = confirm('Press enter to begin game');
//(start==true)? game() : console.log('game will not begin');                             //? works like if/else but shorter
let playerPoints = 0;
let computerPoints = 0;

let playerPlay = prompt('type in rock/paper/scissors');
playerPlay = playerPlay.toLowerCase();                                                  //lowercase answer to compare it with array

let computerPlay = choice[Math.floor(Math.random() * choice.length)];                       //computerTurn will choose 1 of 3 array options when called 

if (playerPlay == choice[0] || playerPlay == choice[1] || playerPlay == choice[2]) {    //validates if user input is valid
    console.log('user plays: ' + playerPlay)
    console.log('computer plays: ' + computerPlay)
    let result = playRound(computerPlay, playerPlay);
    let points = awardPoints(result);
    console.log('player: ' + playerPoints);
    console.log('computer: ' + computerPoints);
    
    }
else {
    console.log(playerPlay + ' :is invalid. playround() will not start')
    }

function playRound(computerPlay, playerPlay) {
    let result = ['tie', 'win', 'lose'];
    if (computerPlay == choice[0]) {
        switch (playerPlay) {
            case choice[0]:
                return result[0];
                break;
            case choice[1]:
                playerPoints++;
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
        console.log('no points awarded!')
    }
    else if (result == 'win') {
        playerPoints++;
        console.log('player scores!');
    }
    else if (result == 'lose') {
        computerPoints++;
        console.log('computer scores!');
    }
}

function game() {
    
}