import React from 'react';
import { StyleSheet, View } from 'react-native';
import { primary_yellow } from '../../assets/styles/Colors';
import { ButtonYellow, MainHeader, Text, TextInput, ViewContainer } from '../../components';

const FavoriteProfileEdit = ({navigation}) => {
    return (
        <ViewContainer>

        <MainHeader
            title={'Edit Name'}
            desc={'This only affects your app preview'}
            navigation={navigation}
        />
            

            <View style={{
                // marginTop: '90%',
            }}>

                <Text style={{ marginTop: 24 }} css={'7-16'}>Bambang Soelistyo</Text>
                <Text css={'4-12'}>bion 237743032</Text>

                <View
                    style={{
                        marginTop: 24
                    }}
                />

                <TextInput
                    title={'New Name'}
                    placeholder={'Enter new name'}
                />
               
            </View>
            <ButtonYellow
            title={'Save Changes'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
            />
        </ViewContainer>
    );
};

export default FavoriteProfileEdit;

const styles = StyleSheet.create({
    circleWrapper: {
        height: 102,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 36
    },
});
