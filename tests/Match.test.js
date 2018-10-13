import Match from '../src/Match';

describe('Match', () => {
  it('should calculate last', () => {
    const match = new Match('type', {
      0: 'match',
      index: 10,
    });

    expect(match.last()).toEqual(15);
  });
});
