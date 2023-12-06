// Create an array of questions for user input
const quests = [
    {
        type: 'input',
        name:'projectName',
        message:'What is the name of your project? ',

    },
    {
        type: 'input',
        name:'description',
        message:'Describe the project. ',

    },
    {
        type: 'input',
        name:'tableOfContents',
        message:'What are the table of contents? ',

    },
    {
        type: 'input',
        name:'installation',
        message:'What are the installation instructions? ',

    },
    {
        type: 'input',
        name:'usage',
        message:'What is the usage of this application? ',

    },
    {
        type: 'list',
        name:'license',
        message: `Choose a license for your project: `,
        choices: ['MIT', 'Apache', 'None'],
        
    },
    {
        type: 'input',
        name:'contributing',
        message:'What are the contribution guidelines? ',

    },
    {
        type: 'input',
        name:'tests',
        message:'What are the test instructions? ',

    },
    {
        type: 'input',
        name:'questions',
        message:'Are you satisfied? ',

    },
];

module.exports = quests;