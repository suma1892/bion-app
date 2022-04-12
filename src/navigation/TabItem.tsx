// import { History, Home, Wallet } from '@assets/Images';
// import colors from '@assets/styles/Colors';
// import { poppins600 } from '@assets/styles/FontFamily';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcAccounts, IcAccountsActive, IcFavorite2, IcFavorite2Active, IcHome, IcHomeActive, IcQrisActive, IcSearch } from '../assets/Images';
import { primary_yellow } from '../assets/styles/Colors';
import { nunito800 } from '../assets/styles/FontFamily';
const { width } = Dimensions.get('window');

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IcHomeActive /> : <IcHome />;
    }
    if (title === 'Accounts') {
      return active ? <IcAccountsActive /> : <IcAccounts />
    }
    if (title === 'Favorite') {
      return active ? <IcFavorite2Active /> : <IcFavorite2 />;
    }
    if (title === 'Qris') {
      return (
        <View style={{
          marginBottom: 20,
          position: 'absolute',
          bottom: '2%'
        }}>
          <IcQrisActive />
        </View>
      );
    }
    return <IcSearch />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title !== 'Qris' ? title : ''}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 44,
  },
  text: (active) => ({
    fontSize: 10,
    fontFamily: nunito800,
    color: active ? primary_yellow : '#FFFFFF66',
    marginTop: 9,
    // position: 'absolute',
    // bottom: 20,
  }),

});
