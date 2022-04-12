import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black50, black70, bluePale, dark_blue, primary_blue, primary_red, primary_yellow, white, white50 } from '../../assets/styles/Colors';
import { nunito300, nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import BionPocketDefault from './BionPocketDefault';
import MyAccount from './MyAccount';
import OtherAccountDefault from './OtherAccountDefault';

interface Props {
    navigation: any,
    route: any,
}

const Accounts: React.FC<Props> = ({ navigation, route }) => {
    console.log('route = ', JSON.stringify(route));

    const [selectTab, setSelectTab] = useState(0);
    const [isTop, setIsTop] = useState(true);

    return (
        <View style={{
            flex: 1,
            backgroundColor: white
        }}>

            <View style={styles.tabWrapper}>
                <TouchableOpacity
                    onPress={() => setSelectTab(0)}
                    style={{
                        alignItems: 'center'
                    }}>
                    <Text style={styles.fontTab(selectTab === 0)}>MY BION</Text>
                    {selectTab === 0 && <View style={styles.lineTab} />}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectTab(1)}
                    style={{
                        alignItems: 'center'
                    }}>
                    <Text style={styles.fontTab(selectTab === 1)}>BION POCKET</Text>
                    {selectTab === 1 && <View style={styles.lineTab} />}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectTab(2)}
                    style={{
                        alignItems: 'center'
                    }}>
                    <Text style={styles.fontTab(selectTab === 2)}>OTHERS</Text>
                    {selectTab === 2 && <View style={styles.lineTab} />}
                </TouchableOpacity>
            </View>

            {selectTab === 0 && <MyAccount setIsTop={setIsTop} isTop={isTop} />}
            {/* {selectTab === 1 && <BionPocketBlank />} */}
            {selectTab === 1 && <BionPocketDefault navigation={navigation} />}

            {/* {selectTab === 2 && <OtherBlank navigation={navigation} />} */}
            {selectTab === 2 && <OtherAccountDefault navigation={navigation} />}
        </View>
    );
};

export default Accounts;

const styles = StyleSheet.create<any>({
    fontTab: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: white
    }),
    fontTab2: _ => ({
        fontFamily: _ ? nunito700 : nunito300,
        fontSize: 12,
        color: 'black'
    }),
    lineTab: {
        width: 23,
        height: 3,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: primary_yellow
    },
    tabWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 36,
        position: 'absolute',
        top: 10,
        zIndex: 99999
    },
    fontBalance: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white50
    },
    fontRp: {
        fontFamily: nunito800,
        fontSize: 30,
        marginVertical: 5,
        color: white
    },
    fontRek: {
        fontFamily: nunito700,
        fontSize: 14,
        color: white
    },
    activeCardWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: bluePale,
        marginTop: 30,
        borderRadius: 16
    },
    fontCardDesc: {
        fontFamily: nunito400,
        fontSize: 14,
        color: white
    },
    fontActive: {
        fontFamily: nunito800,
        fontSize: 14,
        color: white,
        marginRight: 5
    },
    accountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 15,
        borderBottomColor: '#FFFFFF4D',
        borderBottomWidth: 1,
        width: '100%',
        // paddingBottom: 12
    },
    cirlceWrapper: _ => ({
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#540A7F'
    }),
    fontName: {
        fontFamily: nunito700,
        fontSize: 16,
        color: white
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
        // marginTop: 24
    },
    fontNo: {
        fontFamily: nunito800,
        fontSize: 16,
        color: white
    },
    fontTitle2: {
        fontFamily: nunito700,
        fontSize: 16,
        color: black70
    },
    filterWrapper: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: primary_blue,
        backgroundColor: white,
        padding: 7,
        width: '30%',
        alignItems: 'center',
        borderRadius: 40
    },
    fontFilter: {
        fontFamily: nunito800,
        fontSize: 24,
        color: white
    },
    fontDate: {
        fontFamily: nunito700,
        fontSize: 12,
        color: white50,
        marginTop: 24
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
    // fontTitle2: {
    //     fontSize: 12,
    //     fontFamily: nunito400,
    //     color: '#FFFFFFB2',
    // },
    fontSelect: {
        fontFamily: nunito400,
        fontSize: 16,
        color: '#FFFFFF80'
    },
    fontTitle: {
        fontFamily: nunito400,
        fontSize: 12,
        color: black50,
        // marginTop: 24
    },
    tab1Wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        borderBottomColor: '#3333331A',
        borderBottomWidth: 1,
        paddingBottom: 25
    },
    buttonClose: {
        alignSelf: 'center',
        padding: 14,
        width: '80%',
        borderWidth: 1,
        borderColor: primary_blue,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 20
    },
    fontButton: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontView: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_yellow
    },
    redDot: {
        height: 16,
        aspectRatio: 1,
        backgroundColor: primary_red,
        borderRadius: 50,
        position: 'absolute',
        top: '-40%',
        right: 0
    },
});
