import Matcher from '../src/Matcher';
import Match from '../src/Match';

describe('Matcher', () => {
  it('should match string containing @user', () => {
    const matcher = new Matcher('mention', /@\w+/);
    
    const match = matcher.match('string containing @user');

    expect(match).toBeInstanceOf(Match);
    expect(match.type).toEqual('mention');
    expect(match.match).toEqual('@user');
    expect(match.index).toEqual(18);
  });
});
