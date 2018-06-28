const caseHelpers   = require('../case-helpers');
const validations   = require('../validations');

module.exports = [
  {
    name: 'moduleName',
    type: 'input',
    message: 'What is your Module Name?',
    validate: validations.isRequired
  },
  {
    name: 'isImmutable',
    type: 'confirm',
    message: 'Are you using ImmutableJS?',
    validate: validations.isRequired
  },
  {
    name: 'isReactReduxActions',
    type: 'confirm',
    message: 'Are you using Redux Actions (Recommended)?',
    validate: validations.isRequired
  },
  {
    name: 'constants',
    type: 'editor',
    message: 'Please enter your constant names in camel or uppercase line by line',
    filter: function(constants) {
      const consts = [];
      return constants.split("\r\n").map(function(constant) {
        const pipes = constant.split('|');
        const name = pipes[0];
        const actionName = caseHelpers.camelCase(name);
        const constantName = caseHelpers.constantCase(name);

        pipes.shift();
        return {
          name: name,
          actionName: actionName,
          constantName: constantName,
          error: constantName.indexOf('ERROR') > -1 || constantName.indexOf('FAILURE') > -1,
          hasDone: constantName.indexOf('DONE') > -1,
          children: pipes.map(function(pipe) {
            const a = actionName + caseHelpers.properCase(pipe);
            const c = constantName + '_' + caseHelpers.constantCase(pipe);
            return {
              name: pipe,
              actionName: a,
              constantName: c,
              error: c.indexOf('ERROR') > -1 || c.indexOf('FAILURE') > -1,
              hasDone: c.indexOf('DONE') > -1,
            }
          }),
        }
      });
    }
  },
  // {
  //   name: 'isAsyncActions',
  //   type: 'confirm',
  //   message: 'Does your module require Async Actions?',
  //   default: false,
  // },
  // {
  //   when: function (response) {
  //     return response.isAsyncActions;
  //   },
  //   name: 'asyncType',
  //   type: 'list',
  //   message: 'What do you want between Thunk or Redux Saga',
  //   choices: ['Redux Thunk', 'Redux Saga']
  // },
  {
    name: 'stateObject',
    type: 'editor',
    message: 'Please enter your state JSON schema',
    filter: function(value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return {};
      }
    }
  },
]