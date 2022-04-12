import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgSuccess, BgSuccessFooter, IcBubleChecklist, IcClose, IcDownload, IcFavorit, IcHair2, IcShare } from '../../assets/Images';
import { black50, black70, dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito200, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, ViewContainer } from '../../components';

const CreatePocketSucces = ({ navigation }) => {

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
                    <TouchableOpacity onPress={() => navigation.navigate('AddFavorit')}>
                        <IcFavorit />
                    </TouchableOpacity>
                    <IcShare />
                    <TouchableOpacity onPress={() => navigation.navigate('PreviewSuccessTransfer')}>
                        <IcDownload />
                    </TouchableOpacity>

                </View>
            </View>
            <Text style={styles.fontSuccess}>Vacation Pocket is Created</Text>
            <Text style={styles.font400}>You can top up your balance to start using this account</Text>

            <View style={{
                position: 'absolute',
                bottom: 20,
                width: '100%',
                alignSelf: 'center'
            }}>
                <ButtonYellow
                    title={'VIEW ACCOUNT'}
                />

                <Text style={[styles.font800, { alignSelf: 'center', fontSize: 14, color: primary_yellow }]}>BACK TO HOME</Text>
            </View>

        </ViewContainer>
    );
};

export default CreatePocketSucces;

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
    fontSwipe: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white,
        marginBottom: 20
    },
    line: {
        height: 5,
        backgroundColor: black50,
        width: '15%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 40
    },
    bgZigZag: {
        width: width,
        height: height,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 0,
        // zIndex: 9
    },
    actionWrapper: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    fontTs: {
        fontFamily: nunito800,
        fontSize: 24,
        color: primary_blue,
        marginTop: 24
    },
    bionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        borderBottomColor: '#3333331A',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    fontDate: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70,
        textAlign: 'right'
    },
    fontTi: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
        marginTop: 16
    },

});
