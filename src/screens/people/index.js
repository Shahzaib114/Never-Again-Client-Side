import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'


const People = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: responsiveScreenHeight(8) }}>
                <Header
                    isBack={true}
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: responsiveScreenWidth(60), height: responsiveScreenHeight(25) }}>
                    <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={{ flexDirection: "row", gap: responsiveFontSize(2), marginTop: responsiveScreenHeight(1) }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Gal Gadot (Celebrity)</Text>
                </View>
                <View style={{ flexDirection: "row", gap: responsiveFontSize(2), marginTop: responsiveScreenHeight(1) }}>
                    <Text style={{ color: "black", textAlign: "center", fontFamily: 'mrt-rglr' }}>Gal Gadot is Na isreali actress & model. {'\n'}
                        She was born in rosh Ha’eyeing, Isreal,to an Ashkenzie {'\n'}Jewish Family (from plonad, Austria, Germany & Czechosvakia).{'\n'} She Served in the IDF for two years & {'\n'}won the miss isreal title in 2004</Text>
                </View>
                <View style={{ flexDirection: "row", gap: responsiveFontSize(2), marginTop: responsiveScreenHeight(1) }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Born: 1985 - 04 -30{'\n'}Height: 5’10’(1.78 m)</Text>
                </View>
                <View style={{ flexDirection: "row", gap: responsiveFontSize(2), marginTop: responsiveScreenHeight(1) }}>
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>Don’t watch Gal Gadot Movies.</Text>
                </View>
                <View style={{ flexDirection: "row", gap: responsiveFontSize(1), marginVertical: responsiveScreenHeight(2) }}>
                    <View style={{ backgroundColor: "#D9D9D9", width: responsiveScreenHeight(6), height: responsiveScreenHeight(6), borderRadius: responsiveFontSize(20) }}></View>
                    <View style={{ backgroundColor: "#D9D9D9", width: responsiveScreenHeight(6), height: responsiveScreenHeight(6), borderRadius: responsiveFontSize(20) }}></View>
                    <View style={{ backgroundColor: "#D9D9D9", width: responsiveScreenHeight(6), height: responsiveScreenHeight(6), borderRadius: responsiveFontSize(20) }}></View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#BFFF00", width: responsiveScreenWidth(22), height: responsiveScreenHeight(5), borderRadius: 10, alignItems: "center", justifyContent: "center" }}
                >
                    <Text style={{ color: "black", fontFamily: 'mrt-rglr' }}>
                        Proof
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default People