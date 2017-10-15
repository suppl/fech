import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";
require('./sidebar.component.scss');

class SidebarComponent extends React.Component {
    menuItems = [
        {
            id  : 'dashboard',
            name: 'Dashboadrd',
            icon: 'sicon-uniE6FF',
            link: '/',
        },
        {
            id  : 'chat',
            name: 'Chat',
            icon: 'sicon-uniE91E',
            link: '/chat',
        },
    ];

    isActive = menuItem => String(menuItem.id === this.props.Nav.currentScreen);

    componentWillMount() {
        console.info(this.props);
        console.info(this.props.Nav.currentScreen);

    }

    showAuthPopup() {
        Dispatch({type: ACTIONS.SET_POPUP, active: true})
    }

    render() {
        return (
            <div component="sidebar">
                <div className="sidebar-logo">
                    F
                </div>

                <div className="sidebar-menu">
                    {this.menuItems.map(menuItem =>
                        <Link className="menu-item clickable"
                              to={menuItem.link}
                              key={menuItem.id}
                              active={this.isActive(menuItem)}
                        >
                            <span className={menuItem.icon}/>
                        </Link>
                    )}
                </div>

                <div style={{margin: 'auto'}}/>


                <div className="sidebar-login">
                    <div className="login-item clickable" onClick={this.showAuthPopup}>
                        <span className="sicon-uniE740"/>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SidebarComponent)