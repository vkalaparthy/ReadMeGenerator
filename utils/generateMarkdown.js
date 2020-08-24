// function to generate markdown for README

const getLicense = value => {
  switch (value) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "ISC":
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case "GNU":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return "";
  }
};

const licenseText = (value, name) => {
  switch (value) {
    case "MIT":
      return 'Copyright © 2020-present, ' + name + '. Released under the MIT License.';
    case "ISC":
      return 'Copyright (c) 2020, ' + name;
    case "GNU":
      return 'Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>';
    default:
      return "";
  }
};

const addImage = image => {
  if (image !== "") {
    return `![Image of image](${image})`;
  }
  else 
    return "";
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
${addImage(data.image)}
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
