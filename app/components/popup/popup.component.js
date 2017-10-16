import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import {Dispatch, State, CreateReducer} from '../../services/dispatch.service';
import * as ACTIONS from '../../constants/actions.constants';

require('./popup.component.scss');

class PopupComponent extends React.Component {

    componentWillMount() {
        console.info('PopupComponent', this.props);
    }

    googleAuth() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider)
            .then(() => {
                Dispatch({type: ACTIONS.SET_POPUP, active: false});
            })
            .catch(error => {
                console.error('signup error', error);
                Dispatch({type: ACTIONS.SET_POPUP, active: false});
            });
    }

    hide() {
        Dispatch({type: ACTIONS.SET_POPUP, active: false});
    }

    render() {
        const Popup = this.props.Popup;

        return (
            <div component="popup" active={String(Popup.active)}>
                <div className="popup-box">
                    <div className="popup-close clickable" onClick={this.hide}>
                        <span className="sicon-uniE7D7"/>
                    </div>

                    <div className="popup-header">
                        Login
                    </div>

                    <div className="popup-content">
                        Login with one of the social networks.

                        <div className="login-logos">
                            <div className="login-item clickable" onClick={this.googleAuth}>
                                <img src="/statics/img/logos/google.svg" style={{height: 40}}/>
                            </div>
                            <div className="login-item clickable">
                                <img src="/statics/img/logos/facebook.png"/>
                            </div>
                            {/*<div className="login-item clickable" >*/}
                            {/*<img src="/statics/img/logos/google.svg"/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PopupComponent)