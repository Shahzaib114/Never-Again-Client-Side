import { ApolloProvider } from '@apollo/client';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Image, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import client from './src/api';
import NestedNavigator from './src/screens/Bottomtabnested';
import BrandDetails from './src/screens/brandsdetails';
import CodeScanner from './src/screens/cameraScanner/codeScanner';
import Lock from './src/screens/lock';
import People from './src/screens/people';
import Profile from './src/screens/profile';
import Proof from './src/screens/proof';
import Question from './src/screens/question';
import Settings from './src/screens/settings';
import CustomSplashScreen from './src/screens/splashscreen';
import NearMe from './src/screens/Nearme';
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
            <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              {focused ?
                <Ionicons name="home" size={responsiveFontSize(3)} color="#BFFF00" />
                :
                <Ionicons name="home-outline" size={responsiveFontSize(3)} color="black" />
              }
            </View>
          )
        }} />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              {focused ?
                <FontAwesome name="bookmark" size={responsiveFontSize(3)} color="#BFFF00" />
                :
                <FontAwesome name="bookmark-o" size={responsiveFontSize(3)} color="black" />
              }
            </View>
          )
        }} />

      <Tab.Screen name='CodeScanner' component={CodeScanner}
        options={{

          tabBarIcon: ({ focused }) => (
            <View

              style={{
                bottom: responsiveScreenHeight(5),
                borderRadius: responsiveFontSize(30),
              }}>
              <View style={{
                backgroundColor: '#BFFF00',
                borderRadius: responsiveFontSize(20),
                margin: 20
              }}>
                <Image
                  hitSlop={responsiveFontSize(10)}
                  source={require('./src/assets/images/scan.png')}
                  style={{
                    width: responsiveScreenWidth(8),
                    height: responsiveScreenHeight(4),
                    resizeMode: "contain",
                    margin: responsiveFontSize(2),
                    marginHorizontal: responsiveFontSize(2.25),
                  }}
                />
              </View>
            </View>
          )
        }} />
      <Tab.Screen name='Lock' component={Lock}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              {focused ?
                <Ionicons name="lock-closed" size={responsiveFontSize(3)} color="#BFFF00" />
                :
                <Ionicons name="lock-closed-outline" size={responsiveFontSize(3)} color="black" />
              }
            </View>
          )
        }} />
      <Tab.Screen name='Question' component={Question}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(4) }}>
              {focused ?
                <AntDesign name="questioncircle" size={responsiveFontSize(3)} color="#BFFF00" />
                :
                <AntDesign name="questioncircleo" size={responsiveFontSize(3)} color="black" />
              }
            </View>
          )
        }} />

    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();
  const [isLoaded] = useFonts({
    "mrt-mid": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "mrt-bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "mrt-rglr": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "mrt-sbld": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  //run the UI when fonts are loaded
  if (isLoaded) {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName='CustomSplashScreen'>
            <Stack.Screen name='CustomSplashScreen' component={CustomSplashScreen} />
            <Stack.Screen name='home' component={BottomTabs} />
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='lock' component={Lock} />
            <Stack.Screen name='question' component={Question} />
            <Stack.Screen name='BrandDetails' component={BrandDetails} />
            <Stack.Screen name='Proof' component={Proof} />
            <Stack.Screen name='People' component={People} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='NearMe' component={NearMe} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    )
  }
}
export default App;