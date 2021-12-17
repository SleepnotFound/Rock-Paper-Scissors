const choice = ['rock','paper','scissors'];                                             //available options for game
let computerPlay;

function computerTurn() {
    computerPlay = choice[Math.floor(Math.random() * choice.length)];                   //computerTurn will choose 1 of 3 array options when called 
    return computerPlay
}

let playerPlay = prompt('type in rock/paper/scissors');                     
playerPlay = playerPlay.toLowerCase();                                                  //lowercase answer to compare it with array

if (playerPlay == choice[0] || playerPlay == choice[1] || playerPlay == choice[2]) {    //validates if user input is valid
    console.log('user plays: ' + playerPlay)
    console.log('computer plays: ' + computerTurn())
    playRound(computerPlay, playerPlay);
}
else {
    console.log(playerPlay + ' :is invalid. playround() will not start')
}

function playRound(computerPlay, playerPlay) {
    if (computerPlay == choice[0]) {
        switch (playerPlay) {
            case choice[0]:
                console.log("tie!");
                break;
            case choice[1]:
                console.log("win!");
                break;
            case choice[2]:
                console.log("lose!");
                break;
        }
    }
    else if (computerPlay == choice[1]) {
        switch (playerPlay) {
            case choice[0]:
                console.log("lose!");
                break;
            case choice[1]:
                console.log("tie!");
                break;
            case choice[2]:
                console.log("win!");
                break;
        }
    }
    else if (computerPlay == choice[2]) {
        switch (playerPlay) {
            case choice[0]:
                console.log("win!");
                break;
            case choice[1]:
                console.log("lose!");
                break;
            case choice[2]:
                console.log("tie!");
                break;
        }
    }
}