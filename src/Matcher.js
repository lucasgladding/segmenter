import Match from './Match';

class Matcher {
  constructor(pattern, type = 'text') {
    this.pattern = pattern;
    this.type = type;
  }

  find(input) {
    const matches = [];
    const expression = new RegExp(this.pattern, 'g');
    let data;
    while ((data = expression.exec(input)) !== null) {
      const match = new Match(data, this.type);
      matches.push(match);
    }
    return matches;
  }
}

export default Matcher;
