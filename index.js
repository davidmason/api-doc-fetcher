var https = require('https'),
    cheerio = require('cheerio')

var section = process.argv[2];

var sections = {
  'summary': '#Summary',
  'syntax': '#Syntax',
  'desc': '#Description'
};

if (!(section in sections)) {
  console.error('invalid section: ' + section);
} else {
  var url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min"

  https.get(url, function (res) {
    var data = '';
    console.log('STATUS: ' + res.statusCode);
    res.on('data', function(d) {
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
    $(sections[section]).nextUntil('h2').map(function (i, element) {
      console.log($(element).text());
    });

  }
}



