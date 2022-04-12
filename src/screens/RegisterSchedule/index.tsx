import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgDatePicker, BgRegisterDecFooter, BgWithHair, IcArrowLeft } from '../../assets/Images';
import { black70, dark_blue, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito600, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { WheelTimer2 } from '../../components';

const wheelPickerData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
];

const wheelPickerMinutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05"
];


const RegisterSchedule = ({ navigation, route }) => {
    const status = route?.params?.status;

    const [selectedDate, setselectedDate] = useState(0);
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

            <View style={{
                margin: 20
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.arrowBack}>
                    <IcArrowLeft />
                </TouchableOpacity>
                <View style={{
                    marginTop: 73
                }}>
                    {status === 'new-account' &&<Text style={styles.fontStep}>ONE LAST STEP!</Text>}
                    <Text style={styles.fontInfo}>Set Up Video Call</Text>
                    <Text style={styles.fontDesc}>{`Please choose available time to receive video call\nverification from our customer service`}</Text>
                </View>

                <Text style={styles.fontTitle}>DATE</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {[...Array(9)].map((_, i) => (
                        <TouchableOpacity
                            onPress={() => setselectedDate(i)}
                            key={i.toString()}
                            style={styles.circleWrapper(selectedDate === i)}>
                            <View style={{
                                position: 'absolute',
                                top: 0,
                            }}>
                                <BgDatePicker />
                                <Text style={styles.fontMonth}>SEP</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                // marginTop: 
                            }}>
                                <Text style={styles.fontDate}>0{i + 1}</Text>
                                <Text style={styles.fontDay}>MON</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={[styles.fontTitle, { marginTop: 40, marginBottom: 10 }]}>TIME</Text>
                <WheelTimer2/>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterSent', {status: status})}
                style={styles.button}>
                <Text style={styles.fontChoose}>Make Appointment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterSchedule;

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
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        zIndex: 9999
    },
    fontInfo: {
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
    bgHair: {
        position: 'absolute',
        right: 30
    },
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        position: 'absolute',
        bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontTitle: {
        fontSize: 12,
        fontFamily: nunito700,
        color: '#FFFFFF80',
        marginTop: 24
    },
    fontMonth: {
        position: 'absolute',
        top: 6,
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: nunito700,
        color: white
    },
    circleWrapper: _ => ({
        backgroundColor: white,
        marginRight: 12,
        marginTop: 10,
        borderWidth: 3,
        borderColor: _ ? primary_yellow : primary_blue,
        aspectRatio: 1,
        width: _ ? 92 : 94,
        // backgroundColor: primary_blue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    fontDay: {
        fontFamily: nunito600,
        fontSize: 12,
    },
    fontDate: {
        fontSize: 30,
        fontFamily: nunito800,
        color: black70,
        marginTop: '20%'
    },
    fontWheel: {
        fontSize: nunito800,
        fontSize: 36,
        color: white,
        marginBottom: 10
    },
    fontWib: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
    },
    wrapperWib: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 50,
        marginLeft: 8,
        backgroundColor: white
    },
    wheelWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // marginHorizontal: 20,
        height: '40.35%',
        // height: 328,
        backgroundColor: dark_blue,
        // marginTop: 10,
    },
    lineWheel: {
        // backgroundColor: primary_orange,
        borderTopColor: primary_orange,
        borderTopWidth: 1.7,
        borderBottomColor: primary_orange,
        borderBottomWidth: 1.7,
        width: '100%',
        position: 'absolute',
        height: 70.5,
        top: '35.8%',
    },
    fontStep: {
        fontFamily: nunito400,
        fontSize: 14,
        color: primary_yellow
    }
});
