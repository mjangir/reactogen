const moduleGenerator = require('./module/index.js');

module.exports = function (plop) {
  plop.setGenerator('module', moduleGenerator);
  plop.addHelper('curly', function(object, open) {
    return open ? '{' : '}';
  });
  plop.addHelper('ifvalue', function (conditional, options) {
    if (options.hash.value === conditional) {
      return options.fn(this)
    } else {
      return options.inverse(this);
    }
  });
};