import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { BgTransferConf } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_red, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, MainHeader } from '../../components';
const entries = [
    {
        title: "Item 1",
        text: "Text 1",
    },
    {
        title: "Item 2",
        text: "Text 2",
    },
    {
        title: "Item 3",
        text: "Text 3",
    },
]

const ChoosePrize = ({ navigation }) => {

    const [positon, setPositon] = useState(0);

    function _renderItem({ item, index }) {
        return (
            <Image
                source={require('../../assets/Images/File/sample-iphone.png')}
                style={{
                    height: 376,
                    width: 288
                }}
            />
        )
    }
    return (
        <View style={{
            backgroundColor: primary_blue,
            flex: 1
        }}>
            <View style={styles.bgHeader}>
                <BgTransferConf width={width} height={height} />
            </View>
            <View style={{
                padding: 20
            }}>
                <MainHeader
                    title={'Choose Hadiah'}
                    navigation={navigation}
                />
            </View>
            <ScrollView>
                <View style={{
                    // paddingHorizontal: 20
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <Text style={styles.fontGadget}>GADGET</Text>
                            <View
                                style={{
                                    borderBottomColor: primary_yellow,
                                    borderBottomWidth: 2,
                                    width: 35,
                                    marginTop: 6
                                }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <Text style={{
                                fontFamily: nunito300,
                                fontSize: 12,
                                color: '#FFFFFF80',
                            }}>CASHBACK</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 44
                    }} />
                    <Carousel
                        // ref={(c) => { this._carousel = c; }}
                        data={entries}
                        renderItem={_renderItem}
                        sliderWidth={width}
                        showsHorizontalScrollIndicator={false}
                        itemWidth={300}
                        onSnapToItem={index => setPositon(index)}
                    />
                    <Text style={styles.fontTitle}>{`${positon + 1} OF ${entries.length}`}</Text>
                    <Text style={styles.fontDesc2}>iPhone 13 Pro Sierra Blue</Text>
                    <Text style={[styles.fontTitle, { textAlign: 'center' }]}>{`Hadiah will be sent within 4 weeks\nafter realization date`}</Text>
                </View>
                <View style={{
                    marginTop: 32,
                    height: 360,
                    width: width
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: -9999
                    }}>
                        <Image
                            source={require('../../assets/Images/File/bg-zigzag.png')}
                            style={{
                                width: width,
                                height: 360,

                            }}
                        />
                    </View>
                    <View style={{
                        padding: 20
                    }}>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Initial Deposit</Text>
                            <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp30 Million</Text>
                        </View>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Monthly Top Up</Text>
                            <Text style={[styles.fontRowHeader, { fontFamily: nunito700 }]}>Rp5 Million</Text>
                        </View>
                        <View style={styles.rowWrapper}>
                            <Text style={styles.fontRowHeader}>Tenure</Text>
                            <Text style={[styles.fontRowHeader, { fontFamily: nunito700, color: primary_red }]}>5 Years</Text>
                        </View>
                    </View>
                    <ButtonYellow
                        title={'Create This Savings'}
                        customStyle={{
                            marginTop: 32
                        }}
                        onPress={() => navigation.navigate('CreateTabkaPrize')}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default ChoosePrize;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
        marginTop: 24,
        alignSelf: 'center'
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
    fontDesc2: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white,
        alignSelf: 'center'
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
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
        // marginTop: 42,
    },
    fontHeader: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70
    },
    fontDesc: {
        fontFamily: nunito700,
        fontSize: 17,
        color: white
    },
    fontAmount: {
        fontFamily: nunito700,
        fontSize: 12,
        color: primary_blue,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
    },
    fontRowHeader: {
        fontFamily: nunito400,
        fontSize: 16,
        color: black70
    },
    fontTerm: {
        marginLeft: 10,
        fontFamily: nunito400,
        fontSize: 12,
        color: 'rgba(51, 51, 51, 0.7)',
    },
    fontGadget: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
    },
    bgHeader: {
        position: 'absolute',
        top: '-40%',
        width: width,
        zIndex: -99
    },
});
