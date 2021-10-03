// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//dynamically grab the item to populate the badge
// MIT, APACHE, GNU BSD3 - are common licenses
//https://img.shields.io/badge/%3CLABEL%3E-%3CMESSAGE%3E-%3CCOLOR%3E
//${readmeData.license}
//![APM](https://img.shields.io/apm/l/MIT?style=for-the-badge)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {}

//!https://img.shields.io/badge/%3CLABEL%3E-%3CMESSAGE%3E-%3CCOLOR%3E
//!https://img.shields.io/badge/<3CLABEL>-<MESSAGE>-<CCOLOR>

const tableOfCont = (splitList) => {
  let string = ``;
  for (let i = 0; i < splitList.length; i++) {
    string += `
    * ${splitList[i]}
    `;
  }
  return string;
};

const generateMarkdown = (readmeData, splitList) => {
  return `
  ## ${readmeData.title};
  
  ### Created by: ${readmeData.name}
  <a href="https://github.com/${readmeData.github}">GitHub:${
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
  <a href="https://img.shields.io/badge/<LABEL>-<MESSAGE>-<CCOLOR>></a>
  ${readmeData.license}
  ![APM](https://img.shields.io/apm/l/MIT?style=for-the-badge)

  ## Screenshot
  <img src="./assets/${readmeData.screenshots}">
`;
};

module.exports = { generateMarkdown, tableOfCont };
