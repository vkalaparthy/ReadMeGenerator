const fs = require("fs");
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//Hint?? -- https://www.contributor-covenant.org/

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//Can you tranform the user response?
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
        type: "input",
        message: "Enter Installation procedure",
        name: "install",
        validate: validateTheResponse
    },
    {
        type: "input",
        message: "Enter how to use",
        name: "usage",
        validate: validateTheResponse
    },
    {
        type: "list",
        message: "Choose the licence",
        name: "license",
        choices: ['MIT', 'ISC']
    },
    {
        message: "What are the tests used? (List them comma seperated)",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter author's name",
        name: "author",
        validate: validateTheResponse

    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "gitUserName",
        validate: validateTheResponse

    },
    {
        type: "input",
        message: "Enter your emial",
        name: "email",
        validate: validateTheResponse
    }
];


// function to write to README file

async function writeToFile(data) {

    try {
        await writeFileAsync("README.md", generateMD.generateMarkdown(data));
        console.log("Successfully wrote to README.md");
    } catch(err) {
        console.log(err);
    }
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // console.log(answers.title);
        // console.log(answers.description);
        // console.log(answers.license);
        // console.log(answers.tests);
        // console.log(answers.gitUserName);
        writeToFile(answers);
    });
};
  
// function call to initialize program
init();