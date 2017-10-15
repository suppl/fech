import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

require('./popup.component.scss');

class PopupComponent extends React.Component {

    componentWillMount() {
        console.info('PopupComponent', this.props);
    }

    googleAuth() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider);
    }

    render() {
        const Popup = this.props.Popup;

        return (
            <div component="popup" active={String(Popup.active)}>
                <div className="popup-box">
                    <div className="popup-header">
                        Login
                    </div>

                    <div className="popup-content">
                        Login with one of the social networks.

                        <div className="login-logos">
                            <div className="login-item clickable" onClick={}>
                                <img src="/statics/img/logos/google.svg" style={{height:40}}/>
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