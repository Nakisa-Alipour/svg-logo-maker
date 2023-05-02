import inquirer from 'inquirer';
import SVG from './svg.js';
import { writeFile } from 'fs/promises';
import path from 'path';

class CLI {
    async run() {
        try {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter your logo text',
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
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter the logo shape color',
                    default: '#FFFFFF',
                },
                {
                    type: 'input',
                    name: 'filename',
                    message:
                        'Please enter the name of the file to save the logo (without .svg extension)',
                    default: 'logo',
                },
            ]);

            const { text, shape, textColor, shapeColor, filename } = answers;
            const svg = new SVG(text, shape, textColor, shapeColor);
            const svgCode = svg.render();
            const outputPath = path.join('./', `${filename}.svg`);
            await writeFile(outputPath, svgCode);
            console.log('Created SVG logo');
        } catch (error) {
            console.error(error);
            console.log('Oops. Something went wrong.');
        }
    }
}

export default CLI;
