import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveScreenWidth,responsiveScreenHeight } from 'react-native-responsive-dimensions';
import SplashScreen from './src/screens/splashscreen';
import Home from './src/screens/Home';
import Profile from './src/screens/profile';
import Lock from './src/screens/lock';
import Question from './src/screens/question';
import BrandDetails from './src/screens/brandsdetails';
import NestedNavigator from './src/screens/Bottomtabnested';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,

          tabBarItemStyle: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: '1%',
            marginBottom: "1%",
            marginLeft: "1%"
          },
          tabBarStyle: {
            height: responsiveScreenHeight(6.5),
          },
        }}
        initialRouteName='Home'
      >
        <Tab.Screen name='Home' component={NestedNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
               <Image source={require('./src/assets/images/home.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
              </View>
            )
          }} />
             <Tab.Screen name='Profile' component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
               <Image source={require('./src/assets/images/bookmark.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
              </View>
            )
          }} />
            <Tab.Screen name='Lock' component={Lock}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
               <Image source={require('./src/assets/images/lock.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
              </View>
            )
          }} />
             <Tab.Screen name='Question' component={Question}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
               <Image source={require('./src/assets/images/question.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
              </View>
            )
          }} />
          
      </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='home' component={BottomTabs}/>
        <Stack.Screen name='profile' component={Profile}/>
        <Stack.Screen name='lock' component={Lock}/>
        <Stack.Screen name='question' component={Question}/>
        <Stack.Screen name='BrandDetails' component={BrandDetails}/>
      </Stack.Navigator> 
    </NavigationContainer>
  
  )
}
export default App;