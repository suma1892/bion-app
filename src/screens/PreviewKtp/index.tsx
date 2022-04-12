import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';


const UploadKtp = ({ navigation, route }) => {
    const { imgUri } = route?.params;
    const status = route?.params?.status;
    const action = route?.params?.action;

    const handleNavigate = () => {
        if (action === 'ktp') {
            navigation.navigate('ReviewKtp', { status: status })
            return 0;
        }
        navigation.navigate('UploadDocuments', { status: status })
    }
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgUri }}
                style={{
                    height: '100%',
                    width: '100%',
                    zIndex: 1
                }}
            />
            <View style={styles.bSheet}>
                <Text style={styles.fontDesc}>{`Make sure image and text on photo\nis clear and readable`}</Text>

                <View style={styles.wrapperButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonLogin}>
                        <Text style={styles.fontButtonLogin}>Retake Picture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNavigate} style={styles.buttonRegister}>
                        <Text style={styles.fontButtonRegister}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default UploadKtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    bSheet: {
        position: 'absolute',
        bottom: 0,
        height: '25%',
        width: '100%',
        backgroundColor: '#3531B3',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        zIndex: 99
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 16,
        color: white,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 36
    },
    buttonLogin: {
        borderWidth: 1,
        borderColor: white,
        paddingVertical: 13,
        width: 156,
        alignItems: 'center',
        borderRadius: 50
    },
    buttonRegister: {
        paddingVertical: 13,
        width: 156,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        borderRadius: 50
    },
    wrapperButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20
    },
    fontButtonLogin: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    },
    fontButtonRegister: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
});
