import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgSuccess, BgSuccessFooter, IcArrowRightOrange2, IcBubleChecklist, IcClose, IcHair2 } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito200, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, ViewContainer } from '../../components';

// import RBSheet from 'react-native-raw-bottom-sheet';
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const TransferSuccessScheduled = ({ navigation }) => {
    const rbsheetRef = useRef();

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['5%', '50%', '100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);



    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>
            <View style={{
                position: 'absolute',
                top: '-40%',
                // zIndex: 9999
            }}>
                <BgSuccess width={width} height={height} />
                <View style={{
                    position: 'absolute',
                    top: '63%'
                }}>
                    <IcHair2 />
                </View>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    top: '43%'
                }}>
                    <IcBubleChecklist />
                </View>
            </View>

            <View style={{
                position: 'absolute',
                bottom: '-50%',
            }}>
                <BgSuccessFooter width={width} height={height} />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: '40%',
                justifyContent: 'space-between',
                zIndex: 9
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IcClose />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between'
                }}>
                    {/* <IcFavorit />
                    <IcShare />
                    <IcDownload /> */}
                </View>
            </View>
            <Text style={styles.fontSuccess}>Transfer Scheduled</Text>
            <Text style={styles.font400}>Transfer of <Text style={styles.font800}>Rp2.000.000</Text> is sent to <Text style={styles.font800}>Nicodemus Wijaya </Text>
                is scheduled on Wed, 20 Jul 2021Î
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
            }}>
                <Text style={{
                    fontFamily: nunito800,
                    fontSize: 18,
                    color: primary_yellow,
                }}>View Schedule </Text>
                <IcArrowRightOrange2 />
            </View>

            <ButtonYellow
                title={'Back to Home'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
            />
        </ViewContainer>
    );
};

export default TransferSuccessScheduled;

const styles = StyleSheet.create({
    fontSuccess: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        marginTop: '100%'
    },
    font400: {
        fontFamily: nunito200,
        fontSize: 16,
        color: white,
        marginTop: 12
    },
    font800: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
});
