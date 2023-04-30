class SVG {
    // constructor method takes four parameters: text, shape, textColor, shapeColor
    constructor(text, shape, textColor, shapeColor) {
      // assigns the value of `text` to the `text` property of the instance
      this.text = text;
      // assigns the value of `shape` to the `shape` property of the instance
      this.shape = shape;
      // assigns the value of `textColor` to the `textColor` property of the instance
      this.textColor = textColor;
      // assigns the value of `shapeColor` to the `shapeColor` property of the instance
      this.shapeColor = shapeColor;
  
      // checks if `text` has a length less than 3
      if (text.length < 3) {
        // throws an error with a message
        throw new Error('`text` must contain at least 3 characters.');
      }
    }
  
    // render method returns a string containing SVG code
    render() {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} cx="150" cy="100" r="90" fill="${this.shapeColor}" />
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
          ${this.text}
        </text>
      </svg>`;
    }
  }
  
  // exports the `SVG` class
  module.exports = SVG;
  