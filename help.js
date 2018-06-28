const chalk   = require('chalk');
const figlet  = require('figlet');

module.exports.show = function() {
  console.log(
    chalk.yellow(
      figlet.textSync('Reactogen', {
        horizontalLayout: 'full',
        font: 'standard',
      })
    )
  );
  console.log([
    '',
    chalk.bold('What is Reactogen:'),
    '  Reactogen is a tiny utility to generate your react redux module with duck structure.',
    '  It will ask a few questions to setup your module and you are ready to go.',
    '',
  ].join('\n'));
}