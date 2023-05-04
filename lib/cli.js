// Import required modules
import inquirer from 'inquirer';
import { SVG } from './svg.js';
import { Circle } from './circle.js';
import { Square } from './square.js';
import { Triangle } from './triangle.js';
import { writeFile } from 'fs/promises';
import path from 'path';

// Define the CLI class
class CLI {
  // Define the async `run` method of the class
  async run() {
    try {
      // Ask the user for input using inquirer
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter your logo text',
          // Validate that the text input has a minimum length of 3 characters
          validate: (value) =>
            value.length >= 3
              ? true
              : 'Text must contain at least 3 characters.',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter your logo text color',
          default: '#000000',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Please choose the logo shape',
          // Add the available shape options
          choices: ['circle', 'square', 'triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter the logo shape color',
          default: '#FFFFFF',
        },
        // Ask the user to enter the name of the output file
        {
          type: 'input',
          name: 'filename',
          message:
            'Please enter the name of the file to save the logo (without .svg extension)',
          default: 'logo',
        },
      ]);

      // Destructure the answers object
      const { text, shape, textColor, shapeColor, filename } = answers;

      // Initialize the svg object based on the shape selected by the user
      let svg;
      switch (shape) {
        case 'circle':
          svg = new Circle(text, textColor, shapeColor);
          break;
        case 'square':
          svg = new Square(text, textColor, shapeColor);
          break;
        case 'triangle':
          svg = new Triangle(text, textColor, shapeColor);
          break;
        default:
          throw new Error('Invalid shape');
      }

      // Generate the SVG code for the logo
      const svgCode = svg.render();

      // Define the output path based on the user's input
      const outputPath = path.join('./', `${filename}.svg`);

      // Write the SVG code to the output file
      await writeFile(outputPath, svgCode);

      // Log a success message to the console
      console.log('Created SVG logo');
    } catch (error) {
      // If an error occurs, log the error message to the console
      console.error(error);
      console.log('Oops. Something went wrong.');
    }
  }
}

// Export the CLI class
export default CLI;
