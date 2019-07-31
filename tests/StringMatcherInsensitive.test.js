import {Match, StringMatcherInsensitive} from '../src';

describe('StringMatcherInsensitive', () => {
  it('matches case insensitively', () => {

    const matcher = new StringMatcherInsensitive('test_type', 'testp@ttern');

    const match = matcher.match('string containing TESTP@ttern with trailing chars');

    expect(match).toBeInstanceOf(Match);
    expect(match.type).toEqual('test_type');
    expect(match.match).toEqual('TESTP@ttern');
    expect(match.first).toEqual(18);
    expect(match.last).toEqual(29);
  });
});
