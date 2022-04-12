import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcFinance, IcPhoto, IcUser } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';

const RegisterCreate = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handlePersonalInformation = () => {
        let screen = 'RegisterPersonalInformation';
        if (status === 'new-account') {
            // console.log(object);
            screen = 'PersonalInformation';
        }
        navigation.navigate(screen);
    }

    const handleUpload = () => {
        console.log(screen);
        let screen = 'UploadKtp';
        if (status === 'new-account') {
            screen = 'UploadDocuments';
        }
        navigation.navigate(screen, { status: status, action: 'ktp' });
    }

    return (
        <ViewContainer>
            <MainHeader
                title={'Create bion Account'}
                desc={'Complete the steps below to create new bion\naccount'}
                navigation={navigation}
            />

            <TouchableOpacity onPress={handlePersonalInformation} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcUser />
                    <Text style={styles.fontYes}>Personal Information</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleUpload} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcPhoto />
                    {status !== 'new-account' ? <Text style={styles.fontYes}>Upload KTP</Text> :
                        <View>
                            <Text style={styles.fontYes}>Upload Documents</Text>
                            <Text style={styles.fontDesc2}>Prepare KTP and NPWP</Text>
                        </View>
                    }
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('UserForm1', { status: status }) }} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcFinance />
                    <Text style={styles.fontYes}>Financial Information</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('DataConfirmation', { status: status }) }}
                style={styles.button}>
                <Text style={styles.fontChoose}>CONTINUE</Text>
            </TouchableOpacity>

        </ViewContainer>
    );
};

export default RegisterCreate;

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
    }
});
