import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const ARR = [
    'Less than Rp5 million',
    'Rp5 - 11 million',
    'Rp11 - 20 million',
    'Rp20 - 21 million',
    'More than Rp21 million'
]
const OccupationInfo_7 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('OccupationInfo8');
    }

    return (
        <ViewContainer>

            <HeaderSteps
                step={4}
                dots={5}
                navigation={navigation}
                title={'How much is your gross income per year?'}
            />
            <ScrollView>
                <View style={{ marginTop: 24 }} />
                {ARR.map((_, i) => (
                    <View
                        key={i.toString()}
                        style={{
                            borderBottomColor: '#FFFFFF4D',
                            borderBottomWidth: 1
                        }}>
                        <TouchableOpacity onPress={handleNavigate} style={styles.listWrapper}
                            key={i.toString()}
                        >
                            <Text style={styles.fontTitle}>{_}</Text>
                            <IcArrowRight />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

        </ViewContainer>
    );
};

export default OccupationInfo_7;

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
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    }
});
