// set the variable compc to 0,1 or 2 
function getComputerChoice() {
   return Math.floor(Math.random() * 3) + 1;
}

console.log (getComputerChoice());
// get Player Choice
function getHumanChoice() {
    prompt('Your choice?');
 }
console.log (getHumanChoice());

let humanScore = 0;
let computerScore = 0;