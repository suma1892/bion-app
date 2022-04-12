import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowRight, IcArrowRightOrange } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        title: 'Auto Rollover Principal Only',
        desc: 'Extend principal amount and Transfer interest to source of fund account'
    },
    {
        title: 'Auto Rollover Principal & Interest',
        desc: 'Extend principal amount and interest gained'
    },
    {
        title: 'Non-Auto Rollover',
        desc: 'Extend principal amount and interest gained'
    },
]
const CreateBMSavings = ({ navigation }) => {
    const [selectDropdown, setSelectDropdown] = useState(0);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <MainHeader
                navigation={navigation}
                title={'Create Tabungan Mestika'}
            />
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransfer width={width} height={height} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, marginLeft: -20 }}>
                <View style={{ paddingHorizontal: 20 }}>

                    <Text style={[styles.fontTitle2, { color: white70, marginTop: 24, marginBottom: 15 }]}>Deposit From</Text>
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
                        title={'Initial Deposit'}
                        placeholder={'Rp 0'}
                        theme={'white'}
                        value={'Rp. 1.000.000'}
                    />
                    <Text style={[styles.fontTitle2, { color: black70 }]}>Min. amount <Text style={{ color: primary_blue, fontFamily: nunito700 }}>Rp250.000</Text></Text>


                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                        <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                        <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                            <Text style={styles.fontSelect}>Choose Voucher</Text>
                            <IcArrowRightOrange />
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            <ButtonYellow
                title={'CONTINUE'}
                customStyle={{
                    marginTop: 20,
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center'
                }}
                onPress={() => navigation.navigate('CreateBmSavingsConfirmation')}
            />
        </ViewContainer>
    );
};

export default CreateBMSavings;

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
        backgroundColor: bluePale,
        width: '90%',
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
    fontTitle3: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 12
    },
    buttonGender: _ => ({
        width: '50%',
        backgroundColor: _ ? white : primary_blue,
        borderWidth: 1,
        borderColor: primary_blue,
        alignItems: 'center',
        paddingVertical: 13,
        borderTopLeftRadius: _ ? 0 : 27,
        borderBottomLeftRadius: _ ? 0 : 27,
        borderTopRightRadius: !_ ? 0 : 27,
        borderBottomRightRadius: !_ ? 0 : 27,
    }),
    fontGender: _ => ({
        fontSize: 12,
        fontFamily: nunito400,
        color: _ ? primary_blue : '#FFFFFFB2'
    }),
    genderWrapper: {
        flexDirection: 'row',
        width: '100%',
        // marginTop: 12
    },
    noteWrapper: {
        position: 'absolute',
        width: width,
        backgroundColor: '#F2F2F2',
        // marginLeft: -20,
        padding: 20,
        zIndex: 9999,
    }
});
