// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = inquirer.prompt ([
      {
        type: "input",
        message: "What is the title of your page?",
        name: "Title",
      },
      {
        type: "input",
        message: "Please enter a description of your project:",
        name: "Description",
      },
      {
        typ: "input",
        message: "Installation Instructions",
        name: "Installation",
        default: "No installation information available.",
      },
      {
        type: "input",
        message: "Usage Information",
        name: "Usage",
        default: "No usage information is available.",
      },
      {
        type: "input",
        message: "Contribution Guidelines",
        name: "Contribution",
        default: "No contribution information is available.",
      },
      {
        type: "input",
        message: "Test Instructions",
        name: "Test",
        default: "No testing information is available.",
      },
      {
        type: "list",
        name: "License",
        message: "Choose a License..",
        choices: ["MIT", "ISC", "Unlicense"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "Github",
        filter: function (answers) {
            if (answers) {
                return 'https://github.com/${answers}';
            } else {
                return "Please enter valid GitHub username.";
            }
        },
      },
      {
          type: "input",
          message: "What is your email address?",
          name: "Email",
          filter: function (answers) {
              if (answers) {
                  return '${answers}';
              } else {
                  return "No valid email address was entered.";
              }
          },
      },
])
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}

// const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
