import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default class Button extends React.PureComponent {
    render() {
        const {disabled, label, style, extraStyle, onPress, textStyle} = this.props;
        const baseStyle = [style, styles.base, extraStyle];
        const baseText = [styles.text, textStyle];
        return (
            <TouchableOpacity disabled={!!disabled ? true : null} onPress={onPress} >
                <View style={baseStyle}>
                    <Text style={baseText} numberOfLines={1}>{label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        fontFamily: "monserrat-regular",
        fontSize: 16,
        color: "white"
    }
});
