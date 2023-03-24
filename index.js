// Imported readline-sync as ES module
import readlineSync from 'readline-sync';
import chalk from 'chalk';

var score = 0, level = 1;

// questionList is a list of objects, it contains objects of questions and answers
var questionList = [{
  question: "What is my actual name?\n",
  options: ['Nitan', 'Notun', 'Nutan', 'Nitun'],
  answer: "Nitan",
}, {
  question: "When is my birthday?\n",
  options: ['March', 'December', 'June', 'August'],
  answer: "June"
}, {
  question: "Where was I born?\n",
  options: ['Kolkata', 'Krishnagar', 'Agarpara', 'Kachrapara'],
  answer: "Krishnagar"
}, {
  question: "What is my favorite color?\n",
  options: ['Sky Blue', 'Baby Pink', 'Chillie Red', 'Royal Blue'],
  answer: "Royal Blue"
}, {
  question: "What is my favorite food?\n",
  options: ['Chicken Curry', 'Kochuri', 'Momo', 'Pizza'],
  answer: "Pizza"
}, {
  question: "What is my favorite movie/book/TV show?\n",
  options: ['DDLJ', 'Interstellar', 'F.R.I.E.N.D.S', 'The Office'],
  answer: "Interstellar"
}, {
  question: "What is my favorite hobby?\n",
  options: ['Painting', 'Learning new Technology', 'Playing Guitar', 'Reading Book'],
  answer: "Learning new Technology"
}, {
  question: "What is my biggest fear?\n",
  options: ['Mountain', 'Dogs', 'Losing someone close', 'Ocean'],
  answer: "Losing someone close"
}, {
  question: "What is my dream vacation destination?\n",
  options: ['Hawai', 'Japan', 'New York', 'Maldives'],
  answer: "Maldives"
}, {
  question: "What is my favorite type of music?\n",
  options: ['Lo-fi', 'Rock', 'Desi', 'Pop'],
  answer: "Lo-fi"
}];

// Level promotion 
function levelPromotion() {
  level++;
  console.log(chalk.green("\nYAY! You were promoted to a new level!"));
  console.log("\nYour current level is " + chalk.green(level) + "!\n");
}

// Capitalize the first character of username
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Quiz function
function quiz(question, options, answer) {
  // using keyInSelect property for multiple choices
  var userAns = readlineSync.keyInSelect(options, "\nQ" + (i + 1) + ". " + question, { cancel: false });
  // score increament if answer os right, no penalty for wrong answer
  if (options[userAns] === answer) {
    score++;
    console.log("\nYou are " + chalk.green("RIGHT!\n"));
  } else {
    console.log("\nYou are " + chalk.red("WRONG!\n"));
  }

  if (score === 5 || score === 10) {
    levelPromotion()
  }
  console.log("Current score: " + chalk.green(score) + "\n-----------------");
}

var userName = capitalizeFirstLetter(readlineSync.question("Welcome to the " + chalk.red.bold("DO YOU KNOW ME QUIZ.") + "\n\nTell me your name: "));

// If blank string recieved
if (userName === "") {
  userName = "User"
}
// Greeting the user
console.log("\nHello " + chalk.red(userName) + ", let's start!");

for (var i = 0; i < questionList.length; i++) {
  quiz(questionList[i].question, questionList[i].options, questionList[i].answer)
}
console.log("\nYour Final Score is: " + chalk.green(score));
console.log("\nYour Final Level is: " + chalk.green(level));

console.log("\nThank you for playing the " + chalk.red("DO YOU KNOW ME QUIZ") + ", " + chalk.green(userName + "!") + " Take Care.");