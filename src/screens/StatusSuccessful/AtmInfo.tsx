import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { white } from '../../assets/styles/Colors';
import { nunito200, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';

const AtmInfo = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text style={styles.fontSuccess}>Reset Password Successful</Text>
            <Text style={styles.font400}>You can use your new password for the next Login</Text>
            <ButtonYellow
                title={'GO TO HOME'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={()=>navigation.navigate('BottomTabMain')}

            />
        </>
    );
};

export default AtmInfo;


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