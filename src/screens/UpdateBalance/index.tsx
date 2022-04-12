import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgUpdateBalance, BgUpdateBalance2, IcClose, IcTapCard } from '../../assets/Images';
import { dark_blue, white } from '../../assets/styles/Colors';
import { nunito400 } from '../../assets/styles/FontFamily';
import { height, width } from '../../assets/styles/Sizing';
import { ButtonYellow, ViewContainer } from '../../components';

const UpdateBalance = ({navigation}) => {
    return (
        <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>
            <View style={{
                position: 'absolute',
                top: '-40%',

            }}>
                <BgUpdateBalance height={height} width={width} />

            </View>
            <TouchableOpacity>
                <IcClose />
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                // bottom: '40%',
                // zIndex: 99
            }}>
                <IcTapCard height={height} width={width} />
            </View>
            <View style={{
                position: 'absolute',
                bottom: '-40%',
            }}>
                <BgUpdateBalance2 height={height} width={width} />
            </View>
            <View style={{
                position: 'absolute',
                bottom: '15%',
                alignSelf: 'center'
            }}>
                <Text style={{
                    fontFamily: nunito400,
                    fontSize: 16,
                    color: white,
                    textAlign: 'center'
                }}>Bring Bisa Cash card close to your
                    phone and tap “Update Balance” button</Text>


            </View>
            <ButtonYellow
                title={'UPDATE BALANCE'}
                customStyle={{
                    position: 'absolute',
                    bottom: 20
                }}
                onPress={()=>navigation.navigate('BisaCashHistory')}
            />
        </ViewContainer>
    );
};

export default UpdateBalance;

const styles = StyleSheet.create({});
