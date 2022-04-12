import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { white } from '../../assets/styles/Colors';
import Nunito from '../../assets/styles/FontFamily2';

interface IProps {
    style?: StyleProp<TextStyle>,
    css: any,
    onPress?(): void 
}
// css mempunyai 3 parameter yang dipisah dengan '-', yang pertama untuk font family, kedua font size, ketiga color ex: 400-12-#fff
const index: React.FC<IProps> = ({ children, css, style, onPress }): JSX.Element => {

    return (
        <Text onPress={onPress} style={[styles.font(css), style]}>{children}</Text>
    );
};

export default index;

interface Props {
    font: any,
}

const styles = StyleSheet.create<Props>({
    font: css => ({
        fontFamily: Nunito[`nunito${css?.split('-')?.[0]}00`] || Nunito.nunito400,
        fontSize: css && JSON.parse(css?.split('-')?.[1]) || 12,
        color: css?.split('-')?.[2] || white
    })
});
