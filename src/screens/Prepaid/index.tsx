import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgTransfer, IcArrowBottom, IcArrowRight, IcArrowRightOrange, IcCalendarOrange } from '../../assets/Images';
import { black70, bluePale, primary_blue, primary_orange, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, HeaderInline, TextInput, ViewContainer } from '../../components';
import useEffectSkipInitialRender from '../../utilities/useEffectSkipInitRender';

const { width, height } = Dimensions.get('screen');

const AMOUNT = [
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
    {
        title: '25',
        desc: 'Rp26.500'
    },
]

const Prepaid = ({ navigation, route }) => {
    const { screen } = route?.params;
    const bottomSheetRef = useRef(null);
    const [selectAmount, setSelectAmount] = useState();
    const [showMoreProduct, setShowMoreProduct] = useState(false);
    const [component, setComponent] = useState({});
    useEffect(() => {
        if (screen === 'pln') {
            setComponent({
                header: 'PLN Payment'
            })
        } else if (screen === 'pulsa') {
            setComponent({
                header: 'Pulsa'
            })
        } else if (screen === 'e-wallet') {
            setComponent({
                header: 'E-Wallet Top Up'
            })
        }else if (screen === 'bpjs') {
            setComponent({
                header: 'BPJS Payment'
            })
        }
    }, []);

    // const navigation = useNavigation();
    // variables
    const snapPoints = useMemo(() => ['100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges 1221', index);
        // setSheetChange(index);
        // if (index === 1)
            setShowMoreProduct(!showMoreProduct);
    }, []);

    useEffectSkipInitialRender(() => {
        setTimeout(() => {
            // bottomSheetRef.current.close();
        }, 100);
        console.log('masuk sini');
    }, [showMoreProduct]);

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={white}>
            <HeaderInline
                navigation={navigation}
                title={component?.header}
            />
            <View style={{
                position: 'absolute',
                top: '-40%',
                width: width,
                zIndex: -99
            }}>
                <BgTransfer width={width} height={height} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { }} style={styles.bubleWrapper}>
                    <View style={styles.cirlceWrapper}>
                        <Text style={styles.fontName}>NW</Text>
                    </View>
                    <View>
                        <Text style={styles.fontNo}>bion 73849351234</Text>
                        <Text style={styles.fontRp}>Rp10.000.000</Text>
                    </View>
                    <IcArrowRight />
                </TouchableOpacity>
                <View style={{
                    alignSelf: 'center',
                    marginVertical: 8
                }}>
                    <IcArrowBottom />
                </View>

                <View style={styles.bubleWrapper2}>
                    <View style={styles.cirlceWrapper}>
                        <Text style={styles.fontName}>NW</Text>
                    </View>
                    <View>
                        <Text style={styles.fontNo}>bion 73849351234</Text>
                        <Text style={styles.fontRp}>Rp10.000.000</Text>
                    </View>
                    <IcArrowRight />
                </View>
                <View
                    style={{
                        marginTop: 71
                    }}
                />
                {(screen === 'pulsa' || screen === 'pln') &&
                    <>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={styles.fontTitle2}>Amount</Text>
                            <Text onPress={() => {
                                // bottomSheetRef.current.snapToIndex(1);
                                setShowMoreProduct(!showMoreProduct);
                            }} style={[styles.fontTitle2, { fontFamily: nunito700, color: primary_orange }]}>VIEW ALL OPTIONS</Text>
                        </View>
                        <View style={styles.amountMainWrapper}>
                            {AMOUNT.map((_, i) => (
                                <TouchableOpacity onPress={() => setSelectAmount(i)} key={i} style={styles.amountWrapper(selectAmount === i)}>
                                    <Text style={styles.fontTitle(selectAmount === i)}>{_.title} <Text style={{ fontSize: 12 }}>RB</Text></Text>
                                    <Text style={styles.fontDesc(selectAmount === i)}>{_.desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </>
                }

                {
                    <TextInput
                        title={'Amount'}
                        value={'Rp 0'}
                        theme={white}
                    />
                }

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 24
                }}>
                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>Schedule</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Now</Text>
                            <IcCalendarOrange />
                        </View>
                    </View>

                    <View style={{ width: '49%' }}>
                        <Text style={styles.fontTitle2}>Frequency</Text>
                        <View style={styles.wrapperDropdown}>
                            <Text style={styles.fontSelect}>Once</Text>
                            <IcCalendarOrange />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Voucher')} style={{ marginTop: 24 }}>
                    <Text style={styles.fontTitle2}>Voucher (Optional)</Text>
                    <View style={[styles.wrapperDropdown, { paddingVertical: 16, }]}>
                        <Text style={styles.fontSelect}>Choose Voucher</Text>
                        <IcArrowRightOrange />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <ButtonYellow
                title={'Continue'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={() => navigation.navigate('TransferConfirmation')}
            />
            {showMoreProduct && <BottomSheet
                ref={bottomSheetRef}
                index={0}
                enablePanDownToClose={true}
                disappearsOnIndex={-1}

                handleIndicatorStyle={{
                    backgroundColor: white50,
                    height: 0,
                }}
                handleStyle={{
                    backgroundColor: 'transparent',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 0,
                    marginTop: -15,
                }}
                backgroundStyle={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    zIndex: 9999,
                    height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: white,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop: 20,
                    paddingHorizontal: 20,
                    elevation: 8
                }}>

                    <View
                        style={styles.line}
                    />
                    <Text style={styles.fontHeader}>Choose Amount</Text>
                    <ScrollView nestedScrollEnabled={true} >
                        <View style={styles.amountMainWrapper}>
                            {[...AMOUNT, ...AMOUNT].map((_, i) => (
                                <TouchableOpacity onPress={() => {
                                    setSelectAmount(i)
                                }} key={i} style={styles.amountWrapper(selectAmount === i)}>
                                    <Text style={styles.fontTitle(selectAmount === i)}>{_.title} <Text style={{ fontSize: 12 }}>RB</Text></Text>
                                    <Text style={styles.fontDesc(selectAmount === i)}>{_.desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </BottomSheet>}
        </ViewContainer>
    );
};

export default Prepaid;

const styles = StyleSheet.create({
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
        position: 'absolute',
        left: '-10%',
        top: '40%'
    },
    fontNo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white
    },
    bubleWrapper: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: bluePale,
        width: '70%',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        marginTop: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bubleWrapper2: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: primary_orange,
        width: '70%',
        alignSelf: 'flex-end',
        marginLeft: 20,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginTop: 42,
    },
    fontRp: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: white,
        padding: 12,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: black70,
    },

    amountWrapper: _ => ({
        width: 100,
        height: 64,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: _ ? primary_blue : white,
        borderRadius: 6,
        marginBottom: 14,
        alignItems: 'center',
        padding: 5
    }),
    fontDesc: _ => ({
        fontFamily: nunito400,
        fontSize: 12,
        color: _ ? '#FFFFFFB2' : black70
    }),
    fontTitle: _ => ({
        fontFamily: nunito400,
        fontSize: 22,
        color: _ ? white : primary_blue
    }),
    amountMainWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
    },
    fontHeader: {
        fontFamily: nunito800,
        fontSize: 24,
        color: black70,
        marginTop: 14
    },
    line: {
        height: 5,
        width: '15%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#6666',
        marginTop: '5%',
    },
});
