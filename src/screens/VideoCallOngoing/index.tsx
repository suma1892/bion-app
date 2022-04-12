import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IcCallFlip, IcCallMore, IcCallMute, IcCallOffCam, IcRejectCall } from '../../assets/Images';
import { height, width } from '../../assets/styles/Sizing';

const options = [
    ()=><IcCallFlip/>,
    ()=><IcCallMute/>,
    ()=><IcCallOffCam/>,
    ()=><IcCallMore/>,
]

const VideoCallOngoing = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <Image
                source={require('../../assets/Images/File/sample-random-user.png')}
                style={{
                    height: height,
                    width: width,
                    resizeMode: 'stretch',
                    position: 'absolute',
                }}
            />

            <Image
                source={require('../../assets/Images/File/sample-cs.png')}
                style={{
                    height: 136,
                    width: 103,
                    resizeMode: 'stretch',
                    position: 'absolute',
                    top: 20,
                    right: 20
                }}
            />

                <View style={{
                    position: 'absolute',
                    bottom: 30,
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                    <IcRejectCall/>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-between'
                    }}>
                        {options.map((_, i)=>(
                            <_/>
                        ))}
                    </View>
                </View>
        </View>
    );
};

export default VideoCallOngoing;

const styles = StyleSheet.create({});
