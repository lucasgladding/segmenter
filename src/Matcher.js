import Match from './Match';

class Matcher {
  constructor(pattern, type = 'text') {
    this.pattern = pattern;
    this.type = type;
  }

  match(input) {
    const expression = new RegExp(this.pattern, 'g');
    let found = expression.exec(input);
    if (found) {
      return new Match(found, this.type);
    }
  }
}

export default Matcher;
