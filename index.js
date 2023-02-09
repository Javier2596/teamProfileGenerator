const inquirer = require('inquirer');
const fs = require('fs');
 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name?',
    },
    {
      type: 'input',
      message: 'Id?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'Email?',
      name: 'email',
    },
  ])
  
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  module.exports = Index;