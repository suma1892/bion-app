import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcSave } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';

const RegisterProgress = ({ navigation }) => {

    const handleRegister = () => {
        navigation.navigate('RegisterPlan');
    }
    return (
        <ViewContainer>
            <MainHeader
                navigation={navigation}
                title={'You Have Registration Progress Saved'}
                desc={'Do you want to continue the registration instead?'}
                Ic={() => <IcSave />}
            />
            <View style={styles.wrapperButton}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.fontButtonLogin}>No, Restart</Text>
                </TouchableOpacity>

                <TouchableOpacity onLongPress={()=>navigation.navigate('ChoosePlan')} onPress={handleRegister} style={styles.buttonRegister}>
                    <Text style={styles.fontButtonRegister}>Yes, Continue</Text>
                </TouchableOpacity>
            </View>
        </ViewContainer>
    );
};

export default RegisterProgress;

const styles = StyleSheet.create({

    wrapperButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        // marginHorizontal: 16
    },
    fontButtonLogin: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    },
    fontButtonRegister: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    buttonLogin: {
        borderWidth: 1,
        borderColor: white,
        paddingVertical: 13,
        width: 156,
        alignItems: 'center',
        borderRadius: 50
    },
    buttonRegister: {
        paddingVertical: 13,
        width: 156,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        borderRadius: 50
    },
});
