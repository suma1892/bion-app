import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { black70, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';
import { ButtonYellow, DropdownV2 } from '../../components';

const PdamComponent = ({
    showError
}) => {
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const [selectType, setSelectType] = useState(0);
    return (
        <View style={{
            flex: 1,
        }}>
            <ScrollView>
                
                <DropdownV2
                    title={'PDAM Area'}
                    data={[{title: 'PDAM Cihampelas'}, {title: 'PDAM JAKARTA'}, {title: 'PDAM TASIKMALATA'}]}
                    placeholder={'select pdam'}
                    onChange={()=>{}}
                />

                <Text style={styles.fontAccount}>PDAM ID</Text>
                <View style={styles.checkWrapper}>
                    <TextInput
                        value={'331284896027'}
                        style={styles.input}
                    />
                    <Text style={[styles.fontResultName, { color: primary_orange, fontSize: 14 }]}>CHECK</Text>
                </View>

                <View style={styles.resultWrapper}>
                    <View style={styles.cirlceWrapper}>
                        <Text style={styles.fontName}>NW</Text>
                    </View>
                    <Text style={styles.fontResultName}>Nicodemus Wijaya</Text>
                </View>

            </ScrollView>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    marginTop: 20,
                }}
                onPress={() => navigation.navigate('Postpaid', { screen: 'pdam' })}
                onLongPress={() => showError(true)}
            />
        </View>
    );
};

export default PdamComponent;

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
