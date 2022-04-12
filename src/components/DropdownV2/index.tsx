import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcArrowTopOrange, IcCheck } from '../../assets/Images';
import { black70, white } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';

const DropdownV2 = ({
    data,
    title,
    onChange,
    value,
    placeholder

}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <View>
            <Text style={styles.fontTitle2}>{title}</Text>
            <View style={{
            }}>
                <TouchableOpacity
                    onPress={() => setOpenDropdown(!openDropdown)}
                    style={[styles.dropdownWrapper]}>
                    <Text style={[styles.fontSelect, { color: data?.[value]?.title ? 'black' : '#33333380' }]}>{data?.[value]?.title || placeholder}</Text>
                    <IcArrowTopOrange />
                </TouchableOpacity>
                {openDropdown && <View>
                    <View style={styles.dropdown}>
                        <ScrollView nestedScrollEnabled={true}>
                            {data?.map((_, i) => (
                                <TouchableOpacity
                                    key={i.toString()}
                                    onPress={() => {
                                        setOpenDropdown(false);
                                        onChange(i);
                                    }}
                                    style={styles.fontWrapper(value === i)}>
                                    <View style={{ width: '70%' }}>
                                        <Text style={styles.fontDropdownTitle}>{_?.title}</Text>
                                        {_?.desc && <Text style={styles.fontDropdownDesc}>{_?.desc}</Text>}
                                    </View>
                                    {value === i ? <IcCheck /> : <View />}
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>}
            </View>
        </View>
    );
};

export default DropdownV2;

const styles = StyleSheet.create({
    fontTitle2: {
        fontSize: 12,
        fontFamily: nunito400,
        color: black70,
    },
    dropdownWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: white,
        marginVertical: 10
    },
    dropdown: {
        position: 'absolute',
        width: '100%',
        height: 300,
        width: '99%',
        alignSelf: 'center',
        // padding: 10,
        backgroundColor: 'white',
        elevation: 4,
        zIndex: 9999999
    },
    fontDropdownTitle: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
    },
    fontDropdownDesc: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black70,
        marginTop: 2
    },
    fontWrapper: _ => ({
        padding: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: _ ? '#FF85001A' : white
    }),
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
    },
});
