import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRightOrange, IcCalendarOrange } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, DropdownV2, HeaderInline, TextInput, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');
const TYPE = [
    {
        title: 'Online',
        desc: 'Transfer min. Rp10.000 directly received by recipient. This cost Rp6.500 fee'
    },
    {
        title: 'SKN',
        desc: 'Transfer min. Rp10.000 up to Rp300 million. This type will take process up to 2-3 days'
    },
    {
        title: 'RTGS',
        desc: 'Transfer min. from Rp100.000.001. This type will take process up to 2-3 days'
    },
]
const Transfer = ({ navigation }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectDropdown, setSelectDropdown] = useState(0);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={'Transfer'}
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
                <TouchableOpacity onPress={() => navigation.navigate('TransferFrom')} style={styles.bubleWrapper}>
                    <View style={styles.cirlceWrapper}>
                        <Text style={styles.fontName}>NW</Text>
                    </View>

                    <Text style={styles.fontNo}>bion 73849351234</Text>
                    <Text style={styles.fontRp}>Rp10.000.000</Text>
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

                    <Text style={styles.fontNo}>bion 73849351234</Text>
                    <Text style={styles.fontRp}>Rp10.000.000</Text>
                </View>
                <View
                    style={{
                        marginTop: 71
                    }}
                />

                <DropdownV2
                    title={'Transaction Type'}
                    onChange={setSelectDropdown}
                    value={selectDropdown}
                    data={TYPE}
                />

                <TextInput
                    title={'Amount'}
                    placeholder={'Rp 0'}
                    theme={'white'}
                />
                <Text style={styles.fontMax}>Max. amount Transfer <Text style={{
                    fontFamily: nunito700,
                    color: primary_blue
                }}>Rp11.000.000</Text></Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 24
                }}>
                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>Schedule</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Now</Text>
                            <IcCalendarOrange />
                        </View>
                    </View>

                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>Frequency</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Once</Text>
                            <IcCalendarOrange />
                        </View>
                    </View>
                </View>

                <Text style={styles.fontAdd}>ADDITIONAL INFO</Text>

                {(selectDropdown === 1 || selectDropdown === 2) && <>
                    <View style={{ marginTop: 10 }} />
                    <DropdownV2
                        title={'Recipient Type'}
                        placeholder={'Choose recipient type'}
                        onChange={() => { }}
                        data={TYPE}
                    />
                    <DropdownV2
                        title={'Residence Status'}
                        placeholder={'Choose residential status'}
                        onChange={() => { }}
                        data={TYPE}
                    />
                </>}

                {selectDropdown === 2 && <>
                    <View style={{ marginTop: 10 }} />
                    <DropdownV2
                        title={'Province'}
                        placeholder={'Choose province'}
                        onChange={() => { }}
                        data={TYPE}
                    />
                    <DropdownV2
                        title={'City'}
                        placeholder={'Choose city'}
                        onChange={() => { }}
                        data={TYPE}
                    />
                </>}


                <View style={{ marginTop: 10 }} />
                <TextInput
                    title={'Note (Optional)'}
                    placeholder={'Leave a note for the recipient'}
                    theme={'white'}
                />

                <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                    <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                    <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                        <Text style={styles.fontSelect}>Choose Voucher</Text>
                        <IcArrowRightOrange />
                    </View>
                </TouchableOpacity>

                <ButtonYellow
                    title={'Continue'}
                    customStyle={{
                        marginTop: 46
                    }}
                    onPress={() => navigation.navigate('TransferConfirmation')}
                />
            </ScrollView>
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
