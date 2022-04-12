import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgRegisterDecFooter, BgWithHair, IcArrowLeft } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { TextInput } from '../../components';

const PersonalInformation = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: primary_blue,
        }}>
            <View style={styles.bgHeader}>
                <BgWithHair />
            </View>
            <View style={styles.bgFooter}>
                <BgRegisterDecFooter />
            </View>

            <View style={{
                margin: 16
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.arrowBack}>
                    <IcArrowLeft />
                </TouchableOpacity>
                <View style={{
                    marginTop: 72
                }}>
                </View>

                <Text style={styles.fontAsking}>Personal Information</Text>
                <Text style={styles.fontDesc}>{`Please confirm your contact information to receive transaction updates`}</Text>
                <View style={{
                    marginTop: 24
                }} />
                <TextInput
                    title={'Mobile Number'}
                    placeholder={'+62 08xxxxxxxxxx'}
                />
                <View style={{
                    marginTop: 24
                }} />
                <TextInput
                    title={'E-mail'}
                    placeholder={'Enter e-mail'}
                />
                <View style={{
                    marginTop: 24
                }} />
                <TextInput
                    title={'Referral Code'}
                    placeholder={'Enter referral code (optional)'}
                />
            </View>

            <TouchableOpacity
                onPress={() => { navigation.navigate('GoToLogin') }}
                onLongPress={() => { navigation.navigate('VerifyAccountMobile') }}
                style={styles.button}>
                <Text style={styles.fontChoose}>Verify</Text>
            </TouchableOpacity>

        </View>
    );
};

export default PersonalInformation;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        zIndex: 9999
    },
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },
    boxWrapper: {
        width: '100%',
        backgroundColor: dark_blue,
        padding: 16,
        borderRadius: 12,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 26,
    },
    fontYes: {
        color: white,
        fontFamily: nunito800,
        fontSize: 16,
        marginLeft: 16
    },
    bgHair: {
        position: 'absolute',
        right: 30
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
});
