const dependencies = [
    inquirer = require('inquirer'), // This package is for asking questions and recieving input
    fs = require('fs'), // This package is for writing files
    questions = require('./quest'), // This file holds the questions for the user
    writeToFile = require('./write'), // This file holds the fs function to write the file
    generateMarkdown = require('./genMD'), // This file holds the function to generate the README
    
];

module.exports = dependencies;