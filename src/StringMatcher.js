const Match = require('./Match');

class StringMatcher {
  constructor(type, string) {
    this.type = type;
    this.string = string;
  }

  match(input) {
    let index = input.indexOf(this.string);
    if (index >= 0) {
      return new Match(this.type, this.string, index);
    }
  }
}

module.exports = StringMatcher;
