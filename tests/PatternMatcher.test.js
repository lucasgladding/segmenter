import { Match, PatternMatcher } from '../src';

describe('PatternMatcher', () => {
  it('should match string containing @user', () => {
    const matcher = new PatternMatcher('mention', /@\w+/);
    
    const match = matcher.match('string containing @user');

    expect(match).toBeInstanceOf(Match);
    expect(match.type).toEqual('mention');
    expect(match.match).toEqual('@user');
    expect(match.first).toEqual(18);
    expect(match.last).toEqual(23);
  });
});
