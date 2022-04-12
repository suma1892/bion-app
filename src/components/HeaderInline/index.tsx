import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowLeft } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito800 } from '../../assets/styles/FontFamily';

const HeaderInline = ({
    title,
}) => {
  const navigation = useNavigation();
  
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <IcArrowLeft/>
      </TouchableOpacity>
      <Text style={styles.fontTitle}>{title}</Text>
      <View style={{width: 20}} />
    </View>
  );
};

export default HeaderInline;

const styles = StyleSheet.create({
    fontTitle: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
});
