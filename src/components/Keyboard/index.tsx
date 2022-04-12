import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcDelete, IcDeleteBlue } from '../../assets/Images';
import { white } from '../../assets/styles/Colors';
import { nunito600 } from '../../assets/styles/FontFamily';

interface Props {
    fillPin: any,
    textColor: any,
    position: any
}
const Keyboard: React.FC<Props> = ({ fillPin, textColor, position }) => {
    return (
        <View style={[styles.keyboardWrapper, { position: position || 'absolute' }]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, -2].map((_, i) => (
                <TouchableOpacity
                    key={i.toString()}
                    onPress={() => {
                        fillPin(_);
                    }}
                    style={[styles.touchPin, { alignItems: i % 3 === 0 ? 'flex-start' : _ === 0 ? 'center' : _ % 3 === 0 || _ === -2 ? 'flex-end' : 'center' }]}>
                    {_ === -2 ? (
                        textColor ? <IcDeleteBlue /> : <IcDelete />
                    ) : _ === -1 ? (
                        <></>
                    ) : (
                        <Text style={styles.fontPin(textColor)}>{_?.toString().replace('_', '')}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Keyboard;

interface styleProps {
    touchPin: any,
    fontPin: any,
    keyboardWrapper: any,
}

const styles = StyleSheet.create<styleProps>({
    touchPin: {
        width: '26%',
        marginTop: 20,

    },
    fontPin: _ => ({
        fontSize: 32,
        fontFamily: nunito600,
        color: _ || white,
        // fontFamily: 'Roboto-Regular',
    }),
    keyboardWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10
    },
});
