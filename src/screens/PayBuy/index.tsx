import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BgPayBuy, BgWithHair, IcBillPaid, IcBpjs, IcBuble1, IcBuble2, IcBuble3, IcBuble4, IcEmoney, IcEwallet, IcGreenCheck, IcPdam, IcPln, IcPulsa, IcSearch, IcTelkom, IcTv } from '../../assets/Images';
import { black70, bluePale, dark_blue, primary_blue, primary_orange, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, HeaderInline, ViewContainer } from '../../components';
import BpjsComponent from './BpjsComponent';
import EmoneyComponent from './EmoneyComponent';
import EwalletComponent from './EwalletComponent';
import PdamComponent from './PdamComponent';
import PlnComponent from './PlnComponent';
import PulsaComponent from './PulsaComponent';
import TelkomComponent from './TelkomComponent';
import TvComponent from './TvComponent';

const colors = [primary_yellow, primary_orange, bluePale]

const RECENT_TRANSACTIONS = [
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble1 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble2 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble3 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble4 />
    },
]

const PayBuy = ({ navigation }) => {
    const bottomSheetRef = useRef(null);
    const bottomSheetRef2 = useRef(null);
    const [sheetChange, setSheetChange] = useState(0);
    const [pin, setPin] = useState('');
    const [selectProduct, setSelectProduct] = useState(-1);

    const PRODUCTS = [
        {
            title: 'PLN',
            Ic: () => <IcPln />,
            screen: 'pln',
            Component: <PlnComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'Pulsa',
            Ic: () => <IcPulsa />,
            screen: 'pulsa',
            Component: <PulsaComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'E-Wallet',
            Ic: () => <IcEwallet />,
            screen: 'e-wallet',
            Component: <EwalletComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'BPJS',
            Ic: () => <IcBpjs />,
            screen: 'bpjs',
            Component: <BpjsComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'E-Money',
            Ic: () => <IcEmoney />,
            screen: 'e-money',
            Component: <EmoneyComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'Telkom',
            Ic: () => <IcTelkom />,
            screen: 'telkom',
            Component: <TelkomComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'PDAM',
            Ic: () => <IcPdam />,
            screen: 'pdam',
            Component: <PdamComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
        {
            title: 'TV & Internet',
            Ic: () => <IcTv />,
            screen: 'tv-internet',
            Component: <TvComponent showError={() => bottomSheetRef2.current.snapToIndex(0)} />
        },
    ]

    const fillPin = (_) => {
        // if (isError === true) {
        //     setIsError(false);
        //     // setErrorMessage('');
        // }

        if (_ !== -1 && _ !== -2) {
            setPin(`${pin}` + `${_}`);
        } else if (_ === -2) {
            setPin(pin.slice(0, -1));
        }
    };
    // variables
    const snapPoints = useMemo(() => ['10%', '100%'], []);
    const snapPoints2 = useMemo(() => ['40%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges 1221', index);
        setSheetChange(index);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            bottomSheetRef2.current.close();
        }, 1000);

    }, []);

    return (
        <ViewContainer showBackgroundImage={false}>
            <HeaderInline
                navigation={navigation}
                title={'Pay & Buy'}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputWrapper}>
                    <IcSearch />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={white50}
                        style={styles.input}
                    />
                </View>

                <Text style={styles.fontTitle}>RECENT TRANSACTIONS</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {RECENT_TRANSACTIONS.map((_, i) => (
                            <View
                                key={i.toString()}
                                style={{
                                    // backgroundColor: 'red',
                                    height: 99,
                                    width: 98,
                                    marginRight: 10,
                                    marginBottom: 10
                                }}>
                                <View style={{
                                    position: 'absolute',
                                    left: 0
                                }}>
                                    <_.Bg width={width} height={height} />
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20
                                }}>
                                    <Text style={styles.fontHeader}>{_.header}</Text>
                                    <Text style={styles.fontTitle2}>{_.title}</Text>
                                    <Text style={styles.fontTitle2}>{_.desc}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <Text style={[styles.fontTitle, { marginBottom: 23 }]}>ALL</Text>

                {[...Array(10)].map((_, i) => (
                    <View key={i.toString()}>
                        <View style={styles.accountWrapper}>
                            <View style={styles.cirlceWrapper(colors[i])}>
                                <Text style={styles.fontName}>VP</Text>
                            </View>
                            <View style={{
                                marginLeft: 12
                            }}>
                                <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Vacation Pocket</Text>
                                <Text style={[styles.fontTitle2, { fontSize: 12 }]}>bion 237743032</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                disappearsOnIndex={-1}

                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    height: 5,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // height: 0,
                    marginTop: sheetChange === 0 ? -10 : -25,
                }}
                backgroundStyle={{
                    backgroundColor: sheetChange === 0 ? dark_blue : 'transparent',
                    flex: 1,
                    zIndex: 9999,
                    height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                
            >
                <>
                    <View style={{
                        flex: 1,
                        backgroundColor: sheetChange === 0 ? dark_blue : white,
                        padding: 20
                    }}>

                        {sheetChange === 0 ? <Text style={styles.fontAdd}>+ ADD NEW RECIPIENT</Text> :
                            <>
                                <View style={{
                                    position: 'absolute',
                                    top: '-32%',

                                }}>
                                    <BgPayBuy width={width} height={height} />
                                </View>
                                <View
                                    style={{
                                        width: '15%',
                                        height: 5,
                                        borderRadius: 20,
                                        backgroundColor: white50,
                                        alignSelf: 'center'
                                    }}
                                />


                                <Text style={styles.fontAddVa}>Add New Recipient</Text>
                                <BottomSheetScrollView showsHorizontalScrollIndicator={false}>
                                    <Text style={styles.fontChoose}>CHOOSE PRODUCT</Text>

                                    <View style={{
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                    }}>
                                        {PRODUCTS.map((_, i) => (
                                            <TouchableOpacity
                                                onPress={() => setSelectProduct(i)}
                                                key={i.toString()}
                                                style={{
                                                    marginBottom: 25,
                                                    alignItems: 'center',
                                                    width: '25%'
                                                }}>
                                                {selectProduct === i && <View style={styles.check}>
                                                    <IcGreenCheck />
                                                </View>}
                                                <_.Ic />
                                                <Text style={styles.fontTitle}>{_.title}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                    <View
                                        style={{
                                            marginTop: '10%'
                                        }}
                                    />
                                    {PRODUCTS[selectProduct]?.Component}
                                </BottomSheetScrollView>
                            </>
                        }
                    </View>

                </>
                <BottomSheet
                    ref={bottomSheetRef2}
                    index={0}
                    enablePanDownToClose={true}
                    // disappearsOnIndex={-1}

                    handleIndicatorStyle={{
                        backgroundColor: white50,
                        height: 0,
                    }}
                    handleStyle={styles.handleStyle}
                    backgroundStyle={{
                        backgroundColor: 'transparent',
                        flex: 1,
                        zIndex: 9999,
                        height: height,
                    }}
                    snapPoints={snapPoints2}
                // onChange={handleSheetChanges}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: primary_blue,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        marginTop: 20,
                        paddingHorizontal: 20
                    }}>
                        <BgWithHair />

                        <View
                            style={{
                                height: 5,
                                width: '15%',
                                alignSelf: 'center',
                                borderRadius: 20,
                                backgroundColor: '#FFFFFF80',
                                marginTop: '-20%'
                            }}
                        />
                        <IcBillPaid />

                        <Text style={styles.fontAddVa}>Your Bill Has Been Paid</Text>
                        <Text style={[styles.fontChoose, { marginTop: 0 }]}>Please choose other product or account to pay or buy</Text>

                        <ButtonYellow
                            title={'OK'}
                            customStyle={{
                                marginTop: 20
                            }}
                            onPress={() => bottomSheetRef2.current.close()}
                        />
                    </View>

                </BottomSheet>
            </BottomSheet>
        </ViewContainer>
    );
};

export default PayBuy;

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingVertical: 18
    },
    fontBank: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    fontAdd: {
        fontFamily: nunito800,
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 0,
        color: white
    },
    fontAddVa: {
        fontFamily: nunito800,
        fontSize: 20,
        // alignSelf: 'center',
        marginTop: 10,
        color: white
    },
    fontMost: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginVertical: 24
    },
    circle: {
        height: 40,
        aspectRatio: 1,
        borderRadius: 50,
        padding: 8,
        backgroundColor: primary_yellow,
        alignItems: 'center'
    },
    boxWrapperAtmContent: {
        // padding: 16,
        marginTop: 16,
        // backgroundColor: white,
        width: '100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: white,
        borderRadius: 6,
        marginTop: 6,
        justifyContent: 'space-between',
    },
    fontCheck: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_yellow,
        marginRight: 12
    },
    fontInput: {
        fontSize: 16,
        fontFamily: nunito700,
        color: black70,
        padding: 10
    },
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
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 8,
        borderRadius: 6,
        marginTop: 30
    },
    input: {
        padding: Platform.OS === 'android' ? 0 : 10,
        marginLeft: 10,
        color: white50
    },
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 24
    },
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 28,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito400,
        fontSize: 10,
        color: white
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: _
    }),
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    check: {
        position: 'absolute',
        top: 0,
        right: 10,
        zIndex: 99
    },
    fontChoose: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 28,
        width: '100%'
    },
    handleStyle: {
        backgroundColor: 'transparent',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 0,
        marginTop: -15,
    }
});
