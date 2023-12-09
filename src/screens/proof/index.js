import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';

const Proof = () => {

    const navigation = useNavigation();
    const array = [
        {
            id: 0,
            name: 'Gal Gadot (Celebrity)',
            img: (require('../../../src/assets/images/gal-gadot.jpg'))
        },
        {
            id: 1,
            name: 'Gal Gadot (Celebrity)',
            img: (require('../../../src/assets/images/gal-gadot.jpg'))
        },
        {
            id: 2,
            name: 'Gal Gadot (Celebrity)',
            img: (require('../../../src/assets/images/gal-gadot.jpg'))
        },

    ]

    function nav(id) {
        navigation.navigate('People');
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                nestedScrollEnabled

            >
                <View style={{ height: responsiveScreenHeight(8) }}>
                    <Header
                        isBack={true}
                    />
                </View>
                <View style={styles.flatlist}>
                    <ScrollView>
                        {array.map((item, index) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={styles.itemContainer2}
                                    onPress={() => nav(item.id)}
                                >
                                    <View style={{ width: responsiveScreenWidth(60), height: responsiveScreenHeight(12), backgroundColor: "red" }}>
                                        <Image source={item.img} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
                                    </View>
                                    <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                        <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>{item.name}</Text>
                                    </View>

                                    <View style={{ backgroundColor: "#BFFF00", width: responsiveScreenWidth(20), height: responsiveScreenHeight(4), alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: "4%" }}>
                                        <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                                            View More
                                        </Text>
                                    </View>
                                </Pressable>
                            )
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer2: {
        margin: 9,
        width: responsiveScreenWidth(70),
        height: responsiveScreenHeight(25),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 4,
            },
        }),
    },
    titleText: {
        fontSize: responsiveScreenFontSize(2),
        color: "black"
    },
    packageDetailsContainer: {
        margin: responsiveScreenWidth(4),
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // For Android
        margin: responsiveScreenWidth(4)
    },
    loader: {
        minHeight: responsiveScreenHeight(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70%"
    },
    flatlist: {
        flex: 1,
        alignItems: "center",
        marginTop: "5%"
    },

});

export default Proof;