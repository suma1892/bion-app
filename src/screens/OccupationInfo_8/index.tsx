import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { IcArrowDown, IcCheckboxCheckedOrange } from '../../assets/Images';
import { dark_blue, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const OccupationInfo_8 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('UserForm2');
    }

    return (
        <ViewContainer>
            <HeaderSteps
                step={5}
                dots={5}
                navigation={navigation}
                title={'Do you have another source of income?'}
            />
            <View style={styles.darkWrapper}>
                <Text style={styles.fontTitle}>{`Yes, I have another source of\nincome`}</Text>
                <IcCheckboxCheckedOrange />
            </View>
            <View style={styles.whiteWrapper}>
                <Text style={styles.fontDesc}>Source of Income</Text>
                <View style={styles.dropdownWrapper}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: nunito700,
                        color: '#333333'
                    }}>Online Businesses </Text>
                    <IcArrowDown />
                </View>
            </View>

            <View style={styles.checkedWrapper}>
                <Text style={styles.fontTitle}>{`No, I don’t have another\nsource of income`}</Text>
                <IcCheckboxCheckedOrange />
            </View>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 0
                }}
            />
        </ViewContainer>
    );
};

export default OccupationInfo_8;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0,
    },
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: '#333333B2',
        fontSize: 14,
        // marginTop: 6
    },
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    darkWrapper: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: dark_blue,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    whiteWrapper: {
        padding: 20,
        backgroundColor: white,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginBottom: 16
    },
    dropdownWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 6,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    checkedWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 20,
        borderRadius: 16
    },
});
