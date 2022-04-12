import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgReqMoney, IcClose, IcDownload, IcFavorit, IcMessageSent, IcShare } from '../../assets/Images';
import { primary_yellow, white } from '../../assets/styles/Colors';
import { nunito200, nunito800 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, ViewContainer } from '../../components';

const RequestMoneyStatus = ({ navigation }) => {

    return (
        <ViewContainer showBackgroundImage={false}>
            <View style={{
                position: 'absolute',
                top: '-40%',
                // zIndex: 9999
            }}>
                <BgReqMoney width={width} height={height} />
            </View>
            <View style={{
                position: 'absolute',
                top: '20%',
                alignSelf: 'center'
            }}>
                <IcMessageSent />
                {/* <IcMessageCancelled /> */}
                {/* <IcMessageExpired /> */}
                {/* <IcMessagereceived /> */}
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // width: '40%',
                justifyContent: 'space-between',
                zIndex: 9
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IcClose />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '30%',
                    justifyContent: 'space-between'
                }}>
                    <IcFavorit />
                    <IcShare />
                    <IcDownload />
                </View>
            </View>

            <View style={{
                alignItems: 'center'
            }}>
                <Text style={styles.fontSuccess}>Request Sent</Text>
                <Text style={styles.font400}><Text style={styles.font800}>Rp500.000</Text> requested to <Text style={styles.font800}>Nicodemus{`\n`}Wijaya </Text>
                    and will be active until {`\n`}<Text style={styles.font800}>12 Aug 2021, 21:30</Text>
                </Text>
            </View>
            <ButtonYellow
                title={'Back to Home'}
                customStyle={{
                    position: 'absolute',
                    bottom: 50
                }}
                onPress={() => navigation.navigate('Home')}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                    position: 'absolute',
                    bottom: 30,
                    alignSelf: 'center'
                }}>
                <Text style={{
                    fontFamily: nunito800,
                    fontSize: 18,
                    color: primary_yellow,
                }}>Cancel Request </Text>
            </TouchableOpacity>
        </ViewContainer>
    );
};

export default RequestMoneyStatus;

const styles = StyleSheet.create({
    fontSuccess: {
        fontFamily: nunito800,
        fontSize: 32,
        color: white,
        marginTop: '100%'
    },
    font400: {
        fontFamily: nunito200,
        fontSize: 16,
        color: white,
        marginTop: 12,
        textAlign: 'center'
    },
    font800: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
});
