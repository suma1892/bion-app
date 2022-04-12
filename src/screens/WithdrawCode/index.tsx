import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgWithHair, IcClose, IcDownload, IcHeaderSchedule, IcInfo, IcShare, IcWithdrawMoney } from '../../assets/Images';
import { black70, dark_blue, primary_blue, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { ButtonYellow, Text, ViewContainer } from '../../components';

const WithdrawCode = ({ navigation }) => {

    const bottomSheetRef2 = useRef(null);

    // variables
    const snapPoints2 = useMemo(() => ['45%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <ViewContainer>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: '40%',
                justifyContent: 'space-between',
                zIndex: 9
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IcClose />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between'
                }}>
                    <IcShare />
                    <IcDownload />
                </View>
            </View>

            <View style={{
                alignSelf: 'center',
                marginTop: 50,
                alignItems: "center",
                width: '100%'
            }}>
                <Text css={'8-24'}>Cash Withdrawal</Text>
                <Text css={'4-16'} style={{ textAlign: 'center', marginTop: 16 }}>
                    Show code to withdraw
                    <Text css={'8-16'}>Rp2.000.000</Text> at nearby Bank Mestika</Text>

                <View style={styles.withdrawWrapper}>
                    <Text css={'4-12-' + black70}>Withdraw Code</Text>
                    <Text css={'8-28-black'}>ABC123</Text>
                </View>

                <View style={styles.withdrawWrapper2}>
                    <Text css={'7-12-#FFFFFF80'}>WITHDRAW BEFORE</Text>
                </View>
                <View style={{
                    backgroundColor: dark_blue,
                    width: '100%',
                    // padding: 15,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcHeaderSchedule />
                        <View>
                            <Text css={'6-15-#FFB70A'}>FRIDAY</Text>
                            <Text css={'7-20'}>11 September 2021</Text>
                            <Text css={'4-14-#FFFFFFB2'}>at 19:00</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#FFFFFF4D',
                            width: '90%',
                            alignSelf: 'center'
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 13,
                        marginVertical: 10
                    }}>
                        <IcInfo />
                        <Text css={'4-12'}> Make sure to bring KTP for verification</Text>
                    </View>
                </View>
            </View>

            <ButtonYellow
                title={'VIEW INSTRUCTION'}
                customStyle={{
                    position: 'absolute',
                    bottom: 40
                }}
                onPress={()=>navigation.navigate('WithdrawCashInstruction')}
            />
            <Text onPress={() => bottomSheetRef2.current.snapToIndex(0)} css={"8-14-" + primary_yellow} style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>Cancel WITHDRAW</Text>

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
                            top: 40
                        }}
                    />
                    <IcWithdrawMoney />
                    <Text css={'8-24'} >Cancel Cash Withdrawal?</Text>
                    <Text css={'4-14'}>To unblock your account, please bring KTP, registered mobile number, and visit nearby Bank Mestika branch</Text>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 20,
                        width: '100%',
                        alignSelf: "center"
                    }}>
                        <TouchableOpacity style={styles.button}>
                            <Text css={'8-14'}>YES, CANCEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }]}>
                            <Text css={'8-14-' + primary_blue}>NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
        </ViewContainer>
    );
};

export default WithdrawCode;

const styles = StyleSheet.create({
    withdrawWrapper: {
        padding: 16,
        width: '100%',
        backgroundColor: white,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 12
    },
    withdrawWrapper2: {
        padding: 12,
        marginTop: 24,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: '#030062',
        alignItems: 'center'
    },
    button: {
        width: '49%',
        backgroundColor: primary_red,
        padding: 14,
        borderRadius: 40,
        alignItems: "center"
    },
});
