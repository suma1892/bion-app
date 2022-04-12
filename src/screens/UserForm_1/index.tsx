import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcBusiness, IcDaily, IcFinance2, IcLoan } from '../../assets/Images';
import { dark_blue, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderSteps, ViewContainer } from '../../components';


const UserForm_1 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('UserForm2');
    }

    return (
        <ViewContainer>
            <HeaderSteps
                step={1}
                dots={6}
                navigation={navigation}
                title={'What is the purpose of opening your account?'}
            />

            <TouchableOpacity onPress={handleNavigate} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcLoan />
                    <Text style={styles.fontTitle}>Loan/Credit Installment</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigate} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcBusiness />
                    <Text style={styles.fontTitle}>Business Needs</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigate} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcDaily />
                    <Text style={styles.fontTitle}>Daily Needs</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigate} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcFinance2 />
                    <Text style={styles.fontTitle}>Savings</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>
        </ViewContainer>
    );
};

export default UserForm_1;

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
    fontTitle: {
        color: white,
        fontFamily: nunito800,
        fontSize: 16,
        marginLeft: 16
    },

});
