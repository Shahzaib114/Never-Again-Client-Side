import { View, Text ,Image} from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const SplashScreen = () => {
    const navigation=useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('home');
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <View style={{flex:1,backgroundColor:"#c5cc00",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:responsiveScreenWidth(80),height:responsiveScreenHeight(60)}}>
            <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
        </View>
    </View>
  )
}

export default SplashScreen;