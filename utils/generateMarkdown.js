// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = {
  generateMarkdown: function(data) {
  
    let getLicense = "";
    let licenseText = "";
    if(data.license === "MIT") {
      //getLicence = "/hexpm/l/:packageName";
      getLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      licenseText = 'Copyright © 2020-present, ' + data.author + '. Released under the MIT License.';
    }
    else if (data.license === "ISC") {
      getLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      licenseText = 'Copyright (c)' + '2020, ' + data.author;
    }

    return `# ${data.title}
${getLicense}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## License
${licenseText}
## Contributing
## Tests
${data.tests}
## Questions
* ${data.author}
  * https://github.com/${data.gitUserName}
  * ${data.email}
    `;
  }
}
