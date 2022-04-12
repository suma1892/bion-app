import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { dark_blue } from '../../assets/styles/Colors';
import { MainHeader, Text, ViewContainer } from '../../components';

const ListVoucher = ({navigation}) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Voucher'}
            />
            {[...Array(3)].map((_, i) => (
                <TouchableOpacity onPress={()=>navigation.navigate('VoucherDetail')} key={i} style={styles.listWrapper}>
                    <View>
                        <Text css={'8-16'}>Block Account</Text>
                        <Text css={'4-14'}>Block account temporarily</Text>
                    </View>
                    <IcArrowRight />
                </TouchableOpacity>
            ))}

        </ViewContainer>
    );
};

export default ListVoucher;

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: dark_blue,
        marginTop: 12,
        borderRadius: 12
    },
});
