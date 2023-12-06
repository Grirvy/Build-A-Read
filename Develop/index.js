// Include packages needed for this application
require('./utils/depend.js');

// Create a function to initialize app
function init() {
    let text = `Welcome to BuildARead! Let's build a README.md file for your project!\n\n`;
        console.log(text);

};

// Create an object to store the responses
const responses = {};

// Create a function to ask questions and store the response
function askQuestion(question) {
    responses[question.name] = prompt(question.message);

};

// Create a function to loop through the questions and ask them
async function questionaire() {
    for (const question of quests) {
        askQuestion(question);

    }
};

// Function call to initialize app
init();

// Call the questionaire function to prompt the user to answer the questions
questionaire().then(() => {
    // Then write the README file
        writeToFile('README.md', generateMarkdown(responses));

}).catch((error) => {
    console.log(`Error:`, error);

});
