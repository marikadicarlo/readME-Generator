// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
const { userInfo } = require('os');



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
        default: "If applicable, describe the steps required to install your project for the Installation section.",
      },
      {
        type: "input",
        message: "Usage Information",
        name: "Usage",
        default: "Provide instructions and examples of your project in use for the Usage section.",
      },
      {
        type: "input",
        message: "Contribution Guidelines",
        name: "Contribution",
        default: "If applicable, provide guidelines on how other developers can contribute to your project.",
      },
      {
        type: "input",
        message: "Test Instructions",
        name: "Test",
        default: "If applicable, provide any tests written for your application and provide examples on how to run them.",
      },
      {
        type: "list",
        name: "License",
        message: "Choose a License for your project..",
        choices: ["MIT", "ISC", "Unlicense", "Mozilla Public License"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "Github",
        validate: function (answers) {
            if (answers.length < 1) {
                return console.log("A valid GitHub username is required.");
            } else {
                return true;
            }
        },
      },
      {
          type: "input",
          message: "What is your email address?",
          name: "Email",
          validate: function (answers) {
              if (answers.length < 1) {
                  return console.log("A valid email address is required.");
              } else {
                  return true;
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
function init() {
  try {
    questions().catch((error) => {
      console.log("Invalid Input", error);
    });
  } catch (error) {
    console.log("Invalid Input", error);
  }
};

// Function call to initialize app
// init();
