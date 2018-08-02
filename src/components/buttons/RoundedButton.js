import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Colors from '../../styles/colors';
import Constants from '../../constants';

class RoundedButton extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    style={style.border}
                    onPress={this.props.onPress}>
                    <Text>
                        { this.props.text || 'Random Button' }
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

RoundedButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

const style = StyleSheet.create({
    border: {
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1
    }
});

export default RoundedButton;
