const choice = ['rock','paper','scissors'];                                                 //available options for player/computer
let playerPoints = 0;
let computerPoints = 0;
let playerPlay;
let computerPlay;


function chooseResult(computerPlay, playerPlay) {                                              //possible 9 outcomes when comparing 3 objects. returns a string.
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

function awardPoints(result) {                                                              //use result argument from chooseResult(string) to assign points
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

function playGame(decision) {
    computerPlay = choice[Math.floor(Math.random() * choice.length)];
    playerPlay = decision;
    
    if (playerPlay == choice[0] || playerPlay == choice[1] || playerPlay == choice[2]) {    //validates user input. takes 
        console.log('user plays: ' + playerPlay);
        console.log('computer plays: ' + computerPlay);                                            
        let result = chooseResult(computerPlay, playerPlay);
        let points = awardPoints(result);
        console.log('player: ' + playerPoints);
        console.log('computer: ' + computerPoints);
        
        }
    else {
        console.log(playerPlay + ' :is invalid. chooseResult() will not start')
        }
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playGame(button.id);
    })
})