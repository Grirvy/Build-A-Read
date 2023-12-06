// Include packages needed for this application
require('./Develop/utils/depend.js');
console.clear();

// Create a function to initialize app
function init() {
    let text = `Welcome to BuildARead! Let's build a README.md file for your project!\n`;
        console.log(text);

};

// Function call to initialize app
init();

// Create an object to store the responses
const responses = {};

// Create a function to ask questions and store the response
async function askQuestion(quest) {
    const replies = await inquirer.prompt(quest);
    responses[question.name] = replies[question.name];
}

// Create a function to ask questions and store the response
async function askQuestions() {
    for (const question of quests) {
        await askQuestion(question);
    }

};

// Call the questionaire function to prompt the user to answer the questions
askQuestions()
    .then(() => {
        // Variable to store the generated markdown
    let generatedMD = generateMarkdown(responses);

    // Then write the README file
        writeToFile('README.md', generatedMD);

}).catch((error) => {
        if (error) {
    let errorText = `It seems there was trouble loading the application.\n`;
        console.log(errorText);

            setTimeout(() => {
    let text = `Give me a second while I load our backup.\n`;
        console.log(text);
            }, 3000);

            setTimeout(() => {
                require('./Develop/index2.js');
            }, 10000);
        }
});
