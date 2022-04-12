import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgMaxPinHeader, BgRegisterDecFooter, IcTimerSand } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';

const { width, height } = Dimensions.get('screen');

const AccountVerification = ({ navigation }) => {
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
            <Text style={styles.fontHelp}>HELP</Text>
            <View style={styles.mainWrapper}>
                <IcTimerSand />
                <Text style={styles.fontMax}>{`Your Registration\nRequest is Sent!`}</Text>
                <Text style={styles.fontDesc}>{`Your bion account will be reviewed within\n2 working days. bion card will be sent to you\nafter registration is approved`}</Text>
            </View>

        </View>
    );
};

export default AccountVerification;

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
    mainWrapper: {
        margin: 20,
        alignItems: 'center',
        marginTop: '50%'
    },
    fontMax: {
        fontSize: 32,
        fontFamily: nunito800,
        color: white,
        textAlign: 'center',
    },
    fontHelp: {
        fontSize: 14,
        fontFamily: nunito800,
        color: primary_yellow,
        position: 'absolute',
        top: 16,
        right: 31
    },
});
