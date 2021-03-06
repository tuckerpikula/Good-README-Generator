const { writeFile } = require('fs')
const { prompt } = require('inquirer')

prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  }, {
    type: 'input',
    name: 'description',
    message: 'Describe what the application is'
  }, {
    type: 'input',
    name: 'install_instructions',
    message: 'Instructions for what to install'
  }, {
    type: 'input',
    name: 'usage_information',
    message: 'What is the app used for?'
  }, {
    type: 'input',
    name: 'contribution_guidelines',
    message: 'What are your contribution guidelines?'
  }, {
    type: 'input',
    name: 'test_instructions',
    message: 'Do you have any test instructions?'
  }, {
    type: 'input',
    name: 'license',
    message: 'Choose any license from the list',
    choices: ['Community', 'MIT', 'GNUGPLv3']
  }, {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
])

  .then(res => {
    let body = `
#  ${res.title}

## Description:
${res.description}

## Table of Contents (Optional)
- [Usage](#install_instructions)
- [Contributing](#usage_information)
- [Instal Instructions] (#install_instructions)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${res.install_instructions}
## Usage
${res.usage_information}
## Contribution
${res.contribution_guidelines}
## License
${res.license}
## Questions?
Find my github by clicking my username: ${res.username}
or
email me at: ${res.email}
  `
    
    writeFile('NEWREADME.md', body, err => {
      if (err) { console.log(err)}
    })
  })
  .catch(err => console.log(err))