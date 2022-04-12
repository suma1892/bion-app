import { Slider } from '@miblanchard/react-native-slider';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcArrowRightOrange, IcDots, IcEducation, IcFlight, IcGreenCheck, IcHousing, IcRetirement, IcWedding } from '../../assets/Images';
import { black50, black70, bluePale, primary_blue, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, TextInput, ViewContainer } from '../../components';
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
const Transfer = ({ navigation }) => {
    const [selectGoals, setSelectGoals] = useState(0);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <MainHeader
                navigation={navigation}
                title={'Create Tabka Flex'}
                desc={'Make sure you choose the right account to autodebet from'}
            />
            <View style={{
                position: 'absolute',
                width: width,
                zIndex: -99
            }}>
                <Image
                    source={require('../../assets/Images/File/bg-transfer.png')}
                />
            </View>
            <View style={{
                position: 'absolute',
                // width: width,
                zIndex: -9,
                right: 0
            }}>
                <Image
                    source={require('../../assets/Images/File/bg-header-flex.png')}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ width: width, marginLeft: -20 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={[styles.fontTitle2, { color: white70, marginTop: 24, marginBottom: 15 }]}>Goal</Text>
                    <ScrollView horizontal>
                        {GOALS.map((_, i) => (
                            <TouchableOpacity
                                key={i.toString()}
                                onPress={() => setSelectGoals(i)}
                                style={{
                                    marginRight: 20,
                                    alignItems: 'center'
                                }}>
                                {selectGoals === i && <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    zIndex: 999,
                                    right: 0
                                }}>
                                    <IcGreenCheck />
                                </View>}
                                <_.Ic />
                                <Text style={styles.fontTitle3}>{_.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {GOALS[selectGoals].title === 'Others' &&
                        <>
                            <View style={{ marginTop: 20 }} />
                            <TextInput
                                title={'Other Goal'}
                                placeholder={'ex. DP Rumah'}
                            />
                            <Text style={styles.fontNo}>0 of 80 characters</Text>
                        </>
                    }

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

                    <TextInput
                        title={'Goal Amount'}
                        placeholder={'Rp 0'}
                        theme={'white'}
                    />

                    <Text style={[styles.fontTitle2, { color: black70, marginTop: 24, marginBottom: 15 }]}>Tenure Type</Text>

                    <View style={styles.genderWrapper}>
                        <TouchableOpacity style={styles.buttonGender(false)}>
                            <Text style={styles.fontGender(false)}>MONTH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGender(true)}>
                            <Text style={styles.fontGender(true)}>YEAR</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.fontTitle2, { color: black70, marginTop: 24, marginBottom: 15 }]}>Tenure</Text>
                    <Text style={{
                        fontFamily: nunito800,
                        fontSize: 20,
                        color: 'black'
                    }}>10 Month</Text>
                    <Slider
                        maximumTrackTintColor={'#E0E0E0'}
                        thumbTintColor={primary_yellow}
                        minimumTrackTintColor={primary_yellow}
                    // value={this.state.value}
                    // onValueChange={value => this.setState({ value })}
                    />
                </View>
                <View style={{
                    marginBottom: 80
                }}>
                    <View style={styles.noteWrapper}>
                        <Text style={{
                            fontFamily: nunito400,
                            fontSize: 12,
                            color: black70
                        }}>Monthly Deposit</Text>
                        <Text style={{
                            fontFamily: nunito800,
                            fontSize: 16,
                            marginTop: 4,
                            color: black50
                        }}>Rp1.200.000 / Month</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                        <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                        <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                            <Text style={styles.fontSelect}>Choose Voucher</Text>
                            <IcArrowRightOrange />
                        </View>
                    </TouchableOpacity>

                    <ButtonYellow
                        title={'CONTINUE'}
                        customStyle={{
                            marginTop: 20
                        }}
                        onPress={()=>navigation.navigate('CreateTabkaConfirmation')}
                    />
                </View>

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
