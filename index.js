// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGen = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const readmePrompt = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repo?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a brief description for your repo'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does a user install the app?'
        },
        {
            type: 'choices',
            name: 'license',
            message: ['apache', 'boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Zlib']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter how users can contribute'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can a user test to see if the app is working correctly?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your email address and github username'
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    readmePrompt()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.md', readmeGen.generateMarkdown(answers)))
        .then(() => console.log('Successfully generated a ReadMe'))
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();
