### Reactogen
Reactogen is CLI tool to create your redux (duck structured) modules quickly by answering a few prompts. Though the project has been started for multipurpose but currently it supports only creating react redux modules.
#### How To Install
You can install reactogen globally or locally in your project by running the following command:
`npm install reactogen -g`
#### How To Use
Once you are done with installing the tool, you just need to run the following command in any directory where you want your module to be generated.
`reactogen generate`
Running this command will prompt the following few questions:
###### 	What is your Module Name?:
Enter whatever the name of your module you want for e.g. users, createUser, UserRole. It will create the directory with this module name.
###### 	Are you using ImmutableJS?:
If you answer it as **YES** it will add the immutableJS imports in the state and selector files. Also it will make the state immutable.
###### 	Are you using Redux Actions (Recommended)?:
If are not aware, [Redux Actions](https://github.com/redux-utilities/redux-actions "Redux Actions") is Flux Standard Action utilities for Redux. If you confirm this, all the action creators will return [flux standard action](https://github.com/redux-utilities/flux-standard-action "flux standard action") and the code will be generated as:

    import { createAction } from 'redux-actions';
    import * as constants from './constants';
    
    export const fetchUser = createAction(
      constants.FETCH_USER,
      (payload) => payload,
      (payload, meta) => meta
    );
###### Otherwise
It will be a plain action object like below:

    export function fetchUsers(payload, meta) {
      return {
        type: constants.FETCH_USERS,
        payload,
        meta,
      };
    }
