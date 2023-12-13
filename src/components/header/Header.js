import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const Header = ({
  isBack,
  isSetting = true,
  isScanner = true,
}) => {
  const navigation = useNavigation()
  return (
    <View style={{ width: '90%', alignItems: "center", alignSelf: 'center', justifyContent: "space-between", flexDirection: 'row', margin: responsiveFontSize(3) }}>
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
          <TouchableOpacity style={{ width: responsiveScreenWidth(10), height: responsiveScreenHeight(6) }}>
            <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </TouchableOpacity>
        )
      }
      <View style={{ flexDirection: 'row', gap: responsiveFontSize(2) }}>
        {isScanner &&
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CodeScanner')
            }}
            style={{ backgroundColor: 'white', borderRadius: responsiveFontSize(1), }}>
            <Image source={require('../../../src/assets/images/scanner.png')} style={{
              width: responsiveScreenWidth(6),
              height: responsiveScreenHeight(3),
              resizeMode: "contain",
              margin: responsiveFontSize(0.7),
            }} />
          </TouchableOpacity>
        }
        {isSetting &&
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings')
            }}
            style={{ backgroundColor: 'white', borderRadius: responsiveFontSize(1), }}>
            <Image source={require('../../../src/assets/images/setting.png')} style={{
              width: responsiveScreenWidth(6),
              height: responsiveScreenHeight(3),
              resizeMode: "contain",
              margin: responsiveFontSize(0.7),
            }} />
          </TouchableOpacity>
        }
      </View>

    </View>
  )
}

export default Header;