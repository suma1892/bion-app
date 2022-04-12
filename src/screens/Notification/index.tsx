import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgNotification } from '../../assets/Images';
import { dark_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito300, nunito700 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { MainHeader, Text } from '../../components';
import NewsTab from './NewsTab';
import TransactionTab from './TransactionTab';

const Notification = () => {
    const [selectTab, setSelectTab] = useState(0);
    return (
        <View style={{
            flex: 1,
            backgroundColor: dark_blue,
        }}>
            <View style={{
                position: 'absolute',
                top: '-45%'
            }}>
                <BgNotification width={width} height={height} />
            </View>
            <View style={{
                margin: 20
            }}>
                <MainHeader
                    title={'Notification'}
                />
                <Text css={'8-14-' + primary_orange} style={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>READ ALL</Text>

                <View style={[styles.tabWrapper, { width: '60%', marginTop: '5%' }]}>
                    <TouchableOpacity
                        onPress={() => setSelectTab(0)}
                        style={{
                            alignItems: 'center'
                        }}>
                        <Text style={styles.fontTab(selectTab === 0)}>TRANSACTION</Text>
                        {selectTab === 0 && <View style={styles.lineTab} />}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectTab(1)}
                        style={{
                            alignItems: 'center'
                        }}>
                        <Text style={styles.fontTab(selectTab === 1)}>NEWS</Text>
                        {selectTab === 1 && <View style={styles.lineTab} />}
                    </TouchableOpacity>
                </View>

                {selectTab === 0 && <TransactionTab />}
                {selectTab === 1 && <NewsTab />}
            </View>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    tabWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 32
    },
    fontTab: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: white
    }),
    lineTab: {
        width: 23,
        height: 3,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: primary_yellow
    },
});
