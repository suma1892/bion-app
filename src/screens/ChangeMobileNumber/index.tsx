import { StyleSheet, View } from 'react-native';
import React from 'react';
import { MainHeader, ViewContainer, Text, ButtonYellow, TextInput } from '../../components';
import { primary_orange, primary_yellow } from '../../assets/styles/Colors';

const ChangeMobileNumber = ({navigation}) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Change Mobile Number'}
                desc={'Changing mobile number will log you out and you need to Login again'}
            />

            <Text css={'4-12'} style={{ marginTop: 24 }}>Old Mobile Number</Text>
            <Text css={'7-16'}>081234567890</Text>

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'New Mobile Number'}
                placeholder={'Enter new mobile number'}
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
            {/* <Text css={'8-14-'+primary_yellow} style={{alignSelf: 'flex-end', marginTop: 5}}>Forgot Password?</Text> */}

            <ButtonYellow
                title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('Profile', {screen: 'Profile'})}
            />
        </ViewContainer>
    );
};

export default ChangeMobileNumber;

const styles = StyleSheet.create({});
