class Match {
  constructor(type, match) {
    this.type = type;
    this.match = match[0];
    this.index = match.index;
  }

  last() {
    return this.index + this.match.length;
  }
}

export default Match;
