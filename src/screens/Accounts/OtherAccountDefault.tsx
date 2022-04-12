import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgOtherDefault, IcArrowRight } from '../../assets/Images';
import { dark_blue, primary_yellow } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { Text } from '../../components';
const Lists = [
    {
        name: 'Tabungan Mestika',
        screen: 'GiroRupiah',
    },
    {
        name: 'Giro IDR',
        // screen: 'GiroRupiah',
    },
    {
        name: 'Tabungan Pendidikan',
        screen: 'TabunganPendidikan',
    },
    {
        name: 'Tabka Goal',
    }
]

const OtherAccountDefault = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: dark_blue
        }}>
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: '100%'
            }}>
                <BgOtherDefault width={width} height={height} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '25%',
                marginHorizontal: 20
            }}>
                <Text css='9-12-#FFFFFFB2' onPress={function (): void {
                    throw new Error('Function not implemented.');
                }}>SAVINGS</Text>
                <Text onPress={() => navigation.navigate('ManageAccount')} css={`7-12-${primary_yellow}`}>MANAGE ACCOUNTS</Text>
            </View>
            <ScrollView>
                <View style={{
                    margin: 20
                }}>

                    {Lists.map((_, i) => (
                        <TouchableOpacity key={i} onPress={() => navigation.navigate(_?.screen)} style={styles.boxWrapper}>

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
                                        <Text css='4-14-white'>{_.name}</Text>
                                        <Text css='7-16-white'>123456124234</Text>
                                    </View>

                                </View>

                                <Text css='4-12' style={{ marginTop: 10 }}>BALANCE</Text>
                                <Text css='8-24'>Rp12.000.000</Text>
                            </View>
                            <IcArrowRight />
                        </TouchableOpacity>

                    ))}

                    <Text css='9-12-#FFFFFFB2' style={{
                        marginTop: 20
                    }}>DEPOSITO</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Deposito')} style={styles.boxWrapper}>

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
                                    <Text css='4-14-white'>bion Deposito</Text>
                                    <Text css='7-16-white'>123456124234</Text>
                                </View>

                            </View>

                            <Text css='4-12' style={{ marginTop: 10 }}>BALANCE</Text>
                            <Text css='8-24'>Rp12.000.000</Text>
                        </View>
                        <IcArrowRight />
                    </TouchableOpacity>

                    <Text css='9-12-#FFFFFFB2' style={{
                        marginTop: 20
                    }}>KPR</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Kpr')} style={styles.boxWrapper}>

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

        </View>
    );
};

export default OtherAccountDefault;

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
        alignItems: 'center',
        backgroundColor: '#2E2B9F',
        padding: 20,
        borderRadius: 12,
        marginTop: 20
    },
});
