import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';

const ChangeNickname = ({navigation}) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Edit Nickname'}
                desc={'This only affects your app preview. Your real name will be the same for others'}
            />

            <Text css={'4-12'} style={{marginTop: 24}}>Current Nickname</Text>
            <Text css={'7-16'}>Jonathan Ong</Text>

            <View
                style={{
                    marginTop: 26
                }}
            />
            <TextInput
                title={'New Nickname'}
                placeholder={'Enter new nickname'}
            />

            <ButtonYellow
                title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={()=>navigation.navigate('CompleteReqSent')}
            />
        </ViewContainer>
    );
};

export default ChangeNickname;

const styles = StyleSheet.create({});
