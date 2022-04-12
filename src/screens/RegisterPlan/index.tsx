import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { BgRegisterPlan, BgRegisterPlan2, IcArrowLeft, IcFreeAdmin, ImgCard } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { Background } from '../../components';
import { stackNavigatorParamList } from '../../types';

const { width, height } = Dimensions.get('screen');
const entries = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
]


export interface Props {
  navigation: StackNavigationProp<stackNavigatorParamList, 'RegisterPlan'>
}

const RegisterPlan: React.FC <Props> = ({navigation}) => {

  function _renderItem({ item, index }) {
    return (
      <ImgCard />
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: dark_blue,
    }}>
      <TouchableOpacity 
        onPress={()=>navigation.goBack()}
      style={{
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 9999
      }}>
        <IcArrowLeft/>
      </TouchableOpacity>
      <Background
        ImgSvg={() => <BgRegisterPlan width={width} height={height} />} style={{
          top: '-43%',
        }}
      />
      <ScrollView>
        <View style={{
          marginTop: 121,
          alignItems: 'center'
        }}>
          <Text style={styles.fontWelcome}>WELCOME TO</Text>
          <Text style={styles.fontTitle}>{'bion Savings\nAccount Opening'}</Text>
          <Text style={styles.fontPerk}>Choose which perks you’d like</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          marginTop: 22,
          height: '25%'
        }}>
          <Carousel
            // ref={(c) => { this._carousel = c; }}
            data={entries}
            renderItem={_renderItem}
            sliderWidth={500}
            itemWidth={250}
            onSnapToItem={index => console.log('index ', index)}
          />
        </View>
        <View style={{marginTop: 30,}}>
          <BgRegisterPlan2 preserveAspectRatio="xMinYMin slice" width={'100%'} height={'13.6%'} />
          <View style={{
            backgroundColor: primary_blue,
            flex: 1
          }}>
            <View style={styles.wrapperList}>
              <IcFreeAdmin />
              <Text style={styles.fontListDesc}>{`Free admin fee & GPN debit card\n`}<Text style={styles.fontListMore}>Learn More</Text></Text>
            </View>

            {[...Array(4)].map((_, i) => (
              <View key={i.toString()} style={styles.wrapperList}>
                <IcFreeAdmin />
                <Text style={styles.fontListDesc}>{`Free admin fee & GPN debit card`}</Text>
              </View>
            ))}
            <TouchableOpacity onPress={()=>navigation.navigate('RegisterDecision')} style={styles.button}>
              <Text style={styles.fontChoose}>Choose This Plan</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 150}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterPlan;

const styles = StyleSheet.create({
  fontWelcome: {
    fontFamily: nunito400,
    fontSize: 14,
    color: white,
  },
  fontTitle: {
    fontFamily: nunito800,
    fontSize: 24,
    color: white,
    textAlign: 'center'
  },
  fontPerk: {
    fontFamily: nunito400,
    fontSize: 16,
    color: white,
    marginTop: 20
  },
  fontListDesc: {
    fontFamily: nunito400,
    color: white,
    paddingLeft: 10
  },
  wrapperList: {
    flexDirection: 'row',
    backgroundColor: primary_blue,
    alignItems: 'center',
    padding: 16,
    paddingTop: 5
  },
  fontListMore: {
    fontFamily: nunito800,
    fontSize: 14,
    color: primary_yellow
  },
  button: {
    width: '80%',
    backgroundColor: primary_yellow,
    borderRadius: 50,
    padding: 14,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  fontChoose: {
    fontFamily: nunito800,
    fontSize: 14,
    color: primary_blue
  },
});
