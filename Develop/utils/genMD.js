// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';

    } else {

        return true;
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
        if (!license) {
            return '';
    
        } else {
    
            return true;
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
        if (!license) {
            return '';
    
        } else {
    
            return true;
        }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
\n## Description\n${data.description}
\n## Table of Contents\n${data.tableOfContents}
\n## Installation\n${data.installation}
\n## Usage\n${data.usage}
\n## License\n${data.license}
\n## Contributing\n${data.contributing}
\n## Tests\n${data.tests}
\n## Questions\n${data.questions}
`;
}

module.exports = generateMarkdown;