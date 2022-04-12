import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRight, IcArrowRightOrange, IcInfo } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, DropdownV2, HeaderInline, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');


const AMOUNT = [
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
]

const Postpaid = ({ navigation, route }) => {
    const { screen } = route?.params;
    const [selectAmount, setSelectAmount] = useState();
    const [component, setComponent] = useState({});
    useEffect(() => {
        if (screen === 'pln') {
            setComponent({
                header: 'PLN Payment'
            })
        } else if (screen === 'e-wallet') {
            setComponent({
                header: 'E-Wallet Top Up'
            })
        } else if (screen === 'bpjs') {
            setComponent({
                header: 'BPJS Payment'
            })
        } else if (screen === 'telkom') {
            setComponent({
                header: 'Telkom'
            })
        } else if (screen === 'tv') {
            setComponent({
                header: 'TV & Internet Payment'
            })
        } else if (screen === 'e-money') {
            setComponent({
                header: 'E-money'
            })
        }
    }, []);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={component?.header}
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
                            <Text style={styles.fontNo}>bion 73849351234</Text>
                            <Text style={styles.fontRp}>Rp10.000.000</Text>
                        </View>
                        <IcArrowRight />
                    </View>
                    <View
                        style={{
                            marginTop: '20%'
                        }}
                    />

                    {screen === 'bpjs' && <DropdownV2
                        title={'Pay Until'}
                        data={[{ title: 'June 2021' }, { title: 'June 2021' }, { title: 'June 2021' }, { title: 'June 2021' }, { title: 'June 2021' }]}
                        onChange={() => { }}
                        placeholder={'Select month'}
                    />}
                </View>


                {screen !== 'e-money' && <>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.fontTitle2}>Amount</Text>
                        <Text onPress={() => {
                            // bottomSheetRef.current.snapToIndex(1);
                            setShowMoreProduct(!showMoreProduct);
                        }} style={[styles.fontTitle2, { fontFamily: nunito700, color: primary_orange }]}>VIEW ALL OPTIONS</Text>
                    </View>
                    <View style={styles.amountMainWrapper}>
                        {AMOUNT.map((_, i) => (
                            <TouchableOpacity onPress={() => setSelectAmount(i)} key={i} style={styles.amountWrapper(selectAmount === i)}>
                                <Text style={styles.fontTitle(selectAmount === i)}>{_.title} <Text style={{ fontSize: 12 }}>RB</Text></Text>
                                <Text style={styles.fontDesc(selectAmount === i)}>{_.desc}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>}
                {screen === 'e-money' &&
                    <>
                        <Text style={[styles.fontTitle2, {marginLeft: 20}]}>Amount</Text>
                        <View style={styles.amountMainWrapper}>
                            {AMOUNT.map((_, i) => (
                                <TouchableOpacity onPress={() => setSelectAmount(i)} key={i} style={styles.amountWrapper(selectAmount === i)}>
                                    <Text style={styles.fontTitle(selectAmount === i)}>{_.title} <Text style={{ fontSize: 12 }}>RB</Text></Text>
                                    <Text style={styles.fontDesc(selectAmount === i)}>{_.desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </>
                }

                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>

                    <Text style={[styles.fontTitle2, { color: black70, marginTop: 24, marginBottom: 15 }]}>Payment Method</Text>

                    <View style={styles.genderWrapper}>
                        <TouchableOpacity style={styles.buttonGender(false)}>
                            <Text style={styles.fontGender(false)}>ONCE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGender(true)}>
                            <Text style={styles.fontGender(true)}>AUTODEBET</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 12
                    }}>
                        <IcInfo fill={'grey'} />
                        <Text style={[styles.fontHeader, { marginLeft: 5 }]}>Autodebet will be made on provider’s billing issue date. Make sure your balance is sufficient from 20 Nov 2021</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                        <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                        <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                            <Text style={styles.fontSelect}>Choose Voucher</Text>
                            <IcArrowRightOrange />
                        </View>
                    </TouchableOpacity>


                </View>
                <ButtonYellow
                    title={'CONTINUE'}
                    customStyle={{
                        marginTop: 20,
                        // position: 'absolute',
                        // bottom: 20
                    }}
                    onPress={() => navigation.navigate('TransferConfirmation')}
                />
            </ScrollView>

        </ViewContainer>
    );
};

export default Postpaid;

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
