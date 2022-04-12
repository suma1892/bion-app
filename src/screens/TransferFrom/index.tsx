import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcArrowRight, IcBankMestika, IcBionWhite } from '../../assets/Images';
import { dark_blue, primary_red, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderInline, ViewContainer } from '../../components';

const TranferFrom = ({ navigation }) => {
    return (
        <ViewContainer>
            <HeaderInline
                title={'Transfer from'}
            />

            <View style={styles.wrapperBox}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <IcBionWhite />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.fontBank}>bion</Text>
                            <Text style={styles.fontNorek}>73849351234</Text>
                        </View>
                    </View>
                    <Text style={styles.fontBalance}>BALANCE</Text>
                    <Text style={styles.fontMoney}>Rp10.750.000</Text>
                </View>
                <IcArrowRight />
            </View>

            <View>
                <View style={styles.redBox}>
                    <Text style={styles.fontDormant}>DORMANT</Text>
                </View>
                <View style={[styles.wrapperBox, { marginTop: 16, opacity: 0.6, backgroundColor: '#030062' }]}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <IcBankMestika />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.fontBank}>Tabungan Mestika</Text>
                                <Text style={styles.fontNorek}>73849351234</Text>
                            </View>
                        </View>
                        <Text style={styles.fontBalance}>BALANCE</Text>
                        <Text style={styles.fontMoney}>Rp10.750.000</Text>
                    </View>
                    <IcArrowRight />
                </View>
            </View>

            <View style={[styles.wrapperBox, {marginTop: 16,}]}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <IcBionWhite />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.fontBank}>Tabungan Pendidikan</Text>
                            <Text style={styles.fontNorek}>73849351234</Text>
                        </View>
                    </View>
                    <Text style={styles.fontBalance}>BALANCE</Text>
                    <Text style={styles.fontMoney}>Rp10.750.000</Text>
                </View>
                <IcArrowRight />
            </View>
        </ViewContainer>
    );
};

export default TranferFrom;

const styles = StyleSheet.create({
    fontBank: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white70
    },
    fontNorek: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontBalance: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70,
        marginTop: 10
    },
    fontMoney: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white,
    },
    wrapperBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: dark_blue,
        padding: 16,
        borderRadius: 12,
        marginTop: 34
    },
    redBox: {
        position: 'absolute',
        top: 25,
        right: 10,
        padding: 5,
        borderRadius: 6,
        backgroundColor: primary_red,
        zIndex: 9999
    },
    fontDormant: {
        fontFamily: nunito400,
        fontSize: 10,
        color: white
    }
});
