  
var userChoice = prompt("I challenge you! Choose rock, paper or scissors!");

      var computerChoice = Math.random();

      if (computerChoice <= 0.33) {
        computerChoice = "rock";
      } else if (computerChoice <= 0.66) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }

/* These are the game functions. comparing the userChoice parameter to the computerChoice parameter. There are three choices that the computer can make. 

/* Also adding best out of three function. */ 

      var compare = function (userChoice, computerChoice){
        if (userChoice === computerChoice) {
        window.alert("the result is a tie!");
      } else if (userChoice === "rock") {
          if (computerChoice === "scissors") {
          window.alert("Rock wins!");
          } else {
        window.alert("Paper wins!");
      }

    } else if (userChoice === "paper") {
              if (computerChoice === "rock") {
                window.alert("paper wins!");
              } else {
                window.alert("scissors wins!");
              }

      } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
        window.alert("rock wins!");
      } else {
        window.alert("scissors wins!");
      }
    }
  };