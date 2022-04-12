import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgFavoriteProfile, BgWithHair, IcArrowLeft, IcEdit, IcHeaderDelete, IcReqMoney, IcTransfer2, IcTrash } from '../../assets/Images';
import { dark_blue, primary_blue, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { Text, ViewContainer } from '../../components';

const FavoriteProfile = ({ navigation }) => {

    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['42%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>
            <View style={{
                position: 'absolute',
                top: '-30%'
            }}>
                <BgFavoriteProfile height={height} width={width} />
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <IcArrowLeft />
            </TouchableOpacity>

            <View style={{
                marginTop: '90%',
                alignItems: 'center',
                alignSelf: 'center'
            }}>

                <View style={styles.circleWrapper}>
                    <Text css={'7-40'}>BS</Text>
                </View>
                <Text style={{ marginTop: 24 }} css={'7-20'}>Bambang Soelistyo</Text>
                <Text css={'4-14'}>bion 237743032</Text>

                <View style={[styles.tabWrapper, { width: '100%', marginTop: 37 }]}>
                    <TouchableOpacity>
                        <IcTransfer2 />
                        <Text style={[{ textAlign: 'center' }]}>{`Transfer`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <IcReqMoney />
                        <Text style={[{ textAlign: 'center' }]}>{`Request\nMoney`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('FavoriteProfileEdit')}>
                        <IcEdit />
                        <Text style={[{ textAlign: 'center' }]}>{`Edit`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => bottomSheetRef.current.snapToIndex(0)}>
                        <IcTrash />
                        <Text style={[{ textAlign: 'center' }]}>{`Delete`}</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
                    <IcHeaderDelete />
                    <Text css={'8-24'}>Remove Bambang Soelistyo from Favorite?</Text>
                    <Text css={'4-14'}>By deleting from Favorite, you will need to add Bambang Soelistyo as new recipient for transactions</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: primary_red,
                            padding: 15,
                            width: '49%',
                            borderRadius: 40,
                            alignItems: 'center'
                        }}>
                            <Text css={'8-14'}>Yes, Delete</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: white,
                            padding: 15,
                            width: '49%',
                            borderRadius: 40,
                            alignItems: 'center'
                        }}>
                            <Text css={'8-14-' + primary_blue}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </BottomSheet>
        </ViewContainer>
    );
};

export default FavoriteProfile;

const styles = StyleSheet.create({
    circleWrapper: {
        height: 102,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 36
    },
});
