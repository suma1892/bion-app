import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgMaxPinHeader, BgRegisterDecFooter, IcAcceptCall, IcInfo, IcMultiArrowLeft, IcMultiArrowRight, IcRejectCall, IcVideoCall } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';

const { width, height } = Dimensions.get('screen');

const IncomingVideoCall = ({ navigation, route }) => {
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
                    <Text style={styles.fontDesc}>{`Incoming Video Call`}</Text>
                    <Text style={styles.fontMax}>{`bion Customer\nService`}</Text>


                    <View style={styles.timerWrapper}>
                        <IcInfo />
                        <Text style={styles.fontYellow}>Prepare your KTP and make sure you show the clear look of your face by not wearing mask, glasses, or hat</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 48,
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('VideoCallOngoing')} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        width: '35%'
                    }}>
                        <IcAcceptCall />
                        <IcMultiArrowRight />
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        width: '35%'
                    }}>
                        <IcMultiArrowLeft />
                        <IcRejectCall />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default IncomingVideoCall;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: '-45%'
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
        marginTop: '25%',
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
        alignItems: 'center',
        padding: 12,
        backgroundColor: dark_blue,
        flexDirection: 'row',
        marginTop: 24,
        borderRadius: 12
    },
    fontYellow: {
        fontFamily: nunito400,
        fontSize: 14,
        marginLeft: 10,
        color: white,
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
