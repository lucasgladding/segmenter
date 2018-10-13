import Matcher from '../src/Matcher';
import Match from '../src/Match';

describe('Matcher', () => {
  it('should match string containing @user', () => {
    const matcher = new Matcher(/@\w+/, 'mention');
    
    const match = matcher.match('string containing @user');

    expect(match).toBeInstanceOf(Match);
    expect(match.string).toEqual('@user');
    expect(match.type).toEqual('mention');
    expect(match.range).toEqual([18, 23]);
  });
});
