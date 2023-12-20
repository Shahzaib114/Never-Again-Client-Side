import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { COLORS } from '../../utility/colors/LightColors'
import styles from './style'

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainview}>
      <ScrollView>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.view1touchable}
            onPress={() => navigation.goBack()}
          >
            <Image source={require('../../../src/assets/images/left-arrow.png')} style={styles.image} />
          </TouchableOpacity>
          <View>
            <Text style={styles.view1text}>Settings</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.view2touchable}
            onPress={() => navigation.navigate('NearMe')}
          >
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/workplace.png')} style={styles.image} />
            </View>
            <Text style={styles.text2}>Near Me</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => navigation.navigate('CodeScanner')}
          style={styles.view3}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/scanner.png')} style={styles.image} />
            </View>
            <Text style={styles.text2}>Scan Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('AboutNeverAgain')}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/about.png')} style={styles.image} />
            </View>
            <Text style={styles.text2}>About Never Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('Boycott')}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/document.png')} style={styles.image} />
            </View>
            <Text style={styles.text2}>How to boycott?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('Faqs')}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/internet.png')} style={styles.image} />
            </View>
            <Text style={styles.text2}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { Linking.openURL('https://www.instagram.com/') }}
            style={{ flexDirection: "row", alignItems: "center", padding: 6, borderRadius: 10, marginTop: responsiveScreenHeight(5), backgroundColor: "#BFFF00", width: responsiveScreenWidth(50) }}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/instagram.png')} style={styles.image} />
            </View>
            <Text style={{ fontFamily: 'mrt-rglr', color: "black", textAlign: "center", marginLeft: "5%" }}>Follow us on Instagram</Text>
          </TouchableOpacity>
          <View style={{ marginTop: responsiveScreenHeight(2) }}>
            <View style={{ width: responsiveScreenWidth(10), height: responsiveScreenHeight(6) }}>
              <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={styles.image} />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: responsiveScreenHeight(1) }}>
            <View style={styles.view4}>
              <Image source={require('../../../src/assets/images/copyright.png')} style={styles.image} />
            </View>
            <Text style={styles.text}>2023</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: responsiveScreenHeight(1) }}>
            <Text style={styles.text}>All Rights Reserved</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Settings