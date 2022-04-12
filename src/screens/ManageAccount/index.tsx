import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { IcArrowRight } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { MainHeader, Text, ViewContainer } from '../../components';

const ManageAccount = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ViewContainer>

            <MainHeader
                title={'SHOW ALL'}
                desc={'You can show or hide connected Bank Mestika accounts'}
                navigation={navigation}
            />

            <ScrollView>
                <View style={{
                }}>
                    <Text css='9-12-#FFFFFFB2' style={{
                        marginTop: 20
                    }}><Text css='9-12-#FFFFFFB2' style={{
                        marginTop: 20
                    }}>KPR</Text></Text>

                    {[...Array(2)].map((_, i) => (
                        <TouchableOpacity key={i} onPress={() => navigation.navigate('GiroRupiah')} style={styles.boxWrapper}>

                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    // justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <View style={styles.circleText}>
                                        <Text css='4-20-white'>VP</Text>
                                    </View>

                                    <View style={{
                                        marginLeft: 20
                                    }}>
                                        <Text css='4-14-white'>Tabungan Mestika</Text>
                                        <Text css='7-16-white'>123456124234</Text>
                                    </View>

                                </View>

                                <Text css='4-12' style={{ marginTop: 10 }}>BALANCE</Text>
                                <Text css='8-24'>Rp12.000.000</Text>
                            </View>
                            <Switch
                                trackColor={{ false: dark_blue, true: primary_yellow }}
                                thumbColor={white}
                                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </TouchableOpacity>

                    ))}

                    <Text css='9-12-#FFFFFFB2' style={{
                        marginTop: 20
                    }}>KPR</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('PocketVacation')} style={styles.boxWrapper}>

                        <View>
                            <View style={{
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <View style={styles.circleText}>
                                    <Text css='4-20-white'>VP</Text>
                                </View>

                                <View style={{
                                    marginLeft: 20
                                }}>
                                    <Text css='4-14-white'>Tabungan Mestika</Text>
                                    <Text css='7-16-white'>123456124234</Text>
                                </View>

                            </View>

                            <Text css='4-12' style={{ marginTop: 10 }}>BALANCE</Text>
                            <Text css='8-24'>Rp12.000.000</Text>
                        </View>
                        <IcArrowRight />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </ViewContainer>
    );
};

export default ManageAccount;

const styles = StyleSheet.create({
    circleText: {
        height: 48,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#2E2B9F',
        padding: 20,
        borderRadius: 12,
        marginTop: 20
    },
});
