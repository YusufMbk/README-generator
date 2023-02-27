const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type:'input',
        name:'github',
        message: 'What is your Github Username?'
    },

    {
        type:'input',
        name:'email',
        message: 'What is your email address?'
    },

    {
        type:'input',
        name:'title',
        message: "What is your Project's Name?"
    },

    {
        type:'input',
        name:'description',
        message: 'Please give a short description describing your Project.'
    },

    {
        type:'input',
        name:'license',
        message: 'Which license does your Project use?',
        licenses: ["MIT", "APACHE 2.0", "GPL", "NONE"]
    },

    {
        type:'input',
        name:'test',
        message: 'What command should users run to run any tests?',
        default: 'npm test'
    },

    {
        type:'input',
        name:'installation',
        message: 'What command should users run to install the dependencies?',
        default: 'npm install'
    },

    {
        type:'input',
        name:'usage',
        message: 'Is there anything that the user needs to know about using the repo?',
    },

    {
        type:'input',
        name:'contributing',
        message: 'How should users contribute to the repo?',
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating README');
        writeToFile('README1.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
