/*Create a quiz game using for, while, conditional loops with 
array of 3 trivia questions, create a second array that contains the answers
Loop through the questions to prompt the user for the answer. Compare the prompt to the answers array. 
They get  3 tries, First try = 3 points. Second try = 2 points. Third try = 1 point. Wrong = 0 point
Questions should be single word, Answers should be text strings, not numbers.*/
console.log("meyersTrivia");

//get current date/time and set months/days
var now = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function greeting() {
  //switch statement to edit the greeting
  hour = now.getHours();
  switch (true) {
    case (now.getHours()>4 && now.getHours()<12):
      return "Good morning, ";
    case (now.getHours()>11 && now.getHours()<17):
      return "Good afternoon, ";    
    case (now.getHours()>16 && now.getHours()<21):
      return "Good evening, ";
    default:
      return "Good night, ";
  }
}

function todayMsg(n) {
  //prompt the user for their name, make it sentence case and greet them with the current date and time.
  var firstN = n.charAt(0).toUpperCase();
  var Name = firstN + n.slice(1,);//new date string build
  var message = (",<br>It is " + now.getHours() + ":" + now.getMinutes() + " on " + days[now.getDay()] + ", " + 
    months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear() + ".</p>");
  /* access the names of the day and month from the arrays using the date from the date object */
  document.write('<p class="chapter">' + greeting() + Name + message);
}

function todayQuote() {
  console.log("Quote of the day");
  /*assign quotes to an array element and use a random number to generate one*/
  let quote0 =
    "I was very much aiming to go into movies eventually, like a lot of 'SNL' people. But, \
  soon after I arrived, all these really good actors started, like Fred Armisen, Bill Hader, Jason Sudeikis \
  and Andy Samberg, and I thought, 'If I were casting a movie, I would put all of them in it over me.'";
  let quote1 =
    "People say, 'Oh, you're doing the job of journalists.' I think it's very important \
  to note that we can't do our job without journalists. Journalists can do their job without late-night \
  comedians. They'd be just fine without us. But we, of course, use their work every day to build our pieces.";
  let quote2 =
    "We made a choice not to go back to wearing suits, mostly because the show’s on at 12:30 \
  (at night) and I don’t think anybody who’s watching is wearing a (f-ing) suit. If people were wearing \
  suits in their home at 12:30, I would put my suit back on.";
  let quote3 =
    "Sal Gentile, who writes 'A Closer Look,' made a really good observation about what \
  happened to our show, which is we used to be a sane show for sane people in a crazy world. And then we \
  became crazy people.";
  let quote4 =
  "And I guess the idea was that it was this... you know, the kids would just be terrified. He had a piano. \
  The keys were made from the bones of his victims. And it would just, kids would be terrified and then they would \
  wake up and they'd be super upset if they had seen Mac Tonight and then the only way to get them to calm down was \
  to go to McDonald's.";
  let quote5 = "My parents introduced me to 'SNL,' Monty Python, and Richard Pryor probably way earlier \
  than they had any right to.";
  const quotes = [quote0, quote1, quote2, quote3, quote4, quote5]; //quote array

  var num = Math.floor(Math.random()*5); //a random number between 0-4 is picked for quotes index 
  var quotetoday = quotes[num];
  document.write('<p>"' + quotetoday + '"<br>&emsp; - Seth Meyers</p');
}

function validEmail(email) {
  var emailFormat = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
  var valid = email.match(emailFormat);
  return valid
}

function userEmail() {
  if (validEmail(email)) {
    var emailArray = email.split('@');
    var userName = emailArray[0];
    var userNAME = userName.toUpperCase();
    var domain = emailArray[1];
    document.write("<p>User name: " + userNAME + "</p><p>eMail provider: " + domain + "</p>");
    } else {
      email = prompt("Please enter a valid email address.");
      userEmail();
  }
}

const question = [  //use const to not delcare a global variable outside of a function
  'What are the initials of Saturday Night Live?', 
  'Which show is Seth Meyers the host of?\nA (The Late Show)\nB (The Tonight Show)\nC (Late Night)\nD (The Daily Show)', 
  'How many Primetime Emmy Awards has Late Night with Seth Meyers won?'
  ];  //close array 1
const answer = [
  'snl', 
  'c', 
  '0'
  ];  //close array 2

function meyersTrivia() {
  alert("Want to take a little quiz to earn free internet points?\n\
    You get 3 attempts per question and points will be awarded at the end.");

  var score = 0;  //set score, var is a local variable inside of a function

  for (i = 0; i < 3; i++) {   //i equals question array index
    var attempts = 3;   //set attempts
    var points = 0;    //set points
    
    while (attempts > 0){   //beginning of attempt
      var guess = prompt(question[i]);    //ask the question
      if (guess.toLowerCase()==answer[i].toLowerCase()){  //convert answer to matching string value
          points = attempts;  //points awarded is equal to the attempt # of question
          alert("Correct! You get " + points + " points");
          score += points;    //score is updated with points
          attempts = 0;   //ends loop for the next question
          } else { 
              attempts --;  //attempts decrement
              alert("Incorrect. You have " + attempts + " more tries.");
      } //close if-else loop
    } //close while loop
  } //close for loop
  let average = (score / 9) * 100;
  let avg = average.toFixed(2);
  return avg;   //overall average
} //function close
