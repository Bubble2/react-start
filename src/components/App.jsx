import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'

import rootReducer from '../store';

import Index from 'components/Index';

const store = applyMiddleware(thunk)(createStore)(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Index />
                </Router>
            </Provider>
        )
    }
}


