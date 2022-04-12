import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcAddFavorit } from '../../assets/Images';
import { dark_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { ButtonYellow, MainHeader, TextInput, ViewContainer } from '../../components';

const AddFAvorit = ({ navigation }) => {
    return (
        <ViewContainer>
            <MainHeader
                navigation={navigation}
                title={'Add to Favorite'}
                Ic={() => <IcAddFavorit />}
            />

            <View>
                <View style={styles.accountWrapper}>
                    <View style={styles.cirlceWrapper(primary_yellow)}>
                        <Text style={styles.fontName}>VP</Text>
                    </View>
                    <View style={{
                        marginLeft: 12
                    }}>
                        <Text style={[styles.fontTitle]}>Nicodemus Wijaya</Text>
                    </View>
                </View>
            </View>

            <TextInput
                title={'Save as'}
                value={'Nico BM'}
            />

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonFavorit}>
                    <Text style={styles.fontFavorit}>Cancel</Text>
                </TouchableOpacity>

                <ButtonYellow
                    title={'SAVE'}
                    customStyle={{
                        width: '48%',
                        marginBottom: 0
                    }}
                />
            </View>
        </ViewContainer>
    );
};

export default AddFAvorit;

const styles = StyleSheet.create({
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: _
    }),
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: dark_blue,
        padding: 12,
        borderRadius: 6
    },
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontFavorit: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white
    },
    buttonFavorit: {
        width: '48%',
        padding: 14,
        borderWidth: .5,
        borderColor: white,
        // opacity: 0.,/
        alignItems: 'center',
        borderRadius: 50
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 34
    }
});
