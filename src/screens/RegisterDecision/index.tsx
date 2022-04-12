import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcHeaderBankMestika } from '../../assets/Images';
import { dark_blue, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';
import { stackNavigatorParamList } from '../../types';


export interface Props {
    navigation: StackNavigationProp<stackNavigatorParamList, 'RegisterDecision'>
}

const RegisterDecision: React.FC<Props> = ({ navigation }) => {
    return (
        <ViewContainer backgroundColor={undefined}>

            <MainHeader
                title={'Do You Have Bank Mestika Account?'}
                desc={'Prepare KTP and needed information based on your choice below'}
                Ic={() => <IcHeaderBankMestika />} DescAjx={undefined} isTop={undefined}            />

            <TouchableOpacity onPress={() => navigation.navigate('RegisterConnect')} style={styles.boxWrapper}>
                <View>
                    <Text style={styles.fontYes}>Yes, I have</Text>
                    <Text style={styles.fontDesc}>{`Connect your Bank Mestika account and\ncreate new bion savings account`}</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterCreate', { status: 'new-account' })} style={styles.boxWrapper}>
                <View>
                    <Text style={styles.fontYes}>No, I don’t have</Text>
                    <Text style={styles.fontDesc}>{`Create new bion savings account`}</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

        </ViewContainer>
    );
};

export default RegisterDecision;

const styles = StyleSheet.create({
    
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },
    boxWrapper: {
        width: '100%',
        backgroundColor: dark_blue,
        padding: 16,
        borderRadius: 12,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 26,
    },
    fontYes: {
        color: white,
        fontFamily: nunito800,
        fontSize: 16
    },
});
