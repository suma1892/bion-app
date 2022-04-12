import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { BgNews1, BgNews2, BgNews3, BgNews4, BgNews5, BgVoucher, IcArrowDown2, IcCopy, IcWave } from '../../assets/Images';
import { black70, primary_yellow, white } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, Text } from '../../components';

const NewsDetail = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: white
        }}>
            <ScrollView>
                <View style={styles.bg} >
                    <Image
                        source={require('../../assets/Images/File/bg-news-detail.png')}
                        style={styles.bgImg}
                    />
                </View>
                <BgNews1 />
                <View style={styles.bg2}>
                    <BgNews2 />
                </View>

                <View style={styles.bg3}>
                    <BgNews3 />
                </View>

                <View style={styles.bg4}>
                    <BgNews4 />
                </View>

                <View style={styles.bg5}>
                    <BgNews5 />
                </View>

                <Image
                    source={require('../../assets/Images/File/sample-friend.png')}
                    style={styles.Img}
                />

                <Text css={'7-40'} style={{
                    marginTop: 50,
                    textAlign: 'center'
                }}>{`FRIENDSHIP\n`}<Text css={'4-40'}>MONTH</Text></Text>
                <View style={{
                    alignSelf: 'center'
                }}>
                    <Text css={'4-18-' + primary_yellow}>Free Transfer <Text css={'4-18'}>to anywhere!</Text></Text>
                    <IcWave />
                </View>

                <Text css={'4-12'} style={{ alignSelf: 'center', marginTop: 30 }}>SCROLL TO VIEW DETAILS</Text>
                <View style={{
                    alignSelf: 'center',

                }}>
                    <IcArrowDown2 />
                </View>

                <View style={{
                    margin: 20,
                    zIndex: 99,
                    marginTop: 75
                }}>
                    <Text css={'4-16-#000000'}>Transfer to bion accounts or other{'\n'}banks for FREE!</Text>
                    <View style={{
                        alignSelf: 'center',
                        marginTop: 20
                    }}>
                        <BgVoucher />
                        <View style={styles.childVoucher}>
                            <View>
                                <Text css={'4-12-' + black70}>Voucher Code</Text>
                                <Text css={'8-16-' + black70}>BIONFRIENDSHIPTRF</Text>
                            </View>
                            <IcCopy />
                        </View>
                    </View>

                    <Text css={'4-12-#33333380'} style={{ marginTop: 24, marginBottom: 6 }}>Terms & Conditions</Text>

                    {[...Array(6)].map((_, i) => (
                        <View key={i} style={{
                            flexDirection: 'row',
                            marginBottom: 6
                        }}>
                            <Text css={'7-12-'+primary_yellow}>● </Text>
                            <Text css={'4-14-#333333'}>Tempor incididunt ut labore et dolore magna</Text>
                        </View>
                    ))}
                </View>

                <ButtonYellow
                    title={'TRANSFER'}
                    customStyle={{
                        marginTop: 20
                    }}
                    
                    onLongPress={()=>navigation.navigate('VerifyWithdrawal')}
                    onPress={()=>navigation.navigate('IncomingRequest')}
                />
            </ScrollView>

        </View>
    );
};

export default NewsDetail;

const styles = StyleSheet.create({
    bgImg: {
        height: 50,
        width: width,
        position: 'absolute',
        bottom: -50
    },
    bg: {
        height: height - 150,
        width: width,
        backgroundColor: '#030062',
        position: 'absolute',
        top: 0
    },
    Img: {
        height: 330,
        alignSelf: 'center',
        // marginTop: 100,
        resizeMode: 'contain',
    },
    bg2: {
        position: 'absolute',
        right: 0,
        top: '15%',
        zIndex: 9
    },
    bg3: {
        position: 'absolute',
        right: 0,
        top: '34%',
        zIndex: 9,
        right: '15%'
    },
    bg4: {
        position: 'absolute',
        right: 0,
        top: '35%',
        zIndex: 9,
        left: 0
    },
    bg5: {
        position: 'absolute',
        right: 0,
        top: '50%',
        zIndex: 9,
        right: 0
    },
    childVoucher: {
        position: 'absolute',
        top: '20%',
        left: 10,
        width: '85%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },


});
