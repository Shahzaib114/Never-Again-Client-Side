import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';


const NearMe = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8) }}>
                <Header
                    isBack={false}
                />
            </View>
            <View style={{ margin: "5%" }}>
                <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                    Brands Found Near Your Location!
                </Text>
            </View>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(2) }}
            >
                <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
                    <Image source={require('../../../src/assets/images/workplace.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NearMe;