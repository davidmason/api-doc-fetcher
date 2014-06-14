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
  console.log('Usage:');
  console.log('        node index page [section]\n');
  console.log('  Displays documentation section from the given docs page.\n');
  console.log('  page:');
  console.log('    docs page to use. e.g. Math.min or Math.min()\n');
  console.log('  section (optional):');
  console.log('    which section of the page to show');
  console.log('    valid values: ' + validSections);
  process.exit();
}

var page = args[0];

var section;
if (args.length > 1) {
  section = args[1];
  if (!(section in sections)) {
    console.error('Invalid section: ' + section);
    console.log('  Valid sections are: ' + validSections);
    process.exit(1);
  }
}
section = section || 'summary';

getDocsFromMDN(page, section, handleDocument);

function handleDocument(err, doc) {
  if (err) {
    console.log('got an error: ' + err);
  } else {
    getSection(sections[section], doc, function (text) {
      console.log(text);
    });
  }
}
