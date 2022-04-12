import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcArrowRightOrange2 } from '../../assets/Images';
import { dark_blue, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, TextInput, ViewContainer } from '../../components';

const Voucher = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Voucher'}
                navigation={navigation}
            />

            <TextInput
                title={'Voucher Code'}
                placeholder={'Enter voucher code'}
            />
            <ButtonYellow
                title={'Use Voucher'}
                customStyle={{
                    marginTop: 16,
                    width: '100%'
                }}
            />

            <Text style={styles.fontTitle}>OR, CHOOSE VOUCHER</Text>

            {[...Array(3)].map((_, i) => (
                <View key={i.toString()} style={styles.boxWrapper}>
                    <View>
                        <Text style={styles.fontCode}>VC50K</Text>
                        <Text style={styles.fontCashback}>Cashback Rp50.000</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.fontDetail}>VIEW DETAIL </Text>
                            <IcArrowRightOrange2 />
                        </View>
                    </View>
                    <View style={styles.useWrapper}>
                        <Text style={[styles.fontDetail, { color: white }]}>USE</Text>
                    </View>
                </View>
            ))}
        </ViewContainer>
    );
};

export default Voucher;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    fontCode: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    boxWrapper: {
        backgroundColor: dark_blue,
        padding: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fontCashback: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70,
        marginVertical: 7
    },
    useWrapper: {
        paddingVertical: 6,
        paddingHorizontal: 21,
        borderWidth: 1,
        borderColor: white,
        borderRadius: 20
    },
    fontDetail: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_yellow
    },
});
