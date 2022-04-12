import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { BgCustomName, BgFooterCustomName, ImgCardName } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';

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
const CustomPrintedName = ({ navigation, route }) => {
  const status = route?.params?.status;

  const [positon, setPositon] = useState(0);

  function _renderItem({ item, index }) {
    return (
      <ImgCardName />
    )
  }

  const handleContinue = () => {
    if (status === 'new-account') {
      navigation.navigate('UploadDocuments')
      return 0;
    }
    navigation.navigate('RegisterCreate')
  }
  return (
    <ViewContainer showBackgroundImage={false} backgroundColor={dark_blue}>
      <MainHeader
        title={'Custom Printed Name'}
        desc={'Choose your name to be printed on\nbion ATM Card'}
        navigation={navigation}
      />
      <View style={{
        position: 'absolute',
        bottom: '35%',
        width: width,
        zIndex: -999
      }}>
        <BgCustomName width={width}  height={height} />
      </View>
      <View style={{
        alignSelf: 'center',
        marginTop: 42,
        height: '45%'
      }}>
        <Carousel
          // ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={_renderItem}
          sliderWidth={500}
          showsHorizontalScrollIndicator={false}
          itemWidth={250}
          onSnapToItem={index => setPositon(index)}
        />

      </View>
      <View style={{
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '30%',
        alignSelf: 'center',
      }}>
        {[0, 1, 2].map((_, i) => (
          <View
            key={i.toString()}
            style={styles.dots(positon, i)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.fontChoose}>Select This Option</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <BgFooterCustomName width={width} />
      </View>
    </ViewContainer>
  );
};

export default CustomPrintedName;

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
    // textAlign: 'center'
  },

  button: {
    width: '80%',
    backgroundColor: primary_yellow,
    borderRadius: 50,
    padding: 14,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 10

  },
  fontChoose: {
    fontFamily: nunito800,
    fontSize: 14,
    color: primary_blue
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: -20,
    zIndex: -10
  },
  dots: (positon, i) => ({
    width: positon === i ? 30 : 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: positon === i ? white : '#030149'
  })
});
