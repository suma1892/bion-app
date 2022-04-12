import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BgTransferConf, IcCheckboxUnCheckedOrange, IcInfo } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_red, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, MainHeader } from '../../components';

const CreateDepositoConfirmation = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: primary_blue,
            flex: 1
        }}>
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransferConf width={width} height={height} />
            </View>
            <View style={{
                padding: 20
            }}>
                <MainHeader
                    title={'Confirmation'}
                    desc={'Make sure all information is correct'}
                    navigation={navigation}
                />
            </View>
            <ScrollView>
                <View style={{
                    paddingHorizontal: 20
                }}>
                    <Text style={styles.fontTitle}>TRANSACTION INFO</Text>
                    <Text style={[styles.fontHeader, { marginVertical: 14 }]}>Autodebet From</Text>
                    <View style={styles.bubleWrapper2}>
                        <View style={styles.cirlceWrapper}>
                            <Text style={styles.fontName}>NW</Text>
                        </View>

                        <Text style={styles.fontNo}>Jonathan Ong</Text>
                        <Text style={styles.fontRp}>bion 73849351234</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 12
                    }}>
                        <IcInfo />
                        <Text style={[styles.fontHeader, { marginLeft: 5 }]}>Money will be transfered to this account after maturity date</Text>
                    </View>


                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Transaction Type</Text>
                    <Text style={styles.fontDesc}>Create Tabka Hadiah</Text>

                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Hadiah</Text>
                    <Text style={styles.fontDesc}>iPhone 13 Pro - Sierra Blue</Text>
                    <Text style={[styles.fontHeader, { marginTop: 4 }]}>Sent within 4 weeks after realization date</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{ width: '50%' }}>
                            <Text style={[styles.fontHeader, { marginTop: 24 }]}>Tenure</Text>
                            <Text style={styles.fontDesc}>5 Years</Text>
                        </View>

                        <View style={{ width: '50%' }}>
                            <Text style={[styles.fontHeader, { marginTop: 24 }]}>Rate of Interest</Text>
                            <Text style={styles.fontDesc}>7%</Text>
                        </View>
                    </View>

                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Maturity Date</Text>
                    <Text style={styles.fontDesc}>11 Feb 2031</Text>

                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Estimated Deposito Result</Text>
                    <Text style={styles.fontDesc}>Rp11.110.000</Text>
                    <Text style={[styles.fontHeader, { marginTop: 0 }]}>Before 2,5% tax</Text>

                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Maturity Instruction</Text>
                    <Text style={styles.fontDesc}>Auto Rollover Principal Only</Text>
                    <Text style={[styles.fontHeader, { marginTop: 0 }]}>Extend principal amount and interest gained will be transferred to source of fund account</Text>

                </View>
                <View style={{
                    marginTop: 32,
                    height: 360,
                    width: width
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: -9999
                    }}>
                        <Image
                            source={require('../../assets/Images/File/bg-zigzag.png')}
                            style={{
                                width: width,
                                height: 360,

                            }}
                        />
                    </View>
                    <View style={{
                        padding: 20
                    }}>
                        <Text style={styles.fontAmount}>AMOUNT</Text>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Initial Deposit</Text>
                            <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp2.000.000</Text>
                        </View>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Admin Fee</Text>
                            <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp0</Text>
                        </View>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Voucher Cashback</Text>
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
                            <Text style={{ fontFamily: nunito700, fontSize: 16, color: black70 }}>Total Transaction</Text>
                            <Text style={[{ fontFamily: nunito800, fontSize: 20, color: primary_blue }]}>Rp950.000</Text>
                        </View>

                        <View style={[styles.rowWrapper, { justifyContent: 'flex-start' }]}>
                            <IcCheckboxUnCheckedOrange />
                            <Text onPress={() => navigation.navigate('TermCondition', { status: 'create' })}
                                style={styles.fontTerm}>{`I agree to bion's account opening\n`}
                                <Text style={[styles.fontTerm, { color: primary_yellow, fontSize: 14 }]}>terms & conditions</Text>
                            </Text>
                        </View>
                    </View>
                    <ButtonYellow
                        title={'Continue'}
                        customStyle={{
                            marginTop: 32
                        }}
                        onPress={() => navigation.navigate('TransactionPin', { screen: 'DepositoCreated' })}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default CreateDepositoConfirmation;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white,
        marginTop: 24
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
    fontRp: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    bubleWrapper2: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: bluePale,
        width: '90%',
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        // marginTop: 42,
    },
    fontHeader: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70
    },
    fontDesc: {
        fontFamily: nunito700,
        fontSize: 17,
        color: white
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
    fontTerm: {
        marginLeft: 10,
        fontFamily: nunito400,
        fontSize: 12,
        color: 'rgba(51, 51, 51, 0.7)',
    }
});
