class Match {
  constructor(type, match) {
    this.type = type;
    this.match = match[0];
    this.first = match.index;
    this.last = match.index + this.match.length;
  }
}

export default Match;
