// TODO: Create an array of questions for user input
const questions = [
    {  // This is the first question
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What are the table of contents?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your licensing?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What are the questions?',
    }
];

module.exports = questions;