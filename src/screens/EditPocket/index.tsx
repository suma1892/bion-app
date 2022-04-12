import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcFemale, IcGreenCheck, IcMaleCheck } from '../../assets/Images';
import { bluePale, primary_blue, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { width } from '../../assets/styles/Sizing';
import { ModalPocketUpgrade } from '../../components';
const COLORS = [bluePale, primary_yellow, primary_red, '#FFD05E', '#8C9DF4'];

const BionPocketDefault = ({ navigation }) => {
    const [selectColor, setSelectColor] = useState(-1);
    const [modalPocket, setModalPocket] = useState(false);
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
                        {/* <BgWomenPark width={width} height={height} /> */}
                        {/* <BgPocketDefault width={width} height={height} /> */}
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
                        <Text style={styles.fontSubTitle}>Edit bion Pocket</Text>
                    </View>

                    <View>
                        <Text style={[styles.fontTitle, { marginTop: 20 }]}>Pocket Name</Text>

                        <TextInput
                            style={{
                                backgroundColor: '#7D1F73',
                                // opacity: 0.7,
                                marginTop: 10,
                                color: white,
                                borderRadius: 6,
                                fontFamily: nunito700,
                                padding: Platform.OS === 'ios' ? 10 : 0,
                            }}
                            value={'Vacation Pocket'}
                        />
                    </View>

                    <Text style={[styles.fontTitle, { marginTop: 20 }]}>Avatar</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <IcMaleCheck />
                            <Text style={styles.fontGender}>Male</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '50%'
                        }}>
                            <IcFemale />
                            <Text style={styles.fontGender}>Female</Text>
                        </View>
                    </View>

                    <Text style={[styles.fontTitle, { marginTop: 20, marginBottom: 10 }]}>Background Color</Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>

                        {COLORS.map((_, i) => (
                            <TouchableOpacity onPress={() => setSelectColor(i)} key={i.toString()}>
                                {selectColor === i && <View style={styles.checkWrapper}>
                                    <IcGreenCheck />
                                </View>}
                                <View
                                    style={styles.colorsWrapper(_)}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        // position: 'absolute',
                        // bottom: 20,
                        marginTop: 32,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionPin')} style={styles.buttonSheetClose}>
                            <Text style={styles.fontButton2}>CANCEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalPocket(!modalPocket)}
                            style={[styles.buttonSheetClose, { backgroundColor: primary_yellow, borderColor: primary_yellow }]}>
                            <Text style={[styles.fontButton2, { color: primary_blue }]}>SAVE</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>

            <ModalPocketUpgrade modalVisible={modalPocket} setModalVisible={()=>setModalPocket(!modalPocket)} />
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
    fontGender: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white,
        marginLeft: 10
    },
    checkWrapper: {
        position: 'absolute',
        top: 0,
        right: 10,
        zIndex: 99
    },
    colorsWrapper: _ => ({
        height: 60,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: _,
        marginRight: 16
    }),
    buttonSheetClose: {
        padding: 14,
        width: '49%',
        borderWidth: 1,
        borderColor: white,
        alignItems: 'center',
        borderRadius: 50
    },
    fontButton2: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    },
});
