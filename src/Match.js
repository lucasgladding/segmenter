class Match {
  constructor(match, type) {
    const string = match[0];

    this.string = string;
    this.type = type;
    this.range = [match.index, match.index + string.length];
  }
}

export default Match;
