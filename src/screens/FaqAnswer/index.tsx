import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BgFavorite, IcArrowRight, IcHelpChatUs, IcHelpCs, IcHelpMail } from '../../assets/Images';
import { dark_blue, primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { height, width } from '../../assets/styles/Sizing';
import { MainHeader, Text } from '../../components';

const contents = [
  {
    title: 'Why can’t I change my name/mobile number?',
    screen: ''
  },
  {
    title: `Do others can see my profile picture?`,
    screen: ''
  },
  {
    title: 'Can I change my KTP address?',
    screen: ''
  },
  {
    title: 'Why do you need my NPWP?',
    screen: ''
  },
  {
    title: 'I can’t access my e-mail',
    screen: ''
  },
]

const FaqAnswer = ({ navigation }) => {
  const [mostSearch, setMostSearch] = useState(contents);
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    let x = await contents.filter(y =>
      y.title?.toLowerCase().includes(search.toLowerCase()),
    );

    setMostSearch(x);
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: dark_blue
    }}>
      <View style={{
        position: 'absolute',
        top: '-40%'
      }}>
        <BgFavorite height={height} width={width} />
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <MainHeader
          title={'Why can’t I change my name/mobile number?'}
        />

      </View>

      <View style={{
        marginTop: 73
      }} />

      <ScrollView>
        <View style={{
          margin: 20
        }}>

          <Text css={'4-14'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore et dolore magna wiri aliqua. Up exlaborum incididunt.

            Vestibulum et nulla sed ex lobortis laoreet in in metus. Donec consequat, velit in mollis mollis, tortor magna auctor est, vel sagittis dui dolor vel ipsum. Curabitur accumsan, lacus a finibus pretium, sem sem cursus ex, quis porttitor dui lectus non leo.

            Vestibulum et nulla sed ex lobortis laoreet in in metus. Donec consequat, velit in mollis mollis, tortor magna auctor est, vel sagittis dui dolor vel ipsum. Curabitur accumsan, lacus a finibus pretium, sem sem cursus ex, quis porttitor dui lectus non leo.
          </Text>



        </View>

        <View style={{
          backgroundColor: primary_blue,
          padding: 20,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        }}>
          <Text css={'4-16'} style={{ alignSelf: 'center' }}>Didn’t find what you’re looking for?</Text>

          <TouchableOpacity style={styles.cardWrapper}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IcHelpCs />
              <View style={{ marginLeft: 12 }}>
                <Text css={'8-16'}>Call Center</Text>
                <Text css={'4-14'}>14083</Text>
              </View>
            </View>
            <IcArrowRight />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('SendEmail')}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IcHelpMail />
              <View style={{ marginLeft: 12 }}>
                <Text css={'8-16'}>Send E-mail</Text>
                <Text css={'4-14'}>help@bion.co.id</Text>
              </View>
            </View>
            <IcArrowRight />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardWrapper}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IcHelpChatUs />
              <View style={{ marginLeft: 12 }}>
                <Text css={'8-16'}>Chat Us</Text>
                <Text css={'4-14'}>help@bion.co.id</Text>
              </View>
            </View>
            <IcArrowRight />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};

export default FaqAnswer;

const styles = StyleSheet.create({
  circleWrapper: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: primary_yellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    borderBottomColor: '#FFFFFF4D',
    borderBottomWidth: 1,
    paddingBottom: 18,
    marginBottom: 18,
    justifyContent: 'space-between'
  },
  filterWrapper: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 40,
    width: '25%',
    backgroundColor: white,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 7
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: dark_blue,
    padding: 10
  },
  content: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#FFFFFF4D',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#221F7A',
    padding: 14,
    marginTop: 20,
    borderRadius: 12
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: dark_blue,
    padding: 8,
    borderRadius: 6,
    marginTop: 30
  },
  input: {
    padding: Platform.OS === 'android' ? 0 : 10,
    marginLeft: 10,
    color: white,
    width: '100%'
  },
});
