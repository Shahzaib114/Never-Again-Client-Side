import { ApolloProvider } from '@apollo/client';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Image, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import client from './src/api';
import AboutNeverAgain from './src/screens/AboutNeverAgain';
import NestedNavigator from './src/screens/Bottomtabnested';
import { default as BoyCotBrands, default as Lock } from './src/screens/BoyCotBrands';
import Feedback from './src/screens/Feedback';
import Boycott from './src/screens/HowToBoycott';
import NearMe from './src/screens/Nearme';
import SelloutStack from './src/screens/SelloutsStack/selloutStack';
import BrandDetails from './src/screens/brandsdetails';
import CodeScanner from './src/screens/cameraScanner/codeScanner';
import Faqs from './src/screens/faqs';
import People from './src/screens/people';
import Proof from './src/screens/proof';
import Question from './src/screens/question';
import Settings from './src/screens/settings';
import CustomSplashScreen from './src/screens/splashscreen';
import { COLORS } from './src/utility/colors/LightColors';
import Alternative from './src/screens/alternative';
import ApprovedBrandStack from './src/screens/alterNativeStack/AlterNativeStack';
import BoyCottBrandStack from './src/screens/boycotStack/BoyCotStack';
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
      <Tab.Screen name='Alternative' component={ApprovedBrandStack}

        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <MaterialCommunityIcons name="certificate" size={responsiveFontSize(3.5)} color="#BFFF00" />
              :
              <MaterialCommunityIcons name="certificate-outline" size={responsiveFontSize(3.5)} color="black" />
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
      <Tab.Screen name='Boycott' component={BoyCottBrandStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Entypo name="squared-cross" size={responsiveFontSize(3)} color="#BFFF00" />
              :
              <Entypo name="cross" size={responsiveFontSize(3)} color="black" />

          )
        }} />
      <Tab.Screen name='Sellouts' component={SelloutStack}
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
            <Stack.Screen name='Alternative' component={Alternative} />
            <Stack.Screen name='lock' component={Lock} />
            <Stack.Screen name='question' component={Question} />
            <Stack.Screen name='BrandDetails' component={BrandDetails} />
            <Stack.Screen name='Proof' component={Proof} />
            <Stack.Screen name='People' component={People} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='NearMe' component={NearMe} />
            <Stack.Screen name='Faqs' component={Faqs} />
            <Stack.Screen name='CodeScanner' component={CodeScanner} />
            <Stack.Screen name='Boycott' component={Boycott} />
            <Stack.Screen name='AboutNeverAgain' component={AboutNeverAgain} />
            <Stack.Screen name='Feedback' component={Feedback} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    )
  }
}
export default App;