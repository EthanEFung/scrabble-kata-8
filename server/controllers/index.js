const { Readable, Writable, Duplex, Transform } = require("stream");
const fs = require("fs");
const path = require("path");
const dictionAddress = path.join(__dirname, "../", "../", "dictionary.txt");

const dictionary = fs.createReadStream(dictionAddress, { encoding: "utf8" });

const relevantTerms = new Duplex({
  read(size) {
    console.log("last term", this.lastTerm);
    if (this.lastTerm[0] > this.query[0]) this.push(null);
  },
  write(chunk, encoding, cb) {
    const terms = chunk.toString().split("\n");
    this.lastTerm = terms[terms.length - 1];
    this.push(chunk);
    cb();
  }
});

module.exports = {
  getTermSearchResults: (req, res) => {
    console.log(req.params);
    const { term } = req.params;

    relevantTerms.query = term.toUpperCase();
    relevantTerms.lastTerm = null;

    dictionary.pipe(relevantTerms).pipe(res);
  }
};
