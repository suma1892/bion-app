import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgAboutApp, IcArrowLeft, IcBion2, IcBrowser, IcInstagram, IcTwitter, IcYoutube } from '../../assets/Images';
import { dark_blue } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { Text } from '../../components';

const SOSMED = [
    () => <IcInstagram />,
    () => <IcTwitter />,
    () => <IcYoutube />,
    () => <IcBrowser />,
]

const AboutApp = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: dark_blue
        }}>
            <View style={{
                position: 'absolute',
                top: '-30%'
            }}>
                <BgAboutApp width={width} height={height} />
            </View>

            <View style={{
                margin: 20
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IcArrowLeft />
                </TouchableOpacity>

                <View style={{
                    alignSelf: 'center',
                    marginTop: '20%'
                }}>
                    <IcBion2 />
                </View>

                <Text css={'8-28'} style={{ marginTop: '60%' }}>About bion</Text>
                <Text css={'4-14'}>Version 1.0</Text>
                <Text css={'4-14'} style={{ marginTop: 15 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore et dolore magna wiri aliqua. Up exlaborum incididunt.</Text>
                <Text css={'7-12-#FFFFFF80'} style={{ marginTop: 52 }}>REACH US AT</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '70%',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    {SOSMED.map((_, i) => (
                        <_ key={i} />
                    ))}
                </View>
            </View>



        </View>
    );
};

export default AboutApp;

const styles = StyleSheet.create({});
