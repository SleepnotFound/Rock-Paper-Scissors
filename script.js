const choice = ['rock','paper','scissors'];                                             //available options for game
let computerPlay;


function computerTurn() {
    computerPlay = choice[Math.floor(Math.random() * choice.length)];                   //computerTurn will choose 1 of 3 array options when called 
    return computerPlay
}
console.log('computer plays: ' + computerTurn());

let playerPlay = prompt('type in rock/paper/scissors');                     
playerPlay = playerPlay.toLowerCase();                                                  //lowercase answer to compare it with array

if (playerPlay == choice[0] || playerPlay == choice[1] || playerPlay == choice[2]) {    //validates if user input is valid
    console.log('user plays: ' + playerPlay)
}
else {
    console.log(playerPlay + ' :is invalid')
}