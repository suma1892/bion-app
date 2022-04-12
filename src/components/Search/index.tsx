import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IcSearch } from '../../assets/Images';
import { black70, dark_blue, white, white50 } from '../../assets/styles/Colors';
import { nunito400, nunito700 } from '../../assets/styles/FontFamily';

const Search = ({
    data,
    title,
    onChange,
    value,
    placeholder

}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [input, setInput] = useState('');

    useEffect(() => {
        if(input?.length > 0){
            setOpenDropdown(true);
        }
    }, [input]);
    
    return (
        <View>
            <Text style={styles.fontTitle2}>{title}</Text>
            <View style={{
            }}>
                <View style={styles.inputWrapper}>
                    <IcSearch />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={white50}
                        style={styles.input}
                        onChangeText={_=>setInput(_)}
                        value={input}
                    />
                </View>
                {openDropdown && <View>
                    <View style={styles.dropdown}>
                        <ScrollView nestedScrollEnabled={true}>
                            {[...Array(3)].map((_, i) => (
                                <TouchableOpacity
                                    key={i.toString()}
                                    onPress={() => {
                                        setOpenDropdown(false);
                                        // onChange(i);
                                    }}
                                    style={styles.fontWrapper(value === i)}>
                                    <View style={{ width: '70%' }}>
                                        <Text style={styles.fontDropdownTitle}>{input}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>}
            </View>
        </View>
    );
};

export default Search;

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
        height: 200,
        padding: 10,
        borderRadius: 6,
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
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: _ ? '#FF85001A' : white,
        borderBottomWidth: 1,
        borderBottomColor: '#3333331A'
    }),
    fontSelect: {
        fontFamily: nunito700,
        fontSize: 16,
        color: 'black'
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
