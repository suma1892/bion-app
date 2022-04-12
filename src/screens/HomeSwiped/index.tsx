import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BgHomeSwiped, IcFreeAdmin, IcHairSwiped, IcHomeSwiped } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow } from '../../components';

const HomeSwiped = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#720BAD'
        }}>
            <ScrollView>
                <View style={{
                    margin: 20,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: '-40%',
                        left: -20,
                    }}>
                        <BgHomeSwiped width={width} height={height} />

                    </View>

                    <View style={{
                    }}>
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            top: 200,
                        }}>
                            <IcHomeSwiped />
                            <View style={{
                                position: 'absolute',
                                left: -20,
                                top: 70,
                            }}>
                                <IcHairSwiped />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: '100%',
                    }}>
                        <Text style={styles.fontTitle}>{`Customize Your\nbion Pocket`}</Text>
                        <Text style={styles.fontSubTitle}>Prioritize and create up to 3 bion pockets to enjoy these perks:</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <IcFreeAdmin />
                        <Text style={styles.fontSubTitle}>{`  `}5% interest, paid every month</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 16
                    }}>
                        <IcFreeAdmin />
                        <Text style={styles.fontSubTitle}>{`  `}Custom name and color</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IcFreeAdmin />
                        <Text style={styles.fontSubTitle}>{`  `}Watch bion pocket grow and be Sultan</Text>
                    </View>

                    <ButtonYellow
                        title={'Create bion Pocket'}
                        customStyle={{
                            marginTop: 20
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeSwiped;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        textAlign: 'center'
    },
    fontSubTitle: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
        textAlign: 'center'
    },
});
