import Matcher from '../src/Matcher';
import Segment from '../src/Segment';
import Segmenter from '../src/Segmenter';

describe('Segmenter', () => {
  it('should segment input with user', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(3);

    expect(segments[0]).toEqual('input with ');
    expect(segments[1]).toEqual('@user');
    expect(segments[2]).toEqual(' and more');
  });

  it('should segment input with more than one user', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user and @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(5);

    expect(segments[0]).toEqual('input with ');
    expect(segments[1]).toEqual('@user');
    expect(segments[2]).toEqual(' and ');
    expect(segments[3]).toEqual('@user');
    expect(segments[4]).toEqual(' and more');
  });

  it('should segment input starting with match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('@user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(2);

    expect(segments[0]).toEqual('@user');
    expect(segments[1]).toEqual(' and more');
  });

  it('should segment input ending with match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(2);

    expect(segments[0]).toEqual('input with ');
    expect(segments[1]).toEqual('@user');
  });

  it('should segment input without match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new Matcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input without match');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(1);

    expect(segments[0]).toEqual('input without match');
  });
});
