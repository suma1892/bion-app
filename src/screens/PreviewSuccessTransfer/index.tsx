import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IcBionBlue } from '../../assets/Images';
import { black50, black70, dark_blue, primary_blue, primary_orange, white } from '../../assets/styles/Colors';
import { nunito200, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';

const PreviewSuccessTransfer = ({ navigation }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: dark_blue,
            paddingTop: 44
        }}>

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

                        <Text style={styles.fontTs}>Transaction Successful</Text>
                        <View style={styles.bionWrapper}>
                            <IcBionBlue />
                            <Text style={styles.fontDate}>{`17 Jul 2021 • 10.00 WIB\nRef. Number 38892304112`}</Text>
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

                        <View style={styles.rowWrapper}>
                            <Text style={{ fontFamily: nunito700, fontSize: 16, color: black70 }}>Total Transaction</Text>
                            <Text style={[{ fontFamily: nunito800, fontSize: 20, color: primary_blue }]}>-Rp50.000</Text>
                        </View>

                    </ScrollView>
                </View>

            </View>


        </View>
    );
};

export default PreviewSuccessTransfer;

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
        backgroundColor: white,
        width: '15%',
        alignSelf: 'center',
        marginTop: 5,
        // borderRadius: 40
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
    }
});
