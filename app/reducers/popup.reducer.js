// import * as Request from 'superagent';
import * as _ from "lodash";


import * as ACTIONS from '../constants/actions.constants';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';

class PopupReducer {
    initialState = {
        active: false,
    };

    actions = {
        [ACTIONS.SET_POPUP]: this.set,
        // [ACTIONS.SET_ACCOUNT_DETAILS] : this.setAccount,
        // [ACTIONS.SAVE_ACCOUNT_DETAILS]: this.saveAccount,
    };

    constructor() {
        // this.loadAccount();
    }

    set(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;
        return obj;
    }
}

export default CreateReducer('Popup', new PopupReducer());