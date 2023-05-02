const SVG = require('../lib/svg.js');
const inquirer = require('inquirer');

class Triangle extends SVG {
  constructor(text, textColor, shapeColor) {
    // calls the constructor of the base class
    super(text, 'polygon', textColor, shapeColor);
  }

  // override the render method to include the `points` attribute for the polygon element
  render() {
    return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <${this.shape} fill="${this.shapeColor}" />
      <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
        ${this.text}
      </text>
    </svg>`;
  }
}

module.exports = Triangle;
