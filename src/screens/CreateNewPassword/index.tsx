import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { IcCheckboxChecked, IcCheckboxUnChecked, IcInfo } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, TextInput, ViewContainer } from '../../components';

const CreateNewPassword = ({ navigation, route }) => {
    const status = route?.params?.status;
    const screen = route?.params?.screen;

    const [toolTipVisible, setToolTipVisible] = useState(false);
    return (
        <ViewContainer>
            <MainHeader
                title={'Create New Password'}
                desc={'Confirm your identity to reset your password'}
                navigation={navigation}
            />
            <Text style={styles.fontDesc2}>Create Password</Text>
            <TextInput
                isPassword={true}
                placeholder={'Enter Password'}
            />

            <View style={styles.checkedWrapper}>
                <IcCheckboxChecked />
                <Text style={[styles.fontDesc2, { color: white, marginTop: 0 }]}> Include at least 6 characters</Text>
            </View>

            <View style={styles.checkedWrapper}>
                <IcCheckboxChecked />
                <Text style={[styles.fontDesc2, { color: white, marginTop: 0 }]}> Include uppercase</Text>
            </View>

            <View style={styles.checkedWrapper}>
                <IcCheckboxChecked />
                <Text style={[styles.fontDesc2, { color: white, marginTop: 0 }]}> Include lowercase</Text>
            </View>

            <View style={styles.checkedWrapper}>
                <IcCheckboxUnChecked />
                <Text style={[styles.fontDesc2, { color: white, marginTop: 0 }]}> Include numeric character</Text>
            </View>

            <View style={styles.checkedWrapper}>
                <IcCheckboxUnChecked />
                <Text style={[styles.fontDesc2, { color: white, marginTop: 0 }]}> Include special character </Text>
                <TouchableOpacity onPress={() => setToolTipVisible(!toolTipVisible)}>
                    <Tooltip
                        isVisible={toolTipVisible}
                        content={<Text>ex: []!@#$%&*</Text>}
                        placement="bottom"
                        backgroundColor='transparent'
                        onClose={() => setToolTipVisible(!toolTipVisible)}
                    >
                        <IcInfo />
                    </Tooltip>
                </TouchableOpacity>
            </View>

            <Text style={styles.fontDesc2}>Re-enter Password</Text>
            <TextInput
                isPassword={true}
                placeholder={'Enter Password'}
            />

            <TouchableOpacity
                onPress={() => { navigation.navigate(screen === 'Profile' ? 'Profile' :screen === 'no-info' ? 'RegisterSchedule' : 'TransferSuccess', { status: status }) }}
                style={styles.button}>
                <Text style={styles.fontChoose}>Continue</Text>
            </TouchableOpacity>

        </ViewContainer>
    );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0
    },
    arrowBack: {
        position: 'absolute',
        top: 10,
        // left: 10,
        zIndex: 9999
    },
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },
    fontDesc2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: white,
        marginTop: 24,
        marginBottom: -4
    },
    bgHair: {
        position: 'absolute',
        right: 30
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
    checkedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
});
