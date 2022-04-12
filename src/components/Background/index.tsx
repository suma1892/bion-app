import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import React, {FC} from 'react';

interface BackgroundProps {
    ImgSvg: any,
    style?: StyleProp<ViewStyle>,

}

const Background: FC<BackgroundProps> = ({ImgSvg, style}) => {
    return (
        <View style={[{
            position: 'absolute',
        }, style]}>
            <ImgSvg />
        </View>
    );
};

export default Background;

const styles = StyleSheet.create({});
