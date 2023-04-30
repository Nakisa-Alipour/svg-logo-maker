// import required dependencies
const inquirer = require('inquirer');
const SVG = require('./svg.js');
const { writeFile } = require('fs/promises');
const path = require('path');

// define CLI class
class CLI {
  // define run function to start the CLI
  run() {
    // prompt user for logo details using inquirer
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter your logo text',
          validate: (value) => value.length >= 3 ? true : 'Text must contain at least 3 characters.' // validate text input to contain at least 3 characters
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter your logo text color',
          default: '#000000' // set default text color to black
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Please choose the logo shape',
          choices: ['circle', 'triangle', 'square'] // provide shape options to the user to choose from
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter the logo shape color',
          default: '#FFFFFF' // set default shape color to white
        },
        {
          type: 'input',
          name: 'filename',
          message: 'Please enter the name of the file to save the logo (without .svg extension)',
          default: 'logo' // set default filename to "logo"
        }
      ])
      .then((answers) => {
          const { text, shape, textColor, shapeColor } = answers;
          // create an SVG object with the user's logo details
          const svg = new SVG(text, shape, textColor, shapeColor);
          // render the SVG code based on the user's logo details
          const svgCode = svg.render();

          // define the output path to save the file to the dist folder
          const outputPath = path.join(__dirname, '../dist', `${filename}.svg`);

          // write the SVG code to a file with the specified output path
          return writeFile(outputPath, svgCode);
      })
      .then(() => console.log('Created SVG logo')) // display a success message once the file has been written
      .catch((err) => {
        console.log(err); // display error message if an error occurred
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI; // export the CLI class for external use
