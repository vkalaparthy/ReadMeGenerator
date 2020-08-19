// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = {
  generateMarkdown: function(data) {
    //const techs = (data.tech).split(",").trim();
    return `# ${data.title}
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
      ## Usage
      ## License
      Copyright © 2020-present, . Released under the MIT License.
      ## Contributing
      ## Tests
      ${data.tests}
      ## Questions
      * https://github.com/${data.gitUserName}
      * ${data.email}
    `;
  }
}
