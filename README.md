# SVG Logo Maker

This is a Node.js command-line application that generates a simple logo as an SVG file. The user is prompted to enter text, select a color and shape, and save the generated SVG file. The logo is designed to help freelance web developers generate simple logos for their projects without having to pay a graphic designer.

## Walkthrough Video
[![Alt Text](https://cdn.loom.com/sessions/thumbnails/670a91564fc14a75ba043113c6b658fa-with-play.gif)](https://www.loom.com/embed/670a91564fc14a75ba043113c6b658fa)

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
The command-line application accepts user input
When prompted for text, the user can enter up to three characters
When prompted for the text color, the user can enter a color keyword (OR a hexadecimal number)
When prompted for a shape, the user is presented with a list of shapes to choose from: circle, triangle, and square
When prompted for the shape's color, the user can enter a color keyword (OR a hexadecimal number)
After entering input for all the prompts, an SVG file is created named logo.svg
The output text "Generated logo.svg" is printed in the command line
When the logo.svg file is opened in a browser, the user is shown a 300x200 pixel image that matches the criteria entered

## How to use
- Clone this repository.
- Run npm install to install the required dependencies.
- Run node index.js to start the application.
- Follow the prompts to enter text, select colors and shapes, and save the generated SVG file.
- The generated SVG file will be saved as logo.svg in the current directory.
- Open the logo.svg file in a browser to view the generated logo.


## Testing
This application uses Jest for running unit tests. To run the tests, simply run npm test in the terminal.
