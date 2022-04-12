import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { BgSplash, IcBion } from '../../assets/Images';
import { primary_blue } from '../../assets/styles/Colors';
import { Background } from '../../components';
import { stackNavigatorParamList } from '../../types';

const { width, height } = Dimensions.get('screen');

export interface Props {
    navigation: StackNavigationProp<stackNavigatorParamList, 'Splash'>
}

const Splash: FC<Props>  = ({ navigation }) => {
    useEffect(() => {

        setTimeout(() => {
            navigation.replace('Onboarding');
        }, 2000);
    }, []);

    return (
        <View style={styles.mainWrapper}>
            <Background ImgSvg={() => <BgSplash width={width} height={height} />} style={undefined} />
            <IcBion />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: primary_blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
