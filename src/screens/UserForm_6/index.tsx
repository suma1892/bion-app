import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgForm6, IcDeposit } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');


const UserForm_6 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>

            <View style={styles.bgHeader}>
                <BgForm6 width={width} />
            </View>

            <HeaderSteps
                title={'How many times you make deposit in a month?'}
                step={6}
                dots={6}
                navigation={navigation}
            />

            <View style={styles.icDeposit}>
                <IcDeposit />
            </View>

            <View style={{
                zIndex: 9999,
                flex: 1
            }}>
                <Text style={styles.fontSlider}>{'Less than Rp30 million'}</Text>

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
                    onPress={() => navigation.navigate('OccupationInfo1')}
                    title={'Select This Option'}
                    customStyle={{
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: 20
                    }}
                />
            </View>

        </ViewContainer>
    );
};

export default UserForm_6;

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
    icDeposit: {
        alignSelf: 'center',
        zIndex: 9999,
        marginTop: 20,
        marginRight: 20
    },
});
