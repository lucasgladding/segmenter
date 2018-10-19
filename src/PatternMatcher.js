import Match from './Match';

class PatternMatcher {
  constructor(type, pattern) {
    this.type = type;
    this.pattern = pattern;
  }

  match(input) {
    const expression = new RegExp(this.pattern);
    let found = expression.exec(input);
    if (found) {
      return Match.fromRegExp(this.type, found);
    }
  }
}

export default PatternMatcher;
