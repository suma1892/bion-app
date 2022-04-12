import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { BgFooter3, BgRegisterPlan, IcArrowLeft, ImgCard } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { Background, ButtonYellow } from '../../components';

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
const CardDesign = ({ navigation }) => {

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
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 10,
          left: 20,
          zIndex: 9999
        }}>
        <IcArrowLeft />
      </TouchableOpacity>
      <Background
        ImgSvg={() => <BgRegisterPlan width={width} height={height} />} style={{
          top: '-43%',
        }}
      />
      <View style={styles.bgFooter}>
        <BgFooter3 />
      </View>
      <View style={{
        marginTop: 121,
        alignItems: 'center'
      }}>
        <Text style={styles.fontWelcome}>SILVER PLAN</Text>
        <Text style={styles.fontTitle}>{'Choose Card Design'}</Text>
      </View>

      <View style={{
        alignSelf: 'center',
        marginTop: 22,
        height: '50%'
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
      <View style={{ marginTop: 0, }}>
        <View style={{
          backgroundColor: primary_blue,
          flex: 1
        }}>


        </View>
      </View>
      <ButtonYellow
        title={'Choose This Plan'}
        onPress={() => navigation.navigate('RegisterDecision')}
        customStyle={styles.button}
      />
    </View>
  );
};

export default CardDesign;

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
    position: 'absolute',
    bottom: 20
  },
  fontChoose: {
    fontFamily: nunito800,
    fontSize: 14,
    color: primary_blue
  },
  bgFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
