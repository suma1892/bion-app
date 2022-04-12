import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { IcLockCard } from '../../assets/Images';
import { dark_blue, primary_red, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito600, nunito800 } from '../../assets/styles/FontFamily';
import { Keyboard, MainHeader, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const TransactionPin = ({ navigation, route }) => {
    const status = route?.params?.status;
    const screen = route?.params?.screen;
    const [pin, setPin] = useState('');
    const [isError, setIsError] = useState(false);
    const [countErr, setCountErr] = useState(3);
    // const [errorMessage, setErrorMessage] = useState('');



    useEffect(() => {
        // if (pin?.length === 6 && pin === '111111') {
        //     // alert('benr');
        //     navigation.navigate('RegisterCreate')
        // }
        // else 
        if (pin?.length === 6) {
            // alert('salah')
            // setIsError(true);
            // setCountErr(countErr - 1);
            if (screen === 'CreatePocket') {
                navigation.navigate('CreatePocketSuccess')
                return 0
            } else if (screen === 'req-money') {
                navigation.navigate('RequestMoneyStatus');
                return 0
            } else if (screen === 'atm-info') {
                navigation.navigate('VerifyAccountMobile', { screen: screen });
                return 0
            } else if (screen === 'show-card') {
                navigation.navigate('BottomTabMain', { show: true });
                return 0
            } else if (screen === 'Profile') {
                navigation.navigate('CreateTransactionPin', { screen: screen });
                return 0
            } else if (screen === 'EditTransaction') {
                navigation.navigate('ScheduledTransactionDetail', { screen: screen });
                return 0
            }
            console.log(screen);
            navigation.navigate(screen || 'TransferSuccess')
        }
    }, [pin]);

    useEffect(() => {
        if (countErr === 0) {
            navigation.navigate('RegisterMaxPin')
        }
    }, [countErr]);

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

    return (
        <ViewContainer>
            <MainHeader
                title={'Transaction PIN'}
                desc={'Enter 6-digits PIN to continue'}
                navigation={navigation}
                Ic={() => <IcLockCard />}
            />
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
            <Keyboard fillPin={fillPin} />
        </ViewContainer>
    );
};

export default TransactionPin;

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
    bgHair: {
        position: 'absolute',
        right: 30
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
    pinDot: (_, error) => ({
        height: 20,
        aspectRatio: 1,
        color: 'transparent',
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
        top: '100%'
    },
    fontInfo: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white,
    },
    alertWrapper: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: dark_blue,
        flexDirection: 'row',
        padding: 12,
        marginTop: 34,
    },
    IcAlert: {
        height: 50,
        width: 50,
        marginRight: 18
    },
    fontSubInfo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
});
