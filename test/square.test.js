// Import the Square class
const Square = require('../lib/square.js');

// Define a describe block for the Square class
describe('Square', () => {
  // Define a test block for the constructor
  describe('constructor', () => {
    // Define a test case for creating a new Square object
    it('should create a new Square object', () => {
      // Create a new Square object
      const square = new Square('My logo', '#FFFFFF', '#000000');

      // Expect the Square object to have the correct properties
      expect(square.text).toBe('My logo');
      expect(square.shape).toBe('square');
      expect(square.textColor).toBe('#FFFFFF');
      expect(square.shapeColor).toBe('#000000');
    });
  });

  // Define a test block for the render method
  describe('render', () => {
    let square;

    // Set up any necessary data before each test case runs
    beforeEach(() => {
      square = new Square('My logo', '#FFFFFF', '#000000');
    });

    // Define a test case for rendering a Square object
    it('should render a Square object', () => {
      // Call the render method and store the result
      const result = square.render();

      // Expect the result to be a string
      expect(typeof result).toBe('string');

      // Expect the result to contain the correct SVG code
      expect(result).toContain('<rect');
      expect(result).toContain('x="100"');
      expect(result).toContain('y="50"');
      expect(result).toContain('width="100"');
      expect(result).toContain('height="100"');
      expect(result).toContain(`fill="#000000"`);
      expect(result).toContain('My logo');
      expect(result).toContain('font-size="30"');
    });
  });
});

