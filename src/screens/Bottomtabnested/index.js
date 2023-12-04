import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home';
import BrandDetails from '../brandsdetails';


const stack = createNativeStackNavigator();
const NestedNavigator = () => {
    return (
        <stack.Navigator initialRouteName='homeTab' screenOptions={{ headerShown: false }}>
            <stack.Screen name='home' component={Home} />
            <stack.Screen name='BrandDetails' component={BrandDetails} />
        </stack.Navigator>
    )
}
export default NestedNavigator