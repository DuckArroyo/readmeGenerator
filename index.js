// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  tableOfCont,
} = require("./utils/generateMarkdown.js");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
    //Table of contents is hardcoded
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
    //!Has a .filter to separate values.

    {
      type: "input",
      name: "list",
      message:
        "Please type the list items for your README, separate each item with a semicolon",
    },
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
    {
      type: "input",
      name: "usage",
      message:
        "Please provide usage instructions, if none, please state it (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide usage instructions!");
        }
      },
    },
    //!This section will require assets/images with an upload ability currently an image is saved to the foler
    {
      type: "confirm",
      name: "confirmScreenshots",
      message:
        "Would you like to upload screenshot of the application? (include the file type i.e. .png .jpg)",
      default: false,
    },
    {
      type: "input",
      name: "screenshots",
      message: 'Please type "image.jpg" to see the image',
      when: ({ confirmScreenshots }) => confirmScreenshots,
    },
    {
      type: "input",
      name: "credits",
      message: "List any collaborators, if any:",
    },
    {
      type: "checkbox",
      name: "license",
      mesage: "Select a license for the project:",
      choices: ["MIT", "APACHE", "GNU", "BSD3"],
    },
  ]);
};

questions()
  .then((readmeData) => {
    console.log(readmeData);
    const splitList = readmeData.list.split(";");
    console.log(splitList);
    writeToFile("readme.md", generateMarkdown(readmeData, splitList));
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });

// TODO: Create a function to write README file
function writeToFile(filename, readmeData) {
  console.log(filename, readmeData);
  return fs.writeFileSync(path.join(process.cwd(), filename), readmeData);
}
