import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BgReceipt, Icreceipt } from '../../assets/Images';
import { black70, primary_blue, primary_orange, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';
import { ButtonYellow, DropdownWhite, Keyboard, MainHeader, ViewContainer } from '../../components';
const { width, height } = Dimensions.get('screen');

const NewReceipt = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const fillPin = (_) => {
    // if (isError === true) {
    //     setIsError(false);
    //     // setErrorMessage('');
    // }

    if (_ !== -1 && _ !== -2) {
      setPin(`${pin}` + `${_}`);
    } else if (_ === -2) {
      setPin(pin.slice(0, -1));
    }
  };

  return (
    <ViewContainer showBackgroundImage={false} backgroundColor={white}>

      <MainHeader
        navigation={navigation}
        title={'Add New Recipient'}
        Ic={() => <Icreceipt />}
      />

      <View style={{
        position: 'absolute',
        top: '-40%',
        right: 0,
        zIndex: -99
      }}>
        <BgReceipt width={width} height={height} />
      </View>
      <ScrollView>
        <View style={{ marginTop: -24 }} />
        <DropdownWhite
          title={'Bank'}
          placeholder={'Bank Mestika'}
          backgroundColor={white}
        />

        <Text style={styles.fontAccount}>Account Number</Text>
        <View style={styles.checkWrapper}>
          <TextInput
            value={pin}
            style={styles.input}
          />
          <Text style={{
            fontFamily: nunito700,
            color: primary_orange,
            fontSize: 14
          }}>CHECK</Text>
        </View>

        <View style={{
          marginTop: 16,
          borderWidth: 1,
          borderColor: '#E0E0E0',
          borderRadius: 6,
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={styles.cirlceWrapper}>
            <Text style={styles.fontName}>NW</Text>
          </View>
          <Text style={{
            fontFamily: nunito700,
            fontSize: 16,
            color: black70,
            marginLeft: 12
          }}>Nicodemus Wijaya</Text>
        </View>

        <ButtonYellow
          title={'Continue'}
          onPress={() => navigation.navigate('Transfer')}
          customStyle={{
            marginTop: 34
          }}
        />
        <Keyboard
          fillPin={(v) => { fillPin(v) }}
          textColor={primary_blue}
          position={'relative'}
        />
      </ScrollView>
    </ViewContainer>

  );
};

export default NewReceipt;

const styles = StyleSheet.create({
  checkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 12,
    borderRadius: 6,
    marginTop: 6
  },
  input: {
    padding: Platform.OS === 'android' ? 0 : 10,
    fontFamily: nunito700,
    fontSize: 16,
    color: black70,
    width: '80%'
  },
  fontAccount: {
    fontFamily: nunito400,
    fontSize: 12,
    color: black70,
    marginTop: 22
  },
  fontName: {
    fontFamily: nunito700,
    fontSize: 16,
    color: white
  },
  cirlceWrapper: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary_yellow
  },
});
