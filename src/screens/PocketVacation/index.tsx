import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcAddBalance, IcArrowDown2, IcArrowRight, IcCopy, IcMore, IcTransfer2 } from '../../assets/Images';
import { black50, primary_blue, primary_yellow, white, white50, white70 } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
// import { BgHomeSwiped, BgPocketDefault, BgPocketTab, BgWomenPark, IcArrowRight, IcFreeAdmin, IcHairSwiped } from '../../assets/Images';
import { width } from '../../assets/styles/Sizing';

const BionPocketVacation = ({ navigation }) => {
    const [selectTab2, setSelectTab2] = useState(0);
    const BsCloseRef = useRef(null);
    const BsMoreRef = useRef(null);


    const bsClosePoints = useMemo(() => ['35%'], []);
    const bsMorePoints = useMemo(() => ['25%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);


    return (
        <View style={{
            flex: 1,
            backgroundColor: white
        }}>
            {/* <View style={{
                position: 'absolute',
                top: '-12%',
                // left: -20,
            }}>
                <Image
                    source={require('../../assets/Images/File/bg-women-park2.png')}
                    style={{
                        width: width,
                        height: 850,
                        resizeMode: 'contain'
                    }}
                />

            </View> */}
            <ScrollView>
                <Image
                    source={require('../../assets/Images/File/bg-women-park2.png')}
                    style={{
                        width: width,
                        height: 850,
                        marginTop: '-20%',
                        resizeMode: 'contain'
                    }}
                />
                <View style={{
                    margin: 20,
                }}>

                    <View style={{
                        // alignItems: 'center',
                        marginTop: '-100%',
                    }}>
                        <Text style={[styles.fontTitle, { color: white50 }]}>{`BALANCE`}</Text>
                        <Text style={styles.fontSubTitle}>Rp30.000.000</Text>
                        <Text style={[styles.fontTitle, { color: white }]}>{`Vacation Pocket 123455134`}</Text>
                    </View>

                    <View style={[styles.tabWrapper, { width: '80%', marginTop: 37 }]}>
                        <TouchableOpacity>
                            <IcAddBalance />
                            <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`Add\nBalance`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <IcTransfer2 />
                            <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`Move\nBalance`}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => BsMoreRef.current.snapToIndex(0)}>
                            <IcMore />
                            <Text style={[styles.fontRek, { textAlign: 'center' }]}>{`More`}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        alignSelf: 'center',
                        marginVertical: 40,
                        alignItems: 'center'
                    }}>
                        <Text style={styles.fontScroll}>SCROLL TO VIEW HISTORY</Text>
                        <IcArrowDown2 />
                    </View>

                    <View style={[styles.tabWrapper, { width: '60%', marginTop: '0%' }]}>
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
                    </View>

                    {<>
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
                                    <Text style={styles.fontView}>VIEW CARD DETAIL</Text>

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

                                <TouchableOpacity onPress={() => BsCloseRef.current.snapToIndex(0)} style={styles.buttonClose}>
                                    <Text style={styles.fontButton}>CLOSE ACCOUNT</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </>}



                    {selectTab2 === 0 && <TouchableOpacity style={styles.filterWrapper}>
                        {/* {emptyHistory && <View style={styles.redDot} />} */}
                        <Text style={styles.fontButton}>FILTER</Text>
                    </TouchableOpacity>}

                </View>
            </ScrollView>

            <BottomSheet
                ref={BsCloseRef}
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
                snapPoints={bsClosePoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>

                    <View
                        style={styles.lineTab2}
                    />
                    <View style={{
                        marginBottom: 50
                    }} />
                    <Text style={styles.fontFilter}>Close Account?</Text>
                    <Text style={styles.fontDesc}>Your bion pocket balance will be transferred to main account & latest transaction history will be deleted permanently</Text>

                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 20,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionPin')} style={styles.buttonSheetClose}>
                            <Text style={styles.fontButton2}>YES, CLOSE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonSheetClose, { backgroundColor: primary_yellow, borderColor: primary_yellow }]}>
                            <Text style={[styles.fontButton2, { color: primary_blue }]}>NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>



            <BottomSheet
                ref={BsMoreRef}
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
                snapPoints={bsMorePoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>

                    <View
                        style={styles.lineTab2}
                    />
                    <View style={{
                        marginBottom: 50
                    }} />

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Text style={styles.fontBsMore}>E-Statement</Text>
                        <IcArrowRight />
                    </TouchableOpacity>

                    <View
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderColor: '#FFFFFF4D',
                            marginVertical: 20
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditPocket')}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            
                        }}>
                        <Text style={styles.fontBsMore}>Edit Account</Text>
                        <IcArrowRight />
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    );
};

export default BionPocketVacation;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: black50,
    },
    fontNumber: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white,
    },
    fontNumber2: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white,
    },
    fontTitle2: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
    },
    fontSubTitle: {
        fontFamily: nunito800,
        fontSize: 30,
        color: white,
    },
    fontCirlce: {
        fontFamily: nunito400,
        fontSize: 20,
        color: white,
    },
    circleText: {
        height: 48,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7D1F73',
        padding: 20,
        borderRadius: 12,
        marginTop: 20
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
    fontScroll: {
        fontSize: 12,
        fontFamily: nunito400,
        color: white,
        marginBottom: 10
    },
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
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#540A7F'
    }),
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
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        width: '100%',
        // paddingBottom: 12
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70,
        marginTop: 10
    },
    buttonSheetClose: {
        padding: 14,
        width: '49%',
        borderWidth: 1,
        borderColor: white,
        alignItems: 'center',
        borderRadius: 50
    },
    lineTab2: {
        width: '20%',
        height: 5,
        borderRadius: 50,
        backgroundColor: white50,
        position: 'absolute',
        alignSelf: 'center',
        top: 20
    },
    fontButton2: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    },
    fontBsMore: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    }
});
