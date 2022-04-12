import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowRight, IcArrowRightOrange, IcDots, IcEducation, IcFlight, IcHousing, IcRetirement, IcWedding } from '../../assets/Images';
import { black70, bluePale, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const GOALS = [
    {
        title: 'Education',
        Ic: () => <IcEducation />
    },
    {
        title: 'Retirement',
        Ic: () => <IcRetirement />
    },
    {
        title: 'Wedding',
        Ic: () => <IcWedding />
    },
    {
        title: 'Housing',
        Ic: () => <IcHousing />
    },
    {
        title: 'Vacation',
        Ic: () => <IcFlight />
    },
    {
        title: 'Others',
        Ic: () => <IcDots />
    },

]
const CreateTabkaPrize = ({ navigation }) => {
    const [selectGoals, setSelectGoals] = useState(0);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <MainHeader
                navigation={navigation}
                title={'Create Tabka Hadiah'}
                desc={'Make sure you choose the right account to autodebet from'}
            />
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransfer width={width} height={height} />
            </View>

                <View style={{ paddingHorizontal: 20 }}>


                    <Text style={[styles.fontTitle2, { color: white70, marginTop: 24, marginBottom: 15 }]}>Autodebet From</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 0 }}>
                            <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                            <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                                <Text style={styles.fontSelect}>Choose Voucher</Text>
                                <IcArrowRightOrange />
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>

            <ButtonYellow
                title={'CONTINUE'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center'
                }}
                onPress={() => navigation.navigate('CreateTabkaConfirmation')}
            />
        </ViewContainer>
    );
};

export default CreateTabkaPrize;

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
    
});
