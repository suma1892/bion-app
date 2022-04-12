import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { ButtonCamera, IcClose, IcLamp } from '../../assets/Images';
import { primary_orange, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';


const UploadKtp = ({ navigation, route }) => {
    const status = route?.params?.status;
    const action = route?.params?.action;
    console.log('upload = ', status);
    const camera = useRef();
    const [lamp, setlamp] = useState('off');

    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.current.takePictureAsync(options);
            console.log(data.uri);
            navigation.navigate('PreviewKtp', { imgUri: data.uri, status: status, action: action });
        }
    };

    const handleLamp = () => {
        setlamp(lamp === 'off' ? 'torch' : 'off');
    }

    const handleClose = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <RNCamera
                ref={camera}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode[lamp]}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            />
            <View style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
            }}>
                <Image
                    source={action === 'ktp' || action === 'npwp' ? require(`../../assets/Images/File/frame.png`): require('../../assets/Images/File/frame-ktp-selfie.png')}
                    style={{
                        height: '100%',
                        width: '100%',
                        alignSelf: 'center',
                    }}
                />
                <TouchableOpacity onPress={handleClose} style={styles.close}>
                    <IcClose />
                </TouchableOpacity>

                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: action === 'ktp' ? '30%' : '20%'
                }}>
                    <Text style={styles.fontInfo}>Please make sure:</Text>
                    {action === 'selfie' && <Text style={styles.fontSubInfo}><Text style={{ color: primary_orange }}>• </Text>Your face is captured in frame</Text>}
                    {action === 'selfie' && <Text style={styles.fontSubInfo}><Text style={{ color: primary_orange }}>• </Text>Remove accessoried (ex: glasses, hat, mask) </Text>}
                    {(action === 'npwp' || action === 'ktp') && <Text style={styles.fontSubInfo}><Text style={{ color: primary_orange }}>• </Text>The whole document is captured clearly </Text>}
                    {action === 'selfie' && <Text style={styles.fontSubInfo}><Text style={{ color: primary_orange }}>• </Text>Document is clear and readable</Text>}
                    {(action === 'ktp' || action === 'npwp') && <Text style={styles.fontSubInfo}><Text style={{ color: primary_orange }}>• </Text>Image and text are clear and readable</Text>}
                </View>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <ButtonCamera />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLamp} style={styles.lamp}>
                    <IcLamp />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UploadKtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        // backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        // margin: 20,
        position: 'absolute',
        bottom: 20
    },
    lamp: {
        flex: 0,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 30,
        right: 20,
    },
    close: {
        flex: 0,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    fontInfo: {
        fontSize: 24,
        fontFamily: nunito800,
        color: white,
        alignSelf: 'center',
        marginBottom: 12
    },
    fontSubInfo: {
        fontSize: 14,
        fontFamily: nunito400,
        color: white,
        lineHeight: 23
    }
});
