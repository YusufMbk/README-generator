// function to generate markdown for README

function licenseBadge(license){
  if(license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

const licenseLink = (license) => {
  if(license !== "None") {
    return `* [License](#License)`
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${licenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)

  ## Installation

  To install the dependencies, run the following command(s):

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under ${data.license}.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run any tests, run the following command(s):

  ${data.test}

  ### Questions

  If there are any questions about the repo, open an issue or contact me at ${data.email}.

  Here is my Github if you would like to see more of my work: ${data.github} or follow this link: https://github.com/${data.github}.


`;
}

module.exports = generateMarkdown;
