/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LoggedOutScreen from './src/screens/LoggedOutScreen';

export default class App extends Component {
    render() {
        return (
            <LoggedOutScreen/>
        );
    }
}
