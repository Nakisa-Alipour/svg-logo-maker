import { SVG } from '../lib/svg.js';

class Circle extends SVG {
  constructor(text, textColor, shapeColor) {
    // calls the constructor of the base class
    super(text, 'circle', textColor, shapeColor);
  }

  // override the render method to include the `r` attribute for the circle element
  render() {
    return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <${this.shape} cx="150" cy="100" fill="${this.shapeColor}" />
      <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
        ${this.text}
      </text>
    </svg>`;
  }
}

export { Circle };

