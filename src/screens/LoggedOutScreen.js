import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import RoundedButton from '../components/buttons/RoundedButton';
import RoundedInput from '../components/inputs/RoundedInput';

import {
    LOGIN_START,
    LOGIN_FAIL
} from '../redux/reducers/SessionReducer'

import colors from '../styles/colors';

class LoggedOutScreen extends Component {
    constructor() {
        super();
        this.state = {
            value: 'Default Text'
        };
        this.pressButton = this.pressButton.bind(this);
        this.changeTextInput = this.changeTextInput.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            realValue: this.state.value
        });

        const { dispatch } = this.props;

        dispatch((dispatch) => {
            dispatch({
                type: LOGIN_START,
                payload: {
                    something: 'it works!'
                }
            });
        });
    }

    changeTextInput(value) {
        this.setState({value});
    }

    pressButton(event) {
        this.setState({
            realValue: this.state.value
        });
    }

    render() {
        return (
            <View>
                <Text style={style.container}>{this.state.realValue}</Text>
                <RoundedInput
                    onChangeText={this.changeTextInput}
                    value={this.state.value}
                />
                <RoundedButton
                    onPress={ this.pressButton }
                    text="Change Text"
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        "fontWeight": 'bold'
    }
});

export default connect((state) => {
    return {
        session: state.session
    }
})(LoggedOutScreen);
