import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { IcClose, IcImage, IcLamp, IcQris } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';


const ScanQR = ({ navigation, route }) => {
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
                    source={require(`../../assets/Images/File/frame-qris.png`)}
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
                    <Text style={styles.fontInfo}>{`Place the QR Code inside\nthe scan area`}</Text>

                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    width: '90%',
                }}>
                    <TouchableOpacity style={styles.capture}>
                        <IcImage />
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('PayQrWithAmount')} 
                    onLongPress={()=>navigation.navigate('PayQrNoAmount')} 
                    style={styles.capture}>
                        <IcQris />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLamp} style={styles.capture}>
                        <IcLamp />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ScanQR;

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
        fontSize: 14,
        fontFamily: nunito700,
        color: white,
        alignSelf: 'center',
        marginBottom: 12,
        textAlign: 'center'
    },
    fontSubInfo: {
        fontSize: 14,
        fontFamily: nunito400,
        color: white,
        lineHeight: 23
    }
});
