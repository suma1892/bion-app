import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IcClose, SampleCardShow } from "../../assets/Images";
import { primary_yellow, white } from "../../assets/styles/Colors";
import { nunito400 } from "../../assets/styles/FontFamily";

const App = ({
    modalVisible,
    setModalVisible
}) => {
    //   const [modalVisible, setModalVisible] = useState(true);
    return (
        // <View style={styles.centeredView}>
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={{
                    position: 'absolute',
                    right: 20,
                    top: 20
                }}>
                    <IcClose/>
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    top: '25%'
                }}>
                    <SampleCardShow />

                    <Text style={styles.fontInfo}>INFORMATION WILL BE HIDDEN IN <Text style={{color: primary_yellow}}>59S</Text></Text>
                </View>
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
    fontInfo: {
        fontFamily: nunito400,
        fontSize: 12,
        color: white,
        alignSelf: 'center',
        marginTop: 50
    },
});

export default App;