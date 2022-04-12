import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../components';

const TransactionTab = () => {
    return (
        <View style={{
            marginTop: 30
        }}>

            <ScrollView>
                {[...Array(20)].map((_, i) => (
                    <View
                        key={i}
                        style={{
                            paddingVertical: 10,
                            borderBottomColor: '#FFFFFF4D',
                            borderBottomWidth: 1
                        }}>
                        <Text css={'4-12'}>23 Jul 2021</Text>
                        <Text css={'7-14'}>You rejected Bambang Soelistyo’s money request</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default TransactionTab;

const styles = StyleSheet.create({});
