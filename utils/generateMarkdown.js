// function to generate markdown for README

const getLicense = value => {
  if (value === "MIT")
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  else if (value === "ISC")
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
};


const licenseText = (value, name) => {
  if(value === "MIT") 
    return 'Copyright © 2020-present, ' + name + '. Released under the MIT License.';
  else if (value === "ISC")
    return 'Copyright (c) 2020, ' + name;
}

module.exports = {
  generateMarkdown: data => {

    return `
# ${data.title}
${getLicense(data.license)}
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
${licenseText(data.license, data.author)}
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
