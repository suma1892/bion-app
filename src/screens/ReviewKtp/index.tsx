import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { BgRegisterDecFooter, BgWithHair, IcArrowLeft, IcCalendar, IcCheckboxUnCheckedOrange, IcDropdown, SampleKtp } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { TextInput } from '../../components';

const ReviewKtp = ({ navigation, route }) => {
    const status = route?.params?.status;
    console.log('status = ', status);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isTop, setIsTop] = useState(true);

    const handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
        if (event.nativeEvent.contentOffset.y === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: primary_blue,
        }}>
            <View style={styles.bgHeader}>
                <BgWithHair />
            </View>
            <View style={styles.bgFooter}>
                <BgRegisterDecFooter />
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.arrowBack(isTop)}>
                <IcArrowLeft />
                <Text style={[styles.fontAsking, { marginTop: isTop ? 25 : 0 }]}> Review KTP</Text>
            </TouchableOpacity>
            <ScrollView
                onScroll={handleScroll}
            >
                <View style={{
                    margin: 20
                }}>

                    <View style={{
                        marginTop: 72
                    }}>
                    </View>


                    <Text style={styles.fontDesc}>{`Please check your photo and fill in your\nKTP information`}</Text>
                    <View style={{
                        alignSelf: 'center',
                        width: '100%',
                        marginTop: 24
                    }}>
                        <SampleKtp width={'100%'} />
                    </View>

                    <Text style={styles.fontTitle}>PERSONAL INFORMATION</Text>
                    <View
                        style={styles.m14}
                    />
                    <TextInput
                        title={'KTP Number'}
                        value={'31730505123446678'}
                        placeholder={'Enter Ktp Number'}
                    />

                    <View
                        style={styles.m14}
                    />
                    <TextInput
                        title={'Full Name'}
                        value={'Jonathan Ong'}
                        placeholder={'Enter Full Name'}
                    />

                    {status === 'new-account' && <>
                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Birthplace</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select birthplace</Text>
                            <IcDropdown />
                        </View>
                        <View style={styles.checkedWrapper}>
                            <IcCheckboxUnCheckedOrange />
                            <Text style={[styles.fontDesc2, { marginTop: 0 }]}> I was born out of Indonesia</Text>
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Date of Birth</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Date of Birth</Text>
                            <IcCalendar />
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Gender</Text>
                        <View style={styles.genderWrapper}>
                            <TouchableOpacity style={styles.buttonGender(false)}>
                                <Text style={styles.fontGender(false)}>MALE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonGender(true)}>
                                <Text style={styles.fontGender(true)}>FEMALE</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Marriage Status</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select marriage status</Text>
                            <IcDropdown />
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Religion</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select religion</Text>
                            <IcDropdown />
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <Text style={styles.fontTitle2}>Nationality</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Select nationality</Text>
                            <IcDropdown />
                        </View>

                        <View
                            style={styles.m14}
                        />
                        <TextInput
                            title={'Work/Profession'}
                            // value={'11301'}
                            placeholder={'Enter work/profession'}
                        />

                        <View
                            style={styles.m14}
                        />
                        <TextInput
                            title={'Mother’s Maiden Name'}
                            // value={'11301'}
                            placeholder={'Enter mother’s maiden name'}
                        />
                    </>}

                    <Text style={styles.fontTitle}>KTP ADDRESS</Text>
                    <View
                        style={styles.m14}
                    />
                    <TextInput
                        title={'Postal Code'}
                        // value={'11301'}
                        placeholder={'Enter Postal Code'}
                    />
                    <Text style={styles.fontDesc2}>{`Kebun Kosong, Kec. Kemayoran, Jota Jakarta Pusat,\nDKI Jakarta`}</Text>
                    <View
                        style={styles.m14}
                    />
                    <TextInput
                        title={'Address'}
                        // value={'11301'}
                        placeholder={'Enter address'}
                    />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[styles.fontTitle, { marginTop: 12 }]}>{`Use KTP address as my mailing\naddress`}</Text>
                        <Switch
                            trackColor={{ false: dark_blue, true: primary_yellow }}
                            thumbColor={isEnabled ? white : white}
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    {status === 'new-account' &&
                        <>
                            <Text style={styles.fontTitle}>MAILING ADDRESS</Text>
                            <View
                                style={styles.m14}
                            />
                            <TextInput
                                title={'Postal Code'}
                                // value={'11301'}
                                placeholder={'Enter Postal Code'}
                            />
                            <View
                                style={styles.m14}
                            />
                            <TextInput
                                title={'Mailing Address'}
                                // value={'11301'}
                                placeholder={'Enter mailing address'}
                            />
                        </>}
                </View>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('CustomPrintedName', {status: status}) }}
                    style={styles.button}>
                    <Text style={styles.fontChoose}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>



        </View>
    );
};

export default ReviewKtp;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0
    },
    arrowBack: isTop => ({
        position: 'absolute',
        left: 20,
        zIndex: 9999,
        flexDirection: isTop ? 'column' : 'row',
        alignItems: isTop ? 'baseline' : 'center',
        width: '100%',
        backgroundColor: isTop ? 'transparent' : primary_blue,
        marginTop: isTop ? 10 : 0,
        paddingVertical: isTop ? 0 : 10,
    }),
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },
    fontDesc2: {
        fontFamily: nunito400,
        color: white,
        fontSize: 12,
        marginTop: 6
    },
    bgHair: {
        position: 'absolute',
        right: 30
    },
    button: {
        width: '75%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        marginVertical: 30
        // position: 'absolute',
        // bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontTitle: {
        fontSize: 12,
        fontFamily: nunito700,
        color: white,
        marginTop: 32,

    },
    m14: {
        marginTop: 14,
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: dark_blue,
        padding: 12,
        marginTop: 4
    },
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: '#FFFFFFB2',
    },
    fontSelect: {
        fontFamily: nunito400,
        fontSize: 16,
        color: '#FFFFFF80'
    },
    checkedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    buttonGender: _ => ({
        width: '50%',
        backgroundColor: _ ? white : primary_blue,
        borderWidth: 1,
        borderColor: white,
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
        marginTop: 12
    },
});
