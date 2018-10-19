import Match from '../src/Match';
import StringMatcher from '../src/StringMatcher';

describe('StringMatcher', () => {
  it('should match string containing @user string', () => {
    const matcher = new StringMatcher('mention', '@user');
    
    const match = matcher.match('string containing @user');

    expect(match).toBeInstanceOf(Match);
    expect(match.type).toEqual('mention');
    expect(match.match).toEqual('@user');
    expect(match.first).toEqual(18);
    expect(match.last).toEqual(23);
  });
});
