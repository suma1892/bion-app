import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { BgWithHair, IcInputAtm } from '../../assets/Images';
import { dark_blue, primary_red, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito600, nunito800 } from '../../assets/styles/FontFamily';
import { Keyboard, MainHeader, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

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
            navigation.navigate('ReEnterAtmPin')
        }
        else if (pin?.length === 6) {
            // alert('salah')
            setIsError(true);
            setCountErr(countErr - 1);
        }
    }, [pin]);

    useEffect(() => {
        if (countErr === 0) {
            // navigation.navigate('RegisterMaxPin')
        }
    }, [countErr]);



    return (
        <ViewContainer showBackgroundImage={false}>
            <View style={styles.bgHeader}>
                <BgWithHair />
            </View>

            <MainHeader
                title={'Create ATM PIN'}
                DescAjx={() => <Text style={styles.fontDesc}>Create 6-digits PIN</Text>}
                Ic={() => <IcInputAtm />}
                navigation={navigation}
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
            {/* {isError && <View style={styles.wrapperWrong}>
                <Text style={[styles.fontDesc, { marginTop: 0 }]}>{`Wrong PIN. You have ${countErr} attempt(s) left`}</Text>
            </View>} */}
            <View style={styles.alertWrapper}>
                <Image
                    source={require('../../assets/Images/File/ic-alert.png')}
                    style={styles.IcAlert}
                />

                <View>
                    <Text style={styles.fontInfo}>{`PIN Must Not Use These Combinations`}</Text>
                    <Text style={[styles.fontSubInfo, { marginTop: 5 }]}>- Sequential number, e.g: 1234567</Text>
                    <Text style={styles.fontSubInfo}>- Same number, for example: 000000</Text>
                    <Text style={styles.fontSubInfo}>- Your birthday</Text>
                </View>
            </View>
            <Keyboard fillPin={fillPin} />
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
    pinDot: (_, error) => ({
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
    fontInfo: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white,
    },
});
