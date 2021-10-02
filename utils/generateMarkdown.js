// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//dynamically grab the item to populate the badge
// MIT, APACHE, GNU BSD3 - are common licenses
//https://img.shields.io/badge/%3CLABEL%3E-%3CMESSAGE%3E-%3CCOLOR%3E

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//!I replaced data with readmeData
// TODO: Create a function to generate markdown for README

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
  Created by: ${readmeData.name}


  ## Brief
  ${readmeData.brief}

  * [To_do](#To_do)
  * [Installation](#installation)
  * [Screenshot(s)](#screenshot)
  * [Credits](#credits)
  * [License](#license)<--Need to create this->

  ## To do list <--This loop works-->
  ${tableOfCont(splitList)}

  ## Installation
  ${readmeData.installation}


  ## Screenshot
  <img src="./assets/${readmeData.screenshots}">
  
  ## Credits
  ${readmeData.credits}

`;
};

module.exports = { generateMarkdown, tableOfCont };
