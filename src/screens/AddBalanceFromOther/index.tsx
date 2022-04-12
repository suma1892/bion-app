import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderInline, Search, ViewContainer } from '../../components';

const AddBalanceFromOther = ({ navigation }) => {
    return (
        <ViewContainer showBackgroundImage={false}>
            <HeaderInline
                navigation={navigation}
                title={'Add Balance from Other Bank'}
            />

            <Search />

            <Text style={styles.fontMost}>MOST POPULAR</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(20)].map((_, i) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('InfoTransfer')} style={styles.listWrapper}>
                        <Text style={styles.fontBank}>BCA</Text>
                        <IcArrowRight />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ViewContainer>
    );
};

export default AddBalanceFromOther;

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingVertical: 18
    },
    fontBank: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontMost: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginVertical: 24
    },
});
