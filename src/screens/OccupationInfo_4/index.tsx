import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';
import { HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const ARR = [
    'Culinary',
    'Creative',
    'Fashion',
    'Home Industry',
    'Medical',
    'Technology'
]
const OccupationInfo_4 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('UserForm2');
    }

    return (
        <ViewContainer>
            <HeaderSteps
                step={4}
                dots={5}
                navigation={navigation}
                title={'What is your job/profession?'}
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
                        <TouchableOpacity onPress={() => navigation.navigate('OccupationInfo5')} style={styles.listWrapper}
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

export default OccupationInfo_4;

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
