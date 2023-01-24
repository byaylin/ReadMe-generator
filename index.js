//Include packages needed for this application
//to write file 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./newMarkdown/generateMarkdown');

// Create an array of questions for user input
const userAns =([
        {
            type: 'input', 
             name: 'title',
            message: 'Welcome to the ReadMe Generator! Please enter the title of your project',
        },
        {
            type: 'input', 
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input', 
            name: 'github',
            message: 'What is your Gitub username?',
         },
         {
            type: 'input', 
            name: 'email',
            message: 'What is your email?',
         },
        {
            type: 'input', 
            name: 'description',
            message: 'Enter the description of your project',
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'Enter the installation instructions of your project',
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Enter usage information of your project',
        },
        {
            type: 'input', 
            name: 'contributions',
            message: 'Enter contribution guidelines of your project',
        },
        {
            type: 'input', 
            name: 'test',
            message: 'Enter test instructions of your project',
        },
        {
            type: 'confirm', 
            name: 'confirmLicense',
            message: 'Would you like to include a license?',
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT','CC','GPL','None'],
        }
])
//initializes app
function init(){
    inquirer.prompt(userAns).then(function(answers){
        const markdownData = generateMarkdown(answers)
        fs.writeFile('./newMarkdown/README.md', markdownData, function (err){
            if (err){
                console.log(err)
            } else {
                console.log("Yay :D")
            }
        })
    })
}

init();
