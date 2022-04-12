import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IcBuble1, IcBuble2, IcBuble3, IcBuble4, IcSearch } from '../../assets/Images';
import { bluePale, dark_blue, primary_orange, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { HeaderInline, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');
const colors = [primary_yellow, primary_orange, bluePale]
const randomColor =
    colors[Math.floor(Math.random() * colors.length)];

const RECENT_TRANSACTIONS = [
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble1 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble2 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble3 />
    },
    {
        header: 'BS',
        title: 'Bambang S.',
        desc: 'bion 34567890',
        Bg: () => <IcBuble4 />
    },
]
const TransferTo = ({ navigation }) => {
    return (
        <ViewContainer showBackgroundImage={false}>
            <HeaderInline
                navigation={navigation}
                title={'Transfer to'}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputWrapper}>
                    <IcSearch />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={white50}
                        style={styles.input}
                    />
                </View>

                <Text style={styles.fontTitle}>RECENT TRANSACTIONS</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {RECENT_TRANSACTIONS.map((_, i) => (
                            <View style={{
                                // backgroundColor: 'red',
                                height: 99,
                                width: 98,
                                marginRight: 10,
                                marginBottom: 10
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    left: 0
                                }}>
                                    <_.Bg width={width} height={height} />
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 20
                                }}>
                                    <Text style={styles.fontHeader}>{_.header}</Text>
                                    <Text style={styles.fontTitle2}>{_.title}</Text>
                                    <Text style={styles.fontTitle2}>{_.desc}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <Text style={[styles.fontTitle, { marginBottom: 23 }]}>MY ACCOUNTS</Text>

                {[...Array(3)].map((_, i) => (
                    <View key={i.toString()}>
                        <View style={styles.accountWrapper}>
                            <View style={styles.cirlceWrapper(colors[i])}>
                                <Text style={styles.fontName}>VP</Text>
                            </View>
                            <View style={{
                                marginLeft: 12
                            }}>
                                <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Vacation Pocket</Text>
                                <Text style={[styles.fontTitle2, { fontSize: 12 }]}>bion 237743032</Text>
                            </View>
                        </View>
                    </View>
                ))}

                <Text style={[styles.fontTitle, { marginBottom: 23 }]}>OTHERS</Text>

                {[...Array(3)].map((_, i) => (
                    <View key={i.toString()}>
                        <View style={styles.accountWrapper}>
                            <View style={styles.cirlceWrapper(colors[3 - (i + 1)])}>
                                <Text style={styles.fontName}>VP</Text>
                            </View>
                            <View style={{
                                marginLeft: 12
                            }}>
                                <Text style={[styles.fontTitle, { fontSize: 14, marginTop: 0 }]}>Vacation Pocket</Text>
                                <Text style={[styles.fontTitle2, { fontSize: 12 }]}>bion 237743032</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ViewContainer>
    );
};

export default TransferTo;

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 8,
        borderRadius: 6,
        marginTop: 30
    },
    input: {
        padding: Platform.OS === 'android' ? 0 : 10,
        marginLeft: 10,
        color: white50
    },
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 24
    },
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 28,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito400,
        fontSize: 10,
        color: white
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: _
    }),
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
});
