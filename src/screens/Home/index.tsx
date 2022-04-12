import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgHome, BgHome2, IcCardProgress, IcNotif, IcPayBuy, IcProfile, IcSwipe, IcTap, IcTransfer, IcVa, IcVisibility, IcWithdraw } from '../../assets/Images';
import { bluePale, dark_blue, white, white40 } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import CoachMark from './CoachMark';
const { width, height } = Dimensions.get('screen');

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

const Menu = [
    {
        Ic: () => <IcTransfer />,
        name: 'Transfer',
        screen: 'TransferTo',
        screen2: 'NewReceipt'
    },
    {
        Ic: () => <IcPayBuy />,
        name: 'Pay & Buy',
        screen: 'PayBuy',
    },
    {
        Ic: () => <IcVa />,
        name: `Virtual\nAccount`,
        screen: 'ChooseAccount'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `Withdraw`,
        screen: 'AddFrom',
        screen2: 'NewReceipt-AddBalanceFromOther'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `move balance`,
        screen: 'MoveBalance'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `Choose Account Type`,
        screen: 'ChooseAccountType'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `Choose Tabka`,
        screen: 'ChooseTabka'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `Create Deposito`,
        screen: 'CreateDeposito'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `choose bm savings`,
        screen: 'ChooseBmSavings'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `update balance`,
        screen: 'UpdateBalance'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `scan QR`,
        screen: 'ScanQr'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `send request`,
        screen: 'SendRequest'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `list voucher`,
        screen: 'list-Voucher'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `cash withdrawal`,
        screen: 'CashWithdrawal'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `verify cash withdrawal`,
        screen: 'VerifyCashWithdrawal'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `top up cash`,
        screen: 'TopupCash'
    },
    {
        Ic: () => <IcWithdraw />,
        name: `verify cash topup`,
        screen: 'VerifyCashTopup'
    }

]
const Home = ({ navigation }) => {
    const [showMoney, setShowMoney] = useState(false);

    return (
        <View showBackgroundImage={false} backgroundColor={dark_blue}>
            <View style={{
                position: 'absolute',
                top: '-50%',
            }}>
                <BgHome width={width} height={height} />
            </View>
            <View style={{
                position: 'absolute',
                bottom: '-25%'
            }}>
                <BgHome2 width={width} height={height} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    margin: 20
                }}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.headerWrapper}>
                            <IcProfile />
                            <View style={{
                                marginLeft: 12
                            }}>
                                <Text style={styles.fontWelcome}>Welcome Back,</Text>
                                <Text style={styles.fontName}>Jonathan Ong</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                            <IcNotif />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 135
                    }}>
                        <Text style={styles.fontAccount}>MAIN ACCOUNT</Text>
                        <View style={[styles.headerWrapper, { justifyContent: 'flex-start' }]}>
                            <Text style={styles.fontMoney}>{showMoney ? `Rp••••••••` : `Rp10.750.000`}</Text>
                            <TouchableOpacity onPress={() => setShowMoney(!showMoney)}>
                                {!showMoney && <View style={{
                                    position: 'absolute',
                                    top: '-100%',
                                    right: '-100%'
                                }}>
                                    <IcTap />
                                </View>}
                                <IcVisibility />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.fontCard}>{`••••1234`}</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        right: -20,
                        top: 266,
                        zIndex: 999999
                    }}>
                        <IcSwipe />
                    </View>
                    <View style={[styles.headerWrapper, styles.wrapperCard]}>
                        <IcCardProgress />
                        <Text style={styles.fontCard}>{`Your bion Card will be processed\nwithin 2 days after registration`}</Text>
                    </View>

                    <Text style={styles.fontTitle}>QUICK MENU</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 24
                        // alignItems: 'center',
                    }}>
                        <ScrollView horizontal>
                            {Menu.map((_, i) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(_?.screen)}
                                    onLongPress={() => navigation.navigate(_?.screen2)}
                                    key={i.toString()}
                                    style={{ marginRight: 24, alignItems: 'center' }}
                                >
                                    <_.Ic />
                                    <Text style={styles.fontMenu}>{_.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <Text style={styles.fontTitle}>QUICK MENU</Text>
                    <Image
                        source={require('../../assets/Images/File/sample-banner.png')}
                        style={{
                            height: 164,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                            marginTop: 10
                        }}

                    />

                    <Text style={styles.fontDescImg}>Friendship Month: Free Transfer to anywhere</Text>
                </View>
            </ScrollView>
            <CoachMark />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fontWelcome: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white
    },
    fontDescImg: {
        fontFamily: nunito700,
        fontSize: 18,
        color: white,
        marginTop: 11
    },
    fontName: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontAccount: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white40,
    },
    fontMoney: {
        fontFamily: nunito800,
        fontSize: 30,
        color: white,
        marginRight: 16
    },
    fontCard: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white,
        marginLeft: 15
    },
    wrapperCard: {
        backgroundColor: bluePale,
        borderRadius: 12,
        padding: 12,
        marginTop: '50%',
        justifyContent: 'flex-start'
    },
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 24
    },
    fontMenu: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white,
        marginTop: 12,
        textAlign: 'center'
    },

});
