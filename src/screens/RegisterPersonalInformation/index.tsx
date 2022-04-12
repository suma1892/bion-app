import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black70, dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, TextInput, ViewContainer } from '../../components';
const {width}=Dimensions.get('screen');

const RegisterPersonalInformation = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Personal Information'}
                desc={'Please confirm your contact information to receive\ntransaction updates'}
            />

            <View style={styles.boxWrapper}>
                <Text style={styles.fontTitle}>Mobile Number</Text>
                <Text style={styles.fontDesc2}>{`+62 812344567890`}</Text>

                <Text style={[styles.fontTitle, { marginTop: 18 }]}>E-mail</Text>
                <Text style={styles.fontDesc2}>{`jonathan@mail.com`}</Text>
            </View>

            <TextInput
                title={'Referral Code'}
                placeholder={'Enter referral code (optional)'}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('GoToLogin')}
                onLongPress={() => navigation.navigate('VerifyAccountMobile')}
                style={styles.button}>
                <Text style={styles.fontChoose}>Verify</Text>
            </TouchableOpacity>
        </ViewContainer>
    );
};

export default RegisterPersonalInformation;

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
        fontSize: 16,
        marginTop: 6
    },
    fontDesc2: {
        fontFamily: nunito700,
        color: white,
        fontSize: 16,
        marginTop: 6
    },
    boxWrapper: {
        width: width,
        // position: 'absolute',
        // alignSelf: 'center',
        
        backgroundColor: dark_blue,
        padding: 16,
        // paddingLeft: -20,
        marginTop: 24,
        paddingRight: 26,
        marginLeft: -20,
        marginBottom: 20
    },

    fontTitle: {
        color: '#FFFFFFB2',
        fontFamily: nunito400,
        fontSize: 12
    },
    bgHair: {
        position: 'absolute',
        right: 30
    },
    boxWrapperAtm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 16,
        paddingRight: 26,
    },
    boxWrapperAtmContent: {
        padding: 16,
        backgroundColor: white,
        width: '100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        marginTop: 6,
        justifyContent: 'space-between',
    },
    fontCheck: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_yellow,
        marginRight: 12
    },
    fontInput: {
        fontSize: 16,
        fontFamily: nunito700,
        color: black70
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
        bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
});
