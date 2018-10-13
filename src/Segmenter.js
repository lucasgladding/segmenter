import Segment from './Segment';

class Segmenter {
  constructor() {
    this.matchers = [];
  }

  register(matcher) {
    this.matchers.push(matcher);
  }

  segment(input) {
    const match = this.match(input);
    if (match) {
      const l = input.slice(0, match.index);
      const m = match.match;
      const r = input.slice(match.last());
      return [l, m, r];
    }
  }
  
  match(input) {
    for (let matcher of this.matchers) {
      const match = matcher.match(input);
      if (match) {
        return match;
      }
    }
  }
}

export default Segmenter;
