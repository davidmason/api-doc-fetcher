var cheerio = require('cheerio')

/* Extract text from a piece of HTML */
module.exports = function (html, callback) {
  var $ = cheerio.load(html);
  $('*:not(* *)').map(function (i, element) {
    callback($(element).text());
  });
}
