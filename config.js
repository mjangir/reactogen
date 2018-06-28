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
  })
  plop.addHelper('checklength', function (v1, v2, options) {
    if (v1.length>v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  })
};