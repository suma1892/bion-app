import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, TextInput, ViewContainer } from '../../components';
import Dropdown from '../../components/Dropdown';

const OccupationInfo_6 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('OccupationInfo7');
    }

    return (
        <ViewContainer>
            <HeaderSteps
                step={3}
                dots={5}
                navigation={navigation}
                title={'Input your company information'}
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={{ marginTop: 24 }} />
                <TextInput
                    title={'Company Name'}
                    placeholder={'Enter company name'}
                />
                <View style={{ marginTop: 24 }} />
                <TextInput
                    title={'Company Phone Number'}
                    placeholder={'+62 08xxxxxxxxxx'}
                />
                <Dropdown
                    title={'Business Industry'}
                    placeholder={'Select business industry'}
                />
                <Text style={styles.fontTitle}>BUSINESS ADDRESS</Text>
                <View style={{ marginTop: 24 }} />
                <TextInput
                    title={'Postal Code'}
                    placeholder={'Enter Postal Code'}
                />
                <Text style={{
                    fontSize: 12,
                    fontFamily: nunito400,
                    color: white,
                }}>Kebun Kosong, Kec. Kemayoran, Kota Jakarta Pusat, DKI Jakarta</Text>
                <View style={{ marginTop: 24 }} />
                <TextInput
                    title={'Address'}
                    placeholder={'Enter address'}
                />

            </ScrollView>

            <ButtonYellow
                title={'CONTINUE'}
                customStyle={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 20
                }}
                onPress={handleNavigate}
            />
        </ViewContainer>
    );
};

export default OccupationInfo_6;

const styles = StyleSheet.create<any>({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0,
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        // zIndex: 9999
    },
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
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
        fontSize: 16,
        marginLeft: 16
    },
    bgHair: {
        position: 'absolute',
        right: '15%'
    },
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        position: 'absolute',
        bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontDesc2: {
        fontFamily: nunito400,
        fontSize: 12,
        color: '#FFFFFFB2',
        marginLeft: 16
    },
    steps: i => ({
        width: 38,
        height: 6,
        borderRadius: 40,
        backgroundColor: i <= 1 ? white : '#030149',
    }),
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
    },
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 32
    }
});
