import React from 'react';
import { Text } from 'react-native';

export class ItalicText extends React.Component {
    render() {
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'monserrat-italic' }]} />;
    }
}