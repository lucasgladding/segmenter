const Segment = require('./Segment');

class Segmenter {
  constructor() {
    this.matchers = [];
  }

  register(matcher) {
    this.matchers.push(matcher);
  }

  segment(input) {
    if (!input) {
      return [];
    }
    const match = this.find(input);
    if (match) {
      const l = input.slice(0, match.first);
      const r = input.slice(match.last);
      return [
        ...this.segment(l), 
        new Segment(match.type, match.match),
        ...this.segment(r),
      ];
    }
    return [new Segment(null, input)];
  }
  
  find(input) {
    for (let matcher of this.matchers) {
      const match = matcher.match(input);
      if (match) {
        return match;
      }
    }
  }
}

module.exports = Segmenter;
