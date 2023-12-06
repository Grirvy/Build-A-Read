// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(`There was an error:\n`, error);

        } else {
            console.log(`README was created successfully!`);

        }
    })

};

module.exports = writeToFile;