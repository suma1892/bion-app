import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonYellow, ViewContainer } from '../../components';
import { BgHomeSwiped, BgPocketTab, IcFreeAdmin, IcHairSwiped, IcHomeSwiped } from '../../assets/Images';
import { height, width } from '../../assets/styles/Sizing';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { white } from '../../assets/styles/Colors';

const BionPocket = () => {
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
                        top: '-35%',
                        left: -20,
                    }}>
                        <BgPocketTab width={width} height={height} />

                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginTop: '110%',
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
                        }} onPress={undefined} onLongPress={undefined} />
                </View>
            </ScrollView>
        </View>
    );
};

export default BionPocket;

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
