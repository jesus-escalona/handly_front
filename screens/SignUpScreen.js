import React, {Component} from 'react';
import { TextInput, Image, StyleSheet, View } from 'react-native'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {BoldText} from "../components/BoldText";
import {RegularText} from "../components/RegularText";
import {ItalicText} from "../components/ItalicText";
import Button from "../components/Button";
import Ratings from "../components/Rating";

class SignUpScreen extends Component {

    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{x: 0, y: 0}}
                contentContainerStyle={styles.container}
                extraHeight={200}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logo}>
                    <Image source={require('../assets/images/truck.png')}/>
                    <BoldText style={styles.title}>Handly</BoldText>
                </View>
                <View style={styles.quote}>
                    <ItalicText>This is just sloppy craftsmanship, I love it..</ItalicText>
                    <View style={{padding: 3, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <ItalicText>- Rick Sanchez</ItalicText>
                        <Ratings value={4.5}/>
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <BoldText>Create an account.</BoldText>
                    <TextInput style={styles.input} placeholder='Email Address' textContentType='emailAddress'/>
                    <TextInput style={styles.input} placeholder='Name'/>
                    <TextInput style={styles.input} placeholder='Password' secureTextEntry />
                    <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        label='Log In'
                        onPress={console.warn}
                    />
                    <RegularText style={{alignSelf: 'center'}}>or</RegularText>
                    <RegularText
                        style={styles.link}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        Already have an account?
                    </RegularText>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: '#5A4FF3'
    },
    link: {
        alignSelf: 'center',
        textDecorationLine: 'underline',
        color: '#5A4FF3'
    },
    quote: {
        flex: 0.1,
        justifyContent: 'space-evenly',
        alignSelf: 'stretch'
    },
    logo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        paddingHorizontal: 10,
        flex: 0.6,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignSelf: 'stretch'
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#93A3B1',
        textAlign: 'left',
        fontSize: 18
    },
    button: {
        backgroundColor: '#5A4FF3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
});


export default SignUpScreen;