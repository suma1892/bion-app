import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { primary_blue, primary_yellow, white } from '../../assets/styles/Colors';
import { nunito400, nunito700, nunito800 } from '../../assets/styles/FontFamily';
import { MainHeader, ViewContainer } from '../../components';

const DataConfirmation = ({ navigation, route }) => {
    const status = route?.params?.status;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isTop, setIsTop] = useState(true);

    const handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
        if (event.nativeEvent.contentOffset.y === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }
    return (
        <ViewContainer>
            <MainHeader
                title={'Data Confirmation'}
                desc={'Check your entered information'}
                navigation={navigation}
                isTop={isTop}
            />
            <ScrollView
                onScroll={handleScroll}
            >
                    <View style={{
                        alignSelf: 'center',
                        width: '100%',
                        marginTop: 24
                    }}>
                    </View>

                    {status !== 'new-account' &&
                        <>
                            <View style={styles.wrapperTitle}>
                                <Text style={styles.fontTitle}>BANK MESTIKA ACCOUNT</Text>
                                <Text style={styles.fontEdit}>EDIT</Text>
                            </View>

                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>ATM Card Number</Text>
                            <Text style={styles.fontTitle}>****1234</Text>
                            <View style={styles.line} />
                        </>
                    }
                    <View style={styles.wrapperTitle}>
                        <Text style={styles.fontTitle}>PERSONAL INFO</Text>
                        <Text style={styles.fontEdit}>EDIT</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Mobile Number</Text>
                            <Text style={styles.fontTitle}>+62812344567890</Text>
                        </View>

                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>E-mail</Text>
                            <Text style={styles.fontTitle}>jonathan@mail.com</Text>
                        </View>
                    </View>
                    <View style={styles.line} />

                    {status !== 'new-account' &&
                        <>
                            <View style={styles.wrapperTitle}>
                                <Text style={styles.fontTitle}>UPLOAD KTP</Text>
                                <Text style={styles.fontEdit}>EDIT</Text>
                            </View>
                            <View style={{
                                // marginTop: '-7%'
                            }}>
                                <Image
                                    source={
                                        require('../../assets/Images/File/sample-ktp.png')
                                    }
                                    style={styles.Img}
                                />
                            </View>
                        </>
                    }

                    {status === 'new-account' &&
                        <>
                            <View style={styles.wrapperTitle}>
                                <Text style={styles.fontTitle}>UPLOAD DOCUMENTS</Text>
                                <Text style={styles.fontEdit}>EDIT</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>KTP</Text>
                                    <View style={{
                                    }}>
                                        <Image
                                            source={
                                                require('../../assets/Images/File/sample-ktp.png')
                                            }
                                            style={styles.Img}
                                        />
                                    </View>
                                </View>

                                <View>
                                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Selfie with KTP</Text>
                                    <View style={{
                                    }}>
                                        <Image
                                            source={
                                                require('../../assets/Images/File/sample-selfie.png')
                                            }
                                            style={styles.Img}
                                        />
                                    </View>
                                </View>
                            </View>

                            <Text style={[styles.fontDesc2, {}]}>NPWP</Text>
                            <View style={{
                            }}>

                                <Image
                                    source={
                                        require('../../assets/Images/File/sample-npwp.png')
                                    }
                                    style={styles.Img}
                                />
                            </View>
                        </>

                    }

                    <Text style={[styles.fontDesc2, {}]}>KTP Number</Text>
                    <Text style={styles.fontTitle}>31730505123446678</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Full Name</Text>
                    <Text style={styles.fontTitle}>Jonathan Ong</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>KTP Address</Text>
                    <Text style={styles.fontTitle}>Apartment Jakarta Hijau, Jl. P. Diponegoro no.1, Kebun Kosong, Kec. Kemayoran, Kota Jakarta Pusat, DKI Jakarta, 11301</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Name on Card</Text>
                    <Text style={styles.fontTitle}>Jonathan O.</Text>
                    <View style={styles.line} />

                    <View style={styles.wrapperTitle}>
                        <Text style={styles.fontTitle}>FINANCIAL INFO</Text>
                        <Text style={styles.fontEdit}>EDIT</Text>
                    </View>
                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Purpose</Text>
                    <Text style={styles.fontTitle}>Savings</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Main Source of Fund</Text>
                    <Text style={styles.fontTitle}>Salary</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Withdraw/Month</Text>
                            <Text style={styles.fontTitle}>0-10 times</Text>
                        </View>

                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Withdraw Amount/Month</Text>
                            <Text style={styles.fontTitle}>{`<Rp30million`}</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Deposit/Month</Text>
                            <Text style={styles.fontTitle}>0-10 times</Text>
                        </View>

                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Deposit Amount/Month</Text>
                            <Text style={styles.fontTitle}>{`<Rp30million`}</Text>
                        </View>
                    </View>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Occupation</Text>
                    <Text style={styles.fontTitle}>Private Employee</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Employment Position</Text>
                    <Text style={styles.fontTitle}>Supervisor</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Company Name</Text>
                    <Text style={styles.fontTitle}>Antikode</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Company Phone Number</Text>
                    <Text style={styles.fontTitle}>+621234567</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Business Industry</Text>
                    <Text style={styles.fontTitle}>Technology</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Company Address</Text>
                    <Text style={styles.fontTitle}>Jl. Jurangmangu Barat no.8, Pondok Aren, Tangerang Selatan, 12345</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Gross Income/Year</Text>
                    <Text style={styles.fontTitle}>{`>100million`}</Text>

                    <Text style={[styles.fontDesc2, { marginTop: 16 }]}>Other Source of Income</Text>
                    <Text style={styles.fontTitle}>No</Text>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('CreatePassword', {status: status}) }}
                    style={styles.button}>
                    <Text style={styles.fontChoose}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </ViewContainer>
    );
};

export default DataConfirmation;

const styles = StyleSheet.create({
    bgFooter: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    bgHeader: {
        position: 'absolute',
        top: 0
    },
    arrowBack: isTop => ({
        position: 'absolute',
        paddingLeft: 20,
        zIndex: 9999,
        flexDirection: isTop ? 'column' : 'row',
        alignItems: isTop ? 'baseline' : 'center',
        width: '100%',
        backgroundColor: isTop ? 'transparent' : primary_blue,
        marginTop: isTop ? 10 : 0,
        paddingVertical: isTop ? 0 : 10,
    }),
    fontAsking: {
        fontFamily: nunito800,
        color: white,
        fontSize: 24
    },
    fontDesc: {
        fontFamily: nunito400,
        color: white,
        fontSize: 14,
        marginTop: 6
    },
    fontDesc2: {
        fontFamily: nunito400,
        color: white,
        fontSize: 12,
        marginTop: 6
    },
    bgHair: {
        position: 'absolute',
        right: 30
    },
    button: {
        width: '75%',
        backgroundColor: primary_yellow,
        borderRadius: 50,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    fontChoose: {
        fontFamily: nunito800,
        fontSize: 14,
        color: primary_blue
    },
    fontTitle: {
        fontSize: 14,
        fontFamily: nunito800,
        color: white,
    },
    m14: {
        marginTop: 14,
    },
    wrapperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    fontEdit: {
        fontSize: 12,
        fontFamily: nunito700,
        color: primary_yellow
    },
    line: {
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
        marginTop: 32
    },
    Img: {
        height: 95,
        width: 156,
        marginVertical: 10
    }
});
