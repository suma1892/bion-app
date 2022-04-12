import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcTabkaFlex } from '../../assets/Images';
import { bluePale, dark_blue, white, white70 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';

const ChooseTabka = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                title={'Choose Tabka'}
                navigation={navigation}
            />

            <TouchableOpacity onPress={() => navigation.navigate('CreateTabkaFlex')} style={styles.wrapperBox}>
                <View>
                    <View style={{
                        position: 'absolute',
                        top: '-90%',
                        left: '-10%'
                    }}>
                        <IcTabkaFlex />
                    </View>
                    <Text style={styles.fontTitle}>Tabka Flex</Text>
                    <Text style={styles.fontDesc}>{`Customizable savings time, amount, and\nset your own goal!`}</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ChoosePrize')} style={styles.wrapperBox}>
                <View style={styles.redBox}>
                    <Text style={styles.fontDormant}>NEW REWARDS</Text>
                </View>
                <View>
                    <View style={{
                        position: 'absolute',
                        top: '-90%',
                        left: '-10%'
                    }}>
                        <IcTabkaFlex />
                    </View>
                    <Text style={styles.fontTitle}>Tabka Hadiah</Text>
                    <Text style={styles.fontDesc}>{`Receive mobile phone or even car by\nsaving to Tabka Hadiah`}</Text>
                </View>
                <IcArrowRight />
            </TouchableOpacity>

        </ViewContainer>
    );
};

export default ChooseTabka;

const styles = StyleSheet.create({
    fontTitle: {
        marginTop: 20,
        fontFamily: nunito800,
        fontSize: 20,
        color: white
    },
    fontNorek: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontBalance: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white70,
        marginTop: 10
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
    },
    wrapperBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: dark_blue,
        padding: 16,
        borderRadius: 12,
        marginTop: 54
    },
    redBox: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        borderRadius: 6,
        backgroundColor: bluePale,
        zIndex: 9999
    },
    fontDormant: {
        fontFamily: nunito400,
        fontSize: 10,
        color: white
    },
    buttonAdd: {
        width: '100%',
        borderWidth: 1,
        borderColor: white,
        borderRadius: 50,
        padding: 14,
        marginTop: 32,
        alignItems: 'center'
    },
    fontAdd: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    }
});
