// Functions Practice
// For the first standard function, write a function that accepts two numbers as parameters, adds them together, then returns the result of that addition
// name this function addTwoNums
// TO DO
function addTwoNums(num1, num2){
    let sum = 0;
    sum = num1 + num2;
    return sum;
}


// For box 2, let's accept two string parameters and return the result of them concatenated into a single string with a space between the two words
// name this function concatenateStrings
// TO DO
function concatenateStrings(str1, str2){
    return str1 + "" + str2;
}


// for the first function expression, let's write code that displays returns one result if the number entered by the user is less than 100 ("number is less than 100"), and another message if the number is greater than or equal to 100 ("that is 100 or greater")
// name this variable compareToHundred
// TO DO
let compareToHundred = function(num1){
    if(num1 < 100){
        return "number is less than 100"
    }else{
        return "That is 100 or greater";
    }
}


// for the second function expression, let's write code that tells the user whether or not their answer to a trivia question is correct. This will accept a parameter for a letter answer, and can use either a switch statement or a series of if/else/if statements for the logic
// name this variable quizAnswer
// TO DO
		// if they answered a return "Nope. GIT215 is the Introductory HTML/CSS course."
let quizAnswer = function(answer){
    switch(answer){

		// if they answered a return "Nope. GIT215 is the Introductory HTML/CSS course."
        case "a":
            return "Nope. GIT337 is the Introductory HTML/CSS course.";

		// if they answered b return "Nope. GIT337 is the Intermediate HTML/CSS course."

        case "b":
            return "Nope. GIT337 is the Intermediate HTML/CSS course.";

		// if they answered c return "Nope. GIT414 is the Responsive HTML/CSS course."

        case "c":
            return "Nope. GIT337 is the Responsive HTML/CSS course.";

		// if they answered d return "You got it! GIT417 is the Introductory JavaScript course."


        case "d":
            return "Nope. GIT337 is the Introductory JavaScript course.";
    }
}    
// For box five, re-write the first standard function in the arrow function syntax
// name the variable addTwoNumsArrow
// TO DO

let addTwoNumsArrow = (num1, num2) => num1 + num2;

// For box five, re-write the second standard function in the arrow function syntax
// name the variable concatenateStringsArrow
// TO DO




let concatenateStringsArrow = (str1,str2) => str1 + " " + str2;



@@ -361,4 +375,4 @@ hljs.highlightAll();
	let now = new Date();
	let span = document.querySelector("footer span");
	span.innerHTML = now.getFullYear();
