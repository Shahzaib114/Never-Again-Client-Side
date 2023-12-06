import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const Header = ({
  isBack,
  isScanner = true,
}) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", width: responsiveScreenWidth(90), justifyContent: "space-between", alignItems: "center" }}>
        {isBack ?
          (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
              style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              <Image source={require('../../../src/assets/images/left-arrow.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
            </TouchableOpacity>

          )
          :
          (
            <TouchableOpacity style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(6) }}>
              <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
            </TouchableOpacity>

            // <TouchableOpacity style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
            //   <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
            // </TouchableOpacity>
          )
        }
        <View style={{ flexDirection: "row", width: responsiveScreenWidth(30), justifyContent: "space-around" }}>
          <TouchableOpacity
            style={{ backgroundColor: 'white', borderRadius: responsiveFontSize(30) }}
          >
            <Image source={require('../../../src/assets/images/search.png')}
              style={{
                width: responsiveScreenWidth(6),
                height: responsiveScreenHeight(3),
                margin: responsiveFontSize(1.3),
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Settings') }}
            style={{ backgroundColor: 'white', borderRadius: responsiveFontSize(30) }}>
            <Image source={require('../../../src/assets/images/setting.png')}
              style={{
                width: responsiveScreenWidth(6),
                height: responsiveScreenHeight(3),
                margin: responsiveFontSize(1.3),
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          {isScanner &&
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CodeScanner')
              }}
              style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              <Image source={require('../../../src/assets/images/scanner.png')} style={{
                width: responsiveScreenWidth(6),
                height: responsiveScreenHeight(3),
                resizeMode: "contain",
                margin: responsiveFontSize(1.3),
              }} />
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

export default Header;