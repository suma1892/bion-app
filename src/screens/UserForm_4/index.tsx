import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { BgFormFooter, IcAtm } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');


const UserForm_4 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>

            <View style={styles.bgFooter}>
                <BgFormFooter width='100%' />
            </View>

            <HeaderSteps
                step={4}
                dots={6}
                navigation={navigation}
                title={'How much is the amount of your fund withdrawal in a month?'}
            />

            <View style={styles.wrapperAtm}>
                <IcAtm />
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
                    onPress={() => navigation.navigate('UserForm5')}
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

export default UserForm_4;

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
    wrapperAtm: {
        alignSelf: 'center',
        zIndex: 9,
        marginTop: 20,
        marginRight: 20
    },
});
