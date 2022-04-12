import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcCreative, IcCulinary } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderSteps, ViewContainer } from '../../components';


const OccupationInfo_3 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('OccupationInfo4');
    }

    return (
        <ViewContainer>
            <HeaderSteps
                title={'What is your business industry?'}
                step={2}
                dots={5}
                navigation={navigation}
            />

            <TouchableOpacity onPress={handleNavigate} style={styles.boxWrapper}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcCulinary />
                    <Text style={styles.fontYes}>Culinary</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigate} style={[styles.boxWrapper, { marginTop: 53 }]}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IcCreative />
                    <Text style={styles.fontYes}>Creative</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>


        </ViewContainer>
    );
};

export default OccupationInfo_3;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0,
        // left: '-15%'
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 9999
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
        // padding: 16,
        height: 60,
        borderRadius: 12,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 26,
    },
    fontYes: {
        color: white,
        fontFamily: nunito800,
        fontSize: 20,
        marginLeft: 16
    },
    bgHair: {
        position: 'absolute',
        right: '25%'
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
});
