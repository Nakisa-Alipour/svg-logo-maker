const inquirer = require('inquirer');
const SVG = require('./svg.js');
const { writeFile } = require('fs/promises');
const path = require('path');

class CLI {
    run() {
      return inquirer
        .prompt([
          {
            type: 'input',
            name: 'text',
            message: 'Please enter your logo text',
            validate: (value) => value.length >= 3 ? true : 'Text must contain at least 3 characters.'
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Please enter your logo text color',
            default: '#000000'
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Please choose the logo shape',
            choices: ['circle', 'triangle', 'square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the logo shape color',
            default: '#FFFFFF'
          },
          {
            type: 'input',
            name: 'filename',
            message: 'Please enter the name of the file to save the logo (without .svg extension)',
            default: 'logo'
          }
        ])
        .then((answers) => {
            const { text, shape, textColor, shapeColor } = answers;
            const svg = new SVG(text, shape, textColor, shapeColor);
            const svgCode = svg.render();

            const outputPath = path.join(__dirname, '../dist', `${filename}.svg`);

            return writeFile(outputPath, svgCode);
        })
        .then(() => console.log('Created SVG logo'))
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }
  
   
  }
  
  module.exports = CLI;