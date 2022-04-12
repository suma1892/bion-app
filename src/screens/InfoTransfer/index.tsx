import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { IcDropdown, IcDropdownTop } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito400, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';
const SECTIONS = [
  {
    title: 'ATM',
    content: 'Semua produk bisa dilihat di website dan Aplikasi kami.',
  },
  {
    title: 'M-Banking',
    content:
      'Aroma Medan terletak di Golf Island, Jalan Pantai Indah Kapuk No.27, Jakarta Utara.',
  },
  {
    title: 'Internet Banking',
    content:
      'Kamu bisa beli produk Aroma Medan dengan cara : datang langsung ke outlet kami di Golf Island, melalui apps atau website kami di www.aromamedan.com, melalui Direct Message Instagram / Facebook kami, atau bisa juga melalui WhatsApp kami di nomor : +62 822 1198 9898.',
  },
];
const InfoTransfer = ({ navigation }) => {

  const [activeSections, setActiveSections] = useState([]);
  const [State, setState] = useState({});


  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text allowFontScaling={false} style={styles.textContent}>
          {section.content}
        </Text>
      </View>
    );
  };

  const _renderHeader = (section, _, isActive) => {
    // console.log('activeText:', isActive);
    return (
      <View style={styles.header}>
        <Text allowFontScaling={false} style={styles.headerText}>
          {section.title}
        </Text>
        {isActive ? (
          <IcDropdown />
        ) : (
          <IcDropdownTop />
        )}
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View>
        {[...Array(3)].map(() => (
          <View  style={styles.content}>
            <Text allowFontScaling={false} style={{ fontSize: 14, fontFamily: nunito400, color: white }}>
              1.{' '}
            </Text>
            <Text allowFontScaling={false} style={{ fontSize: 14, fontFamily: nunito400, color: white }}>
              Input your ATM card to the machine and enter your PIN
            </Text>
          </View>
        ))}

      </View>
    );
  };

  const _updateSections = (activeSections) => {
    // setState({activeSections});
    // console.log('activesection:', activeSections);
    if (activeSections.length === 1) {
      // setState({valueSection: 1});
      setActiveSections(activeSections);
    } else {
      setActiveSections([]);
    }
  };

  const _renderFooter = () => {
    return <View style={styles.footer} />;
  };

  return (
    <ViewContainer>
      <MainHeader
        title={'Add Balance from BCA'}
        navigation={navigation}
      />

      <Accordion
        underlayColor={'#FFF'}
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        renderFooter={_renderFooter}
      // containerStyle={{ padding: 16 }}
      />
    </ViewContainer>
  );
};

export default InfoTransfer;

const styles = StyleSheet.create({
  header: {
    // marginBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#dedede',
    // paddingBottom: 15,
    // paddingTop: 5,
    paddingVertical: 16,
    borderColor: '#C4C4C4',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footer: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  headerText: {
    fontSize: 16,
    fontFamily: nunito800,
    color: white
  },
  headerTextRotate: {
    transform: [{ rotate: '180deg' }],
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  content: {
    // padding: 10,
    // paddingTop: 16,
    flex: 1,
    width: '90%',
    paddingBottom: 16,
    flexDirection: 'row',
    // alignItems: 'center'
  },
  textContent: {},
});
