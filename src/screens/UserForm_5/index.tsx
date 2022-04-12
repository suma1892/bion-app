import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgForm5, IcChickenMoney } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');


const UserForm_5 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>

            <View style={styles.bgFooter}>
                <BgForm5 width='100%' />
            </View>

            <HeaderSteps
                title={'How much is the amount of your deposit in a month?'}
                step={5}
                dots={6}
                navigation={navigation}
            />

            <View style={styles.icChickenMoney}>
                <IcChickenMoney />
            </View>

            <View style={{
                zIndex: 9999,
                flex: 1
            }}>
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
                    onPress={() => navigation.navigate('UserForm6')}
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

export default UserForm_5;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 99
    },
    fontSlider: {
        fontFamily: nunito400,
        fontSize: 24,
        alignSelf: 'center',
        color: white,
        marginTop: 60
    },
    icChickenMoney: {
        alignSelf: 'center',
        zIndex: 9999,
        marginTop: 20,
        marginRight: 20
    },
});
