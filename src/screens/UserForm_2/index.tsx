import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ButtonYellow, HeaderSteps, ViewContainer } from '../../components';
const { width } = Dimensions.get('screen');

const UserForm_2 = ({ navigation, route }) => {
    // const {status} = route?.params;
    const status = route?.params?.status;

    const handleNavigate = () => {
        navigation.navigate('UserForm3');
    }

    function _renderItem({ item, index }) {
        return (
            <Image
                source={require('../../assets/Images/File/img-salary.png')}
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
                step={2}
                dots={6}
                navigation={navigation}
                title={'What is your main source of funds?'}
            />
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={[...Array(4)]}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={300}
                onSnapToItem={index => console.log('index ', index)}
            />

            <ButtonYellow
                onPress={handleNavigate}
                title={'Select This Option'}
            />

        </ViewContainer>
    );
};

export default UserForm_2;

const styles = StyleSheet.create({});
