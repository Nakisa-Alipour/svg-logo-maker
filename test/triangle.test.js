import { Triangle } from '../lib/triangle.js';
const { expect } = require('chai');

describe('Triangle', () => {
  describe('constructor', () => {
    it('should create a new Triangle object with the correct properties', () => {
      const text = 'Test Text';
      const textColor = '#000000';
      const shapeColor = '#FFFFFF';
      const triangle = new Triangle(text, textColor, shapeColor);

      expect(triangle.text).to.equal(text);
      expect(triangle.shape).to.equal('polygon');
      expect(triangle.textColor).to.equal(textColor);
      expect(triangle.shapeColor).to.equal(shapeColor);
    });
  });

  describe('render', () => {
    it('should return the SVG code for the triangle logo', () => {
      const text = 'Test Text';
      const textColor = '#000000';
      const shapeColor = '#FFFFFF';
      const triangle = new Triangle(text, textColor, shapeColor);

      const expectedSVG = `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon fill="${shapeColor}" />
      <text x="150" y="110" fill="${textColor}" text-anchor="middle" font-size="30">
        ${text}
      </text>
    </svg>`;

      const renderedSVG = triangle.render();

      expect(renderedSVG).to.equal(expectedSVG);
    });
  });
});
