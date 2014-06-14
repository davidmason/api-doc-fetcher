var https = require('https'),
    cheerio = require('cheerio')


var url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min"

https.get(url, function (res) {
  var data = '';
  console.log('STATUS: ' + res.statusCode);
  res.on('data', function(d) {
    console.log('got data: ' + d.length);
    data += d;
  }).on('end', function () {
    handleCompleteData(data);
  });
}).on('error', function(e) {
  console.error(e);
})


function handleCompleteData(data) {
  console.log(data.length);

  var $ = cheerio.load(data);

  // get <p> after #Summary
  $('#Summary').next().map(function (i, element) {
    console.log($(element).text());
  });

}