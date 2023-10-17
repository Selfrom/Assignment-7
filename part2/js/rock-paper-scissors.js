var userChoice;
var compChoice;
var tie = false;
do {

  do {
    userChoice = parseInt(window.prompt("Rock(1), Paper(2), or Scissors(3)? Please enter either 1, 2, or 3: "));
  } while(userChoice != 1 && userChoice != 2 && userChoice != 3);
  
  compChoice = Math.ceil(Math.random() * 3);

  switch(userChoice) {
    case 1:
      switch(compChoice) {
        case 1:
          window.alert("You both chose rock. It's a tie.");
          tie = true;
          break;
        case 2:
          window.alert("Paper covers rock. You lose...");
          break;
        case 3:
          window.alert("Rock destroys scissors. You win!");
          break;
      }
      break;
    case 2:
      switch(compChoice) {
        case 1:
          window.alert("Paper covers rock. You win!");
          break;
        case 2:
          window.alert("You both chose paper. It's a tie.");
          tie = true;
          break;
        case 3:
          window.alert("Scissors cut paper. You lose...");
          break;
      }
      break;
      case 3:
        switch(compChoice) {
          case 1:
            window.alert("Rock destroys scissors. You lose...");
            break;
          case 2:
            window.alert("Scissors cut paper. You win!");
            break;
          case 3:
            window.alert("You both chose scissors. It's a tie.");
            tie = true;
            break;
        }
        break;
  }
} while (tie);
