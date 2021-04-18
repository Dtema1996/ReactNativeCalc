import React from 'react';
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');
const buttonWidth = window.width / 4;

export default ({ onPress, text, size, colour }) => {
    const textStyles = [styles.text];
    const buttonStyles = [styles.button];

    if (colour === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (colour === 'accent') {
        buttonStyles.push(styles.buttonAccent);
    }
    if (size === 'double') {
        buttonStyles.push(styles.buttonDouble)
    }


    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5,
        height: buttonWidth - 10,
        alignItems: 'center',
        borderRadius: buttonWidth,
        justifyContent: 'center',
        backgroundColor: '#333333',
    },
    buttonSecondary: {
        backgroundColor: '#a6a6a6',
    },
    buttonAccent: {
        backgroundColor: '#f09a36',
    },
    buttonDouble: {
        flex: 0,
        paddingLeft: 40,
        width: window.width / 2 -10,
        alignItems: "flex-start",
    },
    text: {
        color: '#fff',
        fontSize: 25,
    },
    textSecondary: {
        color: '#060606'
    },
});
