import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgAccounts, BgWithHair, IcAddBalance, IcAlert, IcCalendar, IcCopy, IcMore, IcNotFound2, IcPayBuy2, IcTransfer2 } from '../../assets/Images';
import { black50, black70, bluePale, dark_blue, primary_blue, primary_red, primary_yellow, white, white50, white70 } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, Dropdown } from '../../components';

const GiroRupiah = ({ navigation }) => {

    const [selectTab, setSelectTab] = useState(0);
    const [selectTab2, setSelectTab2] = useState(0);
    const [showCard, setShowCard] = useState(false);
    // const [isTop, setIsTop] = useState(true);

    //togle merubah status history
    const emptyHistory = false;

    const bottomSheetRef = useRef(null);
    const bottomSheetRef2 = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['50%'], []);
    const snapPoints2 = useMemo(() => ['45%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{
                    margin: 20,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: '-22%',
                        margin: -20
                    }}>
                        <BgAccounts height={height} width={width} />
                    </View>
                    {
                        <>
                            <View style={{
                                marginTop: 50
                            }}>
                                <Text style={styles.fontBalance}>BALANCE</Text>
                                <Text style={styles.fontRp}>Rp0</Text>
                                <Text style={styles.fontRek}>bion 73849351234</Text>
                            </View>

                            <View style={[styles.tabWrapper, { width: '100%', marginTop: 37 }]}>
                                <TouchableOpacity>
                                    <IcAddBalance />
                                    <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`Add\nBalance`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <IcTransfer2 />
                                    <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`Transfer`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <IcPayBuy2 />
                                    <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`Pay & Buy`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <IcMore />
                                    <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`More`}</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </>
                    }

                    {!emptyHistory && <View style={[styles.tabWrapper, { width: '60%', marginTop: '30%' }]}>
                        <TouchableOpacity
                            onPress={() => setSelectTab2(0)}
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text style={styles.fontTab2(selectTab2 === 0)}>HISTORY</Text>
                            {selectTab2 === 0 && <View style={styles.lineTab} />}
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSelectTab2(1)}
                            style={{
                                alignItems: 'center'
                            }}>
                            <Text style={styles.fontTab2(selectTab2 === 1)}>DETAIL</Text>
                            {selectTab2 === 1 && <View style={styles.lineTab} />}
                        </TouchableOpacity>
                    </View>}
                    {emptyHistory && <View style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <IcNotFound2 />
                        <Text style={{
                            fontFamily: nunito400,
                            fontSize: 14,
                            color: black70,
                            textAlign: 'center'
                        }}>Top up cash between 01 Jan 2020 -
                            31 Dec 2020 is unavailable</Text>
                    </View>}
                    {!emptyHistory && <>
                        {selectTab2 === 0 && <View>
                            <ScrollView nestedScrollEnabled={true}>
                                {[...Array(13)].map((_, i) => (
                                    <View key={i}>
                                        <View style={{
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#3333331A',
                                            paddingVertical: 10,
                                            width: '100%',
                                        }}>
                                            <View style={styles.accountWrapper}>
                                                <View style={styles.cirlceWrapper()}>
                                                    <Text style={styles.fontName}>NW</Text>
                                                </View>
                                                <View style={{
                                                    marginLeft: 12,
                                                    width: '80%',

                                                }}>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        justifyContent: "space-between",
                                                    }}>
                                                        <Text style={[styles.fontTitle]}>05 Jul 2021</Text>
                                                        <Text style={[styles.fontTitle]}>Incoming</Text>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        justifyContent: "space-between",
                                                    }}>
                                                        <Text style={[styles.fontTitle2, { fontSize: 12 }]}>Bryan Tanoto</Text>
                                                        <Text style={[styles.fontTitle2, { fontSize: 12, color: '#0EAE3D' }]}>+Rp250.000</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))}

                            </ScrollView>
                        </View>}

                        {selectTab2 === 1 &&
                            <View>
                                <View style={styles.tab1Wrapper}>
                                    <View>
                                        <Text style={[styles.fontTitle, {}]}>ATM Card Number</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>*******1234</Text>
                                    </View>
                                    <Text onPress={() => setShowCard(true)} style={styles.fontView}>VIEW CARD DETAIL</Text>

                                </View>
                                <Text style={[styles.fontTitle, { marginTop: 24 }]}>Account Number</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>73849351234 </Text>
                                    <IcCopy />
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 24
                                }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={[styles.fontTitle]}>Created Date</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>11 Feb 2021</Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.fontTitle]}>Currency</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>IDR</Text>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 24
                                }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={[styles.fontTitle]}>Min. Balance</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp250.000</Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.fontTitle]}>Max. Transaction</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp50.000.000</Text>
                                    </View>
                                </View>

                                <Text style={[styles.fontTitle, { marginTop: 24 }]}>Monthly Fee</Text>
                                <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp11.000</Text>

                                <TouchableOpacity style={styles.buttonClose}>
                                    <Text style={styles.fontButton}>CLOSE ACCOUNT</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </>}

                </View>
            </ScrollView>

            {selectTab2 === 0 && <TouchableOpacity onPress={() => bottomSheetRef.current.snapToIndex(0)} style={styles.filterWrapper}>
                {emptyHistory && <View style={styles.redDot} />}
                <Text style={styles.fontButton}>FILTER</Text>
            </TouchableOpacity>}

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                enablePanDownToClose={true}
                disappearsOnIndex={-1}
                handleIndicatorStyle={{
                    backgroundColor: 'grey',
                    height: 5,
                    width: '20%'
                }}
                handleStyle={{
                    backgroundColor: primary_blue,
                    height: 20,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -20,
                }}
                backgroundStyle={{
                    backgroundColor: primary_blue,
                    borderTopLeftRadius: 20,
                    flex: 1,
                    // height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>
                    <Text style={styles.fontFilter}>Filter</Text>
                    <Text style={styles.fontDate}>DATE</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}>
                        <View style={{ width: '49%' }}>
                            <Text style={[styles.fontTitle, { color: white70 }]}>From</Text>
                            <View style={styles.wrapperDropdown}>
                                <Text style={styles.fontSelect}>DD/MM/YY</Text>
                                <IcCalendar />
                            </View>
                        </View>

                        <View style={{ width: '49%' }}>
                            <Text style={[styles.fontTitle, { color: white70 }]}>To</Text>
                            <View style={styles.wrapperDropdown}>
                                <Text style={styles.fontSelect}>DD/MM/YY</Text>
                                <IcCalendar />
                            </View>
                        </View>
                    </View>

                    <Dropdown
                        placeholder={'Select transaction type'}
                        title={'Transaction Type'}
                    />

                    <ButtonYellow
                        title={'APPLY'}
                        customStyle={{
                            marginTop: 30
                        }}
                        onPress={() => bottomSheetRef.current.close()}
                    />
                </View>
            </BottomSheet>

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
                    <IcAlert />
                    <Text style={styles.fontFilter}>Please Visit Our Branch</Text>
                    <Text style={{
                        fontFamily: nunito400,
                        fontSize: 12,
                        color: white70,
                        marginTop: 10
                    }}>To unblock your account, please bring KTP, registered mobile number, and visit nearby Bank Mestika branch</Text>

                    <ButtonYellow
                        title={'Find Nearby Branch'}
                        customStyle={{
                            // marginTop: 30
                            position: 'absolute',
                            bottom: 20
                        }}
                        onPress={() => bottomSheetRef2.current.close()}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

export default GiroRupiah;


const styles = StyleSheet.create({
    fontTab: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: white
    }),
    fontTab2: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: 'black'
    }),
    lineTab: {
        width: 23,
        height: 3,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: primary_yellow
    },
    tabWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 36
    },
    fontBalance: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white50
    },
    fontRp: {
        fontFamily: nunito800,
        fontSize: 30,
        marginVertical: 5,
        color: white
    },
    fontRek: {
        fontFamily: nunito700,
        fontSize: 14,
        color: white
    },
    activeCardWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: bluePale,
        marginTop: 30,
        borderRadius: 16
    },
    fontCardDesc: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white
    },
    fontActive: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white,
        marginRight: 5
    },
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        width: '100%',
        // paddingBottom: 12
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#540A7F'
    }),
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
        // marginTop: 24
    },
    fontNo: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito700,
        fontSize: 16,
        color: black70
    },
    filterWrapper: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: primary_blue,
        backgroundColor: white,
        padding: 7,
        width: '30%',
        alignItems: 'center',
        borderRadius: 40
    },
    fontFilter: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white
    },
    fontDate: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white50,
        marginTop: 24
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: dark_blue,
        padding: 12,
        marginTop: 4
    },
    // fontTitle2: {
    //     fontSize: 12,
    //     fontFamily: nunito400,
    //     color: '#FFFFFFB2',
    // },
    fontSelect: {
        fontFamily: nunito400,
        fontSize: 16,
        color: '#FFFFFF80'
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
        // marginTop: 24
    },
    tab1Wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        borderBottomColor: '#3333331A',
        borderBottomWidth: 1,
        paddingBottom: 25
    },
    buttonClose: {
        alignSelf: 'center',
        padding: 14,
        width: '80%',
        borderWidth: 1,
        borderColor: primary_blue,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 20
    },
    fontButton: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontView: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_yellow
    },
    redDot: {
        height: 16,
        aspectRatio: 1,
        backgroundColor: primary_red,
        borderRadius: 50,
        position: 'absolute',
        top: '-40%',
        right: 0
    },
});

