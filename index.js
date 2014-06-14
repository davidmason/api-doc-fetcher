var getDocsFromMDN = require('./moz-docs'),
    getSection = require('./get-section');

var sections = {
  'summary': '#Summary',
  'syntax': '#Syntax',
  'desc': '#Description'
};
var validSections = Object.keys(sections).join(', ');

var args = process.argv.slice(2);

if (args.length === 0 || args[0] === 'help') {
  console.log('Usage: node index [section]\n');
  console.log('  Displays documentation section for Math.min().\n');
  console.log('  section (optional): which section to show');
  console.log('    valid values: ' + validSections);
  process.exit();
}

var section = args[0];
if (!(section in sections)) {
  console.error('Invalid section: ' + section);
  console.log('  Valid sections are: ' + validSections);
  process.exit(1);
}

getDocsFromMDN(section, handleDocument);

function handleDocument(err, doc) {
  if (err) {
    console.log('got an error: ' + err);
  } else {
    getSection(sections[section], doc, function (text) {
      console.log(text);
    });
  }
}
