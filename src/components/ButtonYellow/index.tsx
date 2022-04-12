import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { primary_blue, primary_yellow } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';

interface Props {
    onPress?(): void,
    title?: String,
    customStyle?: any,
    onLongPress?(): void,
}
const ButtonYellow: React.FC<Props> = ({
    onPress,
    title,
    customStyle,
    onLongPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.button, customStyle]}>
            <Text style={styles.fontChoose}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

export default ButtonYellow;

const styles = StyleSheet.create({
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
});
