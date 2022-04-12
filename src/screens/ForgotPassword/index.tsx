import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcRadio, IcRadioSelected } from '../../assets/Images';
import { black70, dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, ViewContainer } from '../../components';

const LIST = [
    {
        title: 'ATM Info',
        desc: 'Verify using ATM card number and ATM PIN'
    },
    {
        title: 'Account Number/KTP',
        desc: 'Verify using account number/KTP number and app transaction PIN'
    },
    {
        title: 'ATM Info',
        desc: 'You will be asked to have video call to verify your identity'
    },
]
const ForgotPassword = ({ navigation }) => {
    const [selectList, setSelectList] = useState(-1);

    return (
        <ViewContainer>
            <MainHeader
                title={'I can’t remember my info'}
                desc={'Confirm your identity to reset your password'}
            />
            <View
                style={{
                    marginBottom: 24
                }}
            />
            <ScrollView>
                {LIST.map((_, i) => (
                    <View key={i} style={{
                        marginBottom: 16
                    }}>
                        <TouchableOpacity
                            onPress={() => setSelectList(i)}
                            key={i}
                            style={styles.boxWrapper}>
                            <View style={{
                                width: '80%'
                            }}>
                                <Text style={styles.fontTitle}>{_.title}</Text>
                                <Text style={styles.fontDesc}>{_.desc}</Text>
                            </View>

                            {selectList === i ? <IcRadioSelected /> : <IcRadio />}

                        </TouchableOpacity>
                        {(selectList === i && i !== 2) ? <View style={{
                            backgroundColor: white,
                            padding: 16,
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12
                        }}>
                            <Text style={styles.fontAtm}>{selectList === 0 ? `ATM Card Number` : selectList === 1 ? `bion Account or KTP Number` : ''}</Text>
                            <View style={styles.boxWrapperAtmContent}>
                                <Text style={[styles.fontDesc, { color: white }]}>{`Account Number`}</Text>
                                <View style={styles.wrapperInput}>
                                    <TextInput
                                        style={styles.fontInput}
                                        value='12344535635243'
                                    />
                                    <Text style={styles.fontCheck}>Check</Text>
                                </View>
                            </View>
                        </View> : <View />}
                    </View>
                ))}
            </ScrollView>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate(selectList === 2? 'VerifyAccountMobile' : 'TransactionPin', { screen: 'no-info' })}
            />
        </ViewContainer>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    boxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: dark_blue,
        padding: 20,
        borderRadius: 12,

    },
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white
    },
    boxWrapperAtmContent: {
        // padding: 16,
        // marginTop: 16,
        // backgroundColor: white,
        width: '100%',
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: white,
        borderRadius: 6,
        // marginTop: 6,
        justifyContent: 'space-between',
    },
    fontCheck: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_yellow,
        marginRight: 12
    },
    fontInput: {
        fontSize: 16,
        fontFamily: nunito700,
        color: black70,
        padding: 10
    },
    fontAtm: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70
    }
});
