import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgMaxPinHeader, BgRegisterDecFooter, IcTimeDate, IcVideoCall } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito600, nunito700, nunito800 } from '../../assets/styles/FontFamily';

const { width, height } = Dimensions.get('screen');

const RegisterSent = ({ navigation, route }) => {
    const status = route?.params?.status;

    return (
        <View style={{
            flex: 1,
            backgroundColor: primary_blue,
        }}>
            <View style={styles.bgHeader}>
                <BgMaxPinHeader width={width} height={height} />
            </View>
            <View style={styles.bgFooter}>
                <BgRegisterDecFooter />
            </View>
            <ScrollView>
                <View style={styles.mainWrapper}>
                    <IcVideoCall />
                    <Text style={styles.fontMax}>{`Your Registration\nRequest is Sent!`}</Text>
                    <Text style={styles.fontDesc}>{`Please make sure you have active internet.\nYou’ll be contacted by our customer service\nvia video call on:`}</Text>

                    <View style={styles.timerWrapper}>
                        <IcTimeDate />
                        <View style={{
                            marginTop: '8%'
                        }}>
                            <Text style={styles.fontYellow}>FRIDAY</Text>
                            <Text style={styles.fontDate}>11 September 2021</Text>
                            <Text style={styles.fontClock}>At around 11.00 WIB</Text>
                        </View>
                    </View>
                </View>
                {status !== 'new-account' && <Text style={[styles.fontClock, { alignSelf: 'center', marginTop: 20 }]}>Cannot make it? Reset your schedule</Text>}
                <TouchableOpacity
                    onPress={() => navigation.navigate('RescheduleVidcall')}
                    style={styles.button}>
                    <Text style={styles.fontChoose}>{status !== 'new-account' ? 'Re-schedule Video Call' : 'OK'}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default RegisterSent;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: '-32%'
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        zIndex: 9999
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 12
    },
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 12,
        // position: 'absolute',
        // bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    mainWrapper: {
        margin: 20,
        alignItems: 'center',
        marginTop: '50%',
    },
    fontMax: {
        fontSize: 32,
        fontFamily: nunito800,
        color: white,
        textAlign: 'center',
    },
    timerWrapper: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: dark_blue,
        flexDirection: 'row',
        marginTop: 24,
        borderRadius: 12
    },
    fontYellow: {
        fontFamily: nunito600,
        fontSize: 14,
        color: primary_yellow,
    },
    fontDate: {
        fontFamily: nunito700,
        fontSize: 20,
        color: white
    },
    fontClock: {
        fontFamily: nunito400,
        fontSize: 14,
        color: '#FFFFFFB2',
    }
});
