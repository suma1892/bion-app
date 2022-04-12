import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BgOtherBlank } from '../../assets/Images';
import { primary_blue, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow } from '../../components';

const OtherBlank = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: primary_blue
        }}>
            <ScrollView>
                <View style={{
                    margin: 20,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: '-40%',
                        left: -20,
                    }}>
                        <BgOtherBlank width={width} height={height} />

                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginTop: '130%',
                    }}>
                        <Text style={styles.fontTitle}>{`Plan & Grow\nYour Saving`}</Text>
                        <Text style={styles.fontSubTitle}>Explore our Tabungan Berjangka and Online Deposit for better interest and controlled savings!</Text>
                    </View>


                </View>
            </ScrollView>
            <ButtonYellow
                title={'Create bion Pocket'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }} onPress={function (): void {
                    throw new Error('Function not implemented.');
                } } onLongPress={function (): void {
                    throw new Error('Function not implemented.');
                } }            />
        </View>
    );
};

export default OtherBlank;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        textAlign: 'center'
    },
    fontSubTitle: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
        textAlign: 'center',
        marginTop: 20
    },
});
