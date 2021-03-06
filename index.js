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
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username: (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username");
          return false;
        }
      },
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
      name: "brief",
      message:
        "Provide a short description of the project; goals, language(s) you will use, etc.",
    },
    //Table of contents is hardcoded
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
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide usage instructions!");
        }
      },
    },
    {
      type: "input",
      name: "credits",
      message: "List any collaborators, if any:",
    },
    {
      type: "input",
      name: "features",
      message: "List any features, if any:",
    },
    {
      type: "input",
      name: "contributions",
      message: "List any Contributions, if any:",
    },
    {
      type: "input",
      name: "tests",
      message: "List any Tests, if any:",
    },
    {
      type: "checkbox",
      name: "license",
      mesage: "Select a license for the project:",
      choices: ["MIT", "APACHE", "GNU", "BSD3", "None"],
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please select one license");
          return false;
        }
      },
    },
    //!This section will require assets/images with an upload ability currently an image is saved to the foler
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
        'Please type "image1, image2, image3, or image4" to see an image',
      when: ({ confirmScreenshots }) => confirmScreenshots,
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

function writeToFile(filename, readmeData) {
  return fs.writeFileSync(path.join(process.cwd(), filename), readmeData);
}
