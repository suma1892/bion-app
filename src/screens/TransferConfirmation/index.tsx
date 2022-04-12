import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransferConf, IcArrowBottom } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_red, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, MainHeader } from '../../components';

const TransferConfirmation = ({ navigation, route }) => {
    const screen = route?.params?.screen;
    
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

                    <TouchableOpacity onPress={() => navigation.navigate('TransferFrom')} style={styles.bubleWrapper}>
                        <View style={styles.cirlceWrapper}>
                            <Text style={styles.fontName}>JO</Text>
                        </View>

                        <Text style={styles.fontRp}>Jonathan Ong</Text>
                        <Text style={styles.fontNo}>bion 73849351234</Text>
                    </TouchableOpacity>
                    <View style={{
                        alignSelf: 'center',
                        marginVertical: 8
                    }}>
                        <IcArrowBottom />
                    </View>

                    <View style={styles.bubleWrapper2}>
                        <View style={styles.cirlceWrapper}>
                            <Text style={styles.fontName}>NW</Text>
                        </View>

                        <Text style={styles.fontNo}>bion 73849351234</Text>
                        <Text style={styles.fontRp}>Rp10.000.000</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: 32

                    }}>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={styles.fontHeader}>Schedule</Text>
                            <Text style={styles.fontDesc}>NOW</Text>
                        </View>

                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={styles.fontHeader}>Frequency</Text>
                            <Text style={styles.fontDesc}>ONCE</Text>
                        </View>
                    </View>

                    <Text style={[styles.fontHeader, { marginTop: 24 }]}>Note</Text>
                    <Text style={styles.fontDesc}>Bayar titipan, terima kasih</Text>
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
                    </View>
                    <ButtonYellow
                        title={'Continue'}
                        customStyle={{
                            marginTop: 32
                        }}
                        onPress={()=> navigation.navigate('TransactionPin', {screen: screen})}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default TransferConfirmation;

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
        backgroundColor: primary_orange,
        width: '70%',
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        // marginTop: 42,
    },
    fontHeader: {
        fontFamily: nunito400,
        fontSize: 14,
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
    }
});
