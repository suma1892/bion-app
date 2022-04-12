import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BgWithHair, IcAlert } from '../../assets/Images';
import { primary_blue, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, InputPassword, MainHeader, TextInput, ViewContainer } from '../../components';

const Login = ({ navigation }) => {
    const bottomSheetRef = useRef(null);
    const [sheetChange, setSheetChange] = useState(0);

    const snapPoints = useMemo(() => ['50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        setSheetChange(index);
    }, []);
    return (
        <ViewContainer>
            <MainHeader
                title={'Login'}
                desc={'Enter mobile number and password to Login'}
                navigation={navigation}
            />
            <Text style={styles.fontHelp}>HELP</Text>

            <View
                style={{
                    marginTop: 24
                }}
            />
            <TextInput
                title={'Phone Number'}
                value={'81234567890'}
            />
            <View
                style={{
                    marginTop: 24
                }}
            />
            <InputPassword
                title={'Password'}
                isPassword={true}
            />
            <Text onPress={()=>navigation.navigate('ForgotPassword')} style={[styles.fontHelp, { position: 'relative', alignSelf: 'flex-end', right: 0 }]}>Forgot Password</Text>

            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={()=>navigation.navigate('ActiveBiometrics')}
                // onLongPress={()=>navigation.navigate('PasswordMax')}
                // onLongPress={()=>bottomSheetRef.current.snapToIndex(0)}
            />

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                disappearsOnIndex={-1}
                enablePanDownToClose={true}

                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    height: 5,
                }}
                handleStyle={{
                    backgroundColor: primary_blue,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // height: 0,
                    marginTop: -25,
                }}
                backgroundStyle={{
                    backgroundColor: 'transparent',
                    // flex: 1,
                    zIndex: 9999,
                    height: height,
                    elevation: 8
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: primary_blue,
                    padding: 20,
                    elevation: 8
                }}>
                    {
                        <>

                            <View style={{
                                position: 'absolute',
                                top: '-100%',
                            }}>
                                <BgWithHair width={width} height={height} />
                            </View>
                            <View
                                style={styles.line}
                            />
                            <IcAlert />
                            <Text style={{
                                fontFamily: nunito800,
                                fontSize: 24,
                                color: white
                            }}>{`You Don't Have a bion\nAccount yet`}</Text>
                            <Text style={{
                                fontFamily: nunito400,
                                fontSize: 14,
                                color: white,
                                marginTop: 6
                            }}>{`Please register an account to access all\nBion's feature`}</Text>


                            <ButtonYellow
                                title={'Register'}
                                customStyle={{
                                    marginTop: 20,
                                    position: 'absolute',
                                    bottom: 20,
                                }}
                            onPress={() => navigation.navigate('RegisterProgress')}
                            />
                        </>
                    }
                </View>
            </BottomSheet>
        </ViewContainer>
    );
};

export default Login;

const styles = StyleSheet.create({
    fontHelp: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: primary_yellow,
        fontFamily: nunito800,
        fontSize: 14
    },
    line: {
        width: '15%',
        height: 5,
        borderRadius: 20,
        backgroundColor: white50,
        alignSelf: 'center',
        position: 'absolute',
        top: 20
    },
});
