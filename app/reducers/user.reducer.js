// import * as Request from 'superagent';
import * as _ from "lodash";


import * as ACTIONS from '../constants/actions.constants';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';

class UserReducer {
    initialState = {
        user: undefined,
    };

    actions = {
        [ACTIONS.SET_USER]: this.set,
        // [ACTIONS.SET_ACCOUNT_DETAILS] : this.setAccount,
        // [ACTIONS.SAVE_ACCOUNT_DETAILS]: this.saveAccount,
    };

    constructor() {
        this.loadUser();
    }

    set(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;
        return obj;
    }

    loadUser() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;

            console.log('User:', user);
            Dispatch({type: ACTIONS.SET_USER, user});
        });
    }
}

export default CreateReducer('User', new UserReducer());