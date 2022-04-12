import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowLeftBlue, IcCheckboxCheckedOrange, IcCheckboxUnCheckedOrange } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
const { width } = Dimensions.get('screen');

const TermCondition = ({ navigation, route }) => {
    const status = route?.params?.status;

    const handleNavigate = () => {
        if (status === 'new-account') {
            navigation.navigate('RegisterSchedule', { status: 'new-account' });
            return 0;
        }
        navigation.navigate('RegisterSent');
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: white,
        }}>

            <View style={{
                margin: 20,
                flex: 1
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.arrowBack}>
                    <IcArrowLeftBlue fill={'#3531B3'} />
                </TouchableOpacity>


                <ScrollView>
                    <Text style={styles.fontTitle}>Terms & Condition</Text>
                    <Text style={styles.fontDesc}>{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore et dolore magna wiri aliqua. Up exlaborum incididunt.

Vestibulum et nulla sed ex lobortis laoreet in in metus. Donec consequat, velit in mollis mollis, tortor magna auctor est, vel sagittis dui dolor vel ipsum. Curabitur accumsan, lacus a finibus
pretium, sem sem cursus ex, quis porttitor dui lectus non leo.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore et dolore magna wiri aliqua. Up exlaborum incididunt.

Vestibulum et nulla sed ex lobortis laoreet in in metus. Donec consequat, velit in mollis mollis, tortor magna auctor est, vel sagittis dui dolor vel ipsum. Curabitur accumsan, lacus a finibus
pretium, sem sem cursus ex, quis porttitor dui lectus non leo.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore et dolore magna wiri aliqua. Up exlaborum incididunt.

Vestibulum et nulla sed ex lobortis laoreet in in metus. Donec consequat, velit in mollis mollis, tortor magna auctor est, vel sagittis dui dolor vel ipsum. Curabitur accumsan, lacus a finibus
pretium, sem sem cursus ex, quis porttitor dui lectus non leo.`}</Text>

                    {status !== 'create' ?
                        <>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 32
                            }}>
                                <IcCheckboxCheckedOrange />
                                <Text style={[styles.fontDesc, { marginTop: -5, }]}>{` I allow my data sharing to 3rd party to receive more\n offers`}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                marginTop: 32
                            }}>
                                <IcCheckboxUnCheckedOrange />
                                <Text style={[styles.fontDesc, { marginTop: -5, }]}>{` I am only a tax resident of Indonesia`}</Text>
                            </View>

                            <TouchableOpacity
                                onPress={handleNavigate}
                                onLongPress={() => navigation.navigate('AccountVerification')}
                                style={styles.button}>
                                <Text style={styles.fontChoose}>I Agree</Text>
                            </TouchableOpacity>
                        </> :
                        <TouchableOpacity
                            onPress={()=>navigation.goBack()}
                            style={styles.button}>
                            <Text style={styles.fontChoose}>OK</Text>
                        </TouchableOpacity>
                    }
                </ScrollView>
            </View>
        </View>
    );
};

export default TermCondition;

const styles = StyleSheet.create({

    arrowBack: {
        position: 'absolute',
        top: 10,
    },
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 24,
        color: primary_blue,
        marginTop: 72,
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 14,
        color: '#333333B2',
        lineHeight: 23,
        marginTop: 24,
    },
    button: {
        width: '80%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
        // position: 'absolute',
        // bottom: 10
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },

});
