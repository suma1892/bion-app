import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcRadio } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, Text, ViewContainer } from '../../components';

const MaturityInsturction = ({navigation}) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Change Maturity Insturction'}
                navigation={navigation}
            />

            {[...Array(3)].map((_, i) => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    backgroundColor: '#221F7A',
                    marginBottom: 18,
                    borderRadius: 12
                }}>
                    <View>
                        <Text css={'8-16'}>Auto Rollover Principal Only</Text>
                        <Text css={'4-14'}>{`Extend principal amount and Transfer\ninterest to source of fund account`}</Text>
                    </View>
                    <IcRadio />
                </View>
            ))}

            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 20,
                alignSelf: 'center',
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={styles.buttonSheetClose}>
                    <Text style={styles.fontButton2}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonSheetClose, { backgroundColor: primary_yellow, borderColor: primary_yellow }]}>
                    <Text style={[styles.fontButton2, { color: primary_blue }]}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </ViewContainer>
    );
};

export default MaturityInsturction;

const styles = StyleSheet.create({
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
