import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class RoundedInput extends Component {
    render() {
        return (
            <TextInput
                onChangeText={ this.props.onChangeText }
                value={ this.props.value }
            />
        );
    }
}

RoundedInput.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string
};

export default RoundedInput;
