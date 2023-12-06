// Create an array of questions for user input
const quests = [
    {  // This is the first question
        name:'projectName',
        message:'What is the name of your project? ',

    },
    {
        name:'description',
        message:'Describe the project. ',

    },
    {
        name:'tableOfContents',
        message:'What are the table of contents? ',

    },
    {
        name:'installation',
        message:'What are the installation instructions? ',

    },
    {
        name:'usage',
        message:'What is the usage of this application? ',

    },
    {
        name:'license',
        message: `Choose a license for your project: `,
        choices: ['MIT', 'Apache', 'None'],
        
    },
    {
        name:'contributing',
        message:'What are the contribution guidelines? ',

    },
    {
        name:'tests',
        message:'What are the test instructions? ',

    },
    {
        name:'questions',
        message:'What are the questions? ',

    },
];

module.exports = quests;