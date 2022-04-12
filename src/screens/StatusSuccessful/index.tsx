import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgSuccess, BgSuccessFooter, IcBubleChecklist, IcClose, IcDownload, IcFavorit, IcHair2, IcShare } from '../../assets/Images';
import { black50, black70, bluePale, dark_blue, primary_blue, primary_orange, white } from '../../assets/styles/Colors';
import { nunito200, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ViewContainer } from '../../components';
import AtmInfo from './AtmInfo';
import TransferSucces from './TransferSuccess';
import UnblockAccount from './UnblockAccount';

const StatusSuccessful = ({ navigation, route }) => {
    const screen = route?.params?.screen;

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
            {screen === 'atm-info' ? <AtmInfo /> : screen === 'UnblockAccount' ? <UnblockAccount /> : <TransferSucces />}




        </ViewContainer>
    );
};

export default StatusSuccessful;

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
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_orange
    }),
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: 'black',
        marginTop: 24
    },
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 28,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito400,
        fontSize: 10,
        color: black50
    },
    fontAmount: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
    },
    fontRowHeader: {
        fontFamily: nunito400,
        fontSize: 16,
        color: black70
    },
    fontFavorit: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    buttonFavorit: {
        width: '48%',
        padding: 14,
        borderWidth: .5,
        borderColor: '#3531B3',
        // opacity: 0.,/
        alignItems: 'center',
        borderRadius: 50
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 34
    },
    wrapperInstruction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bluePale,
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    }
});
