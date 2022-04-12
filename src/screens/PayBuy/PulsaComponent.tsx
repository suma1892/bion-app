import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcContact } from '../../assets/Images';
import { black70, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';
import { ButtonYellow } from '../../components';

const PulsaComponent = ({
    showError
}) => {
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const [selectPLn, setSelectPLn] = useState(0);
    return (
        <View style={{
            flex: 1,
        }}>
            <ScrollView>
                <Text style={styles.fontTitle}>PLN Type</Text>

                <View style={styles.genderWrapper}>
                    <TouchableOpacity onPress={()=>setSelectPLn(0)} style={[styles.buttonGender(selectPLn === 0), { borderTopLeftRadius: 27, borderBottomLeftRadius: 27, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}>
                        <Text style={styles.fontGender(selectPLn === 0)}>PRE-PAID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setSelectPLn(2)} style={[styles.buttonGender(selectPLn === 2), , { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 27, borderBottomRightRadius: 27 }]}>
                        <Text style={styles.fontGender(selectPLn === 2)}>POST-PAID</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.fontAccount}>Account Number</Text>
                <View style={styles.checkWrapper}>
                    <TextInput
                        value={'331284896027'}
                        style={styles.input}
                    />
                    <IcContact/>
                </View>

            </ScrollView>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    marginTop: 20,
                }}
                onPress={() => navigation.navigate(selectPLn === 0 ? 'Prepaid' : 'Postpaid', {screen: 'pulsa'})}
                onLongPress={()=>showError(true)}
            />
        </View>
    );
};

export default PulsaComponent;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: '#333333B2'
    },
    buttonGender: _ => ({
        width: '50%',
        backgroundColor: !_ ? white : primary_blue,
        borderWidth: 1,
        borderColor: primary_blue,
        alignItems: 'center',
        paddingVertical: 13,
    }),
    fontGender: _ => ({
        fontSize: 12,
        fontFamily: nunito400,
        color: !_ ? primary_blue : '#FFFFFFB2'
    }),
    genderWrapper: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 12
    },
    checkWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 12,
        borderRadius: 6,
        marginTop: 6
    },
    input: {
        padding: Platform.OS === 'android' ? 0 : 10,
        fontFamily: nunito700,
        fontSize: 16,
        color: black70,
        width: '80%'
    },
    fontAccount: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70,
        marginTop: 22
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    cirlceWrapper: {
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_yellow
    },
    resultWrapper: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fontResultName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: black70,
        marginLeft: 12
    }
});
