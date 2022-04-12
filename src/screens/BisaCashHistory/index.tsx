import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcClose, IcNoHistory, SampleBisaCash } from '../../assets/Images';
import { black50, black70, primary_blue, primary_orange, white } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { width } from '../../assets/styles/Sizing';

const BisaCashHistory = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [noHistory, setNoHistory] = useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: white
        }}>
            <View style={styles.blueWrapper}>
                <IcClose />
                <View style={{
                    position: 'absolute',
                    bottom: '-40%',
                    alignSelf: 'center'
                }}>
                    <View >
                        <SampleBisaCash />
                    </View>
                    <View style={{
                        position: 'absolute',
                        top: '45%',
                        // backgroundColor: 'red',
                        left: 20
                    }}>
                        <Text style={[styles.fontTitle, { color: white }]}>CARD NO</Text>
                        <Text style={[styles.fontNo]}>1234 1234 1234 1234</Text>

                        <Text style={[styles.fontTitle, { color: white, marginTop: 16 }]}>YOUR CURRENT BALANCE</Text>
                        <Text style={[styles.fontNo]}>Rp750.000</Text>
                    </View>
                </View>
            </View>

            <View style={{
                padding: 20,
                flex: 1,
                marginTop: '25%'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <TouchableOpacity style={{
                        width: '50%',
                        alignItems: "center",
                    }}
                        onPress={() => setActiveTab(0)}
                    >
                        <Text style={styles.fontTab(activeTab === 0)}>HISTORY</Text>
                        {activeTab === 0 && <View style={styles.lineWrapper} />}
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '50%',
                        alignItems: "center",
                    }}
                        onPress={() => setActiveTab(1)}
                    >
                        <Text style={styles.fontTab(activeTab === 1)}>DETAIL</Text>
                        {activeTab === 1 && <View style={styles.lineWrapper} />}
                    </TouchableOpacity>
                </View>

                {activeTab === 0 && <ScrollView>
                    {[...Array(7)].map((_, i) => (
                        <View key={i}>
                            <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#3333331A',
                                paddingVertical: 10,
                                width: '100%',
                            }}>
                                <View style={styles.accountWrapper}>
                                    <View style={styles.cirlceWrapper()}>
                                        <Text style={styles.fontName}>NW</Text>
                                    </View>
                                    <View style={{
                                        marginLeft: 12,
                                        width: '80%',

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: "space-between",
                                        }}>
                                            <Text style={[styles.fontTitle]}>05 Jul 2021</Text>
                                            <Text style={[styles.fontTitle]}>Incoming</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: "space-between",
                                        }}>
                                            <Text style={[styles.fontTitle2, { fontSize: 12 }]}>Bryan Tanoto</Text>
                                            <Text style={[styles.fontTitle2, { fontSize: 12, color: '#0EAE3D' }]}>+Rp250.000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>}

                {activeTab === 1 &&
                    <View>
                        <Text style={[styles.fontTitle, { marginTop: 24 }]}>Card No.</Text>
                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Bryan Tanoto</Text>

                        <View style={{
                            flexDirection: 'row',
                            marginTop: 24
                        }}>
                            <View style={{ width: '50%' }}>
                                <Text style={[styles.fontTitle]}>Previous Balance</Text>
                                <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp500.000</Text>
                            </View>

                            <View>
                                <Text style={[styles.fontTitle]}>Top Up</Text>
                                <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp250.000</Text>
                            </View>
                        </View>

                        <Text style={[styles.fontTitle, { marginTop: 24 }]}>Current Balance</Text>
                        <Text style={[styles.fontTitle2, { fontFamily: nunito400 }]}>Rp750.000</Text>
                    </View>
                }
                
                {noHistory && <View style={{
                    alignSelf: 'center',
                    marginTop: 100
                }}>
                    <IcNoHistory />
                </View>}

            </View>


        </View>
    );
};

export default BisaCashHistory;

const styles = StyleSheet.create({
    blueWrapper: {
        height: 260,
        width: width,
        backgroundColor: primary_blue,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        padding: 20
    },
    lineWrapper: {
        borderBottomWidth: 2,
        borderColor: primary_orange,
        width: '20%',
        borderRadius: 20,
        marginTop: 6
    },
    fontTab: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: _ ? 'black' : '#33333380'
    }),
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        width: '100%',
        // paddingBottom: 12
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#540A7F'
    }),
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
        // marginTop: 24
    },
    fontNo: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito700,
        fontSize: 16,
        color: black70
    },
});
