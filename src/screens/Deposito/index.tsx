import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgDeposito, IcArrowLeft } from '../../assets/Images';
import { black50, black70, bluePale, dark_blue, primary_blue, primary_orange, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, Text } from '../../components';

const Deposito = ({ navigation }) => {

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
                        top: '-40%',
                        margin: -20,
                    }}>
                        <BgDeposito height={height} width={width} />
                    </View>
                    {
                        <>
                            <IcArrowLeft />
                            <View style={{
                                marginTop: 70
                            }}>
                                <Text style={styles.fontBalance}>BALANCE</Text>
                                <Text style={styles.fontRp}>Rp15.000.000</Text>
                                <Text style={styles.fontRek}>Tabungan Pendidikan 73849351234</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                height: 5,
                                marginTop: 17

                            }}>
                                <View
                                    style={{
                                        width: '60%',
                                        backgroundColor: primary_orange
                                    }}
                                />
                                <View
                                    style={{
                                        width: '40%',
                                        backgroundColor: dark_blue
                                    }}
                                />
                            </View>

                            <Text css='4-12' style={{
                                alignSelf: 'flex-end'
                            }}>Mature in <Text css='7-12'>9 years</Text></Text>

                        </>
                    }

                    {<>

                        {
                            <View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 54
                                }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={[styles.fontTitle, {}]}>Realization Date</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>11 Feb 2021</Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.fontTitle, {}]}>Maturity Date</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>11 Feb 2031</Text>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 24
                                }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={[styles.fontTitle, {}]}>Tenure</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>11 years</Text>
                                    </View>

                                    <View>
                                        <Text style={[styles.fontTitle, {}]}>Rate of Interest</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>7%</Text>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 24
                                }}>
                                    <View>
                                        <Text style={[styles.fontTitle, {}]}>Initial Deposit</Text>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp5.000.000</Text>
                                    </View>
                                </View>

                                <Text style={[styles.fontTitle, { marginTop: 24 }]}>Autodebit from</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={styles.cirlceWrapper(true)}>
                                        <Text css='7-16'>JO</Text>
                                    </View>

                                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Initial Deposit</Text>
                                        <Text style={[styles.fontTitle, {}]}>Rp5.000.000</Text>
                                    </View>
                                </View>

                                <Text style={[styles.fontTitle, { marginTop: 24 }]}>Prize</Text>
                                <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Cashback Rp5 million</Text>
                                <Text style={[styles.fontTitle]}>Transferred to autodebit account within 5 days after realization date</Text>

                                <Text css={'4-12-' + black70} style={{ textAlign: 'center', marginVertical: 16 }} >All actions can be done max. 1 day before maturity date</Text>
                                <ButtonYellow
                                    title={'Set Maturity Instruction'}
                                    customStyle={{
                                        marginBottom: -5
                                    }}
                                    onPress={()=>navigation.navigate('MaturityInstruction')}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('WithdrawConfirmation')} style={styles.buttonClose}>
                                    <Text style={styles.fontButton}>WITHDRAW</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </>}

                </View>
            </ScrollView>

        </View>
    );
};

export default Deposito;


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

