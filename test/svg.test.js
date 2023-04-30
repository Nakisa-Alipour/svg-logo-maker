const SVG = require('./svg');
const svg = new SVG('My Logo', 'circle', '#000000', '#FFFFFF');

describe('SVG', () => {
  it('render method should return a string', () => {
    expect(typeof svg.render()).toBe('string');
  });

  it('render method should contain the provided text', () => {
    expect(svg.render()).toContain('My Logo');
  });
  
  it('render method should contain the provided shape', () => {
    expect(svg.render()).toContain('circle');
  });
  
  it('render method should contain the provided text color', () => {
    expect(svg.render()).toContain('#FFFFFF');
  });
  
  it('render method should contain the provided shape color', () => {
    expect(svg.render()).toContain('#000000');
  });

  it('should throw an error if text is less than 3 characters', () => {
    expect(() => new SVG('Hi', 'circle', '#000000', '#FFFFFF')).toThrowError('`text` must contain at least 3 characters.');
  });
});




