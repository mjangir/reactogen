const path        = require('path');
const questions   = require('./questions');
const MODULE_ROOT = require('../utils').MODULE_ROOT;
const CWD         = process.cwd();

module.exports = {
  description: 'Generate React Redux Module',
  prompts: questions,
  actions: function (data) {
    const actions = [];
    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/constants.js`),
      templateFile: path.join(MODULE_ROOT, 'module/constants.js.hbs'),
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/actions.js`),
      templateFile: data.isReactReduxActions ?
      path.join(MODULE_ROOT, 'module/rra-actions.js.hbs') : 
      path.join(MODULE_ROOT, 'module/actions.js.hbs'),
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/reducer.js`),
      templateFile: data.isReactReduxActions ?
      path.join(MODULE_ROOT, 'module/rra-reducer.js.hbs') : 
      path.join(MODULE_ROOT, 'module/reducer.js.hbs'),
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/state.model.js`),
      templateFile: path.join(MODULE_ROOT, 'module/state.model.js.hbs'),
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/index.js`),
      templateFile: path.join(MODULE_ROOT, 'module/index.js.hbs'),
      abortOnFail: true,
    });

    actions.push({
      type: 'add',
      path: path.join(CWD, `./${data.moduleName}/selectors.js`),
      templateFile: path.join(MODULE_ROOT, 'module/selectors.js.hbs'),
      abortOnFail: true,
    });

    return actions;
  }
}