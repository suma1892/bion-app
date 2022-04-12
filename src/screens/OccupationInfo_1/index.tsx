import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';
import { HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const ARR = [
    'Government Official',
    'Political Party Official',
    'Government Employee',
    'Private Employee',
    'BUMN/BUMD Employee',
    'Entrepreneur',
    'Police',
    'Military Official',
    'Retiree, Housewife, Student'
]
const OccupationInfo_1 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    return (
        <ViewContainer>
            <HeaderSteps
                title={'What is your job/profession?'}
                step={1}
                dots={5}
                navigation={navigation}
            />
            <ScrollView>
                <View style={{ marginTop: 24 }} />
                {ARR.map((_, i) => (
                    <View 
                    key={i.toString()}
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFFFFF4D'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('OccupationInfo2')} style={styles.listWrapper}
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

export default OccupationInfo_1;

const styles = StyleSheet.create({
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
