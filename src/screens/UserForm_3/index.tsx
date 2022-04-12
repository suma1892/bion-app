import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgFormHeader, IcmoneyWithdraw } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');


const UserForm_3 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>

            <View style={styles.bgHeader}>
                <BgFormHeader width={width} />
            </View>
            <HeaderSteps
                step={3}
                dots={6}
                navigation={navigation}
                title={'How many times you withdraw fund in a month?'}
            />

            <IcmoneyWithdraw width='110%' />

            <Text style={styles.fontSlider}>{'0 - 11 times'}</Text>

            <Slider
                value={0.2}
                containerStyle={{
                    width: '80%',
                    alignSelf: 'center'
                }}
                thumbTintColor={primary_yellow}
                minimumTrackTintColor={primary_yellow}
                maximumTrackTintColor='#030149'
                // onValueChange={value => this.setState({ value })}
            />


            <ButtonYellow
                onPress={() => navigation.navigate('UserForm4')}
                title={'Select This Option'}
                customStyle={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 20
                }}
            />

        </ViewContainer>
    );
};

export default UserForm_3;

const styles = StyleSheet.create({
    bgHeader: {
        position: 'absolute',
        top: 0,
    },
    fontSlider: {
        fontFamily: nunito400,
        fontSize: 24,
        alignSelf: 'center',
        color: white,
        marginTop: 90
    },
});
