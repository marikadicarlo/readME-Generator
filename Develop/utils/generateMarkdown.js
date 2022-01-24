// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.Title}
  ![GitHub license](https://img.shields.io/badge/license-${answers.License}-blue.svg)

  ## Description
  ${answers.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [Questions](#questions)

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ![badge](https://img.shieldsio/badge/license-${answers.License}-brightgreen)
  <br />
  This application is covered by the ${answers.License} license.
  
  ## Contributions
  ${answers.Contributions}

  ## Tests
  ${answers.Tests}

  ## Questions
  Contact me with any questions at ${answers.Email} or [visit my GitHubpage](https://github.com/${answers.Github})
`;
}

module.exports = generateMarkdown;