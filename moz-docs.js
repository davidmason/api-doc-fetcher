var request = require('request');

var baseUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/"

// TODO make section optional: page, [section = 'summary'], callback
module.exports = function (page, section, callback) {
  var pageAddress = page.replace('.', '/')
                 .replace('(', '')
                 .replace(')', '')
  var url = baseUrl + pageAddress;

  request(url, function (error, response, body) {
    if (error) {
      callback(error);
    } else if (!error && response.statusCode == 200) {
      callback(null, body);
    } else if (response.statusCode == 404) {
      callback('Page "' + page + '" not found.');
    } else {
      callback('Unexpected status code: ' + response.statusCode + '.');
    }
  })
}
