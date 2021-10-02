var readlineSync = require("readline-sync");
const chalk = require('chalk');


var questions = [
  {
    question: "What's my Home Town?",
    answer: "Lucknow",
  },
  {
    question: "Which comedy movie do I like most?",
    answer: "Hera Pheri",
  },
  {
    question: "My favorite Superhero?",
    answer: "Ironman",
  },
  {
    question: "In which year Shivam had a girlfriend?",
    answer: "Never",
  },
  {
    question: "What I like to eat outside?",
    answer: "Pizza",
  },
];

var highscores = [
  {
    name:"Shivam",
    score:"5",
  },
  {
    name: "Alok",
    score: "4",
  },
   {
    name: "",
    score: "",
  },
  
];

var score = 0;

function welcomeUser(){
  var playerName = readlineSync.question("Welcome, What's your name?\n");

  log(chalk.green("Welcome " + playerName + ", Let's see how well DO YOU KNOW Shivam?\n"))
    highscores[2].name = playerName;

}

function startGame(){
  for(var i=0; i< questions.length; i++){
    play(questions[i].question, questions[i].answer);

  }
}

function play(question,answer){
  var userAnswer = readlineSync.question(question+ "\n");

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    log(chalk.green("correct"));
    score +=1;
  }else{
    log(chalk.red("wrong"));
  }

  log(chalk.green("Your currect Score: " +  score));
  log("******************");
  highscores[2].score = score;

}


function showAllScores(){
  log("You scored: " + score);
  log("----Highscores----")

  highscores.map(score => log(chalk.blue(score.name+ " -> " + score.score)))
}

function log(msg){
  console.log(msg);
}

welcomeUser();
startGame();
showAllScores();