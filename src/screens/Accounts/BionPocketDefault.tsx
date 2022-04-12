import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonYellow, ViewContainer } from '../../components';
import { BgHomeSwiped, BgPocketDefault, BgPocketTab, IcArrowRight, IcFreeAdmin, IcHairSwiped } from '../../assets/Images';
import { height, width } from '../../assets/styles/Sizing';
import { nunito400, nunito800, nunito700 } from '../../assets/styles/FontFamily';
import { primary_yellow, white, white50 } from '../../assets/styles/Colors';

const BionPocketDefault = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#720BAD'
        }}>
            <ScrollView>
                <View style={{
                    margin: 20,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: '-15%',
                        left: -20,
                    }}>
                        <Image
                            source={require('../../assets/Images/File/bg-women-park.png')}
                            style={{
                                width: width,
                                height: 600,
                                resizeMode: 'contain'
                            }}
                        />

                    </View>

                    <View style={{
                        // alignItems: 'center',
                        marginTop: '130%',
                    }}>
                        <Text style={styles.fontTitle}>{`TOTAL BION POCKET`}</Text>
                        <Text style={styles.fontSubTitle}>Rp30.000.000</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('PocketVacation')} style={styles.boxWrapper}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <View style={styles.circleText}>
                                    <Text style={styles.fontCirlce}>VP</Text>
                                </View>

                                <View style={{
                                    marginLeft: 20
                                }}>
                                    <Text style={styles.fontTitle2}>Vacation Pocket</Text>
                                    <Text style={styles.fontNumber}>123456124234</Text>
                                </View>

                            </View>

                            <Text style={[styles.fontTitle2, { marginTop: 10 }]}>BALANCE</Text>
                            <Text style={styles.fontNumber2}>Rp12.000.000</Text>

                        </View>

                        <IcArrowRight />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxWrapper}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <View style={styles.circleText}>
                                    <Text style={styles.fontCirlce}>VP</Text>
                                </View>

                                <View style={{
                                    marginLeft: 20
                                }}>
                                    <Text style={styles.fontTitle2}>Vacation Pocket</Text>
                                    <Text style={styles.fontNumber}>123456124234</Text>
                                </View>

                            </View>

                            <Text style={[styles.fontTitle2, { marginTop: 10 }]}>BALANCE</Text>
                            <Text style={styles.fontNumber2}>Rp18.000.000</Text>

                        </View>

                        <IcArrowRight />
                    </TouchableOpacity>


                    <ButtonYellow
                        title={'Create bion Pocket'}
                        customStyle={{
                            marginTop: 20
                        }} onPress={function (): void {
                            throw new Error('Function not implemented.');
                        }} onLongPress={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                </View>
            </ScrollView>
        </View>
    );
};

export default BionPocketDefault;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white50,
    },
    fontNumber: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white,
    },
    fontNumber2: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white,
    },
    fontTitle2: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white50,
    },
    fontSubTitle: {
        fontFamily: nunito800,
        fontSize: 30,
        color: white,
    },
    fontCirlce: {
        fontFamily: nunito400,
        fontSize: 20,
        color: white,
    },
    circleText: {
        height: 48,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7D1F73',
        padding: 20,
        borderRadius: 12,
        marginTop: 20
    },
});
