//Rock Paper Scissors Shoot// 

 var Player1 = "Rock"

 var compChoices = ["Rock", "Paper", "Scissors"];
 var compChoice = compChoices[Math.floor(Math.random()*3)]

//Tie
  if (Player1 == compChoice){
     console.log("Tie");
  }

//Player= Rock and Computer = Paper
  else if (Player1 == "Rock" && compChoice == "Paper"){
      console.log("You Lose");
  }

//Player = Rock and Computer = Scissors
  else if (Player1 =="Rock" && compChoice == Scissors){
      console.log("You Win");
  }

//Player = Paper and Computer = Scissors
else if (Player1 == "Paper" && compChoice == "Scissors"){
      console.log("You Lose");
}

//Player = Paper and Computer = Rock
else if (Player1 == "Paper" && compChoice == "Rock"){
      console.log("You Win");
  }

//Player = Scissors and Computer = Paper
 else if (Player1 =="Scissors" && compChoice == "Paper"){
      console.log("You Win");
 }

 //Player = Scissors and Computer = Rock
  else if (Player1 == "Scissors" && compChoice == "Rock"){
      console.log("You Lose");
  }