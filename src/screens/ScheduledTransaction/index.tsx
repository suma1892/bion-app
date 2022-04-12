import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { IcArrowRight, IcEmptyScheduled, IcSearch } from '../../assets/Images';
import { dark_blue, primary_orange, primary_red, primary_yellow, white50 } from '../../assets/styles/Colors';
import { HeaderInline, Text, ViewContainer } from '../../components';

const ScheduledTransaction = ({navigation}) => {
    const [isEmpty, setisEmpty] = useState(false);
    return (
        <ViewContainer>
            <HeaderInline
                title={'Scheduled Transaction'}

            />
            {isEmpty && <View style={styles.emptyWrapper}>
                <IcEmptyScheduled />
                <Text css={'4-14'} style={{
                    textAlign: 'center',
                }}>{`You don’t have any\nscheduled transaction.\n`}<Text css={'8-14-' + primary_orange}>TRANSFER <Text>or</Text> PAY & BUY</Text></Text>
            </View>}

            <View style={styles.inputWrapper}>
                <IcSearch />
                <TextInput
                    placeholder='Search'
                    placeholderTextColor={white50}
                    style={styles.input}
                />
            </View>

            <View style={{ marginBottom: 20 }} />

            {[...Array(3)].map((_, i) => (
                <TouchableOpacity onPress={()=>navigation.navigate('ScheduledTransactionDetail')} key={i}>
                    <View style={styles.boxWrapper}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={styles.circleWrapper}>
                                <Text css={"4-20"}>BP</Text>
                            </View>
                            <View>
                                <Text css={'7-16'}>Bambang PLN</Text>
                                <Text css={'4-14'}>PLN 331284896027</Text>
                            </View>
                        </View>
                        <IcArrowRight />
                    </View>
                    <View style={styles.bottomBoxWrapepr}>
                        <Text css={'4-12'}>Next Schedule 31 Sep 2021</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{ backgroundColor: primary_red, padding: 2, borderRadius: 5 }}>
                                <Text css={'4-10'}>FAILED</Text>
                            </View>
                            <Text css={'7-12-' + primary_red}> 1X</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ViewContainer>
    );
};

export default ScheduledTransaction;

const styles = StyleSheet.create({
    emptyWrapper: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 8,
        borderRadius: 6,
        marginTop: 30
    },
    boxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: dark_blue,
        padding: 19,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    bottomBoxWrapepr: {
        backgroundColor: '#030062',
        padding: 10,
        marginBottom: 16,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    circleWrapper: {
        height: 50,
        aspectRatio: 1,
        backgroundColor: primary_yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
});
