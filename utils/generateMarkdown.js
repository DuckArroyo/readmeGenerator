const badge = function (license) {
  if (!license) {
    return "";
  }
  let badger = "";
  if (license === "MIT") {
    badger = `![Licensed: MIT](https://img.shields.io/badge/License-MIT-critical)`;
  } else if (readmeData.license === "APACHE") {
    badger = `![Licensed: APACHE](https://img.shields.io/badge/License-APACHE-informational)`;
  } else if (readmeData.license === "GNU") {
    badger = `![Licensed: GNU](https://img.shields.io/badge/License-GNU-success)`;
  } else if (readmeData.license === "BSD3") {
    badger = `![Licensed: BSD3](https://img.shields.io/badge/License-BSD3-blueviolet)`;
  } else if (readmeData.license === "None") {
    badger = `![Licensed: None](https://img.shields.io/badge/License-None-inactive)`;
  } else {
    ("No license available");
  }

  return badger;
};

const tableOfCont = (splitList) => {
  let string = ``;
  for (let i = 0; i < splitList.length; i++) {
    string += `
    * ${splitList[i]}
    `;
  }
  return string;
};

const generateMarkdown = (readmeData, splitList, badger) => {
  return `
  ## ${readmeData.title}
  
  ### Created by: ${readmeData.name}
  <a href="https://github.com/${readmeData.github}">GitHub: ${
    readmeData.github
  } </a>

  ## To do list
  ${tableOfCont(splitList)}

  ## Brief
  ${readmeData.brief}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Features](#features)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Screenshot(s)](#screenshot)

  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}
  
  ## Credits
  ${readmeData.credits}

  ## Features
  ${readmeData.features}

  ## Contributions
  ${readmeData.contributions}

  ## Tests
  ${readmeData.tests}
  
  ## License
  ${badge(badger)} 
  ![License: ${readmeData.license}](https://img.shields.io/badge/license-${
    readmeData.license
  }-critical)
  
  ## Screenshot
  <img src="./assets/${readmeData.screenshots}.jpg">
`;
};

module.exports = { generateMarkdown, tableOfCont };
