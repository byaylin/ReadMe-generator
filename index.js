//Include packages needed for this application
//to write file 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
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
        name: 'GitHub',
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
        name: 'description',
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
        name: 'installation',
        message: 'Enter the installation instructions of your project',
        validate: installInput =>{
            if (installInput){
                return true;
            } else {
                console.log('Please provide instructions for installation to run your program')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Enter usage information of your project',
        validate: usageInput =>{
            if (usageInput){
                return true;
            } else {
                console.log('Please provide usage instructions to help users navigate your project')
                return false;
            }
        }

    },
    {
        type: 'input', 
        name: 'contributions',
        message: 'Enter contribution guidelines of your project',
        validate: contributionInput =>{
            if (contributionInput){
                return true;
            } else {
                console.log('Please provide guidelines for others to contribute to your project')
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
    {
        type: 'confirm', 
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT','ISC','zLib','Academic Free License'],
        when: licenseChosen =>{
            if (licenseChosen){
                return true;
            }else {
                return false; 
            }
        }
    }
]

//Create a function to write README file
fs.appendFile('generateMarkdown.js', questions, err =>{
    if(err){
        console.error(err);
    }
});

//Create a function to initialize app
const init = () =>{
    return inquirer.createPromptModule(questions);
}

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    }) 
    .then (readmeInfo =>{
        return fs.writeFile(readmeInfo);
    })
    .catch (err =>{
        console.log(err);
    })