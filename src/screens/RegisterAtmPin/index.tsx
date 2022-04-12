import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgWithHair, IcInputAtm } from '../../assets/Images';
import { dark_blue, primary_red, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito600, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { Keyboard, MainHeader, ViewContainer } from '../../components';
import { stackNavigatorParamList } from '../../types';
const { width } = Dimensions.get('screen');

export interface Props {
    navigation: StackNavigationProp<stackNavigatorParamList, 'RegisterAtmPin'>
}

const RegisterAtmPin = ({ navigation }) => {

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
        if (pin?.length === 6 && pin === '111111') {
            // alert('benr');
            navigation.navigate('RegisterCreate')
        }
        else if (pin?.length === 6) {
            // alert('salah')
            setIsError(true);
            setCountErr(countErr - 1);
        }
    }, [pin]);

    useEffect(() => {
        if (countErr === 0) {
            navigation.navigate('RegisterMaxPin')
        }
    }, [countErr]);



    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={undefined}>
            <View style={styles.bgHeader}>
                <BgWithHair />
            </View>

            <MainHeader
                title={'ATM PIN'}
                DescAjx={() => <Text style={styles.fontDesc}>Input your ATM PIN for <Text style={{ fontFamily: nunito700 }}>Bank Mestika ****1234</Text></Text>}
                Ic={() => <IcInputAtm />} desc={undefined} isTop={undefined} />

            {(
                <View style={styles.rowDots}>
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <View
                            key={i.toString()}
                            style={styles.pinDot(pin.length >= _, isError)}
                        />
                    ))}
                </View>
            )}
            {isError && <View style={styles.wrapperWrong}>
                <Text style={[styles.fontDesc, { marginTop: 0 }]}>{`Wrong PIN. You have ${countErr} attempt(s) left`}</Text>
            </View>}
            <Text style={styles.fontForgotPassword}>Forgot PIN</Text>
            <Keyboard fillPin={fillPin} textColor={undefined} position={undefined} />
        </ViewContainer>
    );
};

export default RegisterAtmPin;


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
    fontAsking: {
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
    boxWrapper: {
        width: '100%',
        backgroundColor: dark_blue,
        padding: 16,
        borderRadius: 12,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 26,
    },
    fontYes: {
        color: white,
        fontFamily: nunito800,
        fontSize: 16
    },
    keyboardWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10
    },
    fontPin: {
        fontSize: 32,
        fontFamily: nunito600,
        color: white,
        // fontFamily: 'Roboto-Regular',
    },
    touchPin: {
        width: '26%',
        marginTop: 20,

    },
    pinDot: (_: any, error: any) => ({
        height: 20,
        aspectRatio: 1,
        // borderWidth: 0.5,
        backgroundColor: error && _ ? primary_red : _ ? primary_yellow : dark_blue,
        // borderColor: error ? '#C70000' : '#5F903F',
        marginHorizontal: 10,
        borderRadius: 20,
    }),
    rowDots: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 58,
        width: '90%',
        // backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    fontForgotPassword: {
        fontFamily: nunito800,
        color: primary_yellow,
        textAlign: 'center',
        marginTop: 150,
    },
    wrapperWrong: {
        backgroundColor: primary_red,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 34,
        position: 'absolute',
        width: width,
        alignSelf: 'center',
        top: '43%'
    },
});
