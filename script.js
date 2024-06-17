// Possible Choices
var textArray = [
   'Schere',
   'Stein',
   'Papier'
];
function getComputerChoice() {
var randomIndex = Math.floor(Math.random() * textArray.length); 
return textArray[randomIndex];
}

// get Player Choice
//let getHumanChoice = prompt('Schere, Stein, Papier?'); 
//getHumanChoice = getHumanChoice.charAt(0) + getHumanChoice.substring(1).toLowerCase();


function getHumanChoice() {
   let input = prompt('Schere, Stein, Papier?').toLowerCase();
   return input.charAt(0).toUpperCase() + input.slice(1);
}




function playGame () {
   
   let humanScore = 0;
   let computerScore = 0;

   function playRound (humanChoice, computerChoice) {
            if( 
      (humanChoice==="Schere" && computerChoice==="Papier") || 
      (humanChoice==="Stein" && computerChoice==="Schere") ||
      (humanChoice==="Papier" && computerChoice==="Stein")
   )
         {
            humanScore = humanScore+1
            console.log ("You win " +humanChoice +" beats " +computerChoice);
         }
      else if (
         (humanChoice==="Schere" && computerChoice==="Stein") || 
         (humanChoice==="Stein" && computerChoice==="Papier") || 
         (humanChoice==="Papier" && computerChoice==="Schere")
      )
      {
         computerScore = computerScore+1
         console.log ("You lose " +computerChoice +" beats " +humanChoice);
      }
      else {
         console.log ("Untentschieden both " +computerChoice);
      }
   }
   for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log (humanScore, computerScore);
   }


//console.log (humanSelection, computerSelection);
}

playGame();




