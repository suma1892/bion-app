import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowLeft } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';

const HeaderSteps = ({
    navigation,
    step,
    dots,
    title
}) => {
    return (
        <View>
            <View
                style={styles.arrowBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IcArrowLeft />
                </TouchableOpacity>
                <View style={styles.dotsWrapper}>
                    {[...Array(dots)].map((_, i) => (
                        <View
                            style={styles.steps(i, step - 1)}
                            key={i.toString()}
                        />
                    ))}
                </View>

            </View>
            <Text style={styles.fontTitle}>{title}</Text>
        </View>
    );
};

export default HeaderSteps;

const styles = StyleSheet.create<any>({
    arrowBack: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 41,
    },
    steps: (i, step) => ({
        width: 38,
        height: 6,
        borderRadius: 40,
        backgroundColor: i <= step ? white : '#030149',
    }),
    fontTitle: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24,
        marginBottom: 20,
    },
    dotsWrapper: {
        flexDirection: 'row',
        marginLeft: 20,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        width: '100%'
    },
});
