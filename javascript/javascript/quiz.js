/*Create a quiz game using for, while, conditional loops with 
array of 3 trivia questions, create a second array that contains the answers
Loop through the questions to prompt the user for the answer. Compare the prompt to the answers array. 
They get  3 tries, First try = 3 points. Second try = 2 points. Third try = 1 point. Wrong = 0 point
Questions should be single word, Answers should be text strings, not numbers.*/
console.log(meyersQuiz);

const question = [  //use const to not delcare a global variable outside of a function
    'What are the initials of Saturday Night Live?', 
    'True or False? Seth Meyers hosts The Tonight Show with Jimmy Fallon.', 
    'How many Primetime Emmy Awards has Late Night with Seth Meyers won?'
];  //close array 1
const answer = [
    'SNL', 
    'FALSE', 
    '0'
];  //close array 2

function meyersQuiz() {
    alert("Want to take a little quiz to earn free internet points?\n\
You get 3 attempts per question and points will be awarded at the end.");

    var score = 0;  //set score, var is a local variable inside of a function

    for (i = 0; i < 3; i++) {   //i equals question array index
        var attempts = 3;   //set attempts
        var points = 0;    //set points
        
        while (attempts > 0){   //beginning of attempt
            var guess = prompt(question[i]);    //ask the question

            if (guess.toUpperCase()==answer[i].toUpperCase()){  //convert answer to matching string value
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

    return score;   //overall score
    
} //function close