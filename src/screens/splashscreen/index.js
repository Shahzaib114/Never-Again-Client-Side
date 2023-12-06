import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CustomSplashScreen = () => {
    const navigation=useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('home');
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <View style={{flex:1,backgroundColor:"#BFFF00",alignItems:"center",justifyContent:"center"}}>
      <StatusBar backgroundColor='#BFFF00'/>
        <View style={{width:responsiveScreenWidth(80),height:responsiveScreenHeight(60)}}>
            <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
        </View>
    </View>
  )
}

export default CustomSplashScreen;