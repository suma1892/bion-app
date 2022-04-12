import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { IcRadio, IcRadioSelected } from '../../assets/Images';
import { black70, dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, ViewContainer } from '../../components';
import { stackNavigatorParamList } from '../../types';

export interface Props {
    navigation: StackNavigationProp<stackNavigatorParamList, 'RegisterConnect'>
}

const RegisterConnect: React.FC<Props> = ({ navigation }) => {
    return (
        <ViewContainer backgroundColor={undefined}>
            <MainHeader
                title={'Bank Mestika Information'}
                desc={'Enter your information to connect it with bion\nAccount'}
            />

            <View style={styles.boxWrapper}>
                <View>
                    <Text style={styles.fontYes}>Account Number</Text>
                    <Text style={styles.fontDesc}>{`Verify using bion account number`}</Text>
                </View>
                <IcRadio />
            </View>

            <View style={styles.boxWrapper2}>
                <View style={styles.boxWrapperAtm}>
                    <View>
                        <Text style={styles.fontYes}>ATM Card</Text>
                        <Text style={styles.fontDesc}>{`Verify using ATM card number`}</Text>
                    </View>
                    <IcRadioSelected />
                </View>

                <View style={styles.boxWrapperAtmContent}>
                    <Text style={[styles.fontDesc, { color: black70 }]}>{`ATM Card Number`}</Text>
                    <View style={styles.wrapperInput}>
                        <TextInput
                            style={styles.fontInput}
                            value='12344535635243'
                        />
                        <Text style={styles.fontCheck}>Check</Text>
                    </View>
                </View>
            </View>

            <View style={styles.boxWrapper}>
                <View>
                    <Text style={styles.fontYes}>I can’t remember my info</Text>
                    <Text style={styles.fontDesc}>{`You will be asked to have video call to\nverify your identity`}</Text>
                </View>
                <IcRadio />
            </View>
            <ButtonYellow
                title={'CONTINUE'}
                customStyle={styles.button}
                onPress={() => navigation.navigate('RegisterAtmPin')} onLongPress={undefined}            />
        </ViewContainer>
    );
};

export default RegisterConnect;

const styles = StyleSheet.create({

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
    boxWrapper2: {
        width: '100%',
        backgroundColor: dark_blue,
        borderRadius: 12,
        marginTop: 24,

    },
    fontYes: {
        color: white,
        fontFamily: nunito800,
        fontSize: 16
    },
    bgHair: {
        position: 'absolute',
        right: 30
    },
    boxWrapperAtm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 16,
        paddingRight: 26,
    },
    boxWrapperAtmContent: {
        padding: 16,
        backgroundColor: white,
        width: '100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        marginTop: 6,
        justifyContent: 'space-between',
    },
    fontCheck: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_yellow,
        marginRight: 12
    },
    fontInput: {
        fontSize: 16,
        fontFamily: nunito700,
        color: black70,
        padding: 10
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
});
