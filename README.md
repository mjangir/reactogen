## Reactogen
Reactogen is CLI tool to create your redux (duck structured) modules quickly by answering a few prompts. Though the project has been started for multipurpose but currently it supports only creating react redux modules.
[![](https://lh3.googleusercontent.com/VhzAHO-9pzhc0st_THR2G8tEWs25Wohl4VPAANizwkqdBRwgf196rNQe-8dbUk3YSaf8W319T2IFySfDmpCz3r_f9ggH6GThYCnL-uqU3DVdn68XdwkRxymz2DhodTlN2WiXQkclCuMFuiGdy4RZ_yKX6mIaNYerpYypQZ7u3HRzJMExlvC4XpDDjEFrvO43poiMtzvueLeHc28AGYix_BX9IZV2tJ8tgX19EvsVYZWkw3bNUpwoqqadE6Waf0jMpO7DF0o7MqxtoY1ESwIuD5_tHYEzEoeuGil2-wJBeFK8jZ2U7A7_owGMm8F3xGT7zaRE1UFH_PuTGPmKcp1k3riI4PIuJROPnTCPUHsN0pRrdQ7LT9H67HFRcGzraHfRODQwjj9KMYaiza8fSQUPgAnK0fgfwZiRaCcFmWW1Gell1idWiGa87MuIfjRK8e_w1rf_q90BExfzLomHAaBv0ZfD1DLWtOkSW9WLZzdA8jsfEhKMrqaHzt6DnGX8aU4npsJ55jbt74Js7XEN70SjLY7tp-SCAWwBk6MW0IXutlohRqI8GjRYvfDIsvEkHntX_JMpj6lv7ZjaJ2rKy2NBdhf2da_ZNerSNKzgP8A=w500-h404-no)](https://lh3.googleusercontent.com/VhzAHO-9pzhc0st_THR2G8tEWs25Wohl4VPAANizwkqdBRwgf196rNQe-8dbUk3YSaf8W319T2IFySfDmpCz3r_f9ggH6GThYCnL-uqU3DVdn68XdwkRxymz2DhodTlN2WiXQkclCuMFuiGdy4RZ_yKX6mIaNYerpYypQZ7u3HRzJMExlvC4XpDDjEFrvO43poiMtzvueLeHc28AGYix_BX9IZV2tJ8tgX19EvsVYZWkw3bNUpwoqqadE6Waf0jMpO7DF0o7MqxtoY1ESwIuD5_tHYEzEoeuGil2-wJBeFK8jZ2U7A7_owGMm8F3xGT7zaRE1UFH_PuTGPmKcp1k3riI4PIuJROPnTCPUHsN0pRrdQ7LT9H67HFRcGzraHfRODQwjj9KMYaiza8fSQUPgAnK0fgfwZiRaCcFmWW1Gell1idWiGa87MuIfjRK8e_w1rf_q90BExfzLomHAaBv0ZfD1DLWtOkSW9WLZzdA8jsfEhKMrqaHzt6DnGX8aU4npsJ55jbt74Js7XEN70SjLY7tp-SCAWwBk6MW0IXutlohRqI8GjRYvfDIsvEkHntX_JMpj6lv7ZjaJ2rKy2NBdhf2da_ZNerSNKzgP8A=w500-h404-no)
#### How To Install
You can install reactogen globally or locally in your project by running the following command:
`npm install reactogen -g`
#### How To Use
Once you are done with installing the tool, you just need to run the following command in any directory where you want your module to be generated.
`reactogen generate`
Running this command will prompt the following few questions:
##### 	What is your Module Name?:
Enter whatever the name of your module you want for e.g. users, createUser, UserRole. It will create the directory with this module name.
##### 	Are you using ImmutableJS?:
If you answer it as **YES** it will add the immutableJS imports in the state and selector files. Also it will make the state immutable.
##### 	Are you using Redux Actions (Recommended)?:
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
##### Please enter your constant names in camel or uppercase line by line
This is very important. Once you come to this question, hit the Enter and it will open an editor (notepad etc.). You need  to put all your constant names line by line (only one constant should be in a line) and it will create the appropriate constant and action files in the module.
Here are the supported constant name formats:

    fetch_admin_users
    fetchAdminUsers
    FETCH_ADMIN_USERS
    fetch-admin-users
    fetch-Admin-Users
    FETCH-ADMIN-USERS
In whatever above format you write your constants, they will be taken care of. All these will be giving a same constant with name **FETCH_ADMIN_USERS** and the action name **fetchAdminUsers**.

##### Please enter your state JSON schema Received
Coming to this question will also open an editor by hitting the Enter key and you need to put your state json schema there. Save it and close it.

**Thats all**
A new module folder will be created with the following files:
1. constants.js - contains all the constants you put in editor
2. actions.js - contains all the action creators for given constants
3. reducer.js - This file will have all the action handlers for given constants
4. selectors.js - It will contain the root level state selectors using [reselect](https://github.com/reduxjs/reselect "reselect")
5. state.model.js - This is the state holder that contains your state with state modification methods for each action.