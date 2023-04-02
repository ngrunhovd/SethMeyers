console.log("onClick game");
//initialize button
document.getElementById('prompt').innerHTML = "<button class='game' onClick='playGame()'>Play Game</button>";
document.getElementById('gameDir').innerHTML = "Click the Play Game button to begin then click the answer you think is correct.";

/*Create a trivia array that will shift onClick and where n is equal to the new index number after the first two 
items are shifted, the IDs to call for HTML display is question, answer, prompt */

var questions = [   
  // ["Question?", n, "answer 1", "answer 2", "answer 3"],
  ["Which late night talk show is Seth Meyers the host of?", 0, "Late Night", "The Late Show", "The Tonight Show"],
  ["Who is the former SNL cast member that sometimes guests as the band drummer on Late Night?", 2, "Will Forte", "Will Ferrel", "Fred Armisen"],
  ["What animal is used as a comparison to some Late Night fans on YouTube?", 1, "Hyena", "Jackal", "Badger"]
]

var counter = 0; //initial questions index 

function playGame() {
  // call the questions and manipulate the multi array to prompt the user and check for a correct answer 
  var question = questions[counter];

  document.getElementById('question').innerHTML = "<p id='game'>" + question[0] + "</p>";
  question.shift();   // the question is removed [n, "answer 1", "answer 2", "answer 3"],
  var correctIndex = question[0]; //question[n]
  question.shift();   // ["answer 1", "answer 2", "answer 3"],

  var answerChoices = "";
  question.forEach(createAnswerList); //forEach loop to call fx that creates a new answers array from the current question 

  function createAnswerList(value, index) {
    /* build the answerChoices list as local links that calls the checkAnswer fx when clicked  
       index is the user choice, correctIndex is from question array, value is input from forEach loop*/
    answerChoices += "<li><a href='#' onClick='checkAnswer(" + index + ', ' + correctIndex + ")'>" + value + "</a></li>";
  }
  document.getElementById('answers').innerHTML = "<p>" + answerChoices + "</p>";  //display the createAnswerlist
  document.getElementById('prompt').innerHTML = "";
  document.getElementById('gameDir').innerHTML = "";

}

function checkAnswer(index, correctIndex) {
  //checkAnswer is called from onClick answer list, then change HTML on screen depending on answer 
  if (index == correctIndex) {
    document.getElementById('answers').innerHTML= "<p id='game'>That's correct!</p>";
    document.getElementById('question').innerHTML = "";
  } else {
    document.getElementById('answers').innerHTML = "<p id='game'>Sorry, that's incorrect :(</p>";   
    document.getElementById('question').innerHTML = "";
  }
  // advance the counter (n) for the next question index
  counter ++;
  if (counter < questions.length) {
    document.getElementById('prompt').innerHTML = "<button class='game' onClick='playGame()'>Continue</button>";
  } else {
    document.getElementById('prompt').innerHTML = "<button class='game' onClick='location.reload()'>Restart Game</button>";
  }

}

