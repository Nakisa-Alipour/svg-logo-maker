class SVG {
    constructor(text, shape, textColor, shapeColor) {
      this.text = "";
      this.shape = "";
      this.textColor = "";
      this.shapeColor = "";
  
      if (text.length < 3) {
        throw new Error('`text` must contain at least 3 characters.');
      }
    }
  
    render() {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} cx="150" cy="100" r="90" fill="${this.shapeColor}" />
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
          ${this.text}
        </text>
      </svg>`;
    }
  }
  

module.exports = SVG;