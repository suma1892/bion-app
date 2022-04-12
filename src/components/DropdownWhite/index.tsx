import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcDropdownOrange } from '../../assets/Images';
import { black70, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';

const Dropdown = ({
    title,
    placeholder
}) => {
    const [isShow, setisShow] = useState(false);
    return (
        <View style={{ marginTop: 24, zIndex: 9999 }}>
            <Text style={styles.fontTitle}>{title}</Text>
            <TouchableOpacity onPress={() => setisShow(!isShow)} style={styles.wrapperDropdown}>
                <Text style={styles.fontSelect}>{placeholder}</Text>
                <IcDropdownOrange />
            </TouchableOpacity>
            <View style={{
                width: '100%',
                borderRadius: 6,
                backgroundColor: white,
                // zIndex: 9999999
            }}>
                {isShow && <ScrollView style={{ height: 200 }} nestedScrollEnabled>
                    {[...Array(6)].map((_, i) => (
                        <Text onPress={() => setisShow(false)} style={styles.fontTitle2}>Government Official</Text>
                    ))}
                </ScrollView>}
            </View>
        </View>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    fontTitle: {
        fontSize: 12,
        fontFamily: nunito400,
        color: '#FFFFFFB2',
    },
    wrapperDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 6,
        backgroundColor: white,
        padding: 12,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: black70
    },
    fontTitle2: {
        fontSize: 16,
        fontFamily: nunito700,
        color: '#000000',
        borderBottomWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.1)',
        padding: 10,
        marginHorizontal: 5
    },

});
