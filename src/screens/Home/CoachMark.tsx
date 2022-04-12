import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IcArrowHome, IcSwipe } from "../../assets/Images";
import { white } from "../../assets/styles/Colors";
import { nunito400, nunito800 } from "../../assets/styles/FontFamily";

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    // <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{
            position: 'absolute',
            right: -10,
            top: '35%',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={{
              position: 'absolute',
              right: '100%',
              top: '20%'
            }}>
              <IcArrowHome />
            </View>
            <IcSwipe />
          </View>

          <Text style={styles.fontTitle}>Welcome to bion!</Text>
          <Text style={styles.fontDesc}>You can swipe left to reveal your bion pockets!</Text>
          
          <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={styles.buttonWrapper}>
            <Text style={{
              fontFamily: nunito800,
              fontSize: 14,
              color: white,
              alignSelf: 'center'
            }}>OK, I Got It!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000000',
    opacity: 0.9
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  fontDesc: {
    fontFamily: nunito400,
    fontSize: 14,
    color: white
  },
  fontTitle: {
    fontFamily: nunito800,
    fontSize: 24,
    color: white,
    marginTop: '100%'
  },
  buttonWrapper: {
    width: '70%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: white,
    borderRadius: 50,
    padding: 15
  },
});

export default App;