import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Carousel from '../../localLib/react-native-carousel-view';
import Carousel from 'react-native-snap-carousel';
import { BgOnBoarding } from '../../assets/Images';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { ViewContainer } from '../../components';
import { stackNavigatorParamList } from '../../types';
// import Carousel from 'react-native-carousel-view';

const entries = [
  {
    title: "Hello,\nWelcome to bion",
    text: "Your personal online banking app that helps you\nmanage and grow your savings easily.",
  },
  {
    title: "Grow Your Money",
    text: "It’s easy to grow your savings bion pockets\ndirectly from everywhere, It’s safe too!",
  },
  {
    title: "Have Fun with\nYour bion",
    text: "Plan your savings, or pay effortlessly with\nQRIS, plus rewards await you. Start now\nto enjoy the benefit!",
  },
]
const { width, height } = Dimensions.get('screen');


export interface Props {
  navigation: StackNavigationProp<stackNavigatorParamList, 'Onboarding'>
}

const OnBoarding: React.FC<Props> = ({ navigation }) => {
  const [positon, setPositon] = useState(0);

  const handleRegister = () => {
    navigation.navigate('RegisterProgress');
  }

  function _renderItem({ item, index }) {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.fontCarouselTitle}>{item?.title}</Text>
        <Text style={styles.fontCarouselDesc}>{item?.text}</Text>
      </View>
    )
  }


  return (
    <ViewContainer showBackgroundImage={false} backgroundColor={undefined}>
      <View style={{
        position: 'absolute',
        bottom: '-43%',
        right: 0,
      }}>
        <BgOnBoarding width={width} height={height} />
      </View>
      <View style={styles.wrapperContent}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.LangWrapper(true)} >
              <Text style={styles.fontLang(true)}>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.LangWrapper(false), { marginLeft: 10 }]} >
              <Text style={styles.fontLang(false)}>ID</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.fontHelp}>HELP</Text>
        </View>
        <Carousel
          // ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={_renderItem}
          sliderWidth={width}
          showsHorizontalScrollIndicator={false}
          itemWidth={width}
          onSnapToItem={(index: React.SetStateAction<number>) => setPositon(index)}
        />
        <View style={{
          flexDirection: 'row',
          width: '20%',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '20%',
          alignSelf: 'baseline',
        }}>
          {[0, 1, 2].map((_, i) => (
            <View
              key={i.toString()}
              style={styles.dots(positon, i)}
            />
          ))}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.buttonLogin}>
            <Text style={styles.fontButtonLogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister} style={styles.buttonRegister}>
            <Text style={styles.fontButtonRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewContainer>
  );
};

export default OnBoarding;

interface StyleSheetProps {
  LangWrapper: any,
  wrapperContent: any,
  fontLang: any,
  row: any,
  fontHelp: any,
  contentContainer: any,
  fontCarouselTitle: any,
  fontCarouselDesc: any,
  buttonLogin: any,
  buttonRegister: any,
  wrapperButton: any,
  fontButtonLogin: any,
  fontButtonRegister: any,
  dots: any,
}

const styles = StyleSheet.create<StyleSheetProps>({
  wrapperContent: {
    flex: 1,
  },
  LangWrapper: (stat: any) => ({
    padding: 6,
    backgroundColor: stat ? primary_yellow : primary_blue,
    borderRadius: 50
  }),
  fontLang: (stat: any) => ({
    fontFamily: stat ? nunito800 : nunito400,
    color: stat ? primary_blue : white,
    fontSize: 14,
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontHelp: {
    fontFamily: nunito800,
    color: primary_yellow,
    fontSize: 14,
  },
  contentContainer: {
    // borderWidth: 2,
    // borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    marginTop: '40%',
    // alignItems: 'center',
  },
  fontCarouselTitle: {
    fontFamily: nunito800,
    color: white,
    fontSize: 32
  },
  fontCarouselDesc: {
    fontFamily: nunito400,
    color: white,
    fontSize: 16,
    lineHeight: 25,
    marginTop: 12,
  },
  buttonLogin: {
    borderWidth: 1,
    borderColor: white,
    paddingVertical: 13,
    width: 156,
    alignItems: 'center',
    borderRadius: 50
  },
  buttonRegister: {
    paddingVertical: 13,
    width: 156,
    backgroundColor: primary_yellow,
    alignItems: 'center',
    borderRadius: 50
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 10
  },
  fontButtonLogin: {
    fontFamily: nunito800,
    fontSize: 14,
    color: white
  },
  fontButtonRegister: {
    fontFamily: nunito800,
    fontSize: 14,
    color: primary_blue
  },
  dots: (positon: any, i: any) => ({
    width: positon === i ? 30 : 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: positon === i ? white : '#030149'
  })
});
