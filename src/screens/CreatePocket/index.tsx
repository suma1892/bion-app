import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowDownWhite, IcArrowRightOrange, IcFemale, IcGreenCheck, IcMaleCheck } from '../../assets/Images';
import { black70, bluePale, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { width } from '../../assets/styles/Sizing';
import { ButtonYellow } from '../../components';
import CustomInput from './CustomInput';
const COLORS = [bluePale, primary_yellow, primary_orange, '#FFD05E', '#8C9DF4'];

const CreatePocket = ({navigation}) => {
    const [selectColor, setSelectColor] = useState(0);
    return (
        // <View  >
        <View style={{ flex: 1, backgroundColor: '#B22DA4' }}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{
                    marginTop: '-19%',
                }}>
                    <Image
                        source={require('../../assets/Images/File/bg-pocket.png')}
                        style={{
                            width: width,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
                <View style={{ marginTop: '-10%', paddingHorizontal: 20 }}>
                    <Text style={styles.fontHeader}>Create bion Pocket</Text>
                    <View style={{ marginTop: 10 }} />
                    <CustomInput
                        title={'Pocket Name'}
                        value={'Vacation Pocket'}
                        theme={'red'}
                    />
                    <Text style={styles.fontTitle}>Avatar</Text>
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

                    <Text style={styles.fontTitle}>Background Color</Text>

                    <ScrollView horizontal>
                        {COLORS.map((_, i) => (
                            <TouchableOpacity
                                onPress={() => setSelectColor(i)}
                                key={i.toString()}
                                style={styles.colorWrapper(_)}>
                                {selectColor === i && <View style={{
                                    position: 'absolute',
                                    right: 0
                                }}>
                                    <IcGreenCheck />
                                </View>}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Text style={styles.fontTitle}>Autodebet From</Text>

                    <TouchableOpacity onPress={() => { }} style={styles.bubleWrapper}>
                        <View style={styles.cirlceWrapper}>
                            <Text style={styles.fontName}>NW</Text>
                        </View>
                        <View>
                            <Text style={styles.fontNo}>bion 73849351234</Text>
                            <Text style={styles.fontRp}>Rp10.000.000</Text>
                        </View>
                        <IcArrowDownWhite />
                    </TouchableOpacity>

                    <View style={{ marginTop: 24 }} />
                    <CustomInput
                        title={'Initial Deposit'}
                        value={'1.000.000'}
                    />
                    <Text style={[styles.fontTitle, { marginTop: 10 }]}>Min. amount <Text style={{ fontFamily: nunito700 }}>Rp250.000</Text></Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{}}>
                        <Text style={styles.fontTitle}>Voucher (Optional)</Text>
                        <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                            <Text style={styles.fontGender}>Choose Voucher</Text>
                            <IcArrowRightOrange />
                        </View>
                    </TouchableOpacity>

                    <ButtonYellow
                        title={'Create bion Pocket'}
                        customStyle={{
                            marginTop: 20
                        }}
                        onPress={()=>navigation.navigate('CreatePocketConfirmation')}
                    />
                </View>


            </ScrollView>
        </View>
        // </View>
    );
};

export default CreatePocket;

const styles = StyleSheet.create({
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white
    },
    fontGender: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white,
        marginLeft: 10
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white,
        marginTop: 22,
        marginBottom: 10
    },
    colorWrapper: _ => ({
        height: 60,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: _,
        marginRight: 16
    }),
    bubleWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        paddingRight: 10,
        backgroundColor: '#540A7F',
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
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontNo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 12,
        marginTop: 4,
    },
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: black70,
    },
});
