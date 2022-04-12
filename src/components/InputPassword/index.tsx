import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { black70, dark_blue, primary_orange, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';

const InputPassword = ({
    title,
    placeholder,
    value,
    isPassword,
    theme,
}) => {
    const [show, setShow] = useState(isPassword);
    return (
        <View>
            <Text style={[styles.fontTitle, { color: '#FFFFFFB2' }]}>
                {title}
            </Text>
            <TextInput
                style={[styles.input(value || false), { backgroundColor: 'rgba(0, 0, 0, 0.2)', color: white }]}
                placeholder={placeholder}
                placeholderTextColor={theme ? black70 : "#FFFFFF80"}
                value={value}
                secureTextEntry={show}
            />
            {isPassword && <Text onPress={() => setShow(!show)} style={styles.fontShow}>Show</Text>}
        </View>
    );
};

export default InputPassword;

const styles = StyleSheet.create({
    input: value => ({
        padding: 10,
        backgroundColor: dark_blue,
        width: '100%',
        borderRadius: 6,
        fontFamily: value ? nunito700 : nunito400,
        color: '#FFFFFF',
        marginTop: 4,
        fontSize: 16,
    }),
    fontTitle: {
        fontSize: 12,
        fontFamily: nunito400,
        // color: '#FFFFFFB2',
    },
    fontShow: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_orange,
        position: 'absolute',
        right: 10,
        top: '50%'
    },
});
