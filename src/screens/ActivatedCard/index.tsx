import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { IcInfo } from '../../assets/Images';
import { primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, Keyboard, MainHeader, TextInput, ViewContainer } from '../../components';

const ActivatedCard = ({ navigation, route }) => {
    const screen = route?.params?.screen;

    const [pin, setPin] = useState('');
    const [isError, setIsError] = useState(false);
    const [countErr, setCountErr] = useState(3);
    const [toolTipVisible, setToolTipVisible] = useState(true);
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
            if (screen === 'atm-info') {
                navigation.navigate('StatusSuccessful', { screen: screen });
                return 0;
            }
            // alert('salah')
            navigation.navigate('VerifyAccountEmail', { screen: screen });
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
                title={'Activate Card'}
                desc={'Check out mail for your bion ATM card'}
                navigation={navigation}
            />

            <View style={{
                width: '100%',
                marginTop: 20,
                alignSelf: 'center'
            }}>
                <TextInput
                    title={'ATM Card Number'}
                    value={'1232 4235 1346 7543'}
                />

                <View style={{ marginTop: 20 }}>
                    <View>
                        <TextInput
                            title={'CVV'}
                        />
                        <TouchableOpacity style={styles.refWrapper} onPress={() => setToolTipVisible(!toolTipVisible)}>
                            <Tooltip
                                isVisible={toolTipVisible}
                                content={<Text>{`find 3 digit code on the\nback side of ATM card`}</Text>}
                                placement="bottom"
                                backgroundColor='transparent'
                                contentStyle={{
                                    height: 55
                                }}
                                onClose={() => setToolTipVisible(!toolTipVisible)}
                            >
                                <IcInfo />
                            </Tooltip>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    marginTop: 107
                }}
                onPress={()=>navigation.navigate('CreateAtmPin')}
            />
            <Keyboard fillPin={fillPin} />
        </ViewContainer>
        // </View>
    );
};

export default ActivatedCard;

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
        position: 'absolute',
        top: '50%',
        right: 10,
        zIndex: 999999
    },
    fontCount: {
        fontFamily: nunito700,
        fontSize: 14,
        color: '#FFFFFF4D',
        alignSelf: 'center',

    }

});
