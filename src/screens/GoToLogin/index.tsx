import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { IcAlert } from '../../assets/Images';
import { primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, ViewContainer } from '../../components';

const GoToLogin = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Mobile Number is Already\nRegistered to bion Account'}
                desc={'Login to your available account using this number\nor change mobile number'}
                Ic={()=> <IcAlert />}
                navigation={navigation}
            />
            <ButtonYellow
                title={'Go to Login'}
                customStyle={styles.button}
                // onPress={() => navigation.navigate('RegisterAtmPin')}
            />
            <Text style={styles.fontAsking}>{`Sure haven’t registered yet? `}<Text style={styles.fontContactUs}>Contact Us</Text></Text>
        </ViewContainer>
    );
};

export default GoToLogin;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        zIndex: 9999
    },
    fontInfo: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },

    bgHair: {
        position: 'absolute',
        right: 30
    },
    fontAsking: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6,
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        position: 'absolute',
        bottom: 50
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontContactUs: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_orange
    },
});
