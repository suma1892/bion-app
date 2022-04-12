import React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowRight } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const TopupCash = ({ navigation }) => {

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <MainHeader
                title={'Top Up Cash'}
                desc={'Top up via Bank Mestika teller by using QR code'}
            />
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransfer width={width} height={height} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text css={"4-12"} style={{ marginTop: 42 }}>Top Up to</Text>
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

                <View
                    style={{
                        marginTop: 71
                    }}
                />

                <View style={{
                    marginTop: '0%',
                }} />
                <TextInput
                    title={'Amount'}
                    placeholder={'Rp 0'}
                    theme={'white'}
                />
                <Text style={styles.fontMax}>Max. amount <Text style={styles.fontRpBlue}>Rp11.000.000</Text></Text>

                <View style={{
                    marginTop: 20,
                }} />
                <TextInput
                    title={'Source of Fund'}
                    placeholder={'ex: salary'}
                    theme={'white'}
                />

                <View style={{
                    marginTop: 20,
                }} />
                <TextInput
                    title={'Purpose'}
                    placeholder={'ex: payment'}
                    theme={'white'}
                />

                <Text css={'7-12-' + primary_blue} style={{ marginVertical: 20 }}>ADDITIONAL INFO</Text>

                <View style={{
                    marginTop: 20,
                }} />
                <TextInput
                    title={'Mobile Number'}
                    placeholder={'+62 08xxxxxxxxxx'}
                    theme={'white'}
                />

                <View style={{
                    marginTop: 20,
                }} />
                <TextInput
                    title={'KTP Number'}
                    placeholder={'Enter your KTP number'}
                    theme={'white'}
                />

                <ButtonYellow
                    title={'Continue'}
                    customStyle={{
                        marginTop: 20
                    }}
                    onPress={() => navigation.navigate('TransferConfirmation', { screen: 'TopupCode' })}
                />

            </ScrollView>

        </ViewContainer>
    );
};

export default TopupCash;

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
        width: '90%',
        // marginLeft: 20,
        alignSelf: 'flex-end',
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginTop: 10,
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
