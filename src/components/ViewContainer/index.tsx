import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BgRegisterDecFooter, BgWithHair } from '../../assets/Images';
import { primary_blue } from '../../assets/styles/Colors';

interface Props {
  backgroundColor?: any,
  children?: any,
  showBackgroundImage?: any,
}

const ViewContainer: React.FC<Props> = ({
  backgroundColor,
  children,
  showBackgroundImage = true
}) => {

  return (
    <View style={[styles.mainWrapper, { backgroundColor: backgroundColor || primary_blue }]}>
      {children}

      {showBackgroundImage &&
        <>
          <View style={styles.bgHeader}>
            <BgWithHair />
          </View>
          <View style={styles.bgFooter}>
            <BgRegisterDecFooter />
          </View>
        </>}
    </View>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: 20,
    // backgroundColor: primary_blue,
    zIndex: -99
  },
  bgFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -99
  },
  bgHeader: {
    position: 'absolute',
    top: 0,
    zIndex: -99
  },
});
