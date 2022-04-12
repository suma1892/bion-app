import React from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { IcClose } from "../../assets/Images";
import { width } from "../../assets/styles/Sizing";
import Text from "../Text";

const App = ({modalVisible, setModalVisible, textAlert}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text css={'6-14'} style={styles.modalText}>{textAlert}</Text>
            <IcClose/>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
    width: width
  },
  modalView: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#0EAE3D',
    padding: 15,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    // marginBottom: 15,
    textAlign: "center"
  }
});

export default App;