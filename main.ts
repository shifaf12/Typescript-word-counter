#! /usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a Colourful Welcome message
console.log(chalk.bold.yellow("\n \t\t Code With Shifa - Word Counter"));
console.log("=" .repeat(55));

// Prompt the user to enter a sentence 
let answers = await inquirer.prompt ([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Triming the sentence and splitting it into words based on "spaces".
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence.
console.log("=".repeat(55));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red (words.length)}`));
console.log("=" .repeat(55));

