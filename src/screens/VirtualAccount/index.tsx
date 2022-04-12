import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRight } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderInline, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const VirtualAccount = ({ navigation }) => {

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={'Virtual Account'}
            />
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransfer width={width} height={height} />
            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <TouchableOpacity onPress={() => { }} style={styles.bubleWrapper}>
                <View style={styles.cirlceWrapper}>
                    <Text style={styles.fontName}>NW</Text>
                </View>
                <View>
                    <Text style={styles.fontNo}>bion 73849351234</Text>
                    <Text style={styles.fontRp}>Rp10.000.000</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>
            <View style={{
                alignSelf: 'center',
                marginVertical: 8
            }}>
                <IcArrowBottom />
            </View>

            <View style={styles.bubleWrapper2}>
                <View style={styles.cirlceWrapper}>
                    <Text style={styles.fontName}>NW</Text>
                </View>
                <View>
                    <Text style={styles.fontNo}>bion 73849351234</Text>
                    <Text style={styles.fontRp}>Rp10.000.000</Text>
                </View>
                <IcArrowRight />
            </View>
            <View
                style={{
                    marginTop: 71
                }}
            />
            <View>
                <View style={styles.noteWrapper}>
                    <Text style={{
                        fontFamily: nunito400,
                        fontSize: 12,
                        color: black70
                    }}>Notes</Text>
                    <Text style={{
                        fontFamily: nunito400,
                        fontSize: 16,
                        marginTop: 4,
                        color: black70
                    }}>SPP Bulan Juni, termasuk biaya pembangunan, perawatan kelas, seragam, buku, dan gaji karyawan sekolah</Text>
                </View>
            </View>
            <View style={{
                marginTop: '40%',
            }} />
            <TextInput
                title={'Amount'}
                placeholder={'Rp 0'}
                theme={'white'}
            />
            <Text style={styles.fontMax}>Max. amount <Text style={styles.fontRpBlue}>Rp11.000.000</Text></Text>

            {/* </ScrollView> */}
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('TransferConfirmation')}
            />
        </ViewContainer>
    );
};

export default VirtualAccount;

const styles = StyleSheet.create({
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    cirlceWrapper: {
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_yellow,
        position: 'absolute',
        left: '-10%',
        top: '40%'
    },
    fontNo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    bubleWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: bluePale,
        width: '70%',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginTop: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bubleWrapper2: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: primary_orange,
        width: '70%',
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginTop: 42,
    },
    fontRp: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: white,
        padding: 12,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: black70,
    },
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
    },
    fontMax: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70,
        marginTop: 8
    },
    fontAdd: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
        marginTop: 30
    },
    fontRpBlue: {
        fontFamily: nunito700,
        fontSize: 12,
        marginTop: 4,
        color: primary_blue
    },
    noteWrapper: {
        position: 'absolute',
        width: width,
        backgroundColor: '#F2F2F2',
        marginLeft: -20,
        padding: 20
    }
});
