import { Triangle } from '../lib/triangle.js';

describe('Triangle', () => {
  describe('constructor', () => {
    it('should create a new Triangle object with the correct properties', () => {
      const text = 'Test Text';
      const textColor = '#000000';
      const shapeColor = '#FFFFFF';
      const triangle = new Triangle(text, textColor, shapeColor);

      expect(triangle.text).toBe(text);
      expect(triangle.shape).toBe('polygon');
      expect(triangle.textColor).toBe(textColor);
      expect(triangle.shapeColor).toBe(shapeColor);
    });
  });

  describe('render', () => {
    it('should return the SVG code for the triangle logo', () => {
      const text = 'Test Text';
      const textColor = '#000000';
      const shapeColor = '#FFFFFF';
      const triangle = new Triangle(text, textColor, shapeColor);

      const expectedSVG = `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,10 280,190 20,190" fill="${shapeColor}" />
        <text x="150" y="110" fill="${textColor}" text-anchor="middle" font-size="30">
          ${text}
        </text>
      </svg>`;

      const renderedSVG = triangle.render();

      expect(renderedSVG).toMatch(expectedSVG);
    });
  });
});
