console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?
      Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

- The candidate should have completed all the questions.
- The maximum time given to complete the interview is 120 minutes.
- The maximum time given for very easy questions is 5 minutes each.
- The maximum time given for easy questions is 10 minutes each.
- The maximum time given for medium questions is 15 minutes each.
- The maximum time given for hard questions is 20 minutes each.

If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time the candidate takes to complete the interview.

Given an array, in a true condition will always be in the format 
[very_easy, very_easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.



    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/



//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 
function interview(questionArray, interviewTime) {
    // total time and number of answers
    if ((interviewTime > 120) || (questionArray.length < 8)) return "disqualified";

    // loop through questionArray
    for (var i = 0; i < questionArray.length; i++) {

        if ((i == 0) || (i == 1) && ((questionArray[0] <= 5)) || (questionArray[1] <= 5) {
            //  very_easy 5 min max
            console.log('questionArray[0]:', questionArray[0]);
            return "disqualified";
        }
        else if ((questionArray[2]) && ((questionArray[3]) > 10)) {
            // are easy, 10 min n=max
            console.log('questionArray[2]:', questionArray[2]);
            return "disqualified";
        }
        else if ((questionArray[4]) && ((questionArray[5]) > 15)) { // medium 15 max
            console.log('questionArray[4]:', questionArray[5]);
            return "disqualified";
        }

        else if ((questionArray[6]) && ((questionArray[7]) > 20)) { // hard 20 max
            console.log('questionArray[6]:', questionArray[7]);
            return "disqualified";
        }

    }
    return "qualified";
}

//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++
interview([5, 5, 10, 10, 15, 15, 20, 20], 120); // "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64); // "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120); // "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120); //   "disqualified" 
// Did not complete all the questions.
// check array length?

interview([5, 5, 10, 10, 15, 15, 20, 20], 130); // "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.