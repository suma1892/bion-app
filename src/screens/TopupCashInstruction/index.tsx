import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ButtonYellow, MainHeader, Text, ViewContainer } from '../../components';
const content = [
    'Go to a Bank Mestika branch. Please make sure you are visiting within operational hour',
    'Let our team at branch know about your intention, we will lead you to the right queue',
    'Show QR code and KTP to teller and give money for top up',
    'Please follow our teller’s instruction'
]
const TopupCashInstruction = ({navigation}) => {
  return (
    <ViewContainer>
        <MainHeader
            title={'How to Top Up Cash'}
        />
        {content.map((_, i)=>(
            <View key={i} style={{
                flexDirection: 'row',
                marginBottom: 16
            }}>
                <Text css={'4-16'}>{i+1}. </Text>
                <Text css={'4-16'}>{_}</Text>
            </View>
        ))}
        <ButtonYellow
            title={'Back to Home'}
            customStyle={{
                position: 'absolute',
                bottom: 20
            }}
            onPress={()=>navigation.navigate('Home')}
        />
    </ViewContainer>
  );
};

export default TopupCashInstruction;

const styles = StyleSheet.create({});
