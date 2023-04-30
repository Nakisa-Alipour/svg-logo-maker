const inquirer = require('inquirer');
const SVG = require('./svg.js');
const { writeFile } = require('fs/promises');

class CLI {
    constructor() {
      
    }
    run() {
      return inquirer
        .prompt([
          {
            type: 'input',
            name: 'text',
            message: 'Please enter your logo text',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Please enter your logo text color',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Please choose the logo shape',
            choices: [circle, triangle, square],
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the logo shape color',
          },
        ])
        .then((answers) => {
          
        })
        .then(() => console.log('Created SVG logo'))
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }
  
   
  }
  
  module.exports = CLI;