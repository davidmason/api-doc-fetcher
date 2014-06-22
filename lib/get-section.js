var cheerio = require('cheerio')

// TODO give a decent error if the section does not exist
//      (need to add an error to the callback)

/* Extract a section from a HTML document provided as a String */
module.exports = function (sectionId, doc, callback) {
  var $ = cheerio.load(doc);
  // get elements after requested section
  $(sectionId).nextUntil('h2').map(function (i, element) {
    callback($(element).text());
  });
}
