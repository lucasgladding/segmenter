import Parser from '../src/Parser';

describe('Parser', () => {
  it('should parse an input without a user', () => {
    const parser = new Parser();
    
    const result = parser.parse('input without a user');

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(1);
  });

  it('should parse an input with a @user', () => {
    const parser = new Parser();
    parser.register(new Matcher(/@\w/));
    
    const result = parser.parse('input with a @user');

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual('input with a ');
    expect(result[1]).toEqual('@user');
  });
});
