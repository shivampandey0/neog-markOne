var readlineSync = require("readline-sync");

var questions = [
  {
    question: "What's my Home Town?",
    answer: "Lucknow",
  },
  {
    question: "My favorite Superhero?",
    answer: "Ironman",
  },
  {
    question: "What I like to eat outside?",
    answer: "Pizza",
  },
];

var highscores = [
  {
    name:"Shivam",
    score:"3",
  },
  {
    name: "Alok",
    score: "3",
  }
];

var score = 0;

function welcomeUser(){
  var playerName = readlineSync.question("Welcome, What's your name?\n");

  log("Welcome " + playerName + ", Let's see how well DO YOU KNOW Shivam?\n")
}

function startGame(){
  for(var i=0; i< questions.length; i++){
    play(questions[i].question, questions[i].answer);

  }
}

function play(question,answer){
  var userAnswer = readlineSync.question(question+ "\n");

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    log("correct");
    score +=1;
  }else{
    log("wrong");
  }

  log("Your currect Score: " +  score);
  log("******************");
}


function showAllScores(){
  log("You scored: " + score);
  log("----Highscores----")

  highscores.map(score => log(score.name+ " -> " + score.score))
}

function log(msg){
  console.log(msg);
}

welcomeUser();
startGame();
showAllScores();