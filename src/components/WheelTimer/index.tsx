import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {
//     WheelPicker
// } from "react-native-wheel-picker-android";
import { dark_blue, primary_blue, primary_orange, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';


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

const WheelTimer = () => {
    return (
        <View style={styles.wheelWrapper}>

            <View style={[styles.wrapperWib, { backgroundColor: dark_blue }]}>
                <Text style={styles.fontWib}>{`   `}</Text>
            </View>
            {/* <WheelPicker
                style={{
                    width: 70,
                    height: '100%'
                }}
                selectedItemTextFontFamily={nunito800}
                itemTextFontFamily={nunito400}
                itemTextSize={20}
                // hideIndicator={true}
                indicatorWidth={5}
                indicatorColor={primary_orange}
                selectedItemTextSize={36}
                selectedItemTextColor={'#ffffff'}
                itemTextColor={'#FFFFFFB2'}
                backgroundColor={dark_blue}
                data={wheelPickerData}
            />

            <Text style={styles.fontWheel}>:</Text>
            <WheelPicker
                style={{
                    width: 70,
                    height: '100%'
                }}
                selectedItemTextFontFamily={nunito800}
                itemTextFontFamily={nunito400}
                itemTextSize={20}
                // hideIndicator={true}
                indicatorWidth={5}
                indicatorColor={primary_orange}
                selectedItemTextSize={36}
                selectedItemTextColor={'#ffffff'}
                itemTextColor={'#FFFFFFB2'}
                backgroundColor={dark_blue}
                data={wheelPickerMinutes}
            /> */}
            <View style={styles.wrapperWib}>
                <Text style={styles.fontWib}>WIB</Text>
            </View>
        </View>
    );
};

export default WheelTimer;

const styles = StyleSheet.create({
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
    fontWheel: {
        fontSize: nunito800,
        fontSize: 36,
        color: white,
        marginBottom: 10
    },
});
