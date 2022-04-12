import React from 'react';
import { StyleSheet, View } from 'react-native';
import { primary_yellow } from '../../assets/styles/Colors';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';

const ChangeEmail = ({ navigation }) => {
    return (
        <ViewContainer backgroundColor={undefined}>
            <MainHeader
                title={'Change E-mail'} DescAjx={undefined} Ic={undefined} />

            <Text css={'4-12'} style={{ marginTop: 24 }}>Current Nickname</Text>
            <Text css={'7-16'}>Jonathan Ong</Text>

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'New E-mail'}
                placeholder={'Enter new e-mail'}
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
                title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('VerifyAccountEmail', { screen: 'Profile' })}
            />
        </ViewContainer>
    );
};

export default ChangeEmail;

const styles = StyleSheet.create({});
