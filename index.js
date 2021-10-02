// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const createReadMe = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a project title!");
        }
      },
    },
    {
      type: "confirm",
      name: "confirmBrief",
      message: "Would you like to enter a project brief?",
      default: true,
    },
    {
      type: "input",
      name: "brief",
      message:
        "Provide a short description of the project; goals, language(s) you will use, etc.",
      when: ({ confirmBrief }) => confirmBrief,
    },
    //!Need to destructure this list .filter
    {
      type: "confirm",
      name: "confirmList",
      message: "Would you like to build a checklist for the README?",
      default: true,
    },
    {
      type: "input",
      name: "list",
      message:
        "Please type the list items for your README, separate each item with a semicolon",
      when: ({ confirmList }) => confirmList,
    },
    //End
    {
      type: "input",
      name: "installation",
      message:
        "Please provide installation instructions, if none, please state it (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide installation instructions!");
        }
      },
    },
    //!This section will require assets/images with an upload ability
    {
      type: "confirm",
      name: "confirmScreenshots",
      message: "Would you like to upload screenshot of the application?",
      default: false,
    },
    {
      type: "input",
      name: "screenshots",
      message:
        "Provide a short description of the project; goals, language(s) you will use, etc.",
      when: ({ confirmScreenshots }) => confirmScreenshots,
    },
    {
      type: "input",
      name: "credits",
      message: "List any collaborators, if any: ",
    },
    {
      type: "input",
      name: "license",
      message: "List any collaborators, if any: ",
    },
  ]);
};

questions().then((readmeData) => {
  console.log(readmeData);
  const list = readmeData.list.split(";");
  console.log(list);
  return createReadMe(readmeData);
}).then;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
