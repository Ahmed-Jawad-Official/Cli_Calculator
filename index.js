#! /usr/bin/env node
import inquirer from "inquirer";
console.log("<---------- Welcome To My Claculator --------->");
const answer = await inquirer.prompt([
    {
        message: "Please Enter Your First Number",
        type: "number",
        name: "First_Number",
    },
    {
        message: "Please Enter Your Second Number",
        type: "number",
        name: "Second_Number",
    },
    {
        message: "Please Select Oprator",
        type: "list",
        name: "Operator",
        choices: ["Addition +", "Subtraction -", "Multiplication x", "Divison /"],
    },
]);
if (answer.Operator === "Addition +") {
    console.log("-------------------------------------");
    console.log("Your Answer Is", answer.First_Number + answer.Second_Number);
    console.log("-------------------------------------");
}
else if (answer.Operator === "Subtraction -") {
    console.log("-------------------------------------");
    console.log("Your Answer Is", answer.First_Number - answer.Second_Number);
    console.log("-------------------------------------");
}
else if (answer.Operator === "Multiplication x") {
    console.log("-------------------------------------");
    console.log("Your Answer Is", answer.First_Number * answer.Second_Number);
    console.log("-------------------------------------");
}
else if (answer.Operator === "Divison /") {
    if (answer.Second_Number == 0) {
        console.log("-------------------------------------");
        console.log("Error Cannot Division by zero ");
        console.log("-------------------------------------");
    }
    else {
        console.log("-------------------------------------");
        console.log("Your Answer Is", answer.First_Number / answer.Second_Number);
        console.log("-------------------------------------");
    }
}
else {
    console.log("Errorrrrrrrrrr");
}
