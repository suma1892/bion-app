import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ButtonYellow, MainHeader, Text, ViewContainer } from '../../components';
const content = [
    'Go to a Bank Mestika branch. Please make sure you are visiting within operational hour',
    'Let our team at branch know about your intention, we will lead you to the right queue',
    'Show QR code and KTP to teller',
    'You will receive new Notification at Home or Notification menu. Click on it and enter transaction PIN to verify withdrawal',
    'Please follow our teller’s instruction'
]
const WithdrawCashInstruction = ({navigation}) => {
  return (
    <ViewContainer>
        <MainHeader
            title={'How to Withdraw Cash'}
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

export default WithdrawCashInstruction;

const styles = StyleSheet.create({});
