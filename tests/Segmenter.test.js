import * as SegmenterClass from '../src';
import { PatternMatcher, Segment, Segmenter, StringMatcher } from '../src';

describe('Segmenter with pattern matcher', () => {
  it('should segment input with user', () => {
    const segmenter = new Segmenter();
    segmenter.register(new PatternMatcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(3);

    expect(segments[0].segment).toEqual('input with ');
    expect(segments[1].segment).toEqual('@user');
    expect(segments[2].segment).toEqual(' and more');
  });

  it('should segment input with more than one user', () => {
    const segmenter = new Segmenter();
    segmenter.register(new PatternMatcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user and @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(5);

    expect(segments[0].segment).toEqual('input with ');
    expect(segments[1].segment).toEqual('@user');
    expect(segments[2].segment).toEqual(' and ');
    expect(segments[3].segment).toEqual('@user');
    expect(segments[4].segment).toEqual(' and more');
  });

  it('should segment input starting with match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new PatternMatcher('mention', /@\w+/));
    
    const segments = segmenter.segment('@user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(2);

    expect(segments[0].segment).toEqual('@user');
    expect(segments[1].segment).toEqual(' and more');
  });

  it('should segment input ending with match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new PatternMatcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input with @user');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(2);

    expect(segments[0].segment).toEqual('input with ');
    expect(segments[1].segment).toEqual('@user');
  });

  it('should segment input without match', () => {
    const segmenter = new Segmenter();
    segmenter.register(new PatternMatcher('mention', /@\w+/));
    
    const segments = segmenter.segment('input without match');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(1);

    expect(segments[0].segment).toEqual('input without match');
  });
});

describe('Segmenter with string matcher', () => {
  it('should segment input with user', () => {
    const segmenter = new Segmenter();
    segmenter.register(new StringMatcher('mention', '@user'));
    
    const segments = segmenter.segment('input with @user and more');

    expect(segments).toBeInstanceOf(Array);
    expect(segments.length).toEqual(3);

    expect(segments[0].segment).toEqual('input with ');
    expect(segments[1].segment).toEqual('@user');
    expect(segments[2].segment).toEqual(' and more');
  });
});

