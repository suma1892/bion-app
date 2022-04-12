import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { dark_blue, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('screen');

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
    const [isTimer, setisTimer] = useState(0);
    function _renderItem({ item, index }) {
        return (
            <Text style={styles.fontTimer(isTimer === index)}>10</Text>
        )
    }
    return (
        <View style={styles.wheelWrapper}>
            <View
                style={{
                    backgroundColor: primary_orange,
                    height: 50,
                    width: '100%',
                    position: 'absolute',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={[styles.fontTimer(true), {position: 'absolute', left: '51%', height: '100%', fontSize: 32}]}>:</Text>
                <Text style={[styles.fontTimer(true), {position: 'absolute', left: '58%'}]}>00</Text>
                <View style={[styles.wrapperWib, {position: 'absolute', left: '70%'}]}>
                    <Text style={styles.fontWib}>WIB</Text>
                </View>
            </View>
            <View style={{
                width: '15%',
                marginLeft: '35%'
            }}>
                <Carousel
                    vertical={true}
                    data={[...Array(10)]}
                    renderItem={_renderItem}
                    slideStyle={{
                        // backgroundColor: 'red',
                        paddingTop: 1.5
                    }}
                    itemHeight={50}
                    sliderHeight={228}
                    onSnapToItem={index => setisTimer(index)}
                />
            </View>
            {/* <Carousel
                vertical={true}
                data={[...Array(10)]}
                renderItem={_renderItem}
                itemHeight={50}
                sliderHeight={228}
                onSnapToItem={index => console.log('index ', index)}
            /> */}

        </View>
    );
};

export default WheelTimer;

const styles = StyleSheet.create({
    wheelWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1,
        borderRadius: 10,
        // marginHorizontal: 20,
        // height: '40.35%',
        height: 228,
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
        backgroundColor: white,
        // width: '12%'
    },
    fontWheel: {
        fontSize: nunito800,
        fontSize: 36,
        color: white,
        marginBottom: 10
    },
    fontTimer: (isTimer) => ({
        color: white,
        fontFamily: isTimer ? nunito800 : nunito400,
        fontSize: isTimer ? 36 : 20
    }),
});
