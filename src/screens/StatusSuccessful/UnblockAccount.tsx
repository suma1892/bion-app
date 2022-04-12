import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { black50, black70, bluePale, dark_blue, primary_blue, primary_orange, primary_red, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito200, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';
import { useNavigation } from '@react-navigation/native';

const UnblockAccount = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text style={styles.fontSuccess}>Unblock Request is Sent</Text>
            <Text style={styles.font400}>We are processing your unblock request. Please wait for max. 2 hours for unblock request update. You can check on it at Notification / registered e-mail.</Text>
            <ButtonYellow
                title={'GO TO HOME'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('BottomTabMain')}

            />
        </>
    );
};

export default UnblockAccount;


const styles = StyleSheet.create({
    fontSuccess: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        marginTop: '100%'
    },
    font400: {
        fontFamily: nunito200,
        fontSize: 16,
        color: white,
        marginTop: 12
    },

});