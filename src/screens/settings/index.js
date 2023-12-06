import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Header from '../../components/header/Header'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: responsiveScreenHeight(2) }}>
        <TouchableOpacity style={{ width: responsiveScreenWidth(5), height: responsiveScreenHeight(3) }}
          onPress={() => navigation.goBack()}
        >
          <Image source={require('../../../src/assets/images/left-arrow.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
        </TouchableOpacity>
        <View>
          <Text style={{ textAlign: "center", fontFamily: 'mrt-rglr' }}>Settings</Text>
        </View>
        <View style={{ width: responsiveScreenWidth(5), height: responsiveScreenHeight(3) }}>
          <Image source={require('../../../src/assets/images/setting.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
        </View>
      </View>
      <View style={{ margin: "5%" }}>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(2) }}
          onPress={() => navigation.navigate('NearMe')}
        >
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/workplace.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ color: "black", fontFamily: 'mrt-rglr', textAlign: "center", fontSize: 16, marginLeft: "5%" }}>Near Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(5) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/button.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "5%" }}>Approve Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(5) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/scanner.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "5%" }}>Scan Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(5) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/about.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "5%" }}>About Never Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(5) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/document.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "5%" }}>How To boycott?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", marginTop: responsiveScreenHeight(5) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/internet.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "5%" }}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", padding: 6, borderRadius: 10, marginTop: responsiveScreenHeight(5), backgroundColor: "#BFFF00", width: responsiveScreenWidth(50) }}>
          <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/instagram.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", marginLeft: "5%" }}>Follow us on Instagram</Text>
        </TouchableOpacity>
        <View style={{ marginTop: responsiveScreenHeight(2) }}>
          <View style={{ width: responsiveScreenWidth(10), height: responsiveScreenHeight(6) }}>
            <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveScreenHeight(1) }}>
          <View style={{ width: responsiveScreenWidth(4), height: responsiveScreenHeight(3) }}>
            <Image source={require('../../../src/assets/images/copyright.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "2%" }}>2023</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveScreenHeight(1) }}>
          <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", fontSize: 16, marginLeft: "2%" }}>All Rights Reserved</Text>
        </View>
      </View>
    </View>
  )
}

export default Settings