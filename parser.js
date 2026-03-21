// parser.js
const { Readable } = require('stream');

class Parser {
  constructor(file) {
    this.file = file;
  }

  async parse() {
    const data = await this.file.read();
    const lines = data.toString('utf8').split('\n');
    const result = [];

    for (const line of lines) {
      const match = line.match(/^(\w+)\s+(\w+)\s+(\d+)$/);
      if (match) {
        result.push({
          type: match[1],
          name: match[2],
          value: parseInt(match[3], 10),
        });
      }
    }

    return result;
  }
}

module.exports = Parser;