import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgScheduledDetail, BgWithHair, IcAlert, IcArrowWhiteRight, IcSkip, IcTrash } from '../../assets/Images';
import { dark_blue, primary_blue, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { Text } from '../../components';

const ScheduledTransaction = ({navigation}) => {
    const bottomSheetRef = useRef(null);
    const bottomSheetRef2 = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['45%'], []);
    const snapPoints2 = useMemo(() => ['45%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <ScrollView>
                <View style={{
                    position: 'absolute',
                    top: '-28%'
                }}>
                    <BgScheduledDetail width={width} height={height} />
                </View>

                <View style={{
                    alignSelf: 'center',
                    marginTop: 100,
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <View style={styles.circleWrapper}>
                        <Text css={"7-40"}>BP</Text>
                    </View>

                    <Text css={'7-20'} style={{ marginBottom: 5, marginTop: 24 }}>Bambang PLN</Text>
                    <Text css={'4-14'}>PLN 331284896027</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('EditTransaction')} style={styles.buttonEdit}>
                        <Text css={'8-14'}>EDIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#540A7F',
                        width: '90%',
                        marginTop: '10%',
                        borderRadius: 10
                    }}>
                        <IcAlert />
                        <View style={{ width: '50%' }}>
                            <Text css={'4-14'}>Last transaction was failed. Please pay or buy now</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text css={'8-14'}>PAY OR BUY</Text>
                                <IcArrowWhiteRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    margin: 20
                }}>
                    <Text css={'7-12-' + primary_blue}>DETAILS</Text>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 12
                    }}>
                        <Info
                            title={'Transaction Type'}
                            desc={'Pay & Buy'}
                        />
                        <Info
                            title={'Product'}
                            desc={'Product'}
                        />
                    </View>

                    <Info
                        title={'Transaction Type'}
                        desc={'Pay & Buy'}
                        style={{
                            marginTop: 24
                        }}
                    />

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 24
                    }}>
                        <Info
                            title={'Transaction Type'}
                            desc={'Pay & Buy'}
                        />
                        <Info
                            title={'Product'}
                            desc={'Product'}
                        />
                    </View>

                    <Text css={'4-12-#333333B2'}>Recurring Transfer on 29th, 30th, and 31st will automatically done on the same date or the last day of the month</Text>

                    <Info
                        title={'Next Schedule'}
                        desc={'31 Sep 2021'}
                        style={{
                            marginTop: 24
                        }}
                    />

                    <TouchableOpacity onPress={() => bottomSheetRef.current.snapToIndex(0)} style={styles.buttonSkip}>
                        <Text css={'8-14-' + primary_blue}>SKIP NEXT TRANSACTION</Text>
                    </TouchableOpacity>

                    <Text onPress={() => bottomSheetRef2.current.snapToIndex(0)} css={'8-14-' + primary_red} style={{ alignSelf: 'center', marginTop: 16 }}>DELETE SCHEDULE</Text>
                </View>
            </ScrollView>

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                enablePanDownToClose={true}
                disappearsOnIndex={-1}
                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                    marginTop: -20,
                }}
                backgroundStyle={{
                    backgroundColor: primary_blue,
                    borderTopLeftRadius: 20,
                    flex: 1,
                    // height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0
                    }}>
                        <BgWithHair />
                    </View>

                    <View
                        style={{
                            width: '20%',
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: white50,
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 20
                        }}
                    />
                    <View style={{ marginTop: 40 }} />
                    <IcSkip />
                    <Text css={'8-24'}>Skip Next Transaction?</Text>
                    <Text css={'4-14'} style={{ marginTop: 10 }}>You will skip 1x payment for next schedule. Payment after that will be done as usual</Text>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 20,
                        width: '100%',
                        alignSelf: "center"
                    }}>
                        <TouchableOpacity style={styles.button}>
                            <Text css={'8-14'}>Yes, SKIP ONCE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }]}>
                            <Text css={'8-14-' + primary_blue}>NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>

            <BottomSheet
                ref={bottomSheetRef2}
                index={-1}
                enablePanDownToClose={true}
                disappearsOnIndex={-1}
                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    height: 0,
                    marginTop: -20,
                }}
                backgroundStyle={{
                    backgroundColor: primary_blue,
                    borderTopLeftRadius: 20,
                    flex: 1,
                    // height: height,
                }}
                snapPoints={snapPoints2}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    // zIndex: 99999,
                    backgroundColor: primary_blue,
                    marginHorizontal: 20
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0
                    }}>
                        <BgWithHair />
                    </View>

                    <View
                        style={{
                            width: '20%',
                            height: 5,
                            borderRadius: 50,
                            backgroundColor: white50,
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 20
                        }}
                    />
                    <View style={{ marginTop: 40 }} />
                    <IcTrash />
                    <Text css={'8-24'}>Delete Schedule?</Text>
                    <Text css={'4-14'} style={{ marginTop: 10 }}>You will cancel any future Transfer/payment.
                        You can make new schedule when doing transaction</Text>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 20,
                        width: '100%',
                        alignSelf: "center"
                    }}>
                        <TouchableOpacity style={styles.button}>
                            <Text css={'8-14'}>YES, DELETE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }]}>
                            <Text css={'8-14-' + primary_blue}>NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};

const Info = ({ title, desc, style }) => (
    <View style={[style, { width: '50%' }]}>
        <Text css={'4-12-#33333380'}>{title}</Text>
        <Text css={'4-16-#333333'}>{desc}</Text>
    </View>
)

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
    circleWrapper: {
        height: 102,
        aspectRatio: 1,
        backgroundColor: primary_yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonEdit: {
        width: '90%',
        padding: 14,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: white
    },
    buttonSkip: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: primary_blue,
        padding: 15,
        borderRadius: 50,
        marginTop: 32
    }, button: {
        width: '49%',
        backgroundColor: primary_red,
        padding: 14,
        borderRadius: 40,
        alignItems: "center"
    },
});
