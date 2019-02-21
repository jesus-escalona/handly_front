import React from 'react';
import { Text } from 'react-native';

export class RegularText extends React.Component {
    render() {
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'monserrat-regular' }]} />;
    }
}