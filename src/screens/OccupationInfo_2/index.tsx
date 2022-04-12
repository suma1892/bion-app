import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const OccupationInfo_2 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    function _renderItem({ item, index }) {
        return (
            //   <ImgSalary />
            <Image
                source={require('../../assets/Images/File/img-supervisor.png')}
                style={{
                    width: 288,
                    height: 396,
                }}
            />
        )
    }

    return (
        <ViewContainer>
            <HeaderSteps
                title={'What is your main source of funds?'}
                step={2}
                dots={5}
                navigation={navigation}
            />
            <View style={{
                position: 'absolute',
                width: width,
                top: '22%'
            }}>
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={[...Array(4)]}
                    renderItem={_renderItem}
                    sliderWidth={width}
                    itemWidth={300}
                    onSnapToItem={index => console.log('index ', index)}
                />
            </View>
            <ButtonYellow
                onPress={() => navigation.navigate('OccupationInfo3')}
                title={'Select This Option'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
            />

        </ViewContainer>
    );
};

export default OccupationInfo_2;

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
