import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BoyCotBrands from '../BoyCotBrands';
import BrandDetails from '../brandsdetails';


const stack = createNativeStackNavigator();
const BoyCottBrandStack = () => {
    return (
        <stack.Navigator initialRouteName='BoyCottedBrands' screenOptions={{ headerShown: false }}>
            <stack.Screen name='BoyCottedBrands' component={BoyCotBrands} />
            <stack.Screen name='BrandDetails' component={BrandDetails} />
        </stack.Navigator>
    )
}
export default BoyCottBrandStack