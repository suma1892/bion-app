import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';
import { IcDropdown } from '../../assets/Images';
import { dark_blue, white } from '../../assets/styles/Colors';

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
                <IcDropdown />
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
        backgroundColor: dark_blue,
        padding: 12,
        marginTop: 4
    },
    fontSelect: {
        fontFamily: nunito400,
        fontSize: 16,
        color: '#FFFFFF80'
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
