#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber"},
  { message: "Enter second Number", type: "number", name: "secondNumber"},
  {
    message: "Select One Of The Operators To Perform Operation",
    type: "list",
    name: "Operators",
    choices: ["Addition","Subtraction","Multiplication","Division",],
  },
]);

// Condtoinal Statement
if (answer.Operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if  (answer.Operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if  (answer.Operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please Select Valid Operator");
    
}

    
    