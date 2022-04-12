import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgWithHair, IcArrowRight, IcLock, IcWithdrawMoney } from '../../assets/Images';
import { dark_blue, primary_blue, primary_red, white50, white70 } from '../../assets/styles/Colors';
import { MainHeader, Text, ViewContainer } from '../../components';

const VerifyWithdrawal = ({ navigation }) => {

    const bottomSheetRef2 = useRef(null);

    // variables
    const snapPoints2 = useMemo(() => ['60%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <ViewContainer>
            <MainHeader
                Ic={() => <IcWithdrawMoney />}
            />
            <Text css={'4-12'}>22 Jul 2021</Text>
            <Text css={'8-24'}>Are You Withdrawing Cash from a Branch?</Text>
            <Text css={'4-14'}>Are you withdrawing from <Text css={'7-14'}>Bank Mestika Pondok Aren?</Text></Text>

            <View style={{
                padding: 20,
                backgroundColor: 'white',
                marginTop: 20,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }}>
                <Text css={'4-12-#333333B2'}>Amount Withdrawn</Text>
                <Text css={'8-24-#333333'}>Rp500.000</Text>
            </View>
            <View style={{
                padding: 20,
                backgroundColor: '#030062',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
            }}>
                <Text css={'4-12-white'}>Verify within <Text css={'7-12-white'}>09:50</Text></Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 20,
                width: '100%',
                alignSelf: "center"
            }}>
                <TouchableOpacity onPress={() => bottomSheetRef2.current.snapToIndex(0)} style={styles.button}>
                    <Text css={'8-14'}>Not Me</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TransactionPin')} style={[styles.button, { backgroundColor: 'white' }]}>
                    <Text css={'8-14-' + primary_blue}>Verify</Text>
                </TouchableOpacity>
            </View>

            <BottomSheet
                ref={bottomSheetRef2}
                index={-1}
                enablePanDownToClose={true}
                disappearsOnIndex={-1}
                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                    marginTop: -20,
                }}
                backgroundStyle={{
                    backgroundColor: primary_blue,
                    borderTopLeftRadius: 20,
                    flex: 1,
                    // height: height,
                }}
                snapPoints={snapPoints2}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0
                    }}>
                        <BgWithHair />
                    </View>

                    <View
                        style={{
                            width: '20%',
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: white50,
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 20
                        }}
                    />
                    <IcLock />
                    <Text css={'8-24-' + white70} style={styles.fontFilter}>Not You Withdrawing Cash from a Branch?</Text>
                    <Text css={'4-14'} style={{
                        marginTop: 10
                    }}>Not You Withdrawing Cash from a Branch?</Text>

                    <View style={styles.listWrapper}>
                        <View>
                            <Text css={'8-16'}>Reset Password</Text>
                            <Text css={'4-14'}>Make sure only you have the access</Text>
                        </View>

                        <IcArrowRight/>
                    </View>

                    <View style={styles.listWrapper}>
                        <View>
                            <Text css={'8-16'}>Block Account</Text>
                            <Text css={'4-14'}>Block account temporarily</Text>
                        </View>
                        <IcArrowRight/>
                    </View>
                </View>
            </BottomSheet>
        </ViewContainer>
    );
};

export default VerifyWithdrawal;

const styles = StyleSheet.create({
    button: {
        width: '49%',
        backgroundColor: primary_red,
        padding: 14,
        borderRadius: 40,
        alignItems: "center"
    },
    listWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: dark_blue,
        marginTop: 12,
        borderRadius: 12
    },
});
