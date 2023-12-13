import { ApolloProvider } from '@apollo/client';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Image, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import client from './src/api';
import NestedNavigator from './src/screens/Bottomtabnested';
import NearMe from './src/screens/Nearme';
import BrandDetails from './src/screens/brandsdetails';
import CodeScanner from './src/screens/cameraScanner/codeScanner';
import Faqs from './src/screens/faqs';
import Lock from './src/screens/lock';
import People from './src/screens/people';
import { default as Alternative, default as Profile } from './src/screens/profile';
import Proof from './src/screens/proof';
import Question from './src/screens/question';
import Settings from './src/screens/settings';
import CustomSplashScreen from './src/screens/splashscreen';
import { COLORS } from './src/utility/colors/LightColors';
import Sellouts from './src/screens/Bottomtabnested/sellouts/Sellout';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: COLORS.greenColor,
        tabBarInactiveTintColor: COLORS.blackColor,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontFamily: "mrt-rglr", fontSize: responsiveFontSize(1.3), alignSelf: 'center', textAlign: 'center' },
        headerShown: false,
        tabBarIconStyle: { justifyContent: 'center', alignSelf: 'center' },
        tabBarItemStyle: {
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          marginVertical: '2%',
        },
        barStyle: { backgroundColor: '#F2F2F2' },
        tabBarStyle: {
          height: responsiveScreenHeight(6.5),
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={NestedNavigator}

        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => (
            focused ?
              <Ionicons name="home" size={responsiveFontSize(3)} color="#BFFF00" />
              :
              <Ionicons name="home-outline" size={responsiveFontSize(3)} color="black" />
          )
        }} />
      <Tab.Screen name='Alternative' component={Alternative}

        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <AntDesign name="checksquare" size={responsiveFontSize(3)} color="#BFFF00" />
              :
              <AntDesign name="check" size={responsiveFontSize(3)} color="black" />
          )
        }} />

      <Tab.Screen name='Scan' component={CodeScanner}
        options={{
          tabBarShowLabel: true,
          tabBarItemStyle: {
          },
          tabBarLabelStyle: {
            bottom: responsiveScreenHeight(0.5),
            fontSize: responsiveFontSize(1.5),
            fontFamily: 'mrt-rglr'
          },
          tabBarIcon: () => (
            <View
              style={{
                bottom: responsiveScreenHeight(3),
                borderRadius: responsiveFontSize(30),
              }}>
              <View style={{
                backgroundColor: '#BFFF00',
                borderRadius: responsiveFontSize(20),
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
      <Tab.Screen name='BoYcot' component={Lock}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Entypo name="squared-cross" size={responsiveFontSize(3)} color="#BFFF00" />
              :
              <Entypo name="cross" size={responsiveFontSize(3)} color="black" />

          )
        }} />
      <Tab.Screen name='Sellouts' component={Sellouts}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Ionicons name="golf" size={responsiveFontSize(3)} color="#BFFF00" />
              :
              <Ionicons name="golf-outline" size={responsiveFontSize(3)} color="black" />
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
            <Stack.Screen name='Faqs' component={Faqs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    )
  }
}
export default App;