import { Image, ScrollView, ScrollViewBase, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../components';
import { useNavigation } from '@react-navigation/native';

const NewsTab = () => {
    const navigation = useNavigation();
    return (
        <View style>
            <ScrollView style={{marginTop: 20}}>
                {[...Array(5)].map((_, i) => (
                    <TouchableOpacity key={i} onPress={()=>navigation.navigate('NewsDetail')}>
                        <Image
                            source={require('../../assets/Images/File/sample-banner.png')}
                            style={{
                                height: 164,
                                width: '100%',
                                borderRadius: 10,
                                alignSelf: 'center',
                                marginTop: 10,
                                marginBottom: 11
                            }}
                        />
                        <Text css={'7-18'}>Friendship Month: Free Transfer to anywhere</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    );
};

export default NewsTab;

const styles = StyleSheet.create({});
