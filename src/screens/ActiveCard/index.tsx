import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgMaxPinHeader, BgRegisterDecFooter, IcActivateCard } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';

const { width, height } = Dimensions.get('screen');

const ActiveCard = ({ navigation }) => {
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
                <IcActivateCard />
                <Text style={styles.fontMax}>{`Received ATM Card?\nActivate Now`}</Text>
                <Text style={styles.fontDesc}>{`Activate ATM card first to do offline\ntransactions`}</Text>

            </View>

            <ButtonYellow
                title={'Activate Card'}
                customStyle={styles.button}
                onPress={() => navigation.navigate('BottomTabMain')}
            />
            <Text style={styles.fontLater}>Do It Later</Text>
        </View>
    );
};

export default ActiveCard;

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

        position: 'absolute',
        bottom: 40
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
    fontLater: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_yellow,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    }
});
