// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//!instructor questions

// Are we generating a template or a full README
//Thinking of building the blocks of information for user to fill in later
//vs
//Building the README creator where the user only interacts with the command line

// My thought is to create the a 2 part questionaire.
// Part 1
//     Author's name,
//     GitHub user ID
// Part 2
// 1. What type of content is this?
//     Headers
//     Emphasis
//     List - This might be dificult. Would have to know how to separate the list items
//     Assuming list is an option - List by type.
//     Links
//     Table would be cool but difficult.

// 2. Content - this question would have to be adaptable depending on the type of content.
// 3. Would you like to add more content (repeat loop)

//!Options
//Headers
//Emphasis
//Lists - ordered/unordered
//Images
//Links
//Tables
