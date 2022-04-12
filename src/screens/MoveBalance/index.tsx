import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRight, IcArrowRightOrange } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderInline, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const Transfer = ({ navigation }) => {

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={'Move Balance'}
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

                <TextInput
                    title={'Amount'}
                    placeholder={'Rp 0'}
                    theme={'white'}
                />


                <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                    <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                    <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                        <Text style={styles.fontSelect}>Choose Voucher</Text>
                        <IcArrowRightOrange />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('BalanceConfirmation')}
            />
        </ViewContainer>
    );
};

export default Transfer;

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
        backgroundColor: '#030062',
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
    }
});
