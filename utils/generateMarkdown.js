const badge = function (license) {
  if (!license) {
    return "";
  }
  let badger = "";
  if (license === "MIT") {
    badged = `![Licensed: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (readmeData.license === "APACHE") {
    badged = `![Licensed: APACHE](https://img.shields.io/badge/License-APACHE-blue.svg)`;
  } else if (readmeData.license === "GNU") {
    badged = `![Licensed: GNU](https://img.shields.io/badge/License-GNU-brightgreen.svg)`;
  } else if (readmeData.license === "BSD3") {
    badged = `![Licensed: BSD3](https://img.shields.io/badge/License-BSD3-ultraviolet.svg)`;
  } else if (readmeData.license === "None") {
    badged = `![Licensed: None](https://img.shields.io/badge/License-None-red.svg)`;
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

  ## Brief
  ${readmeData.brief}

  * [To_do](#To_do)
  * [Installation](#installation)
  * [Screenshot(s)](#screenshot)
  * [Credits](#credits)
  * [License](#license)

  ## To do list
  ${tableOfCont(splitList)}

  ## Installation
  ${readmeData.installation}
  
  ## Credits
  ${readmeData.credits}
  
  ## License

  ${badge(badger)}
  ![License: ${readmeData.license}](https://img.shields.io/badge/license-${
    readmeData.license
  }-red.svg)

  ![License: ${readmeData.license}](https://img.shields.io/badge/license-${
    readmeData.license
  }-red.svg)
  
  ## Screenshot
  <img src="./assets/${readmeData.screenshots}">
`;
};

module.exports = { generateMarkdown, tableOfCont };
