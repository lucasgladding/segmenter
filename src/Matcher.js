import Match from './Match';

class Matcher {
  constructor(type, pattern) {
    this.type = type;
    this.pattern = pattern;
  }

  match(input) {
    const expression = new RegExp(this.pattern);
    let found = expression.exec(input);
    if (found) {
      return new Match(this.type, found);
    }
  }
}

export default Matcher;
