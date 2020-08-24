const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMD = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

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
        type: "input",
        message: "Enter relative path of image to add (ex: ./images/screenshot.jpg)",
        name: "image"
    },
    {
        type: "list",
        message: "Choose the licence",
        name: "license",
        choices: ['MIT', 'ISC', 'GNU', "No Licence"]
    },
    {
        type: "input",
        message: "Enter a test script that was used for testing",
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
        //  console.log(answers.title);
        // console.log(answers.description);
        // console.log(answers.license);
        // console.log(answers.tests);
        // console.log(answers.gitUserName);
        // console.log(answers.image);
        writeToFile(answers);
    });
};
  
// function call to initialize program
init();