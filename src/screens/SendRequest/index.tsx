import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BgTransferDrawer, IcAddVa, IcArrowRight, IcBuble1, IcBuble2, IcBuble3, IcBuble4, IcNotFound, IcSearch } from '../../assets/Images';
import { black70, dark_blue, primary_blue, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, HeaderInline, Keyboard, ViewContainer } from '../../components';

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
const SendRequest = ({ navigation }) => {
    const bottomSheetRef = useRef(null);
    const [notFound, setnotFound] = useState(false);
    const [sheetChange, setSheetChange] = useState(0);
    const [pin, setPin] = useState('');
    const [input, setInput] = useState('');

    const fillPin = (_) => {
        // if (isError === true) {
        //     setIsError(false);
        //     // setErrorMessage('');
        // }

        if (_ !== -1 && _ !== -2) {
            setPin(`${pin}` + `${_}`);
        } else if (_ === -2) {
            setPin(pin.slice(0, -1));
        }
    };
    // variables
    const snapPoints = useMemo(() => ['10%', '100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        setSheetChange(index);
    }, []);
    return (
        <ViewContainer showBackgroundImage={false}>
            <HeaderInline
                navigation={navigation}
                title={'Send Request to'}
            />
            <Text style={styles.fontReq}>Request from fellow bion user in 3x24 hours</Text>

            <View style={styles.inputWrapper}>
                <IcSearch />
                <TextInput
                    placeholder='Search'
                    placeholderTextColor={white50}
                    style={styles.input}
                    onChangeText={_ => setInput(_)}
                    value={input}
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
                        <View
                            key={i.toString()}
                            style={{
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
            <Text style={[styles.fontTitle, { marginBottom: 23 }]}>ALL</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {[...Array(20)].map((_, i) => (
                    <TouchableOpacity key={i.toString()} onPress={() => navigation.navigate('InfoTransfer')} style={styles.listWrapper}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <View style={styles.circle}>
                                <Text style={styles.fontBank}>AG</Text>
                            </View>
                            <View style={{ marginLeft: 12 }}>
                                <Text style={styles.fontBank}>Andrian Gopay</Text>
                                <Text style={styles.fontDesc}>Gopay 237743032</Text>
                            </View>
                        </View>
                        <IcArrowRight />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {notFound && <View style={{
                alignSelf: 'center',
                marginTop: 121
            }}>
                <IcNotFound />
                <Text style={styles.fontNotFound}>{`There is no result for\n‘Asdasfasf’`}</Text>
            </View>}
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                disappearsOnIndex={-1}

                handleIndicatorStyle={{
                    backgroundColor: white50,
                    height: 5,
                }}
                handleStyle={{
                    backgroundColor: dark_blue,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // height: 0,
                    marginTop: sheetChange === 0 ? -10 : -25,
                }}
                backgroundStyle={{
                    backgroundColor: sheetChange === 0 ? dark_blue : 'transparent',
                    flex: 1,
                    zIndex: 9999,
                    height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: sheetChange === 0 ? dark_blue : white,
                    padding: 20
                }}>
                    {sheetChange === 0 ? <Text style={styles.fontAdd}>+ ADD NEW RECIPIENT</Text> :
                        <>

                            <View style={{
                                position: 'absolute',
                                top: '-40%',
                            }}>
                                <BgTransferDrawer width={width} height={height} />
                            </View>
                            <View
                                style={{
                                    width: '15%',
                                    height: 5,
                                    borderRadius: 20,
                                    backgroundColor: white50,
                                    alignSelf: 'center'
                                }}
                            />
                            <IcAddVa />
                            <Text style={styles.fontAddVa}>ADD NEW RECIPIENT</Text>

                            <View style={styles.boxWrapperAtmContent}>
                                <Text style={[styles.fontDesc, { color: white }]}>{`Account Number`}</Text>
                                <View style={styles.wrapperInput}>
                                    <TextInput
                                        style={styles.fontInput}
                                        value='12344535635243'
                                    />
                                    <Text style={styles.fontCheck}>Check</Text>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 16,
                                borderWidth: 1,
                                borderColor: '#E0E0E0',
                                borderRadius: 6,
                                padding: 12,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={styles.cirlceWrapper}>
                                    <Text style={styles.fontName}>NW</Text>
                                </View>
                                <Text style={{
                                    fontFamily: nunito700,
                                    fontSize: 16,
                                    color: black70,
                                    marginLeft: 12
                                }}>Nicodemus Wijaya</Text>
                            </View>

                            <ButtonYellow
                                title={'Continue'}
                                customStyle={{
                                    marginTop: 20,
                                }}
                                onPress={() => navigation.navigate('RequestMoney')}
                            />
                            <Keyboard
                                fillPin={(v) => { fillPin(v) }}
                                textColor={primary_blue}
                            />
                        </>
                    }

                </View>
            </BottomSheet>
        </ViewContainer>
    );
};

export default SendRequest;

const styles = StyleSheet.create({
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingVertical: 18
    },
    fontBank: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontDesc: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    fontAdd: {
        fontFamily: nunito800,
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 10,
        color: white
    },
    fontAddVa: {
        fontFamily: nunito800,
        fontSize: 20,
        // alignSelf: 'center',
        marginTop: 10,
        color: white
    },
    fontMost: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginVertical: 24
    },
    circle: {
        height: 40,
        aspectRatio: 1,
        borderRadius: 50,
        padding: 8,
        backgroundColor: primary_yellow,
        alignItems: 'center'
    },
    boxWrapperAtmContent: {
        // padding: 16,
        marginTop: 16,
        // backgroundColor: white,
        width: '100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: white,
        borderRadius: 6,
        marginTop: 6,
        justifyContent: 'space-between',
    },
    fontCheck: {
        fontSize: 14,
        fontFamily: nunito700,
        color: primary_yellow,
        marginRight: 12
    },
    fontInput: {
        fontSize: 16,
        fontFamily: nunito700,
        color: black70,
        padding: 10
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    cirlceWrapper: {
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_yellow,
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
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 24
    },
    fontReq: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
        alignSelf: 'center',
        marginTop: 22,
        marginBottom: -20
    },
    input: {
        padding: Platform.OS === 'android' ? 0 : 10,
        marginLeft: 10,
        color: white,
        width: '100%'
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 8,
        borderRadius: 6,
        marginTop: 30
    },
    fontNotFound: {
        fontFamily: nunito400,
        fontSize: 14,
        color: '#FFFFFFB2',
        textAlign: 'center'
    },
});
