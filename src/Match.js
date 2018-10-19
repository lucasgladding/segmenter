class Match {
  constructor(type, match, index) {
    this.type = type;
    this.match = match;
    this.first = index;
    this.last = index + match.length;
  }

  static fromRegExp(type, match) {
    return new Match(type, match[0], match.index);
  }
}

export default Match;
