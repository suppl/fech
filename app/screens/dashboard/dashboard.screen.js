import React from 'react';
import {connect} from "react-redux";

import {InstaActive} from "../../services/helper.service";


require('./dashboard.screen.scss');

class DashboardScreen extends React.Component {
    componentWillMount() {
        InstaActive(this);
    }

    render() {
        return (
            <div screen="dashboard" active={this.active}>
                <div className="screen-top"/>
                <div className="top-button clickable">
                    <span className="sicon-uniE7D9"/>
                </div>

                <div className="screen-content">
                    <div className="flex flex-align flex-justify">
                        <img src="/statics/img/temp/empty-home.png" alt="" style={{maxHeight:982/2}}/>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (!user) SetUrl('/');
    // });

    return state
};

export default connect(mapStateToProps)(DashboardScreen)