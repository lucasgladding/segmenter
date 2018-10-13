import Matcher from '../src/Matcher';
import Segment from '../src/Segment';
import Segmenter from '../src/Segmenter';

describe('Segmenter', () => {
  it('should segment input', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(3);

    expect(segments[0]).toEqual('input with ');
    expect(segments[1]).toEqual('@user');
    expect(segments[2]).toEqual(' and more');
  });
});
