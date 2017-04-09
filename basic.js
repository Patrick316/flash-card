var inquirer = require("inquirer");

function BasicCard(front,back) {
  this.front = front;
  this.back = back;
  this.runGame = function(){
    correctAnswer = this.back;
    inquirer.prompt([
        {
          name: "QuestionRespons",
          message: this.front,
        default: 'Please Capitalize their names'
        }
      ]).then(function(answers) {
        continueGame(answers.QuestionResponse, correctAnswer);
      });
  }
}

QuestionOne = new BasicCard("Who was the first president of the United States?", "George Washington");
QuestionTwo = new BasicCard("Who had the largest signature on the Declaration of Independence?", "John Hancock");
QuestionThree = new BasicCard("Who invented the bifocals?", "Benjamin Franklin");

function continueGame(answer, n){
  if(n === "George Washington"){
    if(answer !== "George Washington"){
      console.log("you are wrong!");
      QuestionTwo.runGame();
    }else{
      console.log("You are right!!");
      QuestionTwo.runGame();
    }

  }else if(n === "John Hancock"){
    if(answer !== "John Hancock"){
      console.log("you are wrong!");
      QuestionThree.runGame();
    }else{
        console.log("You are right!!");
        QuestionThree.runGame();
    }

  }else if(n === "Benjamin Franklin"){
    if(answer !== "Benjamin Franklin"){
      console.log("you are wrong!");
      gameComplete();
    }else{
      console.log("You are right!!");
      gameComplete();
    }
  }

}

function gameComplete(){
  console.log("You've answered all the questions!!")

}

exports.GameInit = function(){
  QuestionOne.runGame();
}
