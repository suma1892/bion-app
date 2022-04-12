import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ichelp, IcPhone } from '../../assets/Images';
import { primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { InputOtp, Keyboard, MainHeader, ViewContainer } from '../../components';

const VerifyAccountMobile = ({ navigation, route }) => {
    const screen = route?.params?.screen;

    const [pin, setPin] = useState('');
    const [isError, setIsError] = useState(false);
    const [countErr, setCountErr] = useState(3);
    // const [errorMessage, setErrorMessage] = useState('');

    const fillPin = (_) => {
        if (isError === true) {
            setIsError(false);
            // setErrorMessage('');
        }

        if (_ !== -1 && _ !== -2 && pin.length !== 6) {
            setPin(`${pin}` + `${_}`);
        } else if (_ === -2) {
            setPin(pin.slice(0, -1));
        }
    };

    useEffect(() => {
        // if (pin?.length === 6 && pin === '111111') {
        //     // alert('benr');
        //     navigation.navigate('RegisterCreate')
        // }
        // else 
        if (pin?.length === 6) {
            if(screen === 'atm-info') {
                navigation.navigate('StatusSuccessful', {screen: screen});
                return 0;
            }
            // alert('salah')
            navigation.navigate('VerifyAccountEmail', {screen: screen});
            // setIsError(true);
            // setCountErr(countErr - 1);
        }
    }, [pin]);

    useEffect(() => {
        if (countErr === 0) {
            // navigation.navigate('RegisterMaxPin')
        }
    }, [countErr]);


    return (
        <ViewContainer>
            <MainHeader
                title={'Verify Mobile Number'}
                desc={'Please enter 6-digit code sent to ********1234.\nYou will be charged for the SMS'}
                navigation={navigation}
                Ic={()=><IcPhone />}
            />

            <View style={{
                width: '100%',
                marginTop: 20,
                alignSelf: 'center'
            }}>
                <InputOtp onChangeText={(v) => console.log(v)} pin={pin} onError={'onError'} />
            </View>
            <Text style={styles.fontDenied}>I Can’t Access My Phone</Text>
            <View style={styles.refWrapper}>
                <Text style={styles.fontRef}>Ref. B1234 </Text>
                <Ichelp />
            </View>
            <Text style={styles.fontCount}>Resent Code in 04.59</Text>
            <Keyboard fillPin={fillPin} />
        </ViewContainer>
        // </View>
    );
};

export default VerifyAccountMobile;

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
    fontContactUs: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_orange
    },
    fontDenied: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_yellow,
        alignSelf: 'center',
        marginTop: 24
    },
    fontRef: {
        fontSize: 14,
        fontFamily: nunito400,
        color: white,
        alignSelf: 'center',
    },
    refWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 76
    },
    fontCount: {
        fontFamily: nunito700,
        fontSize: 14,
        color: '#FFFFFF4D',
        alignSelf: 'center',

    }

});
