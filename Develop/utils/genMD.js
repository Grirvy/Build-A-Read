// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';

    } else {

        return true;
    }

}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
        if (!license) {
            return '';
    
        } else {
    
            return true;
        }
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
        if (!license) {
            return '';
    
        } else {
    
            return true;
        }
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
    let markdown = '';
    const licenseBadge = renderLicenseBadge(data.license);
  
    if (data.projectName) {
      markdown += `# ${data.projectName}\n`;
    }
  
    if (data.description) {
      markdown += `\n## Description\n${data.description}\n`;
    }
  
    if (data.tableOfContents) {
      markdown += `\n## Table of Contents\n${data.tableOfContents}\n`;
    }
  
    if (data.installation) {
      markdown += `\n## Installation\n${data.installation}\n`;
    }
  
    if (data.usage) {
      markdown += `\n## Usage\n${data.usage}\n`;
    }
  
    if (data.license) {
      markdown += `\n## License\n${data.license}\n`;
    }
  
    if (data.contributing) {
      markdown += `\n## Contributing\n${data.contributing}\n`;
    }
  
    if (data.tests) {
      markdown += `\n## Tests\n${data.tests}\n`;
    }
  
    if (data.questions) {
      markdown += `\n## Questions\n${data.questions}\n`;
      
    }
    return markdown;

};

module.exports = generateMarkdown;