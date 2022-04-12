import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { BgFavorite, IcCheckboxCheckedOrange, IcDropdown, IcDropdownTop } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { Search, Text, ViewContainer } from '../../components';

const SECTIONS = [
    {
        title: 'TRANSFER/VA',
        content: [
            'bion & Bank Mestika',
            'Other Bank'
        ],
    },
    {
        title: 'PAY & BUY',
        content: [
            'PLN',
            'Pulsa',
            'E-Wallet',
            'BPJS',
            'E-Money',
            'Telkom',
            'PDAM'
        ],
    },
];

const Favorite = ({ navigation }) => {

    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [activeSections, setActiveSections] = useState([]);
    const [State, setState] = useState({});


    const _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                <Text css={'12-12'}>
                    {section.content}
                </Text>
            </View>
        );
    };

    const _renderHeader = (section, _, isActive) => {
        // console.log('activeText:', isActive);
        return (
            <View style={styles.header}>
                <Text css={'7-12'}>
                    {section.title}
                </Text>
                {isActive ? (
                    <IcDropdown />
                ) : (
                    <IcDropdownTop />
                )}
            </View>
        );
    };

    const _renderContent = (section) => {
        console.log('section - ', section);
        return (
            <View>
                {section.content.map((_, i) => (
                    <View style={styles.content} key={i}>
                        <Text css={'8-16'}>
                            {_}
                        </Text>

                        <IcCheckboxCheckedOrange />
                    </View>
                ))}

            </View>
        );
    };

    const _updateSections = (activeSections) => {
        // setState({activeSections});
        // console.log('activesection:', activeSections);
        if (activeSections.length === 1) {
            // setState({valueSection: 1});
            setActiveSections(activeSections);
        } else {
            setActiveSections([]);
        }
    };

    const _renderFooter = () => {
        return <View style={styles.footer} />;
    };

    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>
            <View style={{
                position: 'absolute',
                top: '-50%'
            }}>
                <BgFavorite height={height} width={width} />
            </View>
            <Text css={'8-24'} style={{
                marginBottom: -20
            }}>Favorite</Text>
            <Search />

            <View style={{
                marginTop: 73
            }} />

            <ScrollView>
                {[...Array(10)].map((_, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('FavoriteProfile')} style={styles.listWrapper}>
                        <View style={styles.circleWrapper}>
                            <Text css={'7-16'}>BS</Text>
                        </View>
                        <View style={{
                            marginLeft: 12
                        }}>
                            <Text css={'7-14'}>Bambang Soelistyo</Text>
                            <Text css={'4-12'}>bion 237743032</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                disappearsOnIndex={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={{
                    backgroundColor: '#FFFFFF80',
                    height: 5,
                }}
                handleStyle={{
                    backgroundColor: primary_blue,
                    height: 10,
                    // marginTop: -20,
                }}
                backgroundStyle={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    height: height,
                }}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: primary_blue,
                    // padding: 20,
                    zIndex: 999
                }}>
                    <Text css={'8-24'} style={{ padding: 20 }}>Filter</Text>
                    <View>
                        <Accordion
                            underlayColor={'#FFF'}
                            sections={SECTIONS}
                            activeSections={activeSections}
                            renderHeader={_renderHeader}
                            renderContent={_renderContent}
                            onChange={_updateSections}
                            renderFooter={_renderFooter}
                        // containerStyle={{ padding: 16 }}
                        />
                    </View>
                </View>
            </BottomSheet>

            <TouchableOpacity style={styles.filterWrapper} onPress={() => bottomSheetRef.current.snapToIndex(0)}>
                <Text css={'8-14-' + primary_blue}>FILTER</Text>
            </TouchableOpacity>

        </ViewContainer>
    );
};

export default Favorite;

const styles = StyleSheet.create({
    circleWrapper: {
        height: 40,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: primary_yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        paddingBottom: 12,
        marginBottom: 12
    },
    filterWrapper: {
        position: 'absolute',
        bottom: 20,
        borderRadius: 40,
        width: '25%',
        backgroundColor: white,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 7
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: dark_blue,
        padding: 10
    },
    content: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10

    }
});
