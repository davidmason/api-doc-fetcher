var cheerio = require('cheerio')

/* Extract a section from a HTML document provided as a String */
module.exports = function (sectionId, doc, callback) {
  var $ = cheerio.load(doc);
  // get elements after requested section
  $(sectionId).nextUntil('h2').map(function (i, element) {
    callback($(element).text());
  });
}
