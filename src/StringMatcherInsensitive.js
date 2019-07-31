const Match = require('./Match');

/**
 * Matches case-insensitively. Useful if you don't
 * want to deal with escaping strings in regexes for
 * the PatterMatcher.
 */
class StringMatcherInsensitive {
  constructor(type, string) {
    this.type = type;
    this.string = string;
  }

  match(input) {
    let index = input.toLowerCase().indexOf(this.string.toLowerCase());
    if (index >= 0) {
      // return the haystack's case - not the search pattern's case:
      const matchingString = input.substring(index, index + this.string.length);
      return new Match(this.type, matchingString, index);
    }
  }
}

module.exports = StringMatcherInsensitive;
