import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BgVoucherDetail } from '../../assets/Images';
import { primary_yellow, white } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, MainHeader, Text } from '../../components';

const VoucherDetail = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: white,
        }}>
            <View style={{
                position: 'absolute',
                top: '-40%'
            }}>
                <BgVoucherDetail height={height} width={width} />
            </View>
            <View style={{
                margin: 20
            }}>
                <MainHeader
                    title={'VC50K'}
                    desc={'Cashback Rp50.000'}
                />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    marginBottom: '30%'
                }}>
                    <View style={{
                        width: '50%'
                    }}>
                        <Text css={'4-12'}>Valid Until</Text>
                        <Text css={'7-16'}>30 Jul 2021</Text>
                    </View>

                    <View style={{
                        width: '50%'
                    }}>
                        <Text css={'4-12'}>Min. Transaction</Text>
                        <Text css={'7-16'}>No minimum</Text>
                    </View>
                </View>

                <Text css={'4-12-#33333380'}>About</Text>
                <Text css={'4-14-#333333'}>Get cashback Rp50.000 for any pay/buy without minimum amount!</Text>

                <Text css={'4-12-#33333380'} style={{ marginTop: 20 }}>Terms & Conditions</Text>
                {[...Array(6)].map((_, i) => (
                    <View key={i} style={{
                        flexDirection: 'row',
                        marginBottom: 6
                    }}>
                        <Text css={'7-12-' + primary_yellow}>● </Text>
                        <Text css={'4-14-#333333'}>Tempor incididunt ut labore et dolore magna</Text>
                    </View>
                ))}
            </View>
            <ButtonYellow
                title={'Use Voucher'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
            />
        </View>
    );
};

export default VoucherDetail;

const styles = StyleSheet.create({});
