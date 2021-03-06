const fs = require('fs')
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