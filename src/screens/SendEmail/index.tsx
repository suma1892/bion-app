import { StyleSheet, View } from 'react-native';
import React from 'react';
import { MainHeader, ViewContainer, Text, ButtonYellow, TextInput, Dropdown } from '../../components';
import { primary_orange, primary_yellow } from '../../assets/styles/Colors';

const SendEmail = ({navigation}) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Send E-mail'}
            />

            <Text css={'4-12'} style={{ marginTop: 24 }}>Current Nickname</Text>
            <Text css={'7-16'}>Jonathan Ong</Text>

            <Text css={'4-12'} style={{ marginTop: 24 }}>E-mail</Text>
            <Text css={'7-16'}>*****ong@gmail.com</Text>

            
            <Dropdown
                placeholder={'Select topic'}
                title={'Topic'}
            />

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'Message'}
                placeholder={'Message'}
            />
            
            

            <ButtonYellow
                title={'SUBMIT'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('VerifyAccountEmail', {screen: 'Profile'})}
            />
        </ViewContainer>
    );
};

export default SendEmail;

const styles = StyleSheet.create({});
