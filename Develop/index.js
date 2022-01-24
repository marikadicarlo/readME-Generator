// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const { userInfo } = require('os');
const generatePage = require('./utils/generateMarkdown');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
      {
        type: "input",
        message: "What is the title of your project?",
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
        default: "If applicable, describe the installation process.",
      },
      {
        type: "input",
        message: "Usage Information",
        name: "Usage",
        default: "What is this project usage for?",
      },
      {
        type: "input",
        message: "Contributing Guidelines",
        name: "Contribution",
        default: "Who are the contributors of this project?",
      },
      {
        type: "input",
        message: "Test Instructions",
        name: "Test",
        default: "Is there a test included?",
      },
      {
        type: "list",
        name: "License",
        message: "Choose a License for your project..",
        choices: ["MIT", "ISC", "Unlicense", "Mozilla", "Apache"],
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
};
    

// TODO: Create a function to write README file
const writeFile = answers => {
  fs.writeFile('README.md', answers, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your README has been successfully created!")
    }
  })
};

promptUser()
.then (answers => {
  return generateMarkdown(answers);
})
.then(pageREADME => {
  return writeFile(pageREADME);
})
// .then (data => {
//   return writeFile(data);
// })
.catch(err => {
  console.log(err)
})
// TODO: Create a function to initialize app
// function init()

// Function call to initialize app
// init();
