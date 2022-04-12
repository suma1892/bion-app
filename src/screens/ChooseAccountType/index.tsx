import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderInline, ViewContainer } from '../../components';

const MENU = [
    {
        title: 'bion Pocket',
        screen: 'CreatePocket'
    },
    {
        title: 'Tabungan Berjangka (Tabka)',
        screen: ''
    },
    {
        title: 'Deposito',
        screen: ''
    },
    {
        title: 'Bank Mestika Savings',
        screen: ''
    },

]
const ChooseAccountType = ({ navigation }) => {
    return (
        <ViewContainer showBackgroundImage={false}>
            <HeaderInline
                navigation={navigation}
                title={'Choose Account Type'}
            />
            <View style={{
                marginTop: 30
            }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {MENU.map((_, i) => (
                    <TouchableOpacity onPress={()=>navigation.navigate(_.screen)} style={styles.listWrapper}>
                        <Text style={styles.fontBank}>{_.title}</Text>
                        <IcArrowRight />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ViewContainer>
    );
};

export default ChooseAccountType;

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
