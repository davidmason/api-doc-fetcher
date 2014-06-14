var mozdocs = require('./moz-docs'),
    getSection = require('./get-section');

var section = process.argv[2];

// TODO output help if there are no arguments,
//      or if argument is 'help'

var sections = {
  'summary': '#Summary',
  'syntax': '#Syntax',
  'desc': '#Description'
};

if (!(section in sections)) {
  console.error('invalid section: ' + section);
} else {
  mozdocs(section, handleDocument);
}

function handleDocument(err, doc) {
  if (err) {
    console.log('got an error: ' + err);
  } else {
    getSection(sections[section], doc, function (text) {
      console.log(text);
    });
  }
}
