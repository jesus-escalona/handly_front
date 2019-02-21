import * as React from "react";
import {View, StyleSheet} from "react-native";
import {Ionicons as Icon} from "@expo/vector-icons";
import {RegularText} from "./RegularText";

export default class Ratings extends React.PureComponent {
    render() {
        const {votes, value, light} = this.props;
        const filledStars = value - (value % 1);
        const halfStar = (value % 1) !== 0;
        const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
        const size = 16;
        const color = light ? "white" : '#5A4FF3';
        const style = light ? styles.textLight : styles.textDark;
        return (
            <View style={styles.container}>
                {/*<Text style={style}>{`${value.toFixed(1)} `}</Text>*/}
                {
                    to(filledStars)
                        .map(key => <Icon name="ios-star" {...{ key, size, color }} />)
                }
                { halfStar && <Icon name="ios-star-half" {...{ size, color }} /> }
                {
                    to(emptyStars)
                        .map(key => <Icon name="ios-star-outline" {...{ key, size, color }} />)
                }
                <RegularText style={style}>{votes ? ` (${votes} reviews)` : ""}</RegularText>
            </View>
        );
    }
}

const to = (index) => {
    const numbers = [];
    for (let i = 0; i < index; i += 1) {
        numbers.push(i);
    }
    return numbers;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#93A3B1'
    },
    textLight: {
        color: "white"
    },
    textDark: {
        color: 'gray'
    }
});
