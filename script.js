// Possible Choices
var array_choice = [
   'Schere',
   'Stein',
   'Papier'
];
function getComputerChoice() {
var randomIndex = Math.floor(Math.random() * array_choice.length); 
return array_choice[randomIndex];
}

// get Player Choice
//let getHumanChoice = prompt('Schere, Stein, Papier?'); 
//getHumanChoice = getHumanChoice.charAt(0) + getHumanChoice.substring(1).toLowerCase();


//function getHumanChoice() {
  // let input = prompt('Schere, Stein, Papier?').toLowerCase();
   //return input.charAt(0).toUpperCase() + input.slice(1);
//}

let humanScore = 0;
let computerScore = 0;

document.getElementById("Schere").addEventListener("click", ()=>{
   const computerSelection = getComputerChoice()
   playRound("Schere", computerSelection);
});
document.getElementById("Stein").addEventListener("click", ()=>{
   const computerSelection = getComputerChoice()
   playRound("Stein", computerSelection);
});
document.getElementById("Papier").addEventListener("click", ()=>{
   const computerSelection = getComputerChoice()
   playRound("Papier", computerSelection);
});

function playRound (humanChoice, computerChoice) {
   if( 
(humanChoice==="Schere" && computerChoice==="Papier") || 
(humanChoice==="Stein" && computerChoice==="Schere") ||
(humanChoice==="Papier" && computerChoice==="Stein")
)
{
   humanScore = humanScore+1
   document.getElementById("result").innerHTML = "You win " +humanChoice +" beats " +computerChoice +" score is you: " +humanScore +" computer: " +computerScore;
   console.log ("You win " +humanChoice +" beats " +computerChoice);
}
else if (
(humanChoice==="Schere" && computerChoice==="Stein") || 
(humanChoice==="Stein" && computerChoice==="Papier") || 
(humanChoice==="Papier" && computerChoice==="Schere")
)
{
computerScore = computerScore+1
document.getElementById("result").innerHTML = "You lose " +computerChoice +" beats " +humanChoice +" score is you: " +humanScore +" computer: " +computerScore;
console.log ("You lose " +computerChoice +" beats " +humanChoice);
}
else {
document.getElementById("result").innerHTML = "Unentschieden both " +computerChoice +" score is you: " +humanScore +" computer: " +computerScore;   
console.log ("Untentschieden both " +computerChoice);
}
if (humanScore===5 ) {
   document.getElementById("winner").innerHTML = "Congratulation You Win!";
}
else if (computerScore ===5) {
   document.getElementById("winner").innerHTML = "Sorry You Lost. Next time it's your tunr.";
}
console.log (humanScore, computerScore);
}


//function playGame () {
   
   

   
  // for (let i = 0; i < 5; i++) {
    //  const humanSelection = getHumanChoice();
      //const computerSelection = getComputerChoice();
     // playRound(humanSelection, computerSelection);
   //   console.log (humanScore, computerScore);
   //}


//console.log (humanSelection, computerSelection);
//}

//playGame();




