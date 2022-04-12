import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcArrowRightOrange2, IcArrowTop, IcBionBlue, IcDownloadOrange, IcShareOrange } from '../../assets/Images';
import { black50, black70, bluePale, primary_blue, primary_orange, primary_red, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito200, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow } from '../../components';

const TransferSuccess = () => {

    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['5%', '50%', '100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <>
            <Text style={styles.fontSuccess}>Transfer Successful!</Text>
            <Text style={styles.font400}>Transfer of <Text style={styles.font800}>Rp2.000.000</Text> is sent to <Text style={styles.font800}>Nicodemus Wijaya</Text>
                . Next Transfer will be sent on 11 Aug 2021
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
            }}>
                <Text
                    onPress={() => navigation.navigate('TransferSuccessScheduled')}
                    style={{
                        fontFamily: nunito800,
                        fontSize: 18,
                        color: primary_yellow,
                    }}>View Schedule </Text>
                <IcArrowRightOrange2 />
            </View>

            <View style={{
                position: 'absolute',
                bottom: 60,
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.fontSwipe}>SWIPE UP TO VIEW RECEIPT</Text>
                <IcArrowTop />
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                index={0}
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
                    backgroundColor: 'transparent',
                    flex: 1,
                    height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    zIndex: 999999999
                }}>
                    <Image
                        source={require('../../assets/Images/File/bg-zigzag2.png')}
                        style={styles.bgZigZag}
                    />
                    <View style={styles.line} />

                    <View style={{
                        backgroundColor: 'white',
                        padding: 20
                    }}>
                        <ScrollView>
                            <View style={styles.actionWrapper}>
                                <IcShareOrange />
                                <IcDownloadOrange />
                            </View>

                            <Text style={styles.fontTs}>Transaction Successful</Text>
                            <View style={styles.bionWrapper}>
                                <IcBionBlue />
                                <Text style={styles.fontDate}>{`17 Jul 2021 • 10.00 WIB\nRef. Number 38892304112`}</Text>
                            </View>

                            {/* <View style={styles.line}/> */}

                            <View style={styles.wrapperInstruction}>
                                <Text style={{
                                    fontFamily: nunito400,
                                    color: white,
                                    fontSize: 14
                                }}>{`Please tap here and follow instruction\nto update balance`}</Text>
                                <IcArrowRight />
                            </View>

                            <Text style={styles.fontTi}>TRANSACTION INFO</Text>

                            <Text style={[styles.fontTitle2, { fontSize: 12, marginTop: 12 }]}>Transaction Type</Text>
                            <Text style={[styles.fontTitle, { fontSize: 18, marginTop: 4 }]}>Transfer</Text>

                            <Text style={[styles.fontTitle2, { fontSize: 12, marginTop: 12, marginBottom: 6 }]}>From</Text>
                            <View>
                                <View style={styles.accountWrapper}>
                                    <View style={styles.cirlceWrapper()}>
                                        <Text style={styles.fontName}>VP</Text>
                                    </View>
                                    <View style={{
                                        marginLeft: 12
                                    }}>
                                        <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Jonathan Ong</Text>
                                        <Text style={[styles.fontTitle2, { fontSize: 12 }]}>bion 237743032</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={[styles.fontTitle2, { fontSize: 12, marginTop: 0, marginBottom: 6 }]}>To</Text>
                            <View>
                                <View style={styles.accountWrapper}>
                                    <View style={styles.cirlceWrapper()}>
                                        <Text style={styles.fontName}>NW</Text>
                                    </View>
                                    <View style={{
                                        marginLeft: 12
                                    }}>
                                        <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Nicodemus Wijaya</Text>
                                        <Text style={[styles.fontTitle2, { fontSize: 12 }]}>Bank Mestika 738493245</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={[styles.fontTitle2, { fontSize: 12 }]}>Note</Text>
                            <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Bayar titipan, terima kasih</Text>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    borderBottomColor: '#3333331A',
                                    marginVertical: 20
                                }}
                            />

                            <Text style={styles.fontAmount}>AMOUNT</Text>
                            <View style={styles.rowWrapper}>
                                <Text style={styles.fontRowHeader}>Transfer Amount</Text>
                                <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp2.000.000</Text>
                            </View>
                            <View style={styles.rowWrapper}>
                                <Text style={styles.fontRowHeader}>Admin Fee</Text>
                                <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp0</Text>
                            </View>
                            <View style={styles.rowWrapper}>
                                <Text style={styles.fontRowHeader}>Voucher</Text>
                                <Text style={[styles.fontRowHeader, { fontFamily: nunito700, color: primary_red }]}>-Rp50.000</Text>
                            </View>

                            <View
                                style={{
                                    borderBottomColor: '#3333331A',
                                    borderBottomWidth: 1,
                                    marginTop: 20
                                }}
                            />

                            <View style={styles.rowWrapper}>
                                <Text style={{ fontFamily: nunito700, fontSize: 16, color: black70 }}>Voucher</Text>
                                <Text style={[{ fontFamily: nunito800, fontSize: 20, color: primary_blue }]}>-Rp50.000</Text>
                            </View>

                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity style={styles.buttonFavorit}>
                                    <Text style={styles.fontFavorit}>Favorited</Text>
                                </TouchableOpacity>

                                <ButtonYellow
                                    title={'Back to Home'}
                                    customStyle={{
                                        width: '48%',
                                        marginBottom: 0
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </BottomSheet>
        </>
    );
};

export default TransferSuccess;


const styles = StyleSheet.create({
    fontSuccess: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        marginTop: '100%'
    },
    font400: {
        fontFamily: nunito200,
        fontSize: 16,
        color: white,
        marginTop: 12
    },
    font800: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontSwipe: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white,
        marginBottom: 20
    },
    line: {
        height: 5,
        backgroundColor: black50,
        width: '15%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 40
    },
    bgZigZag: {
        width: width,
        height: height,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 0,
        // zIndex: 9
    },
    actionWrapper: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    fontTs: {
        fontFamily: nunito800,
        fontSize: 24,
        color: primary_blue,
        marginTop: 24
    },
    bionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        borderBottomColor: '#3333331A',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    fontDate: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70,
        textAlign: 'right'
    },
    fontTi: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
        marginTop: 16
    },
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_orange
    }),
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: 'black',
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
        color: black50
    },
    fontAmount: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
    },
    fontRowHeader: {
        fontFamily: nunito400,
        fontSize: 16,
        color: black70
    },
    fontFavorit: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    buttonFavorit: {
        width: '48%',
        padding: 14,
        borderWidth: .5,
        borderColor: '#3531B3',
        // opacity: 0.,/
        alignItems: 'center',
        borderRadius: 50
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 34
    },
    wrapperInstruction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bluePale,
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    }
});