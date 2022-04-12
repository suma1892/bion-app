import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcArrowRightOrange, IcGopay } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';

const { width, height } = Dimensions.get('screen');

const AMOUNT = [
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
]

const Prepaid = () => {
    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const [selectAmount, setSelectAmount] = useState();
    const [component, setComponent] = useState({});


    // const navigation = useNavigation();
    // variables
    const snapPoints = useMemo(() => ['100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges 1221', index);
        setSheetChange(index);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            bottomSheetRef.current.close();
        }, 100);

    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'transparent',
            // padding: 20
        }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={styles.fontTitle2}>E-Wallet</Text>
                    <Text onPress={() => bottomSheetRef.current.snapToIndex(0)} style={[styles.fontTitle2, { fontFamily: nunito700, color: primary_orange }]}>VIEW ALL OPTIONS</Text>
                </View>
                <View style={styles.amountMainWrapper}>
                    {AMOUNT.map((_, i) => (
                        <TouchableOpacity onPress={() => setSelectAmount(i)} key={i} style={styles.amountWrapper(selectAmount === i)}>
                            <IcGopay/>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.fontTitle2}>Account Number</Text>
                <View style={styles.checkWrapper}>
                    <TextInput
                        value={'331284896027'}
                        style={styles.input}
                        theme={white}
                    />
                    <Text style={{
                        fontFamily: nunito700,
                        color: primary_orange,
                        fontSize: 14
                    }}>CHECK</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                    <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                    <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                        <Text style={styles.fontSelect}>Choose Voucher</Text>
                        <IcArrowRightOrange />
                    </View>
                </TouchableOpacity>

                <ButtonYellow
                    title={'Continue'}
                    customStyle={{
                        // position: 'absolute',
                        // bottom: 0
                        marginTop: 20
                    }}
                    onPress={() => navigation.navigate('Prepaid', {screen: 'e-wallet'})}
                />


            <BottomSheet
                ref={bottomSheetRef}
                index={0}

                enablePanDownToClose={true}
                disappearsOnIndex={-1}

                handleIndicatorStyle={{
                    backgroundColor: white50,
                    height: 0,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 0,
                    marginTop: -15,
                }}
                backgroundStyle={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    zIndex: 9999,
                    height: height,
                }}
                snapPoints={snapPoints}
            // onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    zIndex: 9999999,
                    backgroundColor: white,
                    marginTop: 20,
                    elevation: 8
                }}>

                    <View
                        style={styles.line}
                    />
                    <Text style={styles.fontHeader}>Choose Amount</Text>
                    <ScrollView nestedScrollEnabled={true} >
                        <View style={styles.amountMainWrapper}>
                            {[...AMOUNT, ...AMOUNT].map((_, i) => (
                                <TouchableOpacity onPress={() => {
                                    setSelectAmount(i)
                                }} key={i} style={styles.amountWrapper(selectAmount === i)}>
                                    <IcGopay/>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </BottomSheet>
        </View>
    );
};

export default Prepaid;

const styles = StyleSheet.create({
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    cirlceWrapper: {
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_yellow,
        position: 'absolute',
        left: '-10%',
        top: '40%'
    },
    fontNo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    bubleWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: bluePale,
        width: '70%',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginTop: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bubleWrapper2: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: primary_orange,
        width: '70%',
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginTop: 42,
    },
    fontRp: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: white,
        padding: 12,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: black70,
    },

    amountWrapper: _ => ({
        width: 100,
        height: 64,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: _ ? primary_blue : white,
        borderRadius: 6,
        marginBottom: 14,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    fontDesc: _ => ({
        fontFamily: nunito400,
        fontSize: 12,
        color: _ ? '#FFFFFFB2' : black70
    }),
    fontTitle: _ => ({
        fontFamily: nunito400,
        fontSize: 22,
        color: _ ? white : primary_blue
    }),
    amountMainWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
    },
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 24,
        color: black70,
        marginTop: 14
    },
    line: {
        height: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#6666',
        marginTop: '5%',
    },
    checkWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 12,
        borderRadius: 6,
        marginTop: 6
    },
    input: {
        padding: Platform.OS === 'android' ? 0 : 10,
        fontFamily: nunito700,
        fontSize: 16,
        color: black70,
        width: '80%'
    },
});
