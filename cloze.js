var inquirer = require("inquirer");

function clozeCard(text,cloze) {
  this.text = text;
  this.cloze= cloze;
  this.correctPhrase = function(){
    full = this.text;
    correctAnswer = this.cloze;
    string = this.text.replace(this.cloze, " ... ");
    inquirer.prompt([
        {
          name: "QuestionResponse",
          message: string,
        default: 'Please fill in the blank'
        }
      ]).then(function(answers) {
        continueGame(answers.QuestionResponse, correctAnswer, full);
      });
  }

}

sayingOne = new clozeCard("A good traveler has no fixed plans and is not intent on arriving.", "plans");
sayingTwo = new clozeCard("Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "courage");
sayingThree = new clozeCard("Tomorrow is a mystery, yesterday is history, today is a gift that's why they call it the present.", "the present");

var correct = 0;

function continueGame(answer, n, full){
  if(n === "plans"){
    if(answer !== "plans"){
      console.log("wrong phrase");
      console.log("correct answer ", full);
      sayingTwo.correctPhrase();
    }else{
      console.log("You are right!!");
      sayingTwo.correctPhrase();
      correct ++;
    }

  }else if(n === "courage"){
    if(answer !== "courage"){
      console.log("you are wrong!");
      console.log("correct answer ", full);
      sayingThree.correctPhrase();
    }else{
        console.log("You are right!!");
        sayingThree.correctPhrase();
        correct ++;
    }

  }else if(n === "the present"){
    if(answer !== "the present"){
      console.log("you are wrong!");
      conosle.log("correct answer ", full);
      gameComplete();
    }else{
      console.log("You are right!!");
      correct ++;
      gameComplete();

    }
  }

}

function gameComplete(){
  console.log("You've answered all the questions!!");
  console.log("You got " + correct + " out of 3 correct.")

}

exports.gameInit = function(){
  sayingOne.correctPhrase();
}
