// Import the SVG class from the SVG module
const SVG = require('./svg');

// Create a new instance of SVG with some properties
const svg = new SVG('My Logo', 'circle', '#000000', '#FFFFFF');

// Begin the Jest test suite for the SVG class
describe('SVG', () => {
  // Test that the render method returns a string
  it('render method should return a string', () => {
    expect(typeof svg.render()).toBe('string');
  });

  // Test that the render method contains the provided text
  it('render method should contain the provided text', () => {
    expect(svg.render()).toContain('My Logo');
  });

  // Test that the render method contains the provided shape
  it('render method should contain the provided shape', () => {
    expect(svg.render()).toContain('circle');
  });

  // Test that the render method contains the provided text color
  it('render method should contain the provided text color', () => {
    expect(svg.render()).toContain('#FFFFFF');
  });

  // Test that the render method contains the provided shape color
  it('render method should contain the provided shape color', () => {
    expect(svg.render()).toContain('#000000');
  });

  // Test that the constructor throws an error if text is less than 3 characters
  it('should throw an error if text is less than 3 characters', () => {
    expect(() => new SVG('Hi', 'circle', '#000000', '#FFFFFF')).toThrowError('`text` must contain at least 3 characters.');
  });
});




