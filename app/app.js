import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


//Reducers
import NavReducer from './reducers/nav.reducer';
import PopupReducer from './reducers/popup.reducer';

//Components
import Sidebar from './components/sidebar/sidebar.component';
import Popup from './components/popup/popup.component';

//Screens
import DashboardScreen from './screens/dashboard/dashboard.screen';

export const store = createStore(combineReducers({
    Nav  : NavReducer,
    Popup: PopupReducer,
}));

require('./app.scss');

class App extends React.Component {

    componentWillMount() {

    }

    // styleClasses = () => [
    //     IsDesktop() ? 'desktop' : 'not-desktop',
    //     IsMobile() ? 'mobile' : 'not-mobile',
    //     IsTablet() ? 'tablet' : 'not-tablet',
    // ].join(' ');

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="flex flex-row">
                        <Popup/>
                        <Sidebar/>

                        <div className="screens">
                            <Route exact path="/" component={DashboardScreen}/>
                            <Route exact path="/dashboard" component={DashboardScreen}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));

