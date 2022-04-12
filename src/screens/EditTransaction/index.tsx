import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowRight, IcCalendarOrange, IcDropdownOrange } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, Text, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const VirtualAccount = ({ navigation }) => {

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <MainHeader
                title={'Edit Transaction'}
                desc={"You can update transaction date max. 1 day before previous schedule"}
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
            <Text css={'4-12-' + white70} style={{ marginTop: 24 }}>Source of Fund </Text>
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
                margin: 20,
                marginTop: 71
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 24
                }}>
                    <Info
                        title={'Schedule'}
                        desc={'Every 31st'}
                    />
                    <Info
                        title={'Frequency'}
                        desc={'Monthly'}
                    />
                </View>

                <Text css={'4-12-' + black70} style={{ marginTop: 24 }}>Recurring Transfer on 29th, 30th, and 31st will automatically done on the same date or the last day of the month</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 24
                }}>
                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>New Schedule</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select date</Text>
                            <IcCalendarOrange />
                        </View>
                    </View>

                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>Frequency</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select option</Text>
                            <IcDropdownOrange />
                        </View>
                    </View>
                </View>
            </View>
            {/* </ScrollView> */}
            <ButtonYellow
                title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('TransactionPin', {screen: 'EditTransaction'})}
            />
        </ViewContainer>
    );
};

export default VirtualAccount;

const Info = ({ title, desc, style }) => (
    <View style={[style, { width: '50%' }]}>
        <Text css={'4-12-#33333380'}>{title}</Text>
        <Text css={'4-16-#333333'}>{desc}</Text>
    </View>
)

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
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginTop: 7,
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
        fontFamily: nunito400,
        fontSize: 16,
        color: '#33333380'
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
