import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { BgProfileBig, IcArrowLeft, IcArrowRight, IcArrowWhiteRight, IcCardProgress, IcProfileAbout, IcProfileBiometrics, IcProfileFriend, IcProfileHelp, IcProfileHp, IcProfileLanguage, IcProfileMail, IcProfileMailing, IcProfilePassword, IcProfilePin, IcProfilePrivacy, IcProfileScheduled, IcProfileTc, IcUserCam } from '../../assets/Images';
import { dark_blue, primary_red, primary_yellow, white, white70 } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { PopupAlert, Text } from '../../components';

const LIST_PROFILE = [
    {
        title: 'Change E-mail',
        ic: () => <IcProfileMail />,
        screen: 'ChangeEmail'
    },
    {
        title: 'Change Mobile Number',
        ic: () => <IcProfileHp />,
        screen: 'ChangeMobileNumber'
    },
    {
        title: 'Change Password',
        ic: () => <IcProfilePassword />,
        screen: 'ChangePassword'
    },
    {
        title: 'Change Transaction PIN',
        ic: () => <IcProfilePin />,
        screen: 'TransactionPin'
    },
    {
        title: 'Scheduled Transaction',
        ic: () => <IcProfileScheduled />,
        screen: 'ScheduledTransaction'
    },
    {
        title: 'Mailing Address',
        ic: () => <IcProfileMailing />,
        screen: 'ChangeAddress'
    },
    {
        title: 'Biometrics Login',
        ic: () => <IcProfileBiometrics />,
        screen: ''
    },
    {
        title: 'Language',
        ic: () => <IcProfileLanguage />,
        screen: ''
    },
    {
        title: 'Invite Friends',
        ic: () => <IcProfileFriend />,
        screen: ''
    },
]

const BION_APPS = [
    {
        title: 'Help',
        ic: () => <IcProfileHelp />,
        screen: 'Help'
    },
    {
        title: 'About',
        ic: () => <IcProfileAbout />,
        screen: 'AboutApp'
    },
    {
        title: 'Terms & Condition',
        ic: () => <IcProfileTc />,
        screen: 'TermCondition'
    },
    {
        title: 'Privacy Policy',
        ic: () => <IcProfilePrivacy />,
        screen: 'privacy'
    },
]

const Profile = ({navigation}) => {
    const [isAlert, setIsAlert] = useState(false);

    useEffect(() => {
        setIsAlert(true);
        setTimeout(() => {
            setIsAlert(false);
        }, 2000);
    }, []);
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#030062'
        }}>
            <View style={{
                position: 'absolute',
                top: '-40%'
            }}>
                <BgProfileBig height={height} width={width} />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                position: 'absolute',
                top: 20,
                left: 20
            }}>
                <IcArrowLeft />
            </TouchableOpacity>

            <View style={{
                margin: 20,
                flex: 1
            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcUserCam />
                        <View>
                            <Text css={'8-16'}>Jonathan Ong</Text>
                            <Text css={'4-14-' + white70}>08123456789</Text>
                        </View>
                    </View>
                    <Text onPress={()=>navigation.navigate('ChangeNickname')} css={'7-12-' + primary_yellow}>EDIT</Text>
                </View>

                <TouchableOpacity style={styles.completeWrapper}>
                    <IcCardProgress />
                    <View style={{
                        width: '70%'
                    }}>
                        <Text css={'4-14'}>Complete your work info to get special voucher!</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text css={'8-14'}>Complete Info </Text>
                            <IcArrowWhiteRight />
                        </View>
                    </View>
                </TouchableOpacity>

                <ScrollView>
                    <Text css={'7-12'} style={{ marginTop: 24, marginBottom: 22 }}>ACCOUNT SETTINGS</Text>

                    {LIST_PROFILE.map((_, i) => (
                        <TouchableOpacity key={i} onPress={()=>navigation.navigate(_.screen, {screen: 'Profile'})} style={styles.lisWrapper}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <_.ic />
                                <Text css={'8-16'} style={{ marginLeft: 16 }}>{_.title}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                {_.title === 'Language' && <Text css={'4-14'} style={{marginRight: 10}}>EN</Text>}
                                {_.title === 'Language' || _.title === 'Biometrics Login' ? <Switch
                                    trackColor={{ false: dark_blue, true: primary_yellow }}
                                    thumbColor={isEnabled ? white : white}
                                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], marginRight: 5 }}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                /> : <IcArrowRight />}
                            </View>
                        </TouchableOpacity>
                    ))}

                    <Text css={'7-12'} style={{ marginTop: 24, marginBottom: 22 }}>BION APP</Text>

                    {BION_APPS.map((_, i) => (
                        <TouchableOpacity onPress={()=>navigation.navigate(_.screen, {screen: 'Profile'})} key={i} style={styles.lisWrapper}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <_.ic />
                                <Text css={'8-16'} style={{ marginLeft: 16 }}>{_.title}</Text>
                            </View>
                            <IcArrowRight />
                        </TouchableOpacity>
                    ))}

                    <Text css={'8-16-'+primary_red} style={{alignSelf: 'center', marginTop: 20}}>Log Out</Text>
                </ScrollView>
            </View>
            <PopupAlert
                modalVisible={isAlert}
                setModalVisible={setIsAlert}
                textAlert={'E-mail changed!'}
            />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    completeWrapper: {
        backgroundColor: '#168BC3',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        width: '100%'
    },
    lisWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
});
