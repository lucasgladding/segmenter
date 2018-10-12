import Matcher from '../src/Matcher';
import Match from '../src/Match';

describe('Matcher', () => {
  it('should match string containing @user', () => {
    const matcher = new Matcher(/@\w+/, 'mention');
    
    const results = matcher.find('string containing @user');

    expect(results).toHaveLength(1);

    expect(results[0]).toBeInstanceOf(Match)
    expect(results[0].string).toEqual('@user');
    expect(results[0].type).toEqual('mention');
    expect(results[0].range).toEqual([18, 23]);
  });

  it('should match string containing more than one @user', () => {
    const matcher = new Matcher(/@\w+/, 'mention');
    
    const results = matcher.find('string containing @user1 and @user2');

    expect(results).toHaveLength(2);

    expect(results[0]).toBeInstanceOf(Match)
    expect(results[0].string).toEqual('@user1');
    expect(results[0].type).toEqual('mention');
    expect(results[0].range).toEqual([18, 24]);

    expect(results[1]).toBeInstanceOf(Match)
    expect(results[1].string).toEqual('@user2');
    expect(results[1].type).toEqual('mention');
    expect(results[1].range).toEqual([29, 35]);
  });
});
