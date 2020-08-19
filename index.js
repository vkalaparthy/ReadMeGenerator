var fs = require("fs");
var inquirer = require("inquirer");
var generateMD = require("./utils/generateMarkdown")

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//Hint: https://choosealicense.com/
//Hint: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const validateTheResponse = async (input) => {
    if (input === "") {
       return 'Incorrect response!!';
    }

    return true;
 }

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the title of your project",
        name: "title",
        validate: validateTheResponse
    },
    {
        type: "input",
        message: "Enter descrption of your project",
        name: "description",
        validate: validateTheResponse
    },
    {
        message: "What are the tests used? (List them comma seperated)",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "gitUserName"

    },
    {
        type: "input",
        message: "Enter your emial",
        name: "email"
    }
];


// function to write README file
var filename = "README.md";

function writeToFile(filename, data) {
    fs.writeFile(filename, generateMD.generateMarkdown(data), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
    
}

// // function to initialize program
function init() {
    // inquirer.prompt(questions).then(answers => {
    //     console.log(JSON.stringify(answers, null, '  '));
    //     writeToFile("README.md", answers);
    //   });
    inquirer.prompt(questions).then((answers) => {
        console.log(answers.title);
        console.log(answers.description);
        console.log(answers.tests);
        console.log(answers.gitUserName);
        writeToFile(filename, answers);
    });
};

// // function call to initialize program
init();

// const dogs = [
//     { name: 'Snickers', age: 2 },
//     { name: 'Hugo', age: 8 },
//     { name: 'Sunny', age: 1 }
// ];

// const markup = `
// <ul class="dogs">
//     ${dogs.map(dog => `* ${dog.name} is ${dog.age * 7}
// `)}

// `;

// console.log(markup);