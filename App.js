/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import LoggedOutScreen from './src/screens/LoggedOutScreen';
import reducers from './src/redux/reducers';

// Perhaps import the settings from somewhere else?
const logger = createLogger({
    level: 'info'
});

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, middleware);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoggedOutScreen/>
            </Provider>
        );
    }
}
