var inquirer = require("inquirer");

function BasicCard(front,back) {
  this.front = front;
  this.back = back;
  this.runGame = function(){
    correctAnswer = this.back;
    inquirer.prompt([
        {
          name: "QuestionResponse",
          message: this.front,
        default: 'Please capitalize their names'
        }
      ]).then(function(answers) {
        continueGame(answers.QuestionResponse, correctAnswer);
      });
  }
}

questionOne = new BasicCard("Who was the first president of the United States?", "George Washington");
questionTwo = new BasicCard("Who had the largest signature on the Declaration of Independence?", "John Hancock");
questionThree = new BasicCard("Who invented the bifocals?", "Benjamin Franklin");

var correct = 0;

function continueGame(answer, n){
  if(n === "George Washington"){
    if(answer !== "George Washington"){
      console.log("you are wrong!");
      questionTwo.runGame();
    }else{
      console.log("You are right!!");
      correct ++;
      questionTwo.runGame();
    }

  }else if(n === "John Hancock"){
    if(answer !== "John Hancock"){
      console.log("you are wrong!");
      questionThree.runGame();
    }else{
        console.log("You are right!!");
        correct ++;
        questionThree.runGame();
    }

  }else if(n === "Benjamin Franklin"){
    if(answer !== "Benjamin Franklin"){
      console.log("you are wrong!");
      gameComplete();
    }else{
      console.log("You are right!!");
      correct ++;
      gameComplete();
    }
  }

}

function gameComplete(){
  console.log("You've answered all the questions!!")
  console.log("You got " + correct + " out of 3 correct.")

}

exports.gameInit = function(){
  questionOne.runGame();
}
