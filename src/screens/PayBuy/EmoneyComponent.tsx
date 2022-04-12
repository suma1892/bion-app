import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcBisaCash } from '../../assets/Images';
import { black70, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { ButtonYellow, TextInput } from '../../components';

const EmoneyComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: white,
            // margin: 20
        }}>
            <Text style={styles.fontMoney}>E-Money Provider</Text>

            <View style={styles.wrapperBank}>
                <IcBisaCash />
                <Text style={styles.fontBank}>Bank Mestika Bisa Cash</Text>
            </View>

            <TextInput
                title={'Card Number'}
                value={'12321343254251462'}
                theme={white}
            />
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    marginTop: 20
                }}
                onPress={() => navigation.navigate('Postpaid', { screen: 'e-money' })}
            />
        </View>
    );
};

export default EmoneyComponent;

const styles = StyleSheet.create({
    fontBank: {
        fontFamily: nunito400,
        fontSize: 16,
        color: black70,
        marginLeft: 10
    },
    wrapperBank: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    fontMoney: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70
    },
});
