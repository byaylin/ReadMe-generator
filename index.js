//Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'name',
        message: 'Welcome to the ReadMe Generator! Please enter the title of your project',
        validate: titleInput =>{
            if (titleInput){
                return true;
            } else {
                console.log('Your project must have a title, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'What is your name?',
        validate: nameInput =>{
            if (nameInput){
                return true;
            } else {
                console.log('Please enter your name')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'What is your Gitub username?',
        validate: githubInput =>{
            if (githubInput){
                return true;
            } else {
                console.log('You must have a GitHub profile, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'Enter the description of your project',
        validate: descriptionInput =>{
            if (descriptionInput){
                return true;
            } else {
                console.log('Your project must have a description, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'Enter the installation instructions of your project',
        validate: installInput =>{
            if (installInput){
                return true;
            } else {
                console.log('You must include installation instructions for your project, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'Enter usage information of your project',
        validate: usageInput =>{
            if (usageInput){
                return true;
            } else {
                console.log('You must include usage information, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'Enter contribution guidelines of your project',
        validate: contributionInput =>{
            if (contributionInput){
                return true;
            } else {
                console.log('Your project must include contribution guidelines, please try again')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'name',
        message: 'Enter test instructions of your project',
        validate: contributionInput =>{
            if (contributionInput){
                return true;
            } else {
                console.log('You must include test instructions, please try again')
                return false;
            }
        }

    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
