import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcRequestMoney } from '../../assets/Images';
import { primary_blue, primary_red } from '../../assets/styles/Colors';
import { MainHeader, Text, ViewContainer } from '../../components';

const IncomingRequest = () => {
    return (
        <ViewContainer>
            <MainHeader
                Ic={() => <IcRequestMoney />}
            />
            <Text css={'4-12'}>22 Jul 2021</Text>
            <Text css={'8-24'}>Money Request from Bambang Soelistyo</Text>
            <Text css={'4-14'}>You received request from <Text css={'7-14'}>Bambang Soelistyo 123412341234</Text>. Transfer or request will be automatically rejected after deadline.</Text>

            <View style={{
                padding: 20,
                backgroundColor: 'white',
                marginTop: 20,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12
            }}>
                <Text css={'4-12-#333333B2'}>Requested Amount</Text>
                <Text css={'8-24-#333333'}>Rp500.000</Text>
            </View>
            <View style={{
                padding: 20,
                backgroundColor: '#030062',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
            }}>
                <Text css={'4-12-white'}>Transfer before <Text css={'7-12-white'}>10 Aug 2021, 21:00</Text></Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 20,
                width: '100%',
                alignSelf:"center"
            }}>
                <TouchableOpacity style={styles.button}>
                    <Text css={'8-14'}>Reject</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor: 'white'}]}>
                    <Text css={'8-14-'+primary_blue}>Reject</Text>
                </TouchableOpacity>
            </View>
        </ViewContainer>
    );
};

export default IncomingRequest;

const styles = StyleSheet.create({
    button: {
        width: '49%',
        backgroundColor: primary_red,
        padding: 14,
        borderRadius: 40,
        alignItems: "center"
    },
});
