import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgRegisterDecFooter, BgWithHair, IcArrowLeft, IcArrowRight, IcCheckboxUnCheckedOrange, IcKtp, IcNpwp, IcSelfie } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';

const UploadDocuments = ({ navigation, route }) => {
    const status = route?.params?.status;

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
                margin: 20
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

                <Text style={styles.fontAsking}>Upload Documents</Text>
                <Text style={styles.fontDesc}>{`Upload your documents photo to verify your account`}</Text>

                <TouchableOpacity onPress={() => { navigation.navigate('UploadKtp', {status: status, action: 'ktp'}) }} style={styles.boxWrapper}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcKtp />
                        <Text style={styles.fontYes}>KTP</Text>
                    </View>
                    <IcArrowRight />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('UploadKtp', {status: status, action: 'selfie'}) }} style={styles.boxWrapper}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcSelfie />
                        <Text style={styles.fontYes}>Selfie with KTP</Text>
                    </View>
                    <IcArrowRight />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('UploadKtp', {status: status, action: 'npwp'}) }} style={[styles.boxWrapper, {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcNpwp />
                        <Text style={styles.fontYes}>NPWP</Text>
                    </View>
                    <IcArrowRight />
                </TouchableOpacity>
                <View style={styles.npwpWrapper}>
                    <IcCheckboxUnCheckedOrange />
                    <Text style={styles.fontDesc2}> I don’t have NPWP yet</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => { navigation.navigate('RegisterCreate', {status: 'new-account'}) }}
                style={styles.button}>
                <Text style={styles.fontChoose}>Continue</Text>
            </TouchableOpacity>

        </View>
    );
};

export default UploadDocuments;

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
    fontDesc2: {
        fontFamily: nunito400,
        fontSize: 12,
        color: '#FFFFFFB2',
        marginLeft: 16
    },
    npwpWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: '#030062',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
});
