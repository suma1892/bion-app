import React from 'react';
import { StyleSheet, View } from 'react-native';
import { primary_yellow } from '../../assets/styles/Colors';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';

const ChangePassword = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Enter Password'}
                desc={'Enter your current password'}
            />

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'Password'}
                value={'123456789'}
                isPassword={true}
            />
            <Text css={'8-14-' + primary_yellow} style={{ alignSelf: 'flex-end', marginTop: 5 }}>Forgot Password?</Text>

            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('CreateNewPassword', { screen: 'Profile' })} onLongPress={function (): void {
                    throw new Error('Function not implemented.');
                }} />
        </ViewContainer>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({});
