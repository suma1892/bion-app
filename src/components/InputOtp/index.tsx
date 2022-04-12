import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito700 } from '../../assets/styles/FontFamily';
// import {fontFamilies, fontSizes, colors} from '../../utilities/themes';

const borderColor = '#D5DDE0';

const InputOtp = ({ onChangeText, onError, setOnError, pin }) => {
    let otpRef = {
        otp1: useRef(),
        otp2: useRef(),
        otp3: useRef(),
        otp4: useRef(),
        otp5: useRef(),
        otp6: useRef(),
    };
    let [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [onFocus, setOnFocus] = useState(false);

    useEffect(() => {
        otpRef[`otp${pin.split('').length+1}`]?.current?.focus();
        setOtp(pin.split(''));
    }, [pin]);

    useEffect(() => {
        otpRef?.otp1?.current?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOtp = (value, index) => {
        let tempOtp = otp;
        tempOtp[index] = value || '';

        setOtp([...tempOtp]);
        onChangeText(tempOtp);
        otpRef[`otp${index + 2}`]?.current?.focus();
    };

    const backspace = (index, e) => {
        let tempOtp = otp;
        tempOtp[index] = '';

        if (e === '') {
            otpRef[`otp${index}`]?.current?.focus();
        } else {
            otpRef[`otp${index + 1}`]?.current?.focus();
        }
        setOtp(tempOtp);
        onChangeText(tempOtp);
    };

    return (
        <>
            <View style={styles.otpWrapper}>
                {[1, 2, 3, 4, 5, 6].map((res, i) => (
                    <TextInput
                        ref={otpRef[`otp${i + 1}`]}
                        key={i.toString()}
                        showSoftInputOnFocus={false}
                        value={otp[i]}
                        style={styles.otpInput(onFocus === res)}
                        maxLength={1}
                        keyboardType={'phone-pad'}
                        onFocus={() => {
                            setOnFocus(res)
                        }
                        }
                        onBlur={() => setOnFocus(-1)}
                        onKeyPress={({ nativeEvent, target }) =>
                            nativeEvent.key === 'Backspace' &&
                            backspace(
                                i,
                                target?._internalFiberInstanceHandleDEV?.memoizedProps?.value,
                            )
                        }
                        onChangeText={text => {
                            //   setOnError('');
                            handleOtp(text, i);
                            if (text === '') {
                                otpRef[`otp${i + 1}`].current.focus();
                                return false;
                            }
                            if (i + 2 <= 4) {
                                otpRef[`otp${i + 2}`].current.focus();
                            }
                        }}
                    />
                ))}
            </View>
        </>
    );
};

export default InputOtp;

const styles = StyleSheet.create({
    otpInput: onFocus => ({
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: onFocus ? primary_yellow : dark_blue,
        width: 42,
        height: 64,
        textAlign: 'center',
        fontSize: 36,
        backgroundColor: dark_blue,
        fontFamily: nunito700,
        color: white,
        // color: colors.black,
    }),
    otpWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    onError: {
        // fontSize: fontSizes.small,
        // fontFamily: fontFamilies.rubik.w500,
        color: 'red',
        textDecorationLine: 'underline',
    },
    onErrorWrapper: {
        flexDirection: 'row',
        marginTop: 13,
        alignItems: 'center',
    },
});