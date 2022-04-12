import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowLeft } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';

interface Props {
  title?: String,
  DescAjx?: React.FC,
  desc?: String,
  Ic?: any,
  isTop?: Boolean,
}

const MainHeader: React.FC<Props> = ({
  title,
  DescAjx,
  desc,
  Ic,
  isTop = true,

}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      flexDirection: !isTop ? 'row' : 'column',
      alignItems: !isTop ? 'center' : 'baseline'
    }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowBack}>
        <IcArrowLeft />
      </TouchableOpacity>
      {isTop && <View style={{
        marginTop: Ic ? 0 : 22
      }}>
        {Ic && <Ic />}
      </View>}

      <Text style={styles.fontTitle}>{title}</Text>
      {!isTop ? <View /> : typeof DescAjx === 'function' ? <DescAjx /> : <Text style={styles.fontDesc}>{desc}</Text>}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  arrowBack: {
    // position: 'absolute',
    // top: 10,
    // left: 10,
    zIndex: 999999
  },
  fontTitle: {
    fontFamily: nunito800,
    color: white,
    fontSize: 24
  },
  fontDesc: {
    fontFamily: nunito400,
    color: white,
    fontSize: 14,
    marginTop: 6
  },
});
