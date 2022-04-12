import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRight } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderInline, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const PayQrNoAmount = ({ navigation, route }) => {


    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={'Pay with QR'}
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
                            <Text style={styles.fontRp}>Resto Ayam Gepuk</Text>
                            <Text style={styles.fontNo}>bion 74318491245</Text>
                        </View>
                        <IcArrowRight />
                    </View>
                    <View
                        style={{
                            marginTop: '20%'
                        }}
                    />

                </View>




                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>

                    <TextInput
                        title={'Amount'}
                        value={'Rp 0'}
                        theme={white}
                    />
                    <Text style={{
                        fontFamily: nunito400,
                        fontSize: 12,
                        color: black70
                    }}>Max.amount<Text style={{color: primary_blue}}>Rp 100.000.000</Text></Text>

                    <Text style={[styles.fontTitle2, { color: black70, marginTop: 24, marginBottom: 15 }]}>Tip</Text>

                    <View style={styles.genderWrapper}>
                        <TouchableOpacity style={styles.buttonGender(false)}>
                            <Text style={styles.fontGender(false)}>NO TIPS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGender(true)}>
                            <Text style={styles.fontGender(true)}>TIP RP5.000</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>

            <ButtonYellow
                title={'CONTINUE'}
                customStyle={{
                    marginTop: 20,
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('TransactionPin')}
            />

        </ViewContainer>
    );
};

export default PayQrNoAmount;

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
    },
    fontHeader: {
        fontFamily: nunito400,
        fontSize: 12,
        color: '#333333B2'
    },
    amountWrapper: _ => ({
        width: 100,
        height: 64,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: _ ? primary_blue : white,
        borderRadius: 6,
        marginBottom: 14,
        alignItems: 'center',
        padding: 5
    }),
    fontDesc: _ => ({
        fontFamily: nunito400,
        fontSize: 12,
        color: _ ? '#FFFFFFB2' : black70
    }),
    fontTitle: _ => ({
        fontFamily: nunito400,
        fontSize: 22,
        color: _ ? white : primary_blue
    }),
    amountMainWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 20,
        marginBottom: -20
    },
});
