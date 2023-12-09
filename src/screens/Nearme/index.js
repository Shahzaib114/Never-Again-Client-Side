import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header';


const NearMe = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
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
            <TouchableOpacity style={{ flexDirection: "row", width: responsiveScreenWidth(100), alignItems: "center", justifyContent: "center", marginTop: responsiveScreenHeight(2) }}
            >
                <View style={{ width: responsiveScreenWidth(100), height: responsiveScreenHeight(30) }}>
                    <Image source={require('../../../src/assets/images/map.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                </View>
            </TouchableOpacity>

            <View style={{margin:"10%"}}>
                <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
                <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
                <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Your Current Location:</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default NearMe;