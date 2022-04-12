import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';

const ChangeAddress = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Change Mailing Address'}
                desc={'Set your mailing address for card or document deliveries'}
            />

            <Text css={'4-12'} style={{ marginTop: 24 }}>Current Address</Text>
            <Text css={'7-16'}>Jl. Jurangmangu Barat no. 8, Pondok Aren, Tangerang Selatan, Banten, 12345</Text>

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'Postal code'}
                placeholder={'Enter postal code'}
            />

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'Address'}
                placeholder={'Enter address'}
            />

            <ButtonYellow
                title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('Profile')}
            />
        </ViewContainer>
    );
};

export default ChangeAddress;

const styles = StyleSheet.create({});
