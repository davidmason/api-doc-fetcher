var request = require('request');

var url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min"

module.exports = function (section, callback) {
  request(url, function (error, response, body) {
    if (error) {
      callback(error);
    } else if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback('unexpected status code: ' + response.statusCode);
    }
  })
}
