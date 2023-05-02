// Import the Circle class
const Circle = require('../lib/circle.js');

// Define a describe block for the Circle class
describe('Circle', () => {
  // Define a test block for the constructor
  describe('constructor', () => {
    // Define a test case for creating a new Circle object
    it('should create a new Circle object', () => {
      // Create a new Circle object
      const circle = new Circle('My logo', '#FFFFFF', '#000000');

      // Expect the Circle object to have the correct properties
      expect(circle.text).toBe('My logo');
      expect(circle.shape).toBe('circle');
      expect(circle.textColor).toBe('#FFFFFF');
      expect(circle.shapeColor).toBe('#000000');
    });
  });

  // Define a test block for the render method
  describe('render', () => {
    // Define a test case for rendering a Circle object
    it('should render a Circle object', () => {
      // Create a new Circle object
      const circle = new Circle('My logo', '#FFFFFF', '#000000');

      // Call the render method and store the result
      const result = circle.render();

      // Expect the result to be a string
      expect(typeof result).toBe('string');

      // Expect the result to contain the correct SVG code
      expect(result).toContain('<circle');
      expect(result).toContain('cx="150"');
      expect(result).toContain('cy="100"');
      expect(result).toContain(`fill="#000000"`);
      expect(result).toContain('My logo');
      expect(result).toContain('font-size="30"');
    });
  });
});
