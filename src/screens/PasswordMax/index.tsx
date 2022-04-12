import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgMaxPinHeader, BgRegisterDecFooter, IcMaxPin } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';

const { width, height } = Dimensions.get('screen');

const PasswordMax = ({ navigation }) => {
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

            <View style={styles.mainWrapper}>
                <IcMaxPin />
                <Text style={styles.fontMax}>{`Password Max.\nAttempts Reached`}</Text>
                <Text style={styles.fontDesc}>{`Please reset password to Login to\nyour account`}</Text>
            </View>
            
            <ButtonYellow
                title={'Reset Password'}
                customStyle={styles.button}
                // onPress={() => navigation.navigate('RegisterSchedule')}
            />
        </View>
    );
};

export default PasswordMax;

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
        position: 'absolute',
        bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
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
});
